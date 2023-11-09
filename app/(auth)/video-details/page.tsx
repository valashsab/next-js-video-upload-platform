import { cookies } from 'next/headers';
import { getUserBySessionToken } from '../../database/users';
import HandleVideoDetails from './HandleVideoDetails';

export default async function VideDetailsPage() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');
  const user = !sessionToken?.value
    ? undefined
    : await getUserBySessionToken(sessionToken.value);
  return (
    <div>
      <HandleVideoDetails user={user} />
    </div>
  );
}
