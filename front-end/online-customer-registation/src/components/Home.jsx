import React from 'react';
import { FaUserPlus, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Customer Registration Portal</h1>
      <div className="flex gap-4">
        <Link
          to="/register"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <FaUserPlus className="inline mr-2" />
          Register
        </Link>
        <Link
          to="/Dashbord"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          <FaInfoCircle className="inline mr-2" />
          View Information
        </Link>
      </div>
    </div>
  );
};

export default Home;
