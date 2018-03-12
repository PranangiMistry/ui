import React, { Component } from 'react';
import Notification from '../../components/Notifications/Notification';
import {changeMsg} from './errorNotificationAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ErrorNotification extends Component
{
    render()
    {
        console.log("noteData in error notification",this.props.ErrorNotification)
        return(
            <div>
                <Notification noteData={this.props.ErrorNotification} callback={() => {
                    console.log("call back.........",this.props)
                    this.props.changeMsg(null)
                }}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log("----mapStateToProps--ErrorNotification",state.ErrorNotification);
    return {
        ErrorNotification: state.ErrorNotification,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeMsg }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (ErrorNotification)