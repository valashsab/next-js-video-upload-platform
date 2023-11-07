import type { NextApiRequest, NextApiResponse } from 'next';

// Define the structure of the response body
export type UploadResponseBody = {
  secure_url: string;
  public_id: string;
};

// Create a custom type to extend NextApiRequest

interface MyApiRequest extends NextApiRequest {
  session: {
    // Define the properties you need in the session object
    userName: string;
    // Add other properties as needed
  };
}

export default async function handler(req: MyApiRequest, res: NextApiResponse) {
  try {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
    const apiSecret = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET;

    const userName = req.session.userName;
    console.log('UserName: ', userName);

    if (!userName) {
      // Handle the case where the user is not logged in
      res.status(401).json({ message: 'Not logged in' });
      return;
    }

    // API request with authorization headers
    const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/resources/video/upload?max_results=1&context=user_id=${userName}&sort_by=created_at&direction=desc`;

    // trial to fetch the latest video uploaded by logged in user
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${btoa(`${apiKey}:${apiSecret}`)}`,
      },
    });

    // check if response status is ok
    if (response.status !== 200) {
      throw new Error('Failed to fetch data from Cloudinary');
    }

    const data = await response.json();

    const latestVideo = data.resources[0];

    console.log('Response: ', data.resources[0]);

    const videoData: UploadResponseBody = {
      secure_url: latestVideo.secure_url,
      public_id: latestVideo.public_id,
    };

    console.log('SecureUrl: ', latestVideo.secure_url);
    console.log('PublicId: ', latestVideo.public_id);
    // send data as response
    res.status(200).json(videoData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
