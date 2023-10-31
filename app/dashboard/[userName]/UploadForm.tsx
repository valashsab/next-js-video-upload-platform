'use client';
// import { useRouter } from 'next/navigation';
import { useState } from 'react';

// type Props = {
//   params: { userName: string };
// };

export default function UserDashboardPage() {
  // export default function UserDashboardPage({ params }: Props) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  // const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      // POST request to cloudinary's server API using Fetch or Axios
      fetch(
        'https://api.cloudinary.com/v1_1/dybl0vlsh/video/upload?upload_preset=m5zopfqr',
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

            console.log('Video URL: ', url);
            // send an HTTP request to the API endpoint
            // router.push('/api/details');
            // router.refresh();
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

  return (
    <div className="bg-custom-bg min-h-screen flex flex-col justify-center items-center space-y-6">
      <form onSubmit={handleUpload}>
        <input
          type="file"
          // allow only videos to be uploaded
          accept="video/*"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs text-black"
          onChange={handleFileChange}
        />
        <button className="text-black">Upload</button>
      </form>
      {uploadError !== null && <p className="text-red-500">{uploadError}</p>}
    </div>
  );
}
