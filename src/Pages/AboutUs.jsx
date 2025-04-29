
const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          We are a team dedicated to bringing you the best travel experiences and stories from around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700">Our Mission</h2>
          <p className="text-gray-600 mt-4">
            Our mission is to inspire people to explore new places and share their unique travel stories with the world.
            We believe in the power of travel to create memories that last a lifetime.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700">Our Team</h2>
          <p className="text-gray-600 mt-4">
            We are a passionate team of explorers, storytellers, and adventurers who strive to bring you authentic
            travel stories, tips, and inspiration. Our diverse backgrounds and experiences shape our work, and we aim
            to share our love for travel with everyone.
          </p>
        </div>
      </div>

      {/* Developer Information Section */}
      <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700">Meet the Developer</h2>
        <div className="mt-4 flex flex-col items-center">
          <img
            src="https://bairesdev.mo.cloudinary.net/blog/2022/08/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156-1.jpg?tx=w_1920,q_auto"
            alt="Developer"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <p className="text-lg font-semibold text-gray-800">Polok Shahi</p>
          <p className="text-gray-600 mt-2">Full Stack Developer & Passionate Coder</p>
          <p className="text-gray-500 mt-2 text-center">
            John has been a web developer for over 5 years, with expertise in React, Node.js, MongoDB, and Express.
            He is committed to building robust and user-friendly applications. He enjoys solving problems and crafting
            experiences that delight users.
          </p>
          <p className="text-gray-600 mt-4">Projects Created: 12+ projects</p>

          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-gray-700">Some of his projects:</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li><a href="https://github.com/johndoe/project-1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Project 1 - Travel Diaries App</a></li>
              <li><a href="https://github.com/johndoe/project-2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Project 2 - E-commerce Platform</a></li>
              <li><a href="https://github.com/johndoe/project-3" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Project 3 - Blogging Website</a></li>
              <li><a href="https://github.com/johndoe/project-4" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Project 4 - Social Media Dashboard</a></li>
              {/* Add more project links as needed */}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">Get in Touch</h2>
        <p className="text-gray-600 mt-4">
          Have a story to share or a question for us? We'd love to hear from you! Feel free to reach out.
        </p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
