


// src/components/Dashboard.js
// import React from 'react';

// const Dashboard = () => {
//   const backgroundImageUrl = 'https://www.shutterstock.com/image-photo/concept-promotional-flyer-poster-restaurants-260nw-1060535249.jpg';

//   return (
//     <div className="dashboard-container" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover' }}>
//       <h1>The Pizza Mania</h1>
//       <p>Total number of products: 100</p>
//       <p>Total number of orders: 50</p>
//     </div>
//   );
// };

// export default Dashboard;



// import React from 'react';

// const Dashboard = () => {
//   // const backgroundImageUrl = 'https://www.shutterstock.com/image-photo/concept-promotional-flyer-poster-restaurants-260nw-1060535249.jpg';
// <img src='images/pizza1.jpeg'/>
//   return (
//     <div className="dashboard-container" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover' }}>
//       <h1>The Pizza Mania</h1>
//       <p>Total number of products: 100</p>
//       <p>Total number of orders: 50</p>

//       {/* Card-like styling for Email and Password Input Boxes */}
//       <div className="login-container">
//         <div className="card">
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" placeholder="Enter your email" />

//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" name="password" placeholder="Enter your password" />

//           <button type="submit">Login</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




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




