// import * as fs from 'node:fs';
// import fetch from 'node-fetch';

// const cloudinary = require('cloudinary').v2;

// // Define a function to fetch a video from Cloudinary
// async function fetchVideoFromCloudinary(public_id: string, format = 'mp4') {
//   try {
//     // Use the Cloudinary URL transformation feature to generate a URL for the video
//     const videoURL = cloudinary.url(public_id, {
//       resource_type: 'video',
//       format: format,
//     });

//     // Use 'node-fetch' to download the video from the URL
//     const response = await fetch(videoURL);

//     if (response.ok) {
//       const fileStream = fs.createWriteStream(`downloaded_video.${format}`);
//       response.body!.pipe(fileStream);

//       await new Promise<void>((resolve, reject) => {
//         fileStream.on('close', () => {
//           console.log('Video downloaded successfully.');
//           resolve();
//         });

//         fileStream.on('error', (error) => {
//           console.error('Error downloading the video: ', error);
//           reject(error);
//         });
//       });
//     } else {
//       console.error(
//         'Request to Cloudinary failed with status:',
//         response.status,
//       );
//       throw new Error(
//         `Request to Cloudinary failed with status: ${response.status}`,
//       );
//     }
//   } catch (error) {
//     console.error('Error fetching video from Cloudinary: ', error);
//     throw error; // Rethrow the error so it can be caught in the top-level code
//   }
// }

// (async () => {
//   try {
//     await fetchVideoFromCloudinary('zieqjad5qzp0usg2ywpg');
//     console.log('Video fetching started.');
//   } catch (error) {
//     console.error('Error in top-level code:', error);
//   }
// })();

// // https://www.youtube.com/watch?v=XJWdLbw3QjY&ab_channel=ColbyFayock
// // Admin API reference for the GET method
// //Get details of a single resource by public ID
// // GET /resources/:resource_type/:type/:public_id
// // cloudinary.v2.api.resource(public_id, options).then(callback);
