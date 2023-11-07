'use client';
import { useEffect, useState } from 'react';

export default function HandleVideoDetails() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoDetails, setVideoDetails] = useState(null);

  const handleVideoDetails = () => {
    // Make a GET request to retrieve data
    fetch('/api/dashboard')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        console.log('Retrieved data:', responseData);
        setVideoDetails(responseData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    handleVideoDetails();
  }, []);

  const handleAddVideoData = (event: React.FormEvent) => {
    event.preventDefault();
    fetch('/api/save-video-details', {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
        videoDetails,
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
        // Handle success, e.g., show a success message
        console.log('Video details saved:', responseData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="bg-custom-bg min-h-screen flex flex-col justify-center items-center space-y-6">
      <h1>Final steps before your video is online</h1>
      {videoDetails}

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleAddVideoData}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            onChange={(event) => setTitle(event.currentTarget.value)}
            required
          />
          <br />
          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="description"
            onChange={(event) => setDescription(event.currentTarget.value)}
            required
          />
        </form>
        <button className="flex w-full justify-center rounded-md btn-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Post video
        </button>
      </div>
    </div>
  );
}
