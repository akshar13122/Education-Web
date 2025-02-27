import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AdminDashBoard.css'; // Assuming the CSS is saved in AdminDashBoard.css

const AdminDashBoard = () => {
  const [users, setUsers] = useState([]); // State to store users
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const navigate = useNavigate();  // For navigation

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users");
        const data = await response.json();

        if (data.users) {
          setUsers(data.users); // Store the users in the state
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };

    fetchUsers();
  }, []);

  // Delete user
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setUsers(users.filter(user => user.id !== id)); // Remove user from UI
        alert("User deleted successfully!");
      } else {
        alert("Failed to delete the user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Edit user: navigate to EditUser page with user ID
  const editUser = (id) => {
    navigate(`/edituser/${id}`); // Navigate to EditUser page with the user ID
  };

  // Handle the search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update the search term state
  };

  // Filter users based on search term (search by ID or name)
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || // Match by name
      user.id.toString().includes(searchTerm) // Match by ID
  );

  return (
    <div className="adminDiv">
      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>

        {loading ? (
          <p className="loading">Loading users...</p>
        ) : (
          <div>
            <h2>Registered Users</h2>

            {/* Search Bar */}
            <div className="search-bar3">
              <input
                type="text"
                placeholder="Search by ID or Name"
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>

            {filteredUsers.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>
                        <button className="editbtn" onClick={() => editUser(user.id)}>Edit</button>
                      </td>
                      <td>
                        <button className="deletebtn" onClick={() => deleteUser(user.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No users found matching your search criteria.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashBoard;
