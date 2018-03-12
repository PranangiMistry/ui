import React, { Component } from 'react';
import Notification from '../../../components/Notifications/Notification';

class Home extends Component {
    constructor(props){
        super(props);
    }
    render() {
        var noteData={msg:"welcome user",level:"success",position:"tr"}
        return (
            <div>
                {/* <Notification noteData={noteData}/> */}
            </div>
        );
    }
}

export default Home;