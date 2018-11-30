import React, { Component } from 'react'
import { Route, RouteHandler, IndexLink, Link} from 'react-router'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styles from '../containers/navbar.css';

class NavBar extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    let navBar = (
      <Navbar inverse collapseOnSelect
        fluid={false}>
        <Navbar.Header >
          <Navbar.Brand>
              <IndexLinkContainer to='/'>
                <NavItem>Brand Image</NavItem>
              </IndexLinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/"><NavItem>Home</NavItem></LinkContainer>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <LinkContainer to="/">
                <NavItem>Home</NavItem>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
    return (
      navBar
    );
  }
}
// function mapStateToProps(state) {
//   return {
//       auth: state.auth
//   }
// }

export default NavBar
