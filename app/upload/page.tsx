'use client';

import { useEffect, useState } from 'react';
import { UploadResponseBody } from '../api/(auth)/dashboard/route';

// Define a type for the data you're expecting
// type CloudinaryData = {
//   secure_url: string;
//   public_id: string;
//   asset_id: string;
// };

export default function UploadPage() {
  const [videoData, setVideoData] = useState<UploadResponseBody | null>(null);

  useEffect(() => {
    // Fetch the latest video data from your API route
    fetch('/api/upload')
      .then((response) => response.json())
      .then((data) => setVideoData(data))
      .catch((error) => console.error('Error fetching video data:', error));
  }, []);

  return (
    <div>
      <h1>Latest video uploaded</h1>
      {videoData && (
        <div>
          <p>Asset ID: {videoData.asset_id}</p>
          <p>Secure URL: {videoData.secure_url}</p>
          <p>Public ID: {videoData.public_id}</p>
          {/* You can embed the video player here */}
        </div>
      )}
    </div>
  );
}
