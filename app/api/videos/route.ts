import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Video } from '../../../migrations/00002-createTableVideos';
import { getVideosByUserId } from '../../database/videos';

const videoSchema = z.object({
  // added 12.11.23 - 1st line
  id: z.number(),
  secureUrl: z.string(),
  publicId: z.string(),
  title: z.string(),
  descriptionContent: z.string(),
  userId: z.number(),
});

export type UserVideosResponseBodyGet =
  | {
      videos: Video[];
    }
  | {
      errors: { message: string }[];
    };

export async function GET(
  request: NextRequest,
): Promise<NextResponse<UserVideosResponseBodyGet>> {
  const body = await request.json();
  console.log('Request Body:', body);

  const result = videoSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.issues },
      {
        status: 400,
      },
    );
  }

  const videosList = await getVideosByUserId(result.data.userId);

  if (videosList.length === 0) {
    return NextResponse.json(
      { errors: [{ message: 'Error no videos to display' }] },
      { status: 406 },
    );
  }

  return NextResponse.json({
    videos: videosList,
  });
}
