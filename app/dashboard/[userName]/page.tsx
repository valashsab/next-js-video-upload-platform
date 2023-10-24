type Props = {
  params: { userName: string };
};

export default function UserDashboardPage({ params }: Props) {
  return (
    <div>
      <h2>{params.userName} Dashboard</h2>
    </div>
  );
}
