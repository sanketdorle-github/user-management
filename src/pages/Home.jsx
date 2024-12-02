import React from "react";
import { Link } from "react-router-dom";
import UserList from "../components/UserList";

const Home = () => {
  return (
    <div className="min-h-screen bg-custom-gradient relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white text-center sm:text-left">
            User Directory
          </h1>

          <Link
            to="/add-user"
            className="mt-4 sm:mt-0 px-6 py-3 sm:px-3 sm:py-2 bg-transparent text-white font-medium rounded-full shadow-lg border-2 border-black transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Add User
          </Link>
        </div>

        <p className="text-center text-gray-200 mb-8 text-sm sm:text-base max-w-2xl mx-auto">
          Browse through our list of users and view detailed information.
        </p>

        {/* User List */}
        <div className="mb-10">
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default Home;
