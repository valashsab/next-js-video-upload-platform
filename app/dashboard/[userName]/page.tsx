type Props = {
  params: { userName: string };
};

export default function UserDashboardPage({ params }: Props) {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-purple-800 ...">
      <h2>
        Welcome to your dashboard,{' '}
        {params.userName.charAt(0).toUpperCase() + params.userName.slice(1)}!
      </h2>
      <input
        type="file"
        className="file-input file-input-bordered file-input-primary w-full max-w-xs"
      />
    </div>
  );
}
