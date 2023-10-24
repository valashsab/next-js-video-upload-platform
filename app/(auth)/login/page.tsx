import LoginForm from './LoginForm';

type Props = { searchParams: { returnTo?: string | string[] } };

export default function LoginPage({ searchParams }: Props) {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm returnTo={searchParams.returnTo} />
    </div>
  );
}
