// import { sql } from '../database/connect';

// export type Video = {
//   id: number;
//   secure_url: string;
//   public_id: string;
//   title: string;
//   description: Text;
//   user_id: number;
//   visible: boolean;
//   age_restriction: boolean;
//   disable_comments: boolean;
// };

// export async function createVideo(
//   secureUrl: string,
//   publicId: string,
//   title: string,
//   description: string,
//   userId: number,
//   visible: boolean,
//   ageRestriction: boolean,
//   disableComments: boolean,
// ): Promise<Video> {
//   const [video] = await sql<Video[]>`
//     INSERT INTO
//       videos (
//         secure_url,
//         public_id,
//         title,
//         description_content,
//         user_id,
//         visible,
//         age_restriction,
//         disable_comments
//       )
//     VALUES
//       (
//         ${secureUrl},
//         ${publicId},
//         ${title},
//         ${description},
//         ${userId},
//         ${visible},
//         ${ageRestriction},
//         ${disableComments}
//       ) RETURNING id,
//       secure_url,
//       public_id,
//       title,
//       description_content,
//       user_id,
//       visible,
//       age_restriction,
//       disable_comments
//   `;

//   return video;
// }

// export async function getVideoById(id: number): Promise<Video | undefined> {
//   const [video] = await sql<Video[]>`
//     SELECT
//       id,
//       secure_url,
//       public_id,
//       title,
//       description_content,
//       user_id,
//       visible,
//       age_restriction,
//       disable_comments
//     FROM
//       videos
//     WHERE
//       id = ${id}
//   `;

//   return video;
// }
