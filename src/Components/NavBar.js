import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './nav.css'
  const Brand = {
    fontSize:'24px',
    marginLeft:'-35px',
    color:'#fff',
    // fontFamily:"Open Sans,sans-serif",
    paddingBottom:'50px',
    marginBottom:'-7px',
    height:'40px',
    paddingLeft:'1px',
    paddingTop: '20px',
    marginTop: '-8px'
  
  };

  

 

export default class NavBar extends React.Component {
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
     

<Navbar id="nav" className="navbar navbar-default navbar-fixed-top be-top-header" light expand="xs">
<NavbarBrand style={Brand} className="brand" href="/">Appiness</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="nav navbar-nav" navbar>
          <NavLink></NavLink>
          <NavItem className="navLink">
          </NavItem>
              </Nav>
            <Nav className="ml-auto" navbar style={{color:'blue'}}>
              
              
               <UncontrolledDropdown  >
                <DropdownToggle  >
                Settings
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <a   tag={Link} style={{color:"grey",marginLeft:'7px'}} href="/">Logout</a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  
  }
}
;