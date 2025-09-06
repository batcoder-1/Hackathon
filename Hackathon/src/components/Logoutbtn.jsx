import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from "./Store/Authslice";
import authservice from '../appwrite/auth';

export default function LogoutBtn() { // Renamed to standard PascalCase
  const dispatch = useDispatch();

  const handleLogout = () => {
    authservice.Logout().then(() => {
      dispatch(logout());
      // You might want to navigate the user away after logout, e.g., to the login page.
      // navigate('/login');
    });
  };

  return (
    <button
      onClick={handleLogout}
      className="inline-block px-6 py-2 duration-200 font-semibold text-white bg-red-500 rounded-full hover:bg-red-600"
    >
      Logout
    </button>
  );
}