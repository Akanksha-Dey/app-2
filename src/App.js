


//src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Orders from './components/Orders';
import OrdersCalendar from './components/OrdersCalendar';

// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import DashboardWithAnimation from './components/DashboardWithAnimation';
// import Products from './components/Products';
// import Orders from './components/Orders';
// import OrdersCalendar from './components/OrdersCalendar';

// ... (rest of the code remains the same)

import './App.css';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/products">PRODUCTS</Link></li>
        <li><Link to="/orders">ORDERS</Link></li>
        <li><Link to="/calendar">ORDER CALENDER</Link></li>
      </ul>

      
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/products" component={Products} />
          <Route path="/orders" component={Orders} />
          <Route path="/calendar" component={OrdersCalendar} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;




