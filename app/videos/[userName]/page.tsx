type Props = {
  params: { userName: string };
};

export default function UsersVideosPage({ params }: Props) {
  return (
    // <div className="bg-gradient-to-r from-red-300 to-gray-700 min-h-screen flex flex-col justify-center items-center space-y-6">

    <div className="bg-custom-bg min-h-screen flex flex-col justify-center items-center space-y-6">
      <h1 className="font-bold text-black">
        Welcome to your video collection,{' '}
        {params.userName.charAt(0).toUpperCase() + params.userName.slice(1)}!
        <br /> <br />
        <br />
        <ul>
          <li>
            <iframe
              title="beach"
              width="560"
              height="315"
              src="https://res.cloudinary.com/dybl0vlsh/video/upload/v1698756636/zieqjad5qzp0usg2ywpg.mp4"
              frameBorder={0}
              // frameBorder={0 as any}
              allowFullScreen
              sandbox="allow-same-origin"
            />
          </li>
          <li>PLACEHOLDER VIDEO 2</li>
          <li>PLACEHOLDER VIDEO 3</li>
          <li>PLACEHOLDER VIDEO 4</li>
        </ul>
      </h1>
    </div>
  );
}
