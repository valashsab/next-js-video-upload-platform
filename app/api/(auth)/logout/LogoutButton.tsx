'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { logout } from './actions';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();

    router.push('/');
  };

  return (
    <form>
      <button formAction={handleLogout}>Logout</button>
    </form>
  );
}
