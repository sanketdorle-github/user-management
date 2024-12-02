import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/slices/userSlice";
import UserCard from "./UserCard";

const UserList = () => {
  //using dispatch 
  const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.user);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-lg font-semibold text-gray-600">Loading users...</p>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-lg font-semibold text-red-500">
          Error fetching users. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
