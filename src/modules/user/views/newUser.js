import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, Checkbox, Button, Divider, Dropdown, Grid, Icon, Label, Form } from 'semantic-ui-react';
import { getVendorDropdown } from '../../dropdown/actions/vendorDropDown';
import { addNewUser } from '../../user/actions/newUserActions'
import Notification from '../../../components/Notifications/Notification';

// let languageOptions = []
// let vendorName = ''
// var id = ''
class NewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notify: false, uFirstName: '', uLastName: '',
            uEmail: '', uPassword: '', confirmPassword: '',
            isActive: true, isAdmin: false,
            isSupervisor: false, isEmployee: false,
            isProjectManager: false, isVendor: false,
            vendorName: '', city: '', state: '', country: '',
            streetName1: '', streetName2: '', uPhone: '', uPhone2: '',
            vendorOption: [], id: '', confrimPassword: ''
        }
        this.changeuEmail = this.changeuEmail.bind(this);
        this.changeAdmin = this.changeAdmin.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.changeCountry = this.changeCountry.bind(this);
        this.changeEmployee = this.changeEmployee.bind(this);
        this.changeIsActive = this.changeIsActive.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeStreetName1 = this.changeStreetName1.bind(this);
        this.changeStreetName2 = this.changeStreetName2.bind(this);
        this.changeSupervisor = this.changeSupervisor.bind(this);
        this.changeuFirstName = this.changeuFirstName.bind(this);
        this.changeuLastName = this.changeuLastName.bind(this);
        this.changeuPassword = this.changeuPassword.bind(this);
        this.chengeuPhone = this.chengeuPhone.bind(this);
        this.chengeuPhone2 = this.chengeuPhone2.bind(this);
        this.submitCreateUser = this.submitCreateUser.bind(this);
        this.changeIsVendor = this.changeIsVendor.bind(this);
        this.changeProjectManager = this.changeProjectManager.bind(this);
        this.changeVendor = this.changeVendor.bind(this);
        this.changeConfirmPassword = this.changeConfirmPassword.bind(this)
    }
    changeuFirstName(event) {
        this.setState({
            uFirstName: event.target.value
        })
    }
    changeuLastName(event) {
        this.setState({
            uLastName: event.target.value
        })
    }
    changeuEmail(event) {
        this.setState({
            uEmail: event.target.value
        })
    }
    changeConfirmPassword(event) {
        this.setState({
            confirmPassword: event.target.value
        })
    }
    changeuPassword(event) {
        this.setState({
            uPassword: event.target.value
        })
    }
    changeCity(event) {
        this.setState({
            city: event.target.value
        })
    }
    changeState(event) {
        this.setState({
            state: event.target.value
        })
    }
    changeCountry(event) {
        this.setState({
            country: event.target.value
        })
    }
    chengeuPhone(event) {
        this.setState({
            uPhone: event.target.value
        })
    }
    chengeuPhone2(event) {
        this.setState({
            uPhone2: event.target.value
        })
    }
    changeStreetName1(event) {
        this.setState({
            streetName1: event.target.value
        })
    }
    changeStreetName2(event) {
        this.setState({
            streetName2: event.target.value
        })
    }
    changeAdmin(event) {
        this.setState({
            isAdmin: !this.state.isAdmin
        })
    }
    changeEmployee(event) {
        this.setState({
            isEmployee: !this.state.isEmployee
        })
    }
    changeSupervisor(event) {
        this.setState({
            isSupervisor: !this.state.isSupervisor
        })
    }
    changeProjectManager(event) {
        this.setState({
            isProjectManager: !this.state.isProjectManager
        })
    }
    changeIsActive(event) {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    changeIsVendor() {
        if (this.state.isVendor === true) {
            this.setState({
                isVendor: false,
                vendorName: null
            })
        }
        else {
            this.setState({
                isVendor: true,
                vendorName: this.state.id
            })
        }
    }

    changeVendor(event) {
        let id = event.currentTarget.textContent;
        if (this.state.isVendor === true) {
            this.setState({
                vendorName: id
            })

        }
        else {
            this.setState({
                vendorName: null
            })
        }
    }
    submitCreateUser() {
        let pass=this.state.uPassword;
        let conpassword=this.state.confirmPassword
        // console.log("passwod:  ",pass);
        // console.log("conpassword:  ",conpassword)
        if (pass ===conpassword) {
            let data = {
                uIsActive: this.state.isActive,
                isProjectManager: this.state.isProjectManager,
                isAdmin: this.state.isAdmin,
                isSupervisor: this.state.isSupervisor,
                isEmployee: this.state.isEmployee,
                isVendor: this.state.isVendor,
                vendorName: this.state.vendorName,
                uFirstName: this.state.uFirstName,
                uLastName: this.state.uLastName,
                uEmail: this.state.uEmail,
                uPassword: this.state.uPassword,
                streetName1: this.state.streetName1,
                streetName2: this.state.streetName2,
                city: this.state.city,
                state: this.state.state,
                country: this.state.country,
                uPhone: this.state.uPhone,
                uPhone2: this.state.uPhone2,
            }
            this.props.addNewUser(data);
            this.setState({ notify: true });
        }
        else {
            // popup about confirm password and password is not same
            console.log("not same")
        }
    }
    componentDidMount() {
        this.props.getVendorDropdown();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.vendorDropDown != null) {
            var vendorOption = nextProps.vendorDropDown
            this.setState({
                vendorOption: vendorOption
            })
        }
    }
    render() {
        var notificationCreated;
        if (this.state.notify) {
            var noteData = { msg: "successfully updated..!!", level: "success", position: "tc" };
            notificationCreated = <Notification noteData={noteData} />
        }
        const isEnabled = this.state.isVendor;
        return (
            <div>
                {notificationCreated}
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h2 style={{ marginLeft: '5em' }}>New User</h2>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ alignItems: "right" }}><Button primary onClick={this.submitCreateUser}>Create User</Button></div>
                    </Grid.Column>
                </Grid>
                <Divider />

                <div style={{ marginLeft: '5em' }}>
                    <Grid columns={5} padded>
                        <Grid.Column width="2">
                            <h4 style={{ textAlign: "right", marginTop: "1em" }}>User ID (Email)</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "2em" }}>Password</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "1.5em" }}>Roles</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "2.5em" }}>About</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "5.5em" }}>Contact</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "6em" }}>Address</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "4em" }}>Vendor</h4>
                        </Grid.Column>
                        <Grid.Column width='1'>
                            <Divider vertical><Icon disabled name='angle right' /></Divider>
                        </Grid.Column>
                        <Grid.Column className="ten wide column">

                            <Input style={{ width: "290px" }} focus label={{ color: 'blue', content: 'Email' }} placeholder='Email' type='email' required onChange={this.changeuEmail} /><br />
                            <Divider />
                            <Input style={{ width: "290px" }} focus label={{ color: 'blue', content: 'Password' }} placeholder='Enter Password' type='password' required onChange={this.changeuPassword} />
                            <Input style={{ marginLeft: '1em', width: "290px" }} focus label={{ color: 'blue', content: 'confirm password' }} placeholder='Enter password again' type='password' onChange={this.changeConfirmPassword} /><br />
                            <Divider />

                            <Checkbox style={{ marginLeft: '1em' }} label='Admin' checked={this.state.isAdmin} onChange={this.changeAdmin} />
                            <Checkbox style={{ marginLeft: '1em' }} label='Supervisor' checked={this.state.isSupervisor} onChange={this.changeSupervisor} />
                            <Checkbox style={{ marginLeft: '1em' }} label='Project Manager' checked={this.state.isProjectManager} onChange={this.changeProjectManager} />
                            <Checkbox style={{ marginLeft: '1em' }} label='Employee' checked={this.state.isEmployee} onChange={this.changeEmployee} />
                            <Checkbox style={{ marginLeft: '1em' }} label='Active' checked={this.state.isActive} onChange={this.changeIsActive} /><br />

                            <Divider /><br />
                            <Input style={{ width: "290px" }} focus label={{ color: 'blue', content: 'First name' }} placeholder='Enter First Name' type='text' onChange={this.changeuFirstName} />
                            <Input style={{ marginLeft: '1em', width: "290px" }} focus label={{ color: 'blue', content: 'Last Name' }} placeholder='Enter Last Name' type='text' onChange={this.changeuLastName} /><br /><br />

                            <Divider /><br />
                            <Input style={{ width: "290px" }} focus label={{ color: 'blue', content: 'Phone' }} placeholder='Enter Phone number' type='text' onChange={this.chengeuPhone} />
                            <Input style={{ marginLeft: '1em', width: "290px" }} focus label={{ color: 'blue', content: 'Phone (2)' }} placeholder='Enter Phone number (2)' type='text' onChange={this.chengeuPhone2} /><br /><br />

                            <Divider /><br />
                            <Input focus label={{ color: 'blue', content: 'Street name 1' }} placeholder='Enter Street name 1' type='text' onChange={this.changeStreetName1} />
                            <Input focus style={{ marginLeft: '1em', width: "280px" }} label={{ color: 'blue', content: 'Street name 2' }} placeholder='Enter Street name 2' type='text' onChange={this.changeStreetName2} /><br /><br />
                            <Input focus label={{ color: 'blue', content: 'city' }} placeholder='Enter city' type='text' onChange={this.changeCity} />
                            <Input focus style={{ marginLeft: '1em' }} label={{ color: 'blue', content: 'state' }} placeholder='Enter state' type='text' onChange={this.changeState} />
                            <Input focus style={{ marginLeft: '1em' }} label={{ color: 'blue', content: 'country' }} placeholder='Enter country' type='text' onChange={this.changeCountry} /><br />
                            <Divider hidden />
                            <Checkbox label='Vendor' checked={this.state.isVendor} onChange={this.changeIsVendor} />
                            <Dropdown selection search disabled={!isEnabled} onChange={this.changeVendor} options={this.state.vendorOption} placeholder='Select vendor' /><br /><br />
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        newUser: state.newUser,
        vendorDropDown: state.vendorDropDown
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addNewUser, getVendorDropdown }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);
