'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = { user: { id: number; userName: string } };

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
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();

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
    fetch('/api/videos', {
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

    // router.push(`/videos/${props.user?.id}`);
    router.push(`/videos/${props.user.userName}`);
    router.refresh();
  };

  return (
    <div className="bg-custom-bg min-h-screen flex flex-col justify-center items-center space-y-6">
      <form onSubmit={handleUpload} className="text-center">
        <input
          type="file"
          name="file"
          id="file"
          accept="video/*"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs text-black"
          onChange={handleFileChange}
        />
        <button className="text-black mt-2">Upload</button>
      </form>
      {uploadError !== null && <p className="text-red-500">{uploadError}</p>}
      {!!secureUrl && (
        <video width="320" height="240" controls>
          <source src={secureUrl} type="video/mp4" />
          <track kind="captions" src="No captions" label="No captions" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleAddedVideoData}>
          <label className="text-white" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            name="title"
            onChange={(event) => setTitle(event.currentTarget.value)}
            required
          />
          <br />
          <label className="text-white" htmlFor="description">
            Description
          </label>
          <input
            id="description"
            name="description"
            onChange={(event) =>
              setDescriptionContent(event.currentTarget.value)
            }
            required
          />

          <br />
          <button className="flex w-full justify-center rounded-md btn-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Post video
          </button>
        </form>
      </div>
    </div>
  );
}
