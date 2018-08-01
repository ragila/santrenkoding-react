import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <img src="http://i63.tinypic.com/oid9xu.png" alt="" height="50px" />
          <NavbarBrand href="/">Santren Koding</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Kajian Koding</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Santren Kilat</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Mondok</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Tentang Kami</NavLink>
              </NavItem>
              <NavItem>
                <Button outline color="primary">
                  Login/SignUp
                </Button>{' '}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
