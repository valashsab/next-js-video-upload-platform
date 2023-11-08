'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// import { cookies } from 'next/headers';

export default function UploadForm() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const router = useRouter();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [secureUrl, setSecureUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      // // NEW: in order to associate video with user add:
      // formData.append('user_id', currentUserID); // currentUserID is the ID of the logged-in user.

      // POST request to cloudinary's server API using Fetch or Axios
      fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/video/upload?upload_preset=${uploadPreset}`,
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data.secure_url) {
            // Video URL
            const url = data.secure_url;
            setSecureUrl(url);

            // const publicId = data.public_id;
            // setPublicId(publicId);

            console.log('Secure URL: ', data.secure_url);
            // Redirect to the "Video Details Page" with the video's unique identifier as a query parameter
            // router.push(`/video-details?publicId=${publicId}`);
            router.push(`/video-details?publicId=${data.public_id}`);
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

  // // added 07.11.23 trial
  // const handleGetVideoData = () => {
  //   // GET request to retrieve data
  //   fetch('/api/dashboard/route.ts')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((responseData) => {
  //       // Use the retrieved data as needed
  //       console.log('Retrieved data:', responseData);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };

  return (
    <div className="bg-custom-bg min-h-screen flex flex-col justify-center items-center space-y-6">
      <form onSubmit={handleUpload}>
        <input
          type="file"
          name="file"
          id="file"
          // allow only videos to be uploaded
          accept="video/*"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs text-black"
          onChange={handleFileChange}
        />
        <button className="text-black">Upload</button>
      </form>
      {uploadError !== null && <p className="text-red-500">{uploadError}</p>}
      {secureUrl ? (
        <div>
          <video width="320" height="240" controls>
            <source src={secureUrl} type="video/mp4" />
            <track kind="captions" src="" label="No captions" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null}
      ;
    </div>
  );
}
