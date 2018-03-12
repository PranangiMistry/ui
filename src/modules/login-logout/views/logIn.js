import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Divider, Checkbox, Input, Grid, Icon } from 'semantic-ui-react';
import { Switch, Route, BrowserRouter, withRouter, Link, NavLink, Redirect } from 'react-router-dom';
import { doLogin } from '../../login-logout/actions/logInActions';


class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state={
            userid:'',
            password:''
        }
        this.changeUid = this.changeUid.bind(this);
        this.changePass = this.changePass.bind(this);
        this.passAuth = this.passAuth.bind(this);
    }
    changeUid(e) {
        this.setState({userid : e.target.value})
    }
    changePass(e) {
        this.setState({password : e.target.value})
    }
    passAuth() {
        return { "uEmail": this.state.userid, "uPassword": this.state.password };

    }
    render() {
        if (this.props.auth !== null) {
            if (this.props.auth.userId === undefined)
                return <div><Redirect to='/' /></div>;
            if (this.props.auth.userId !== null)
                return <div><Redirect to='/home' /></div>;
        }
        return (
            <div><Grid columns={3} padded>
                <Grid.Column>
                    <h1 style={{ textAlign: "center", marginTop: "5em", fontSize: "50px" }}>Login</h1>
                </Grid.Column>
                <Grid.Column width='1' style={{ height: "615px" }}>
                    <Divider vertical><Icon disabled name='angle right' /></Divider>
                </Grid.Column>
                <Grid.Column>
                        <div style={{ textAlign: "center", marginTop: "15em", marginLeft: "15em" }}> 
                         <Input style={{ width: "265px" }} onChange={this.changeUid} label={{ color: 'blue', content: 'Login Id' }} placeholder='User Id' type='email' width={4} />
                                <Divider hidden />
                                <Input onChange={this.changePass} label={{ color: 'blue', content: 'Password' }} placeholder='Password' type='password' width={4} />
                                <Divider hidden />
                                <Button primary onClick={() => { this.props.doLogin(this.passAuth()) }}>Login</Button> 
                    </div>
                </Grid.Column>
            </Grid></div>

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogIn));
