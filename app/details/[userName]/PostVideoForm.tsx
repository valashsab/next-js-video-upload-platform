// 'use client';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { getSafeReturnToPath } from '../../../util/validation';

// export default function PostVideoForm() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [errors, setErrors] = useState<{ message: string }[]>([]);
//   const router = useRouter();

//   async function handlePostVideo(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     const response = await fetch('/api/postVideo', {
//       method: 'POST',
//       body: JSON.stringify({
//         title,
//         description,
//       }),
//     });

//     const data: LoginResponseBodyPost = await response.json();

//     if ('errors' in data) {
//       setErrors(data.errors);
//       return;
//     }

//     router.push(
//       getSafeReturnToPath(props.returnTo) || `/dashboard/${data.user.userName}`,
//     );

//     router.refresh();
//   }

//   return (
//     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//       <form
//         className="space-y-6"
//         onSubmit={async (event) => await handlePostVideo(event)}
//       >
//         <label htmlFor="title">Title</label>
//         <input
//           id="title"
//           name="title"
//           onChange={(event) => setTitle(event.currentTarget.value)}
//           required
//         />
//         <br />
//         <label htmlFor="description">Description</label>
//         <input
//           id="description"
//           name="description"
//           onChange={(event) => setDescription(event.currentTarget.value)}
//           required
//         />
//       </form>
//       <button className="flex w-full justify-center rounded-md btn-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//         Post video
//       </button>
//     </div>
//   );
// }
