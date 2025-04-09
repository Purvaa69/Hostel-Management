import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-orange-600 text-white py-16 text-center">
        <h2 className="text-4xl font-semibold">About Us</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Comfortable, Secure, and Student-Friendly — the ideal living space for every learner.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To simplify hostel life by digitally managing operations like room assignments, maintenance, complaints, and more — ensuring
            a smooth and secure stay for all.
          </p>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-12 bg-gray-100 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-10">Facilities We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              '24/7 Security & CCTV',
              'High-Speed Wi-Fi',
              'Nutritious Mess Food',
              'Laundry Services',
              'First Aid & Medical Help',
              'Recreation & Study Rooms',
            ].map((facility, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition duration-300"
              >
                <h3 className="font-medium text-lg">{facility}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-12 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Meet Our Team</h2>
          <p className="text-gray-600 mb-8">
            Our dedicated hostel staff and developers ensure everything runs smoothly—from your room keys to your digital complaints.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <TeamCard name="AAA" role="Hostel Warden" />
            <TeamCard name="BBB" role="Maintenance Manager" />
            <TeamCard name="CCC" role="Development Team" />
          </div>
        </div>
      </section>
    </div>
  );
};

const TeamCard = ({ name, role }) => (
  <div className="bg-gray-100 shadow-sm rounded-lg p-5 w-64 hover:shadow-md transition">
    <div className="h-20 w-20 bg-indigo-200 rounded-full mx-auto mb-4"></div>
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
);

export default AboutUs;
