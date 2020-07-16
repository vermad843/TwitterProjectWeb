import React, { Component } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class App extends Component {
    render() {
        return (
            <div>
                 <h1 className = "header">TweetX</h1>
                 <Button className = "button" outline color="" size="lg">Large Button</Button>
                 <h1 className = "head">Login</h1>
                 <Form className = "form">
                    <FormGroup>
                       <Label for="exampleEmail">Email</Label>
                       <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                     </FormGroup>
                     <FormGroup>
                       <Label for="examplePassword">Password</Label>
                       <Input type="password" name="password" id="examplePassword" placeholder="password"/>
                     </FormGroup>
                     <Button  className = "submit" color="danger" size="lg">Login</Button>{'Forgot Password ?'}
                 </Form>
            </div>
        );
    }
}

export default App;