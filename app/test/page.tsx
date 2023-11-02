// // added 02.11.23
// export async function getStaticProps() {
//   const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
//   const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
//   const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
//   const apiSecret = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET;

//   // curl https://<API_KEY>:<API_SECRET>@api.cloudinary.com/v1_1/<cloud_name>/resources/image/upload
//   const results = await fetch(
//     `https://api.cloudinary.com/v1_1/${cloudName}/resources/video/upload?upload_preset=${uploadPreset}`,
//     {
//       headers: {
//         Authorization: `Basic Buffer.from(${apiKey} + ':' + ${apiSecret}).toString('base64)`,
//       },
//     },
//   ).then((r) => r.json());
//   console.log('results: ', results);
//   return {
//     props: {},
//   };
// }
