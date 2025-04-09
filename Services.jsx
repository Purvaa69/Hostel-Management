import React from 'react';
import { Link } from 'react-router-dom';


function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-12 drop-shadow-md">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {/* Student Service */}
        <Link to="/HostelSearch" className="backdrop-blur-xl bg-white/60 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300 border border-white/30 hover:bg-white/70">
  <div className="text-4xl mb-4">🎓</div>
  <h2 className="text-2xl font-semibold text-blue-700 mb-2">For Students</h2>
  <p className="text-gray-700">
    Discover and book hostels easily with real-time availability, photos, and reviews.
  </p>
</Link>


        {/* Owner Service */}
        <Link to="/OwnerUpload" className="backdrop-blur-xl bg-white/60 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300 border border-white/30 hover:bg-white/70">
  <div className="text-4xl mb-4">🏠</div>
  <h2 className="text-2xl font-semibold text-green-600 mb-2">For Owners</h2>
  <p className="text-gray-700">
    Upload your hostel details and get discovered by students.
  </p>
</Link>

        {/* Admin Service */}
        <Link to="/admin" className="backdrop-blur-xl bg-white/60 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300 border border-white/30 hover:bg-white/70">
          <div className="text-4xl mb-4">🛡️</div>
          <h2 className="text-2xl font-semibold text-red-700 mb-2">Admin Panel</h2>
          <p className="text-gray-700">
            Monitor platform activity, verify listings, and manage users securely.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Services;
