import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Order from './pages/order'
import Login from './pages/login'
import Pickup from './pages/pickup'
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";


import reportWebVitals from './reportWebVitals';




ReactDOM.render(
  <Router>
      <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/pickup" element={<Pickup />} />
      <Route exact path="/order" element={<Order />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>,
  document.getElementById('root')
);


function Dashboard() {
  return (
    <div className="Dashboard">
     <h1>iki page Dashboard</h1>
    </div>
  );
}




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

