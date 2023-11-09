'use client';
// import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = { user: { id: number } | undefined };

export default function HandleVideoDetails(props: Props) {
  const [secureUrl, setSecureUrl] = useState('');
  const [publicId, setPublicId] = useState('');
  const [title, setTitle] = useState('');
  const [descriptionContent, setDescriptionContent] = useState('');
  // const [videoDetails, setVideoDetails] = useState<{
  //   secure_url: string | undefined;
  // }>({ secure_url: undefined });
  // const router = useRouter();

  // const handleVideoDetails = () => {
  //   // Make a GET request to retrieve data
  //   fetch('/api/videos')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((responseData) => {
  //       console.log('Retrieved data:', responseData);
  //       // setVideoDetails(responseData);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };

  // useEffect(() => {
  //   handleVideoDetails();
  // }, []);

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
        // videoDetails,
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

        // const publicId = responseData.public_id;
        // const secureUrl = responseData.secure_url;
        // Update videoDetails with secureUrl
        // setVideoDetails({ ...videoDetails, secure_url: secureUrl });

        // router.push(`/video-details?publicId=${publicId}`);
        // router.push(`/video?publicId=${publicId}`);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // Now you can use secureUrl in your component
  // console.log('Secure URL:', secureUrl);

  return (
    <div className="bg-custom-bg min-h-screen flex flex-col justify-center items-center space-y-6">
      <h1 className="text-white">Final steps before your video is online</h1>
      {/* aktuell wird nichts angezeigt, daher api endpoint nicht korrekt?! */}
      {/* {videoDetails.secure_url ? (
        <div>
          <video width="320" height="240" controls>
            <source src={videoDetails.secure_url} type="video/mp4" />
            <track kind="captions" src="" label="No captions" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null} */}

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
