// 'use client';
// import { useState } from 'react';

// export function ImageUpload() {
//   const [isImagUploaded, setIsImageUploaded] = useState(false);

//   function handleWidgetClick() {
//     const widget = window.cloudinary.createUploadWidget(
//       {
//         cloudName: 'dybl0vlsh',
//         uploadPreset: 'id61n0qf',
//         resourceType: 'image',
//       },
//       (error, result) => {
//         if (!error && result && result.event === 'success') {
//           console.log('Uploaded', result.info);
//           setIsImageUploaded(true);
//         } else if (error) {
//           console.log(error);
//         }
//       },
//     );

//     widget.open();
//   }

//   return (
//     <div>
//       <button type="button" onClick={handleWidgetClick}>
//         Upload Image
//       </button>

//       {isImagUploaded ? <div>Successfully uploaded</div> : null}
//     </div>
//   );
// }
