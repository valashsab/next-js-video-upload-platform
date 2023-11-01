// 3rd trial
import * as fs from 'node:fs';
import * as request from 'request';

const cloudinary = require('cloudinary').v2; // Assuming you're using Node.js and the Cloudinary SDK

// Define a function to fetch a video from Cloudinary
async function fetchVideoFromCloudinary(public_id: string, format = 'mp4') {
  try {
    // Use the Cloudinary URL transformation feature to generate a URL for the video
    const videoURL = cloudinary.url(public_id, {
      resource_type: 'video',
      format: format,
    });

    // Use the 'request' library to download the video from the URL
    await new Promise<void>((resolve, reject) => {
      request(videoURL)
        .pipe(fs.createWriteStream(`downloaded_video.${format}`)) // Save the video to a local file
        .on('close', () => {
          console.log('Video downloaded successfully.');
          resolve(); // Resolve the promise when the download is complete
        })
        .on('error', (error: any) => {
          console.error('Error downloading the video: ', error);
          reject(error); // Reject the promise if an error occurs
        });
    });
  } catch (error) {
    console.error('Error fetching video from Cloudinary: ', error);
  }
}

// Call the function with the public_id of the video you want to fetch
fetchVideoFromCloudinary('zieqjad5qzp0usg2ywpg');

// potential endpoint to fetch videos: http://res.cloudinary.com/dybl0vlsh (media asset)
