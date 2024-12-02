import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUserForm = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    companyName: "",
    catchPhrase: "",
    bs: "",
    address: "",
    zipcode: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Validation conditions and rules
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.phone.trim() || !/^\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10-15 digits.";
    if (
      !formData.website.trim() ||
      !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(formData.website)
    )
      newErrors.website = "Valid website URL is required.";
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required.";
    if (!formData.catchPhrase.trim())
      newErrors.catchPhrase = "Catchphrase is required.";
    if (!formData.bs.trim())
      newErrors.bs = "Business strategy (BS) is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (
      !formData.zipcode.trim() ||
      !/^\d{5}(?:[-\s]\d{4})?$/.test(formData.zipcode)
    )
      newErrors.zipcode = "Valid ZIP code is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // submir function with toast 
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("User added successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      website: "",
      companyName: "",
      catchPhrase: "",
      bs: "",
      address: "",
      zipcode: "",
    });
    setTimeout(() => {
      navigate("/"); // Use navigate to redirect
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Add New User
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
       
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none ${
                  errors.name
                    ? "border-red-500 focus:ring-red-400"
                    : "focus:ring-indigo-400"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none ${
                  errors.email
                    ? "border-red-500 focus:ring-red-400"
                    : "focus:ring-indigo-400"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-1"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-400"
                    : "focus:ring-indigo-400"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="website"
                className="block text-gray-700 font-medium mb-1"
              >
                Website
              </label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none ${
                  errors.website
                    ? "border-red-500 focus:ring-red-400"
                    : "focus:ring-indigo-400"
                }`}
              />
              {errors.website && (
                <p className="text-red-500 text-sm mt-1">{errors.website}</p>
              )}
            </div>
          </div>

          {/* Address Info */}
          <div>
            <label
              htmlFor="address"
              className="block text-gray-700 font-medium mb-1"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none ${
                errors.address
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-indigo-400"
              }`}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-colors duration-300 font-semibold"
          >
            Add User
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddUserForm;
