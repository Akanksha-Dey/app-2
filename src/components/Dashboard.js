




import React from 'react';

const Dashboard = () => {
  // Replace 'images/pizza1.jpeg' with the correct path to your downloaded image
  const imageUrl = 'images/pizza.jpeg';

  return (
    <div className="dashboard-container" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}>
      <h1 style={{ fontSize: '45px' }}>THE PIZZA MANIA</h1>
      <p style={{ fontSize: '24px' }}>WHERE TASTE MEETS MANIACS</p>
      <p>Total Orders: 30</p>
      <p>Total Products:10</p>

      {/* Card-like styling for Email and Password Input Boxes */}
      <div className="login-container">
        <div className="card">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />

          <button type="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;




