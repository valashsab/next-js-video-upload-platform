type Props = {
  params: { userName: string };
};

export default function UsersVideosPage({ params }: Props) {
  return (
    <div className="bg-gradient-to-r from-red-300 to-gray-700 min-h-screen flex flex-col justify-center items-center space-y-6">
      <h1 className="font-bold">
        Welcome to your video collection,{' '}
        {params.userName.charAt(0).toUpperCase() + params.userName.slice(1)}!
        <br /> <br />
        <br />
        <ul>
          <li>PLACEHOLDER VIDEO 1</li>
          <li>PLACEHOLDER VIDEO 2</li>
          <li>PLACEHOLDER VIDEO 3</li>
          <li>PLACEHOLDER VIDEO 4</li>
        </ul>
      </h1>
    </div>
  );
}
