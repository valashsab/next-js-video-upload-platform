type Props = {
  params: { userName: string };
};

export default function UserDashboardPage({ params }: Props) {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center space-y-6">
      {/* <div className="bg-gradient-to-r from-red-300 to-gray-700 min-h-screen flex flex-col justify-center items-center space-y-6"></div> */}
      <h1 className="font-bold">
        Welcome to your dashboard,{' '}
        {params.userName.charAt(0).toUpperCase() + params.userName.slice(1)}!
      </h1>
      <p>Ready to upload your memories? Let's get it started! </p>
      <input
        type="file"
        // allow only videos to be uploaded
        accept="video/*"
        className="file-input file-input-bordered file-input-primary w-full max-w-xs"
      />
    </div>
  );
}
