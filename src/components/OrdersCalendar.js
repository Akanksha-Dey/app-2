

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles

const OrdersCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // Mock data for orders on each date
  const ordersByDate = {
    '2024-02-29': [
      { id: 1, customerName: 'Alice', status: 'Pending' },
    { id: 2, customerName: 'Bob', status: 'Completed' },
    ],
    '2024-03-01': [
      { id: 3, customerName: 'Charlie', status: 'Pending' },
      { id: 4, customerName: 'David', status: 'Completed' },
    ],
    '2024-03-02': [
      { id: 5, customerName: 'Eva', status: 'Pending' },
      { id: 6, customerName: 'Frank', status: 'Completed' },
    ],
    '2024-03-03': [
      { id: 7, customerName: 'Grace', status: 'Pending' },
    { id: 8, customerName: 'Harry', status: 'Completed' },
    ],
    '2024-03-04': [
      { id: 9, customerName: 'Ivy', status: 'Pending' },
      { id: 10, customerName: 'Jack', status: 'Completed' },
    ],
    '2024-03-05': [
      { id: 11, customerName: 'Karen', status: 'Pending' },
      { id: 12, customerName: 'Leo', status: 'Completed' },
    ],
    '2024-03-06': [
      { id: 13, customerName: 'Mia', status: 'Pending' },
      { id: 14, customerName: 'Nathan', status: 'Completed' },
    ],
    '2024-03-07': [
      { id: 15, customerName: 'Olivia', status: 'Pending' },
      { id: 16, customerName: 'Paul', status: 'Completed' },
      { id: 17, customerName: 'Quinn', status: 'Pending' },
    ],
    '2024-03-08': [
      { id: 18, customerName: 'Ryan', status: 'Completed' },
    { id: 19, customerName: 'Samantha', status: 'Pending' },
    { id: 20, customerName: 'Tom', status: 'Completed' },
    { id: 21, customerName: 'Ursula', status: 'Pending' },
    ],
    '2024-03-09': [
      { id: 22, customerName: 'Victor', status: 'Completed' },
    { id: 23, customerName: 'Wendy', status: 'Pending' },
    { id: 24, customerName: 'Xander', status: 'Completed' },
    { id: 25, customerName: 'Yara', status: 'Pending' },
    ],
    '2024-03-10': [
      { id: 26, customerName: 'Zane', status: 'Completed' },
    ],
   
    // Add more dates and orders
  };

  const handleDateChange = (date) => {
    // Set the time part to midnight
    date.setHours(0, 0, 0, 0);
    setSelectedDate(date);
    // Implement logic to fetch orders on the selected date
  };

  const getOrdersForSelectedDate = () => {
    const formattedDate = selectedDate.toISOString().split('T')[0];
    return ordersByDate[formattedDate] || [];
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '112vh', background: 'linear-gradient(to bottom,#ff6e7f, #bfe9ff )', color: '#fff' }}>
      <h1>Orders Calendar View</h1>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileContent={({ date }) => {
          // Set the time part to midnight
          date.setHours(0, 0, 0, 0);
          const formattedDate = date.toISOString().split('T')[0];
          const orders = ordersByDate[formattedDate] || [];
          return orders.length > 0 ? <p>{orders.length} Orders</p> : null;
        }}
        calendarType="US"
        className="fullscreen-calendar"
      />
      <div>
        <h2>Orders on {selectedDate.toLocaleDateString()}</h2>
        <ul>
          {getOrdersForSelectedDate().map((order) => (
            <li key={order.id}>
              Customer: {order.customerName} - ID: {order.id} - Status: {order.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrdersCalendar;

         




