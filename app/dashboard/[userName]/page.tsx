type Props = {
  params: { userName: string };
};

export default function UserDashboardPage({ params }: Props) {
  return (
    // helles blau-violett
    // <div className="bg-gradient-to-r from-indigo-400 to-indigo-200 ...">
    <div className=" bg-gradient-to-r from-red-300 to-gray-700 min-h-screen flex flex-col justify-center items-center space-y-6">
      <h1 className="font-bold">
        Welcome to your dashboard,{' '}
        {params.userName.charAt(0).toUpperCase() + params.userName.slice(1)}!
      </h1>
      <input
        type="file"
        className="file-input file-input-bordered file-input-primary w-full max-w-xs"
      />
    </div>
  );
}
