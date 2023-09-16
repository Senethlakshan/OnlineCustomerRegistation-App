import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerRegister = () => {
    const initialCustomerState = {
        title: "Mr.",
        firstName: "",
        lastName: "",
        age: "",
        annualIncome: 0,
        loginUsername: "",
        password: "",
        nicNumber: "",
        remarks: "",
      };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({
      ...customer,
      [name]: value,
    });
  };


  const [customer, setCustomer] = useState(initialCustomerState);
  const handleClear = () => {
    setCustomer(initialCustomerState);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (customer.nicNumber.length > 10) {
      toast.error("NIC number cannot be more than 10 characters.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/customers/add",
        customer
      );
      console.log("Customer added successfully:", response.data);
      toast.success("Customer added successfully.");
    } catch (error) {
      console.error("Error adding customer:", error);
      toast.error("Error adding customer. Please try again.");
    }
  };

  const titleOptions = ["Mr.", "Mrs."];

  return (
    <div className="bg-blue-400">
      <div className="container mx-auto flex justify-center items-center min-h-screen pt-10">
        <div className="w-1/2 p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl text-center font-bold mb-4">
            Online Customer Registration Form
            <hr/>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label htmlFor="title" className="block font-bold mb-1">
                Title:
              </label>
              <select
                id="title"
                name="title"
                value={customer.title}
                onChange={handleChange}
                className="border rounded py-1 px-2 w-full"
              >
                {titleOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="firstName" className="block font-bold mb-1">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={customer.firstName}
                onChange={handleChange}
                className="border rounded py-1 px-2 w-full"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block font-bold mb-1">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={customer.lastName}
                onChange={handleChange}
                className="border rounded py-1 px-2 w-full"
              />
            </div>

            <div>
              <label htmlFor="age" className="block font-bold mb-1">
                Age:
              </label>
              <input
                type="date"
                id="age"
                name="age"
                value={customer.age}
                onChange={(e) => {
                  const birthDate = new Date(e.target.value);
                  const today = new Date();
                  const age = today.getFullYear() - birthDate.getFullYear();
                  setCustomer({
                    ...customer,
                    age,
                  });
                }}
                className="border rounded py-1 px-2 w-full"
              />
            </div>

            <div>
              <label htmlFor="annualIncome" className="block font-bold mb-1">
                Annual Income:
              </label>
              <input
                type="number"
                id="annualIncome"
                name="annualIncome"
                value={customer.annualIncome}
                onChange={handleChange}
                className="border rounded py-1 px-2 w-full"
              />
            </div>

            <div>
              <label htmlFor="loginUsername" className="block font-bold mb-1">
                Login Username:
              </label>
              <input
                type="text"
                id="loginUsername"
                name="loginUsername"
                value={customer.loginUsername}
                onChange={handleChange}
                className="border rounded py-1 px-2 w-full"
              />
            </div>

            <div>
              <label htmlFor="password" className="block font-bold mb-1">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={customer.password}
                onChange={handleChange}
                className="border rounded py-1 px-2 w-full"
              />
            </div>

            <div>
              <label htmlFor="nicNumber" className="block font-bold mb-1">
                NIC Number:
              </label>
              <input
                type="text"
                id="nicNumber"
                name="nicNumber"
                value={customer.nicNumber}
                onChange={handleChange}
                className="border rounded py-1 px-2 w-full"
                maxLength="10"
              />
            </div>

            <div>
              <label htmlFor="remarks" className="block font-bold mb-1">
                Remarks:
              </label>
              <textarea
                id="remarks"
                name="remarks"
                value={customer.remarks}
                onChange={handleChange}
                className="border rounded py-1 px-2 w-full"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Customer
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Clear
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default CustomerRegister;
