import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LogOut extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
            <Redirect to='/' />
        </div>
        )
    }
}

export default LogOut;
