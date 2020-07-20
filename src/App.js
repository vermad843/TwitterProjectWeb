import React, { Component } from 'react';
import './App.css';
import { Nav, NavItem, NavLink,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


class App extends Component {
    render() {
        return (
            <div>
               <div className = "heading">
                <h1 >TweetX</h1>
               </div>
               <Nav className = "nav">
                 <NavItem>
                   <NavLink href="#">Feed</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink href="#">Users</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink href="#">Profile</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink disabled href="#"></NavLink>
                 </NavItem>
               </Nav>
               <div>
                 <Button className = "button" >Write</Button>
               </div> 
               <Card className = "card">
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                </Card>  
                <Card className = "card">
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                </Card>    
                <Card className = "card">
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                </Card>         
          </div>
        );
    }
}

export default App;