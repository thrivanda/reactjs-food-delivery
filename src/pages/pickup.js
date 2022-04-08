import React,{useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './pickup.css';


export function Pickup()  {
  const [show, setShow] = useState(true);

    return (
      <div className="Pickup">
        <Card style={{ width: '28rem' }}>
       <h4>Hey</h4>
       <h5>Welcome back, What can you do now?</h5>
       {!show && <Button onClick={() => setShow(true)}>pickup/drop the order</Button>}
       {/* <Button variant="primary" >
          pickup/drop the order
        </Button> */}
       </Card>
        <Alert show={show} variant="success">
        <Alert.Heading>Order is success!!</Alert.Heading>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>

    
      </div>
    );
  }
  
  


export default Pickup;