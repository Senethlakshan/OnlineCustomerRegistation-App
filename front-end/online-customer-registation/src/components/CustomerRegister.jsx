import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerRegister = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    age: "",
    annualIncome: "",
    loginUsername: "",
    password: "",
    nicNumber: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate NIC number length and pattern
    const nicPattern = /^[0-9]{10}$/;
    if (
      formData.nicNumber.length !== 10 ||
      !nicPattern.test(formData.nicNumber)
    ) {
      toast.error("NIC Number should be 10 digits.");
      return;
    }

    // Check for other required fields
    const requiredFields = [
      "title",
      "firstName",
      "lastName",
      "age",
      "loginUsername",
      "password",
      "nicNumber",
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        toast.error(`Please fill in ${field}.`);
        return;
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/addNewCustomer ",
        formData
      );
      console.log("Customer data saved:", response.data);
      toast.success("Customer data saved successfully.");
    } catch (error) {
      console.error("Error saving customer data:", error);
      toast.error("Error saving customer data. Please try again.");
    }
  };

  return (
    <div className="container mx-auto">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 className="text-3xl font-bold text-center mt-10">
        Customer Registration
      </h1>
      <form className="max-w-md mx-auto mt-5" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1 text-gray-600">
            Title
          </label>
          <select
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select Title</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-1 text-gray-600">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-1 text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block mb-1 text-gray-600">
            Age
          </label>
          <input
            type="date"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="nicNumber" className="block mb-1 text-gray-600">
            NIC Number
          </label>
          <input
            type="text"
            id="nicNumber"
            name="nicNumber"
            value={formData.nicNumber}
            onChange={handleChange}
            maxLength={10}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            pattern="[0-9]{10}"
            title="NIC Number should be 10 digits."
          />
        </div>

        <div className="mb-4">
          <label htmlFor="annualIncome" className="block mb-1 text-gray-600">
            Annual Income
          </label>
          <input
            type="number"
            id="annualIncome"
            name="annualIncome"
            value={formData.annualIncome}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="loginUsername" className="block mb-1 text-gray-600">
            Login Username
          </label>
          <input
            type="text"
            id="loginUsername"
            name="loginUsername"
            value={formData.loginUsername}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="remarks" className="block mb-1 text-gray-600">
            Remarks
          </label>
          <textarea
            id="remarks"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button
          type="submit"
          className="block w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default CustomerRegister;
