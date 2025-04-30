import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Manage_Profile = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedPhoto, setEditedPhoto] = useState('');

  // Fetch users from the server
  useEffect(() => {
    fetch('https://assignment-12-server-five-ebon.vercel.app/allusers')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const openEditModal = (user) => {
    setSelectedUser(user);
    setEditedName(user.name);
    setEditedPhoto(user.photoURL || '');
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  const handleSave = () => {
    const updateUser = {
      name: editedName,
      photoURL: editedPhoto,
    };

    // Update the user on the server
    axios.put(`https://assignment-12-server-five-ebon.vercel.app/allusers/${selectedUser._id}`, updateUser)
      .then((response) => {
        // console.log(response.data);
        if (response.data.modifiedCount > 0) {
          // Immediately update the client-side data
          const updatedUsers = users.map(user =>
            user._id === selectedUser._id
              ? { ...user, name: editedName, photoURL: editedPhoto }
              : user
          );
          setUsers(updatedUsers);
          alert('Data Updated Successfully');
        }
        closeModal(); // Close modal after saving
      })
      .catch((error) => {
        console.error('Error updating user:', error);
        alert('There was an error updating the user data.');
      });
  };

  console.log(selectedUser?._id);

  return (
    <div className="p-6">
      <h1 className="text-center font-extrabold text-3xl mb-6">Manage Profile</h1>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Picture</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  <img src={user.photoURL || 'https://via.placeholder.com/50'} alt="User" className="w-12 h-12 rounded-full mx-auto" />
                </td>
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2">{user.role}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => openEditModal(user)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            
            {/* Name */}
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />

            {/* Photo URL */}
            <label className="block mb-2">Photo URL:</label>
            <input
              type="text"
              value={editedPhoto}
              onChange={(e) => setEditedPhoto(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />

            {/* Email (Read-Only) */}
            <label className="block mb-2">Email:</label>
            <input
              type="text"
              value={selectedUser.email}
              readOnly
              className="w-full p-2 border rounded mb-4 bg-gray-200 cursor-not-allowed"
            />

            {/* Role (Read-Only) */}
            <label className="block mb-2">Role:</label>
            <input
              type="text"
              value={selectedUser.role}
              readOnly
              className="w-full p-2 border rounded mb-4 bg-gray-200 cursor-not-allowed"
            />

            <div className="flex justify-between">
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className='mt-2'>
      <Link to={'/dashboard/tourist/JoinTourGuide'}><button className='btn bg-primary text-white'>Apply For Tour Guide</button></Link>
      </div>


    </div>
  );
};

export default Manage_Profile;
