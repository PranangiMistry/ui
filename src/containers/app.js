import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect, withRouter } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import MenuBar from '../components/MenuBar/MenuBar';
import Notification from '../components/Notifications/Notification';
import { connect } from 'react-redux';
import appRoutes from '../routes/routes';
import logIn from '../modules/login-logout/views/logIn';

let menu='',footer=''
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const routes = appRoutes.map((prop, key) => {
            return (
                <Route path={prop.path} component={prop.component} key={key} />
            );
        });
        if (window.location.pathname == '/' || window.location.pathname == '/logOut') {
        } else {
            if (this.props.auth != "Error" && this.props.auth != null) {

            } else {
                return (<div><Redirect to='/' /></div>)
            }
            if (menu === '' && footer === '')
                menu= <MenuBar />
                footer= <Footer />
        }
        return (
            <div>
                {menu}
                <div style={{marginTop:"50px",marginBottom:"100px"}}>
                <Switch>
                    {routes}
                </Switch>
                </div>
                {/* <div className="fixed" style={{border:"1px solid black",alignContent:"center"}}>{footer}</div> */}
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.login
    }
}

export default withRouter(connect(mapStateToProps)(App));