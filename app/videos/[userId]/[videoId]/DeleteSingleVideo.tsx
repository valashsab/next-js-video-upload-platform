// 'use client';
// import { useState } from 'react';
// import { deleteSingleVideoByUserIdVideoId } from '../../../../app/database/videos';
// import { Video } from '../../../../migrations/00002-createTableVideos';

// export type SingleVideosProps = {
//   params: {
//     videoId: number;
//     userId: number;
//   };
//   singleVideos: Video[] | undefined;
// };

// export default function DeleteSingleVideo(props: SingleVideosProps) {
//   const [singleVideoList, setSingleVideoList] = useState<Video[] | undefined>(
//     props.singleVideos || undefined,
//   );

//   async function deleteSingleVideoByUserIdVideoId(
//     videoId: number,
//     userId: number,
//   ) {
//     const response = await fetch(`/api/videos/${props.params.videoId}`, {
//       method: 'DELETE',
//     });
//     console.log('Response: ', response);
//     const data = await response.json();

//     setSingleVideoList(
//       singleVideoList.filter(
//         (singleVideo) => singleVideo.id !== data.singleVideo.id,
//       ),
//     );
//   }

//   return (
//     <>
//       <br />

//       <button
//         className="btn btn-secondary"
//         onClick={async () =>
//           await deleteSingleVideoByUserIdVideoId(
//             props.params.videoId,
//             props.params.userId,
//           )
//         }
//       >
//         Delete
//       </button>
//     </>
//   );
// }
