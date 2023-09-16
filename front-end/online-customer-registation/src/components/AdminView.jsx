import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminView = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/customers/viewall')
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching customers:', error);
      });
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-5 text-center">Dashbord</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">First Name</th>
                <th className="py-2 px-4 border-b">Last Name</th>
                <th className="py-2 px-4 border-b">Age</th>
                <th className="py-2 px-4 border-b">Annual Income</th>
                <th className="py-2 px-4 border-b">Login Username</th>
                <th className="py-2 px-4 border-b">NIC Number</th>
                <th className="py-2 px-4 border-b">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.customerId}>
                  <td className="py-2 px-4 border-b">{customer.customerId}</td>
                  <td className="py-2 px-4 border-b">{customer.title}</td>
                  <td className="py-2 px-4 border-b">{customer.firstName}</td>
                  <td className="py-2 px-4 border-b">{customer.lastName}</td>
                  <td className="py-2 px-4 border-b">{customer.age}</td>
                  <td className="py-2 px-4 border-b">{customer.annualIncome}</td>
                  <td className="py-2 px-4 border-b">{customer.loginUsername}</td>
                  <td className="py-2 px-4 border-b">{customer.nicNumber}</td>
                  <td className="py-2 px-4 border-b">{customer.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminView;
