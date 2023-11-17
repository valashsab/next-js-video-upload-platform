'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = { user: { id: number; userName: string } | undefined };

export default function UploadForm(props: Props) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [secureUrl, setSecureUrl] = useState<string | null>(null);
  const [publicId, setPublicId] = useState('');
  const [title, setTitle] = useState('');
  const [descriptionContent, setDescriptionContent] = useState<string | null>(
    null,
  );
  const [formSubmitted, setFormSubmitted] = useState(false);

  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/video/upload?upload_preset=${uploadPreset}`,
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data.secure_url && data.public_id) {
            const url = data.secure_url;
            setSecureUrl(url);
            const videoIdentifier = data.public_id;
            setPublicId(videoIdentifier);
          }
        })
        .catch((error) => {
          setUploadError('An error occurred while uploading the file.');
          console.log(error);
        });
    } else {
      setUploadError('Please select a file to upload.');
    }
  };

  const handleAddedVideoData = (event: React.FormEvent) => {
    event.preventDefault();
    fetch('/api/upload', {
      method: 'POST',
      body: JSON.stringify({
        secureUrl,
        publicId,
        title,
        descriptionContent,
        userId: props.user?.id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to save video details');
        }
        return response.json();
      })
      .then((responseData) => {
        console.log('Video details saved:', responseData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    // router.push(`/videos/${props.user?.userName}`);
    router.push(`/videos/${props.user?.id}`);
    router.refresh();
  };

  return (
    <div className="bg-custom-bg min-h-screen  sm:grid grid-rows-3 grid-cols-3 items-center justify-center text-white gap-1">
      {/* 1a.upload */}
      <div className="row-start-1 col-start-1">
        <ul className="steps steps-vertical">
          <li className="step step-primary">Upload & Preview</li>
          <li className="step">Add video details</li>
          <li className="step">Post video</li>
        </ul>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          {' '}
          {!selectedFile && (
            <p className="text-white">Please select a file to upload.</p>
          )}
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              onSubmit={handleUpload}
              className="text-center row-start-1 col-start-2"
            >
              <input
                type="file"
                name="file"
                id="file"
                accept="video/*"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs text-black"
                onChange={handleFileChange}
              />
              <button className="flex w-full justify-center rounded-md btn-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2">
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 1b.Watch preview */}

      <div className="row-start-1 col-start-3">
        {uploadError !== null && <p className="text-red-500">{uploadError}</p>}
        {!!secureUrl && (
          <video width="420" height="340" controls className="rounded-lg">
            <source src={secureUrl} type="video/mp4" />
            <track kind="captions" src="No captions" label="No captions" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      {/* 2.add video details */}

      {/* original form */}
      <div className="row-start-2 col-start-1 space-y-0">
        {' '}
        <ul className="steps steps-vertical">
          <li className="step">Upload & Preview</li>
          <li className="step step-primary">Add video details</li>
          <li className="step step-primary">Post video</li>
        </ul>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl space-y-0">
        <div className="card-body">
          {!selectedFile && (
            <p className="text-white">
              Form is disabled unless a file is uploaded.
            </p>
          )}

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleAddedVideoData}>
              <div className="mt-2 ">
                <label
                  className="block text-sm font-medium leading-6 text-white"
                  htmlFor="title"
                >
                  Title
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  onChange={(event) => setTitle(event.currentTarget.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  disabled={!selectedFile}
                />
              </div>
              <br />
              <div className="mt-2">
                <label
                  className="block text-sm font-medium leading-6 text-white"
                  htmlFor="descriptionContent"
                >
                  Description
                </label>
                <div className="mt-2">
                  <input
                    id="descriptionContent"
                    name="descriptionContent"
                    onChange={(event) =>
                      setDescriptionContent(event.currentTarget.value)
                    }
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    disabled={!selectedFile}
                  />
                </div>
              </div>{' '}
              <br />
              {/* 3.post video */}
              <div className="row-start-3 col-start-2">
                {formSubmitted && !selectedFile && (
                  <p className="text-red-500">
                    Please select a file to upload.
                  </p>
                )}
                <button
                  className="flex w-full justify-center rounded-md btn-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  disabled={!selectedFile}
                >
                  Post video
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
