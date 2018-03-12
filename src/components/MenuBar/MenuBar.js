import React,{ Component }  from 'react'
import { Dropdown,DropdownMenu,Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import DropdownItem from 'semantic-ui-react/dist/commonjs/modules/Dropdown/DropdownItem';

class MenuBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: "home"
    }
    this.passAuth = this.passAuth.bind(this);
    this.activeItem = this.activeItem.bind(this);
  }
  passAuth() {
    return { "uEmail": "", "uPassword": "" };
  }
  showSideBar(){
    this.setState({
      visible:!this.state.visible
    })
  }
 
  activeItem(e, { name }) {
    this.setState({ active: name })
  }
  render() {
    var allUsersMenu;
    var substitueSupervisorManu;
    var UserProfileSupervisor;
    var userProfileEmployee;

    if (this.props.auth.isAdmin==="1") {
      allUsersMenu = <Dropdown item text='User' simple>
        <DropdownMenu style={{ backgroundColor: "black" }}>
          <Dropdown.Item><Link to="/allUsers" style={{ color: "white" }}>View Users</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/newUser" style={{ color: "white" }}>New User</Link></Dropdown.Item>
        </DropdownMenu>
      </Dropdown>

    substitueSupervisorManu= <Dropdown item text='supervisor substitution' simple>
      <DropdownMenu style={{ backgroundColor: "black" }}>
      <Dropdown.Item><Link to="/supervisorSubstitutionForAdmin" style={{ color: "white" }}>substitue approver</Link></Dropdown.Item>
      <Dropdown.Item><Link to="/allSupervisorSubstitution" style={{ color: "white" }}> View supervisor substitution </Link></Dropdown.Item>
      </DropdownMenu>
      </Dropdown>
    }

    if (this.props.auth.isSupervisor==="1") {
      UserProfileSupervisor=<Dropdown.Item><Link to="/SubstituteByMe" style={{ color: "white" }}>Substitute Approver</Link></Dropdown.Item>
        
    }
    if(this.props.auth.isEmployee==="1"){
      userProfileEmployee=<Dropdown.Item><Link to="/userProfile" style={{ color: "white" }}>User Profile</Link></Dropdown.Item>
    }      
    return (
      <div >
        <Menu fixed='top' inverted borderless>
          <Link to="/home"><Menu.Item name="Home" /> </Link>
          {allUsersMenu}
          <Dropdown item text='Project' simple>
            <DropdownMenu style={{ backgroundColor: "black" }}>
              <Dropdown.Item><Link to="/project" style={{ color: "white" }}>New Project</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/allProject" style={{ color: "white" }}>View Projects</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/projectStaff" style={{ color: "white" }}>Project Staff</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/projectStaffDisplay" style={{ color: "white" }}>Project Staff display</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/projectActivity" style={{ color: "white" }}>Project Activity</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/projectDeliverable" style={{ color: "white" }}>Project Deliverables</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/projectPO" style={{ color: "white" }}>Project Pay Order</Link></Dropdown.Item>
            </DropdownMenu>
          </Dropdown>
          <Dropdown item text='Timesheet' simple>
            <DropdownMenu style={{ backgroundColor: "black" }}>
              <Dropdown.Item><Link to="/timeSheet" style={{ color: "white" }}>time-sheet</Link></Dropdown.Item>
            </DropdownMenu>
          </Dropdown>
          <Dropdown item text='Client' simple>
            <DropdownMenu style={{ backgroundColor: "black" }}>
              <Dropdown.Item><Link to="/allClients" style={{ color: "white" }}>View Clients</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/setupclient" style={{ color: "white" }}>New Client</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/alldepartments" style={{ color: "white" }}>View Departments</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/departments" style={{ color: "white" }}>New Department</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/subDepartments" style={{ color: "white" }}>New SubDepartments</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/allsubdepartments" style={{ color: "white" }}>View SubDepartments</Link></Dropdown.Item>
            </DropdownMenu>
          </Dropdown>
          <Dropdown item text='Vendor' simple>
            <DropdownMenu style={{ backgroundColor: "black" }}>
              <Dropdown.Item><Link to="/vendor" style={{ color: "white" }}>View Vendor</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/SetUpVendor" style={{ color: "white" }}>New Vendor</Link></Dropdown.Item>
            </DropdownMenu>
          </Dropdown>
          <Dropdown item text='Holidays' simple>
            <DropdownMenu style={{ backgroundColor: "black" }}>
              <Dropdown.Item><Link to="/holidays" style={{ color: "white" }}>Holidays Entry</Link></Dropdown.Item>
            </DropdownMenu>
          </Dropdown>
          {substitueSupervisorManu}
        
          <Menu.Menu position='right'>
            <Dropdown item text='User Name' simple>
              <DropdownMenu style={{ backgroundColor: "black" }}>
                {userProfileEmployee}
                {UserProfileSupervisor}
                <DropdownItem><Link to="/changePassword">chnage password</Link></DropdownItem>
                <Dropdown.Item><Link to='/logOut' onClick={() => { this.props.doLogin(this.passAuth()) }} style={{ color: "white" }}>log Out</Link></Dropdown.Item>
              </DropdownMenu>
            </Dropdown>
            
          </Menu.Menu>
        </Menu>
      </div>
    )

  }

}

function mapStateToProps(state) {
  return {
    auth: state.login
  }
}
function mapDispatchToProps(dispatch) {
  return {
    doLogin(auth) {
      dispatch(doLogin(auth))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuBar));
