'use client';
import { useState } from 'react';

export function VideoUpload() {
  // new in order to get rid of error:"TypeError: Cannot read properties of undefined (reading 'createUploadWidget')"
  console.log(window.cloudinary);

  const [isVideoUploaded, setIsVideoUploaded] = useState(false);

  function handleWidgetClick() {
    window.cloudinary = require('cloudinary-core');
    // console.log(window.cloudinary);
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dybl0vlsh',
        uploadPreset: 'id61n0qf',
        resourceType: 'video',
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          console.log('Uploaded', result.info);
          setIsVideoUploaded(true);
        } else if (error) {
          console.log(error);
        }
      },
    );

    widget.open();
  }

  return (
    <div>
      <button type="button" onClick={handleWidgetClick}>
        Upload Video
      </button>

      {isVideoUploaded ? <div>Successfully uploaded</div> : null}
    </div>
  );
}
