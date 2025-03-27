import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AdminDashBoard.css'; // Assuming the CSS is saved in AdminDashBoard.css

const AdminDashBoard = () => {
  const [users, setUsers] = useState([]); // State to store users
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const navigate = useNavigate();  // For navigation


  // useEffect(() => {
    
  //   const checkLoginExpiration = () => {
  //     const loginTime = localStorage.getItem("loginTime");
  //     if (loginTime) {
  //       const currentTime = Date.now();
  //       const elapsedTime = (currentTime - parseInt(loginTime, 10)) / 1000; 
  //       if (elapsedTime >= 3600) { 
  //         localStorage.clear(); 
  //         window.location.reload(); 
  //       }
  //     }
  //   };
  
    
  //   const isAdmin = localStorage.getItem("admin");
  
  //   if (isAdmin) {
      
  //     if (!localStorage.getItem("loginTime")) {
  //       localStorage.setItem("loginTime", Date.now().toString());
  //     }
  
      
  //     const interval = setInterval(checkLoginExpiration, 60 * 1000); 
  
  //     return () => clearInterval(interval);
  //   }
  // }, []);
  
  
  
  
  // Fetch users on component mount
  useEffect(() => {
          // Check if the page has already been reloaded (stored in localStorage)
   
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
    const hasReloaded = localStorage.getItem('hasReloaded');
          
    if (!hasReloaded) {
        localStorage.setItem('hasReloaded', 'true');
        window.location.reload();
    }

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
  const enrolled = (id) =>{
    navigate(`/enrollment/${id}`);
  }

  // Navigate to FeedbackData page
  const navigateToFeedbackData = () => {
    navigate('/feedbackdata');
  };

  const navigateToEditCourse = () => {
    navigate('/editcourse');
  }
  const navigateToRegisterAdmin = () =>{
    navigate('/registeruser');

  }
  // Handle the search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update the search term state
  };

  // Filter users based on search term (search by ID or name)
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) // Match only by name
  );
  

  return (
    <div className="adminDiv">
      <div className="admin-dashboard">
      <div><h2>Admin Dashboard</h2></div>
        <div className="adminupper">
        <div className="upperbuttons">
          <button onClick={navigateToFeedbackData} className="feedbackbtn"
          style={{fontSize:"11px"}}
          >View Feedback</button>
          <button onClick={navigateToEditCourse} className="feedbackbtn" style={{fontSize:"11px"}}>Manage Courses</button>
          <button onClick={navigateToRegisterAdmin} className="feedbackbtn" style={{fontSize:"11px"}}>Add New Admin</button>
        </div>
        <div><h3 style={{color:"white"}}>Registered Users</h3></div>
        <div className="srch">
            <div className="search-bar3">
              <input
                type="text"
                placeholder="Search by  Name"
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
                style={{height:"40px" , width:"400px" , color:"black"}}
              />
            </div>
            </div>
        </div>

        {/* Add Feedback Data Button */}
    

        {loading ? (
          <p className="loading">Loading users...</p>
        ) : (
          <div>
            

            {/* Search Bar */}
      

            {filteredUsers.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    {/* <th>ID</th> */}
                    <th>Name</th>
                    <th>Email</th>
                    {/* <th>Password</th> */}
                    <th>Edit</th>
                    <th>Enrollment</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id}>
                      {/* <td>{user.id}</td> */}
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      {/* <td>{user.password}</td> */}
                      <td>
                        <button className="editbtn" onClick={() => editUser(user.id)} style={{fontSize:"10px"}}>Edit</button>
                      </td>
                      <td>
                        <button className="editbtn" onClick={() => enrolled(user.id)} style={{fontSize:"10px"}}>Details</button>
                      </td>
                      <td>
                        <button className="deletebtn" onClick={() => deleteUser(user.id)} style={{fontSize:"10px"}}>Delete</button>
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
