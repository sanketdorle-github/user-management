import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <Link
      to={`/user/${user.id}`}
      className="bg-gradient-to-br from-pink-400 to-blue-500 p-1 rounded-lg block hover:scale-105 transition-transform duration-300 shadow-lg"
    >
      <div className="bg-white p-6 rounded-lg">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-600 text-sm">{user.email}</p>
          <p className="text-gray-600 text-sm">{user.phone}</p>
        </div>
        <p className="text-sm text-gray-500">Company: {user.company.name}</p>
      </div>
    </Link>
  );
};

export default UserCard;
