import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-[#a6adbb] p-4 text-center">
      <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="max-w-md mb-10 opacity-70">
        The link you followed may be broken, or the page may have been removed.
      </p>
      <Link to="/" className="btn btn-primary px-10 rounded-full">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;