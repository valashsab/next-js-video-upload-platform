// import { NextRequest, NextResponse } from 'next/server';
// // import { z } from 'zod';
// import { Video } from '../../../../migrations/00002-createTableVideos';
// import { deleteSingleVideoByUserIdVideoId } from '../../../database/videos';

// // const singleVideosSchema = z.object({
// //   id: z.number(),
// //   secureUrl: z.string(),
// //   publicId: z.string(),
// //   title: z.string(),
// //   descriptionContent: z.string(),
// //   userId: z.number(),
// // });

// export type SingleVideosResponseBodyDelete =
//   | {
//       singleVideos: Video;
//     }
//   | {
//       errors: { message: string };
//     };

// export async function DELETE(
//   request: NextRequest,
//   { params }: { params: Record<string, string | string[]> },
// ): Promise<NextResponse<SingleVideosResponseBodyDelete>> {
//   //   const body = await request.json();

//   //   const result = singleVideosSchema.safeParse(body);

//   //   if (!result.success) {
//   //     return NextResponse.json(
//   //       { errors: result.error.issues },
//   //       {
//   //         status: 400,
//   //       },
//   //     );
//   //   }

//   //   const singleVideos = await deleteSingleVideoByUserIdVideoId(
//   //     result.data.id,
//   //     result.data.userId,
//   //   );

//   //   if (singleVideos) {
//   //     return NextResponse.json(
//   //       { errors: [{ message: 'Error no videos to display' }] },
//   //       { status: 406 },
//   //     );
//   //   }

//   //   return NextResponse.json({
//   //     singleVideos: singleVideos,
//   //   });
//   // }

//   // const singleVideoById = Number(params.singleVideoById);
//   const userId = Number(params.userId);
//   const videoId = Number(params.videoId);

//   // const result = singleVideosSchema.safeParse({ userId, videoId });

//   // if (!result.success) {
//   //   return NextResponse.json(
//   //     { errors: result.error.issues },
//   //     {
//   //       status: 400,
//   //     },
//   //   );
//   // }

//   if (!userId && videoId) {
//     return NextResponse.json(
//       { errors: { message: 'VideoId and UserId are not valid' } },
//       { status: 400 },
//     );
//   }

//   const singleVideo = await deleteSingleVideoByUserIdVideoId(userId, videoId);

//   if (!singleVideo) {
//     return NextResponse.json(
//       { errors: { message: 'Error deleting the video' } },
//       { status: 500 },
//     );
//   }

//   return NextResponse.json({
//     singleVideos: singleVideo,
//   });
// }
