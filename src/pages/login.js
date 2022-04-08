// import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import './login.css';
import React, { Component } from "react";
// import "./Login.css";
import { Navigate } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        user_id: "",
        user_password: ""
      }
    };
  }
  
  handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };
 
  user = event => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "user@gmail.com" && user_password === "123") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
        
      });
      
    }
    event.preventDefault()    ;
  };
  driver = event => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "driver@gmail.com" && user_password === "123") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
    }
    event.preventDefault();
  };
  seller = event => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "seller@gmail.com" && user_password === "123") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
    }
    event.preventDefault();
  };
  
  
  componentWillMount(){
    setTimeout(() => { 
        this.props.history.push('/login');
    }, 5000)
}
  render() {
    if (localStorage.getItem("token")) {
      return <Navigate to="/order" />;
    }
    return (
      <div className="Login">
      <Card style={{ width: '28rem' }}>
        <Card.Body>
          <Card.Text>
          <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
          </Card.Text>
      
        </Card.Body>
      </Card>
          </div>

    );
  }
}
export default Login;

// function Login() {
//   return (
    <div className="Login">
<Card style={{ width: '28rem' }}>
  <Card.Body>
    <Card.Text>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </Card.Text>

  </Card.Body>
</Card>
    </div>
//   );
// }
//   export default Login;
  