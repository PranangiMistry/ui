import React, { Component } from 'react';
import { Input, Checkbox, Button,Divider,Grid,Icon,Confirm,Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getVendorDropdown } from '../../dropdown/actions/vendorDropDown';
import { changeEditProjectManager,getEditUserProfileData,changeEditAdmin,changeEditSupervisor,changeIsVendor,changeVendor,changeEditEmployee,updateEditUser} from '../../user/actions/editUserActions';
import { changeuEmail,changeCity,changeCountry,changeState,
    changeStreetName1,changeStreetName2,changeuFirstName,changeuLastName,changeuPhone,changeuPhone2
} from '../../user/actions/userProfileActions';
import { Redirect } from 'react-router-dom';
import Notification from '../../../components/Notifications/Notification';
let languageOptions = []
var id=''
class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToAllUsers: false,
            notify:false,
            open: false,
            roleList:[],
            isEnabled:false,
        }
        this.handleConfirm = this.handleConfirm.bind(this);
        this.changeuEmail = this.changeuEmail.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.changeCountry = this.changeCountry.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeStreetName1 = this.changeStreetName1.bind(this);
        this.changeStreetName2 = this.changeStreetName2.bind(this);
        this.changeuFirstName = this.changeuFirstName.bind(this);
        this.changeuLastName = this.changeuLastName.bind(this);
        this.changeuPhone = this.changeuPhone.bind(this);
        this.changeuPhone2 = this.changeuPhone2.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.changeEditAdmin = this.changeEditAdmin.bind(this);
        this.changeEditSupervisor = this.changeEditSupervisor.bind(this);
        this.changeEditEmployee = this.changeEditEmployee.bind(this);
         this.changeIsVendor=this.changeIsVendor.bind(this);
         this.changeVendor=this.changeVendor.bind(this);
         this.changeEditProjectManager=this.changeEditProjectManager.bind(this);
    }

    componentDidMount() {
        this.props.getVendorDropdown();
        this.props.getEditUserProfileData(this.props.match.params.userId);
    }
    updateProfile() {
       this.props.updateEditUser(this.props.match.params.userId);
      // this.setState({ notify:true,redirectToAllUsers: true })
    }
    handleConfirm() {
        this.setState({ open: false })
    }
    changeuFirstName(event) {
        this.props.changeuFirstName(event.target.value);
    }
    changeuLastName(event) {
        this.props.changeuLastName(event.target.value);
    }
    changeuEmail(event) {
        this.props.changeuEmail(event.target.value);
    }
    changeCity(event) {
        this.props.changeCity(event.target.value);
    }
    changeState(event) {
        this.props.changeState(event.target.value);
    }
    changeCountry(event) {
        this.props.changeCountry(event.target.value);
    }
    changeuPhone(event) {
        this.props.changeuPhone(event.target.value);
    }
    changeuPhone2(event) {
        this.props.changeuPhone2(event.target.value);
    }
    changeStreetName1(event) {
        this.props.changeStreetName1(event.target.value);
    }
    changeStreetName2(event) {
        this.props.changeStreetName2(event.target.value);
    }
    changeEditAdmin(event) {
       this.props.changeEditAdmin(event.target.value);
    }
    changeEditProjectManager(event) {
        this.props.changeEditProjectManager(event.target.value);
     }
    changeEditEmployee(event) {
         this.props.changeEditEmployee(event.target.value);
    }
    changeEditSupervisor(event) {
         this.props.changeEditSupervisor(event.target.value);
    }
    changeIsVendor(event){
        this.props.changeIsVendor(event.target.value)
        if(this.props.editUser[0].isVendor===true)
        {
           this.props.changeVendor(null);
        }
    }
    changeVendor(event)
    {
     id=event.currentTarget.textContent;
     this.props.changeVendor(id);

    }
    componentWillReceiveProps(nextProps)
    { 
        this.setState({
            isEnabled:nextProps.editUser[0].isVendor
        })
    }
    render() {
        var notificationUpdated;
        if(this.state.notify)
        {
            var noteData={msg:"successfully updated..!!",level:"success",position:"br"};
            notificationUpdated= <Notification noteData={noteData}/>
        }
        if (this.state.redirectToAllUsers) {
            return (
            <Redirect to="/allUsers"/>
            )
        }
        if(this.props.vendorDropDown!=null)
        languageOptions=this.props.vendorDropDown

        return (
            <div>
                {notificationUpdated}
                <Grid columns="equal" padded>
                     <Grid.Column className="twelve wide column">
                         <h2 style={{ marginLeft: '5em' }}>Edit User</h2>
                    </Grid.Column>
                    <Grid.Column>
                    <div style={{alignItems:"right"}}><Button primary onClick={this.updateProfile}>Update</Button></div>
                        <Confirm
                            open={this.state.open}
                            header='Delete User'
                            onConfirm={() => this.handleConfirm()}
                        />
                    </Grid.Column>
                </Grid>
                <Divider />
                <div style={{ marginLeft: '5em' }}>
                <Grid columns={5} padded>
                <Grid.Column width="2">
                <h4 style={{textAlign:"right",marginTop:"1em"}}>User ID</h4>
                <Divider hidden />
                <h4 style={{textAlign:"right",marginTop:"2.5em"}}>Roles</h4>
                <Divider hidden />
                <h4 style={{textAlign:"right",marginTop:"3em"}}>About</h4>
                <Divider hidden />
                <h4 style={{textAlign:"right",marginTop:"5em"}}>Contact</h4>
                <Divider hidden />
                <h4 style={{textAlign:"right",marginTop:"7em"}}>Address</h4>
                </Grid.Column>
                <Grid.Column width='1'>
                     <Divider vertical><Icon disabled name='angle right' /></Divider>
                </Grid.Column>
                <Grid.Column className="ten wide column">

                <Input style={{ width:"290px" }} focus label={{color:'blue',content:'Email'}} value={this.props.editUser[0].uEmail} placeholder='Email' type='email' error={this.props.editUser[0].uEmail.length>0?false:true} required onChange={this.changeuEmail} /><br /><br />
                <Divider />
                
                <Checkbox style={{ marginLeft: '1em' }} label='Admin' checked={this.props.editUser[0].isAdmin}  onChange={this.changeEditAdmin} />
                <Checkbox style={{ marginLeft: '1em' }} label='Employee' checked={this.props.editUser[0].isEmployee} onChange={this.changeEditEmployee}/>
                <Checkbox style={{ marginLeft: '1em' }} label='Supervisor' checked={this.props.editUser[0].isSupervisor} onChange={this.changeEditSupervisor}/> 
                <Checkbox style={{ marginLeft: '1em' }} label='Project manager' checked={this.props.editUser[0].isProjectManager} onChange={this.changeEditProjectManager}/> 
                <Divider /><br />
                <Input style={{ width:"290px" }} focus label={{color:'blue',content:'First name'}} value={this.props.editUser[0].uFirstName} placeholder='First Name' type='text' onChange={this.changeuFirstName} />
                <Input style={{ marginLeft: '1em',width:"290px" }} focus label={{color:'blue',content:'Last Name'}} value={this.props.editUser[0].uLastName} placeholder='Last Name' type='text' onChange={this.changeuLastName} /><br /><br />
                <Divider /><br />
                <Input style={{ width:"290px" }} focus label={{color:'blue',content:'Phone'}} value={this.props.editUser[0].uPhone} placeholder='Phone number' type='text' onChange={this.changeuPhone} />
                <Input style={{ marginLeft: '1em',width:"290px" }} focus label={{color:'blue',content:'Phone (2)'}} value={this.props.editUser[0].uPhone2} placeholder='Phone number (2)' type='text' onChange={this.changeuPhone2} /><br /><br />
                <Divider /><br />
                <Input focus label={{color:'blue',content:'Street name 1'}} value={this.props.editUser[0].streetName1} placeholder='Street name 1' type='text' onChange={this.changeStreetName1} />
                <Input style={{ marginLeft: '1em',width:"280px" }} focus label={{color:'blue',content:'Street name 2'}} value={this.props.editUser[0].streetName2} placeholder='Street name 2' type='text' onChange={this.changeStreetName2} /><br /><br /><br />
                <Input focus label={{color:'blue',content:'city'}} value={this.props.editUser[0].city} placeholder='city' type='text' onChange={this.changeCity} />
                <Input style={{ marginLeft: '1em' }} focus label={{color:'blue',content:'state'}} value={this.props.editUser[0].state} placeholder='state' type='text' onChange={this.changeState} />
                <Input style={{ marginLeft: '1em' }} focus label={{color:'blue',content:'country'}} value={this.props.editUser[0].country} placeholder='country' type='text' onChange={this.changeCountry} /><br /><br />
                <Divider /><br />
                <Checkbox label='Vendor' checked={this.props.editUser[0].isVendor} onChange={this.changeIsVendor} />
                <Dropdown selection search text={this.props.editUser[0].vendorName} disabled={!this.state.isEnabled} onChange={this.changeVendor} options={languageOptions} placeholder='Select vendor' /><br /><br />
                </Grid.Column>
                </Grid>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        editUser: state.editUser,
        vendorDropDown:state.vendorDropDown
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeEditEmployee,changeEditProjectManager,changeEditSupervisor,getEditUserProfileData,changeEditAdmin,changeuEmail,changeStreetName1,changeStreetName2,
        changeuFirstName,changeuLastName,updateEditUser,changeVendor,getVendorDropdown,changeIsVendor,changeCity,changeState,changeCountry,changeuPhone,changeuPhone2}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
