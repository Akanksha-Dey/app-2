// // src/components/Orders.js
// import React from 'react';

// const Orders = () => {
//   // Mock data
//   const orders = [
//     { id: 1, customerName: 'Customer 1', orderDate: '2024-03-10', status: 'Pending' },
//     // Add more orders
//   ];

//   return (
//     <div>
//       <h1>Orders Management</h1>
//       <ul>
//         {orders.map((order) => (
//           <li key={order.id}>
//             Order ID: {order.id} - Customer: {order.customerName} - Date: {order.orderDate} - Status: {order.status}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Orders;


import React from 'react';
// import './Orders.css';
const Orders = () => {
  
  
  // Sample order data
  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = 'lightblue';
    event.target.style.transition = 'background-color 0.3s ease';
  };

  const handleMouseOut = (event) => {
    event.target.style.backgroundColor = ''; // Reset to default
  };

  const orders = [
    {
      id: 1,
      customerName: 'John Doe',
      location: 'New York',
      name:'Heart Pizza-5',
      amount: 50.99,
      status: 'Pending',
    },
    // Add more orders
    {
      id: 2,
      customerName: 'Jane Smith',
      location: 'Los Angeles',
      name:'Corn Cheese Pizza-4',
      amount: 75.50,
      status: 'Delivered',
    },
    // Add 15 more orders
    {
      id: 3,
      customerName: 'Alice Johnson',
      location: 'Chicago',
      name:'Heart Pizza-2',
      amount: 30.25,
      status: 'Processing',
    },
    {
      id: 4,
      customerName: 'Bob Williams',
      location: 'Houston',
      name:'Tomato Olive Pizza-10',
      amount: 90.00,
      status: 'Shipped',
    },
    {
      id: 5,
      customerName: 'Eva Davis',
      location: 'Miami',
      name:'Onion Pizza-7',
      amount: 45.75,
      status: 'Delivered',
    },
    {
      id: 6,
      customerName: 'Michael Taylor',
      location: 'San Francisco',
      name:'Origano Pizza-3',
      amount: 60.30,
      status: 'Pending',
    },
    {
      id: 7,
      customerName: 'Olivia Martinez',
      location: 'Dallas',
      name:'Overloaded Pizza-3',
      amount: 55.50,
      status: 'Shipped',
    },
    {
      id: 8,
      customerName: 'Daniel Lee',
      location: 'Atlanta',
      name:'Shief pizza',
      amount: 40.80,
      status: 'Processing',
    },
    {
      id: 9,
      customerName: 'Sophia White',
      location: 'Seattle',
      name:'Shief pizza',
      amount: 70.20,
      status: 'Delivered',
    },
    {
      id: 10,
      customerName: 'Matthew Harris',
      location: 'Phoenix',
      name:'Unique Pizza-5',
      amount: 25.99,
      status: 'Pending',
    },
    {
      id: 11,
      customerName: 'Chloe Turner',
      location: 'Denver',
      name:'Shief pizz-6',
      amount: 85.50,
      status: 'Shipped',
    },
    {
      id: 12,
      customerName: 'William Clark',
      location: 'Boston',
      name:'Chessy Cheese Pizza-3',
      amount: 65.75,
      status: 'Processing',
    },
    {
      id: 13,
      customerName: 'Grace Robinson',
      location: 'Las Vegas',
      name:'Shief pizza-2',
      amount: 50.30,
      status: 'Delivered',
    },
    {
      id: 14,
      customerName: 'Henry Walker',
      location: 'Philadelphia',
      name:'Shief pizza',
      amount: 45.50,
      status: 'Pending',
    },
    {
      id: 15,
      customerName: 'Lily Adams',
      location: 'Detroit',
      name:'Shief pizza-4',
      amount: 30.80,
      status: 'Shipped',
    },
    // Add more orders as needed
  ];

  return (
    <div>
      <h1 className='OM'>ORDER MANAGEMENT</h1>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Location</th>
            <th>Order Name</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.location}</td>
              <td>{order.name}</td>
              <td>${order.amount.toFixed(2)}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;