import React from 'react';
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem } from 'reactstrap';

class Topbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);

        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    closeNavbar() {
        this.setState({
            isOpen: false
        });
    }
    render() {
        return (
            <Navbar data-testid="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand"to="/">GRANDE</Link>
                <NavbarToggler onClick={this.toggle}>
                    <span className="navbar-toggler-icon"></span>    
                </NavbarToggler>
                <Collapse isOpen={this.state.isOpen} navbar className="bg-light center">

                    {/* <!-- right navigation link -->  */}
                    <Nav className="navbar-nav ml-auto routes" navbar>
                        <NavItem>
                            <Link data-testid="home-link" className="nav-link" to="/" onClick={this.closeNavbar}>Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link data-testid="contact-link" className="nav-link" to="/contact" onClick={this.closeNavbar}>Contact</Link>
                        </NavItem>
                        <NavItem>
                            <Link data-testid="about-link" className="nav-link" to="/about" onClick={this.closeNavbar}>About</Link>
                        </NavItem>

                    </Nav>
                </Collapse>
            </div>
            </Navbar> 
        );
    }
}
export default Topbar;