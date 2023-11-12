// import { NextRequest, NextResponse } from 'next/server';
// import { z } from 'zod';
// import { Video } from '../../../../migrations/00002-createTableVideos';
// import { getSingleVideoByUserId } from '../../../database/videos';

// const singleVideosSchema = z.object({
//   id: z.number(),
//   secureUrl: z.string(),
//   publicId: z.string(),
//   title: z.string(),
//   descriptionContent: z.string(),
//   userId: z.number(),
// });

// export type UserSingleVideosResponseBodyGet =
//   | {
//       singleVideos: Video[];
//     }
//   | {
//       errors: { message: string }[];
//     };

// export async function GET(
//   request: NextRequest,
// ): Promise<NextResponse<UserSingleVideosResponseBodyGet>> {
//   const body = await request.json();

//   const result = singleVideosSchema.safeParse(body);

//   if (!result.success) {
//     return NextResponse.json(
//       { errors: result.error.issues },
//       {
//         status: 400,
//       },
//     );
//   }

//   const singleVideosList = await getSingleVideoByUserId(
//     result.data.id,
//     result.data.userId,
//   );

//   if (singleVideosList.length === 0) {
//     return NextResponse.json(
//       { errors: [{ message: 'Error no videos to display' }] },
//       { status: 406 },
//     );
//   }

//   return NextResponse.json({
//     singleVideos: singleVideosList,
//   });
// }
