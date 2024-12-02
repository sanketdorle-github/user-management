// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const UserDetail = () => {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
//       setUser(response.data);
//     });
//   }, [id]);

//   // Loading Spinner
//   if (!user)
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400">
//         <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-blue-500"></div>
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 p-6 flex items-center justify-center">
//       <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl p-8">
//         {/* Header Section */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-4xl font-extrabold text-gray-800">{user.name}</h1>
//           <div className="text-gray-500 text-lg">{user.company.name}</div>
//         </div>

//         {/* User Details */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
//           {/* Left Column (Personal Info) */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <span className="font-semibold text-lg text-gray-700">Email:</span>
//               <p className="text-gray-600">{user.email}</p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="font-semibold text-lg text-gray-700">Phone:</span>
//               <p className="text-gray-600">{user.phone}</p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="font-semibold text-lg text-gray-700">Website:</span>
//               <p className="text-gray-600">{user.website}</p>
//             </div>
//           </div>

//           {/* Right Column (Company & Address Info) */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <span className="font-semibold text-lg text-gray-700">Company:</span>
//               <p className="text-gray-600">{user.company.name}</p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="font-semibold text-lg text-gray-700">Catchphrase:</span>
//               <p className="text-gray-600">{user.company.catchPhrase}</p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="font-semibold text-lg text-gray-700">BS:</span>
//               <p className="text-gray-600">{user.company.bs}</p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="font-semibold text-lg text-gray-700">Address:</span>
//               <p className="text-gray-600">
//                 {`${user.address.street}, ${user.address.suite}, ${user.address.city}`}
//               </p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="font-semibold text-lg text-gray-700">Zipcode:</span>
//               <p className="text-gray-600">{user.address.zipcode}</p>
//             </div>
//           </div>
//         </div>

//         {/* Action Button */}
//         <div className="text-center mt-8">
//           <button
//             onClick={() => window.history.back()}
//             className="px-6 py-3  text-black rounded-full text-lg bg-transparent  font-medium  shadow-lg border-2 border-black transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           >
//             Back to User List
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDetail;




import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  //getting user details

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
      });
  }, [id]);

  // Loading Spinner
  if (!user)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-blue-500"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 p-6 flex items-center justify-center">
      <div className="max-w-4xl  w-full bg-white rounded-lg shadow-xl lg:p-8  sm:p-3">
      
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
            {user.name}
          </h1>
          <div className="text-gray-500 text-lg">{user.company.name}</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Personal Info</h2>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">Email:</span>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">Phone:</span>
              <p className="text-gray-600">{user.phone}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">Website:</span>
              <p className="text-gray-600">{user.website}</p>
            </div>
          </div>

        
          <div className="space-y-4 sm:mt-0 mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Company Info</h2>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">Company:</span>
              <p className="text-gray-600">{user.company.name}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">Catchphrase:</span>
              <p className="text-gray-600">{user.company.catchPhrase}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">BS:</span>
              <p className="text-gray-600">{user.company.bs}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">Address:</span>
              <p className="text-gray-600">
                {`${user.address.street}, ${user.address.suite}, ${user.address.city}`}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">Zipcode:</span>
              <p className="text-gray-600">{user.address.zipcode}</p>
            </div>
          </div>
        </div>

     
        <div className="text-center mt-8 mb-2">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 md:sm:px-6  md:smpy-3  text-black rounded-full text-lg bg-transparent font-medium shadow-lg border-2 border-black transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Back to User List
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
