import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NotificationSystem from 'react-notification-system';
import { changeMsg } from './errorNotificationAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class Notification extends Component{

    constructor(props){
        super(props);
        this.state={
            _notificationSystem:null
        }
        this._addNotification=this._addNotification.bind(this);
    }

  _addNotification() {
    console.log("add ....",this.props.callback)
    this._notificationSystem.addNotification(
      {
        title: this.props.ErrorNotification.msg,
        message: "",
        autoDismiss: this.props.ErrorNotification.autoDismiss,
        level: this.props.ErrorNotification.level,
        position: this.props.ErrorNotification.position,
        // onRemove:this.props.noteData.onRemove,
        action: {
          label: this.props.ErrorNotification.action.label,
          callback: this.props.callback
        }
      }
    );
  }

  
  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
    this._addNotification();
  }

  render() {
    return (
      <div>
        <NotificationSystem ref="notificationSystem" />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    ErrorNotification: state.ErrorNotification,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeMsg }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
