'use client';
// import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = { user: { id: number } | undefined };

export default function HandleVideoDetails(props: Props) {
  const [secureUrl, setSecureUrl] = useState('');
  const [publicId, setPublicId] = useState('');
  const [title, setTitle] = useState('');
  const [descriptionContent, setDescriptionContent] = useState('');

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

        // router.push(`/video-details?publicId=${publicId}`);
        // router.push(`/video?publicId=${publicId}`);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="bg-custom-bg min-h-screen flex flex-col justify-center items-center space-y-6">
      <h1 className="text-white">Final steps before your video is online</h1>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleAddedVideoData}>
          <label className="text-white" htmlFor="title">
            SecureUrl
          </label>
          <input
            id="title"
            name="title"
            onChange={(event) => setSecureUrl(event.currentTarget.value)}
            required
          />
          <br />
          <label className="text-white" htmlFor="title">
            PublicId
          </label>
          <input
            id="title"
            name="title"
            onChange={(event) => setPublicId(event.currentTarget.value)}
            required
          />
          <br />
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
