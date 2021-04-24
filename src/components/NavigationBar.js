import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from 'react-router-dom';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Home from './Home';
import AboutUs from './AboutUs';

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
                                        <NavDropdown title="Recycle">
                                            <NavDropdown.Item href="">Batteries</NavDropdown.Item>
                                            <NavDropdown.Item href="">Phones</NavDropdown.Item>
                                            <NavDropdown.Item href="">Laptops and Computers</NavDropdown.Item>
                                            <NavDropdown.Item href="">Misc.</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="/about-us">About Us</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>

                                <Route path="/about-us">
                                    <AboutUs />
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