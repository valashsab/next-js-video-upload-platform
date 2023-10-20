// // 'use client';
// // import { useEffect, useRef } from 'react';

// // const UploadWidget = () => {
// //   const cloudinaryRef = useRef();
// //   const widgetRef = useRef();
// //   useEffect(() => {
// //     cloudinaryRef.current = window.cloudinary;
// //     widgetRef.current = cloudinaryRef.current.createUploadWidget(
// //       {
// //         cloudName: 'dybl0vlsh',
// //         uploadPreset: 'prdzwrqf',
// //       },
// //       function (error, result) {
// //         console.log(result);
// //       },
// //     );
// //   }, []);
// //   return <button onClick={() => widgetRef.current.open()}>Upload</button>;
// // };

// // export default UploadWidget;

// import { useClient } from 'next';
// import { useEffect, useRef } from 'react';

// const UploadWidget = () => {
//   const cloudinaryRef = useRef();
//   const widgetRef = useRef();

//   useEffect(() => {
//     // Load the Cloudinary script dynamically
//     const script = document.createElement('script');
//     script.src = 'https://widget.cloudinary.com/v2.0/global/all.js';
//     script.async = true;
//     script.onload = () => {
//       cloudinaryRef.current = window.cloudinary;
//       widgetRef.current = cloudinaryRef.current.createUploadWidget(
//         {
//           cloudName: 'dybl0vlsh',
//           uploadPreset: 'prdzwrqf',
//         },
//         function (error, result) {
//           console.log(result);
//         },
//       );
//     };

//     document.body.appendChild(script);
//   }, []);

//   return <button onClick={() => widgetRef.current.open()}>Upload</button>;
// };

// export default function ClientUploadWidget() {
//   useClient();

//   return <UploadWidget />;
// }

// // API base url
// // https://api.cloudinary.com/v1_1/dybl0vlsh
