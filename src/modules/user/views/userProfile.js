import React, { Component } from 'react';
import { Input, Checkbox, Button,Divider,Grid,Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProfileData,changeuEmail,updateProfile,changeCity,changeCountry,
    changeState,changeStreetName1,changeStreetName2,changeuFirstName,changeuLastName,changeuPhone,changeuPhone2
} from '../../user/actions/userProfileActions';

class UserProfile extends Component {

    constructor(props) {
        super(props);
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
    }

    componentDidMount() {
        this.props.getProfileData();
    }
    updateProfile() {
        this.props.updateProfile();
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

    render() {
        return (
            <div>
                <Grid columns="equal" padded>
                     <Grid.Column className="twelve wide column">
                         <h2 style={{ marginLeft: '5em' }}>Profile</h2>
                    </Grid.Column>
                    <Grid.Column>
                    <div style={{alignItems:"right"}}><Button primary onClick={this.updateProfile}>Update</Button></div>
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

                <Input style={{ width:"290px" }} focus label={{color:'blue',content:'Email'}} value={this.props.userProfile[0].uEmail} placeholder='Email' type='email' required onChange={this.changeuEmail} /><br /><br />
                <Divider />
                <Checkbox style={{ marginLeft: '1em' }} label='Admin' checked={this.props.userProfile[0].isAdmin}  disabled/>
                <Checkbox style={{ marginLeft: '1em' }} label='Employee' checked={this.props.userProfile[0].isEmployee} disabled/>
                <Checkbox style={{ marginLeft: '1em' }} label='Supervisor' checked={this.props.userProfile[0].isSupervisor} disabled/> 
                <Checkbox style={{ marginLeft: '1em' }} label='Project manager' checked={this.props.userProfile[0].isProjectManager} disabled/> 
                <Divider /><br />
                <Input style={{ width:"290px" }} focus label={{color:'blue',content:'First name'}} value={this.props.userProfile[0].uFirstName} placeholder='First Name' type='text' onChange={this.changeuFirstName} />
                <Input style={{ marginLeft: '1em',width:"290px" }} focus label={{color:'blue',content:'Last Name'}} value={this.props.userProfile[0].uLastName} placeholder='Last Name' type='text' onChange={this.changeuLastName} /><br /><br />
                <Divider /><br />
                <Input style={{ width:"290px" }} focus label={{color:'blue',content:'Phone'}} value={this.props.userProfile[0].uPhone} placeholder='Phone number' type='text' onChange={this.changeuPhone} />
                <Input style={{ marginLeft: '1em',width:"290px" }} focus label={{color:'blue',content:'Phone (2)'}} value={this.props.userProfile[0].uPhone2} placeholder='Phone number (2)' type='text' onChange={this.changeuPhone2} /><br /><br />
                <Divider /><br />
                <Input focus label={{color:'blue',content:'Street name 1'}} value={this.props.userProfile[0].streetName1} placeholder='Street name 1' type='text' onChange={this.changeStreetName1} />
                <Input style={{ marginLeft: '1em',width:"280px" }} focus label={{color:'blue',content:'Street name 2'}} value={this.props.userProfile[0].streetName2} placeholder='Street name 2' type='text' onChange={this.changeStreetName2} /><br /><br /><br />
                <Input focus label={{color:'blue',content:'city'}} value={this.props.userProfile[0].city} placeholder='city' type='text' onChange={this.changeCity} />
                <Input style={{ marginLeft: '1em' }} focus label={{color:'blue',content:'state'}} value={this.props.userProfile[0].state} placeholder='state' type='text' onChange={this.changeState} />
                <Input style={{ marginLeft: '1em' }} focus label={{color:'blue',content:'country'}} value={this.props.userProfile[0].country} placeholder='country' type='text' onChange={this.changeCountry} /><br /><br />
                
                </Grid.Column>
                </Grid>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userProfile: state.userProfile,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getProfileData,changeuEmail,updateProfile,changeStreetName1,changeStreetName2,
        changeuFirstName,changeuLastName,changeCity,changeState,changeCountry,changeuPhone,changeuPhone2}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
