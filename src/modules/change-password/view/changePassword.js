import React,{Component} from 'react'
import { Input, Button,Divider,Grid,Icon,Popup} from 'semantic-ui-react';
import { connect } from 'react-redux';
import {changePassword} from '../action/changePasswordAction'
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

class ChangePassword extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            currentPassword:'',
            newPassword:'',
            confirmPassword:'',
            redirect:false,
            isMatch:false
        }
        this.changeCurrentPassword=this.changeCurrentPassword.bind(this);
        this.changeNewPassword=this.changeNewPassword.bind(this);
        this.changeConfirmPassword=this.changeConfirmPassword.bind(this);
        this.savePassword=this.savePassword.bind(this)
    }
    changeCurrentPassword(event)
    {
        this.setState({
            currentPassword:event.target.value
        })
    }
    changeNewPassword(event)
    {
        this.setState({
            newPassword:event.target.value
        })
    }
    changeConfirmPassword(event)
    {
        console.log("---",event.target.value);
        this.setState({
            confirmPassword:event.target.value
        })
        if(this.state.newPassword==event.target.value)
        {
            this.setState({
                isMatch:false
            })
        }
        else{
            this.setState({
                isMatch:true
            })
        }
        
    }
    savePassword()
    {
            this.setState({
                redirect:true
            })
            let data={
                userId:this.props.auth.userId,
                uPassword:this.state.newPassword
            }
        this.props.changePassword(data);
       
    }
    render()
    {
        var enable=true
        // console.log("======",enable)
        if(this.state.currentPassword==this.props.auth.password)
        {
            // console.log("ifff")
            enable=false
        }
    // condition of conpass and new pass is same
        if(this.props.auth.password===this.state.newPassword)
        {
            if(this.state.redirect)
            {
                return <div> <Redirect to='/allClients' /></div>
            }
        }
        return(
            <div>
                <Grid columns="equal" padded>
                     <Grid.Column className="twelve wide column">
                         <h2 style={{ marginLeft: '5em' }}>Change Password</h2>
                    </Grid.Column>
                    <Grid.Column>
                    <div style={{alignItems:"right"}}><Button primary onClick={this.savePassword}>Update</Button></div>
                    </Grid.Column>
                </Grid>

                <Divider />
                <div style={{ marginLeft: '5em' }}>
                <Grid columns={5} padded>
                <Grid.Column width="2">
                <h4 style={{textAlign:"right",marginTop:"2em"}}>Current Password</h4>
                <Divider hidden />
                <h4 style={{textAlign:"right",marginTop:"4em"}}>New Password</h4>
                </Grid.Column>
                <Grid.Column width='1'>
                     <Divider vertical><Icon disabled name='angle right' /></Divider>
                </Grid.Column>
                <Grid.Column className="ten wide column">
                <br/>
                <Input style={{ width: "290px" }} focus label={{ color: 'blue', content: 'Enter Current Password' }} placeholder='Enter Current Password' type='password' required onChange={this.changeCurrentPassword} />
                <br/>
                <br/>
                <Divider />
                <br/>
                <Input style={{ width: "290px" }} focus label={{ color: 'blue', content: 'Enter new Password' }} disabled={enable} placeholder='Enter new Password' type='password' required onChange={this.changeNewPassword} />
                <br/>
                <br/>
                <Popup
                    trigger={<Input  error={this.state.isMatch} style={{ width: "290px" }} focus label={{ color: 'blue', content: 'Enter Password again' }} disabled={enable} placeholder='Enter Password again' type='password' required onChange={this.changeConfirmPassword} />       }
                    content={'new password and confirm password must be equal'}
                    open={this.state.isMatch}
                    position='top right'
                            />
                </Grid.Column>
                </Grid>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    // console.log("++++++++",state)
    return {
        auth: state.login,
        ChangePassword:state.ChangePassword
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changePassword }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ChangePassword);