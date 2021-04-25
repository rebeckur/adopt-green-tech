import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Home from './Home';
import AboutUs from './AboutUs';
import Recycle from './Recycle';

class BootstrapNavbar extends React.Component {

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="light" variant="light" fixed="top">
                                <Navbar.Brand href="/">Adopt Green Tech</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/#/reduce">Reduce</Nav.Link>
                                        <Nav.Link href="/#/reuse">Reuse</Nav.Link>
                                        <NavDropdown title="Recycle">
                                            <NavDropdown.Item href="/#/recycle#batteries">Batteries</NavDropdown.Item>
                                            <NavDropdown.Item href="/#/recycle#phones">Phones</NavDropdown.Item>
                                            <NavDropdown.Item href="/#/recycle#laptops-computers">Laptops and Computers</NavDropdown.Item>
                                            <NavDropdown.Item href="/#/recycle">Misc.</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="/#/about-us">About Us</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br/><br/><br/>
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>

                                <Route path="/about-us">
                                    <AboutUs />
                                </Route>

                                <Route path="/recycle">
                                    <Recycle />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

export default BootstrapNavbar;