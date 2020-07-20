import React, { Component } from 'react';
import './App.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';



class App extends Component {
    render() {
        return (
            <div>
                 <h1 className = "header">TweetX</h1>
                 <Button className = "button" outline color="" size="lg" block>Login</Button>
                 <h1 className = "head">Create Account</h1>
                 <Form className = "form">
                   <FormGroup>
                         <Input type="email" name="email" id="exampleEmail" placeholder="Name" />
                       </FormGroup>
                    <FormGroup>
                       <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                     </FormGroup>
                     <FormGroup>
                       <Input type="password" name="password" id="examplePassword" placeholder="Password"/>
                     </FormGroup>
                     <FormGroup>
                       <Input type="password" name="password" id="examplePassword" placeholder="Confirm Password"/>
                     </FormGroup>
                     <Button  className = "submit" color="danger" size="lg">Sign up</Button>
                 </Form>
            </div>
        );
    }
}

export default App;