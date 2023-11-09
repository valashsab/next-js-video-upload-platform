import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Video } from '../../../migrations/00002-createTableVideos';
import { createVideo } from '../../database/videos';

const videoSchema = z.object({
  secureUrl: z.string(),
  publicId: z.string(),
  title: z.string(),
  descriptionContent: z.string(),
  userId: z.number(),
});

export type VideoResponseBodyPost =
  | {
      video: Video;
    }
  | {
      errors: { message: string }[];
    };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<VideoResponseBodyPost>> {
  const body = await request.json();

  const result = videoSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.issues },
      {
        status: 400,
      },
    );
  }

  const newVideo = await createVideo(
    result.data.secureUrl,
    result.data.publicId,
    result.data.title,
    result.data.descriptionContent,
    result.data.userId,
  );

  if (!newVideo) {
    return NextResponse.json(
      { errors: [{ message: 'Error creating the new video' }] },
      { status: 406 },
    );
  }

  return NextResponse.json({
    video: newVideo,
  });
}
