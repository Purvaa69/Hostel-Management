import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    robot: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.robot) {
      alert("Please verify you're not a robot.");
      return;
    }
    // Logic for storing data / calling API can go here
    console.log("Form submitted:", formData);
    navigate("/HostelSearch"); // redirect after signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Sign Up</h2>

        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="robot"
              checked={formData.robot}
              onChange={handleChange}
              className="mr-2"
            />
            I'm not a robot
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
