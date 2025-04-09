import { useState } from "react";

<Link
  to="/OwnerPage"
  className="backdrop-blur-xl bg-white/60 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300 border border-white/30 hover:bg-white/70"
>
  <div className="text-4xl mb-4">🏠</div>
  <h2 className="text-2xl font-semibold text-blue-700 mb-2">For Owners</h2>
  <p className="text-gray-700">
    Upload your hostel details and get discovered by students.
  </p>
</Link> 
function OwnerUpload() {
  const [hostelData, setHostelData] = useState({
    name: "",
    location: "",
    price: "",
    description: "",
    image: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHostelData({ ...hostelData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hostel Uploaded:", hostelData);
    setSubmitted(true);
    setHostelData({
      name: "",
      location: "",
      price: "",
      description: "",
      image: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-200 p-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-xl w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Hostel Owner Upload</h2>

        <label className="block mb-2">Hostel Name</label>
        <input
          type="text"
          name="name"
          value={hostelData.name}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Location</label>
        <input
          type="text"
          name="location"
          value={hostelData.location}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Price (per month)</label>
        <input
          type="number"
          name="price"
          value={hostelData.price}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2">Description</label>
        <textarea
          name="description"
          value={hostelData.description}
          onChange={handleChange}
          rows={3}
          className="w-full p-2 mb-4 border rounded"
          required
        ></textarea>

        <label className="block mb-2">Image URL</label>
        <input
          type="text"
          name="image"
          value={hostelData.image}
          onChange={handleChange}
          placeholder="https://example.com/hostel.jpg"
          className="w-full p-2 mb-4 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded"
        >
          Upload Hostel
        </button>

        {submitted && (
          <p className="text-green-600 mt-4 text-center font-semibold">Hostel information uploaded successfully!</p>
        )}
      </form>
    </div>
  );
}

export default OwnerUpload;
