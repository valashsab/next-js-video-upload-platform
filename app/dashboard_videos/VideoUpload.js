'use client';
import { useState } from 'react';

export function VideoUpload() {
  //  new in order to get rid of error:"TypeError: Cannot read properties of undefined (reading 'createUploadWidget')"
  // console.log(window.cloudinary);

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
          // verify if scriot or code block is running
          console.log('Uploaded', result.info);
          setIsVideoUploaded(true);
        } else if (error) {
          console.log(error);
        }
      },
    );
    // verify if scriot or code block is running
    console.log(window.cloudinary.createUploadWidget);
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

// new code with use effect

// import { useEffect, useState } from 'react';

// export function VideoUpload() {
//   const [isVideoUploaded, setIsVideoUploaded] = useState(false);

//   useEffect(() => {

//     function handleWidgetClick() {
//       //     window.cloudinary = require('cloudinary-core');
//       //     // console.log(window.cloudinary);
//     // Code that relies on the window object (runs on the client side)
//     console.log(window.cloudinary);

//     // Initialize Cloudinary widget
//     const widget = window.cloudinary.createUploadWidget(
//       {
//         cloudName: 'dybl0vlsh',
//         uploadPreset: 'id61n0qf',
//         resourceType: 'video',
//       },
//       (error, result) => {
//         if (!error && result && result.event === 'success') {
//           console.log('Uploaded', result.info);
//           setIsVideoUploaded(true);
//         } else if (error) {
//           console.log(error);
//         }
//       },
//     );

//     // Initialize the widget and open it
//     widget.open();
//   }, []);

//   return (
//     <div>
//       <button type="button">Upload Video</button>

//       {isVideoUploaded ? <div>Successfully uploaded</div> : null}
//     </div>
//   );
// }

// correct syntax error
// import { useEffect, useState } from 'react';

// export function VideoUpload() {
//   const [isVideoUploaded, setIsVideoUploaded] = useState(false);

//   useEffect(() => {
//     function handleWidgetClick() {
//       // Code that relies on the window object (runs on the client side)
//       console.log(window.cloudinary);

//       // Initialize Cloudinary widget
//       const widget = window.cloudinary.createUploadWidget(
//         {
//           cloudName: 'dybl0vlsh',
//           uploadPreset: 'id61n0qf',
//           resourceType: 'video',
//         },
//         (error, result) => {
//           if (!error && result && result.event === 'success') {
//             console.log('Uploaded', result.info);
//             setIsVideoUploaded(true);
//           } else if (error) {
//             console.log(error);
//           }
//         },
//       );

//       // Initialize the widget and open it
//       widget.open();
//     }

//     handleWidgetClick(); // Call the function here
//   }, []); // This dependency array should remain empty if you intend to run it only once.

//   return (
//     <div>
//       <button type="button">Upload Video</button>

//       {isVideoUploaded ? <div>Successfully uploaded</div> : null}
//     </div>
//   );
// }
