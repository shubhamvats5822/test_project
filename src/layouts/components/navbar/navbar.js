// import external modules
import React, { Component } from "react";
import {
   Collapse,
   Navbar,
   Nav,   
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem
} from "reactstrap";
import {
   Menu,
   MoreVertical,
   LogOut
} from "react-feather";
import { connect } from 'react-redux';
import {setLoginUser,setLoginFlag} from '../../../redux/actions/login/loginAction';


class NavbarComponent extends Component {
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
         <Navbar className="navbar navbar-expand-lg navbar-light bg-faded">
            <div className="container-fluid px-0">
               <div className="navbar-header">
                  <Menu
                     size={14}
                     className="navbar-toggle d-lg-none float-left"
                    
                     data-toggle="collapse"
                  />
                  <MoreVertical
                     className="mt-1 navbar-toggler black no-border float-right"
                     size={50}
                     onClick={this.toggle}
                  />
               </div>

               <div className="navbar-container">
                  <Collapse isOpen={this.state.isOpen} navbar>
                     <Nav className="ml-auto float-right" navbar>

                        <UncontrolledDropdown nav inNavbar className="pr-1">
                           <DropdownToggle nav>
                              <img src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" alt="logged-in-user" className="rounded-circle width-45" />
                           </DropdownToggle>
                           <DropdownMenu right>
                              <DropdownItem>
                                 <span className="font-small-3">
                                    John <span className="text-muted"></span>
                                 </span>
                              </DropdownItem>
                              <DropdownItem divider />

                             
                              
                              <DropdownItem onClick={this.logoutClick}>
                                 <LogOut size={16} className="mr-1" /> Logout
                              </DropdownItem>
                              
                           </DropdownMenu>
                        </UncontrolledDropdown>
                     </Nav>
                  </Collapse>
               </div>
            </div>
         </Navbar>
      );
   }
}

const mapStateToProps = state => {   
	const {loginUser } = state.login;   
   return {loginUser};
}
export default (connect(mapStateToProps, {})(NavbarComponent));


