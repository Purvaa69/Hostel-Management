import React from 'react'

function Gallery() {
    const galleryItems = [
        {
          image: 'https://img.freepik.com/premium-photo/hotel-reception-hostel-dormitory_656932-2794.jpg',
          title: 'Hostel Reception',
          description: 'Welcome area for students and visitors.',
        },
        {
          image: 'https://a.hwstatic.com/image/upload/f_auto,q_auto/v1/propertyimages/1/11398/q3hq1lh9tepnvlxy05vg',
          title: 'Dormitory Rooms',
          description: 'Spacious and secure shared rooms for students.',
        },
        {
          image: 'https://th.bing.com/th/id/OIP.zcKdw87lfBneyx9qHMzlxQHaEK?rs=1&pid=ImgDetMain',
          title: 'Mess Area',
          description: 'Hygienic and affordable dining space for residents.',
        },
        {
          image: 'https://th.bing.com/th/id/R.8c1854706d75101cd065dda44ece1f1f?rik=5zRGZCB%2fFwCmRQ&riu=http%3a%2f%2fwww.pnbhs.school.nz%2fwp-content%2fuploads%2f2015%2f07%2fStudy-Area-2.jpg&ehk=mpkb9dZfXTPX3x3GXfgMNsizKIt1FFlrymSkbCrn8HI%3d&risl=&pid=ImgRaw&r=0',
          title: 'Study Area',
          description: 'Quiet and peaceful study environment.',
        },
      ];
    
      return (
        <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Hostel Gallery</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {galleryItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold text-gray-800">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Gallery
