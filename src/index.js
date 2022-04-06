import React from 'react';
import ReactDOM from 'react-dom';
// import './component/medalUser';
import './index.css';
import Order from './pages/order'
import Login from './pages/login'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Menu from './pages/menu'
// import App from './App';

import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";


import reportWebVitals from './reportWebVitals';
// import MedalUser from './component/medalUser';`



ReactDOM.render(
  <Router>
      <Routes>
      <Route exact path="/pickup" element={<Pickup />} />
      {/* <Route exact path="/menu" element={<Menu />} /> */}
      <Route exact path="/order" element={<Order />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>,
  document.getElementById('root')
);

function Pickup() {
  return (
    <div className="Pickup">
     <h1>iki page Pickup</h1>
    </div>
  );
}
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

