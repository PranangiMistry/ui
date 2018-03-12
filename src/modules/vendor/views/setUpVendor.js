import React, { Component } from 'react'
import { Input, Icon, Label, Menu, Popup, Table, Checkbox, Button, Confirm, Grid, Divider, Column } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import {addnewVendor} from '../../vendor/actions/setUpVendor'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Notification from '../../../components/Notifications/Notification';
import { Redirect } from 'react-router-dom';
//import { , Input, Divider, Checkbox, Button ,Grid,Icon} from 'semantic-ui-react';
import { changeMsg } from '../../../components/Notifications/errorNotificationAction'
import ErrorNotification from '../../../components/Notifications/errorNotification'

class SetUpVendor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vendorCompanyName: '',
            vendorStreetName1: '',
            vendorStreetName2: '',
            vendorCity: '',
            vendorState: '',
            vendorCountry: '',
            vendorEmail: '',
            vendorCell: '',
            vendorPhone: '',
            vendorNameError: false,
        }
        this.changeVendorCompanyName = this.changeVendorCompanyName.bind(this);
        this.changeVendorStreetName1 = this.changeVendorStreetName1.bind(this);
        this.changeVendorStreetName2 = this.changeVendorStreetName2.bind(this);
        this.changeVendorCity = this.changeVendorCity.bind(this);
        this.changeVendorState = this.changeVendorState.bind(this);
        this.changeVendorCountry = this.changeVendorCountry.bind(this);
        this.changeVendorEmail = this.changeVendorEmail.bind(this);
        this.changeVendorCell = this.changeVendorCell.bind(this);
        this.changeVendorPhone = this.changeVendorPhone.bind(this);
        this.submitNewVendor = this.submitNewVendor.bind(this);
        this.fnotificationData = this.fnotificationData.bind(this)
        this.changeMsg = this.changeMsg.bind(this);
    }

    changeVendorCompanyName(event) {
        this.setState({
            vendorCompanyName: event.target.value
        })
        if (event.target.value.length === 0) {
            this.setState({
                vendorNameError: true,
            })
        }
        else {
            this.setState({
                vendorNameError: false,
            })
        }
    }

    changeVendorStreetName1(event) {
        this.setState({
            vendorStreetName1: event.target.value
        })
    }

    changeVendorStreetName2(event) {
        this.setState({
            vendorStreetName2: event.target.value
        })
    }

    changeVendorCity(event) {
        this.setState({
            vendorCity: event.target.value
        })
    }

    changeVendorState(event) {
        this.setState({
            vendorState: event.target.value
        })
    }

    changeVendorCountry(event) {
        this.setState({
            vendorCountry: event.target.value
        })
    }

    changeVendorEmail(event) {
        this.setState({
            vendorEmail: event.target.value
        })
    }

    changeVendorCell(event) {
        this.setState({
            vendorCell: event.target.value
        })
    }

    changeVendorPhone(event) {
        this.setState({
            vendorPhone: event.target.value
        })
    }

    submitNewVendor() {
        let data = {
            vendorCompanyName: this.state.vendorCompanyName,
            vendorStreetName1: this.state.vendorStreetName1,
            vendorStreetName2: this.state.vendorStreetName2,
            vendorCity: this.state.vendorCity,
            vendorState: this.state.vendorState,
            vendorCountry: this.state.vendorCountry,
            vendorEmail: this.state.vendorEmail,
            vendorCell: this.state.vendorCell,
            vendorPhone: this.state.vendorPhone,
        }
        this.props.addnewVendor(data);
    }
    changeMsg() {
        this.props.changeMsg("vendor name alredy exsists")
    }

    fnotificationData() {
        if (this.props.setUpVendor.msg === 'vendor Name alredy exsist') {
            if (this.props.ErrorNotification.msg != null) {
                return <ErrorNotification />
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.setUpVendor);
        console.log("componentWillReceiveProps")
    }

    render() {
        const isEnabled =
            this.state.vendorCompanyName.length > 0;

        var button = null;
        if (isEnabled) {
            button = <Button primary onClick={this.submitNewVendor}>Save</Button>
        }

        if (this.props.setUpVendor.msg === 'value inserted') {

            return <div> <Redirect to='/vendor' /></div>
        }

        return (
            <div>
                {this.fnotificationData()}
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h2 style={{ marginLeft: '5em' }}>Set Up Vendor</h2>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ alignItems: "right" }}>
                            {button}
                        </div>
                    </Grid.Column>
                </Grid>
                <Divider />

                <div style={{ marginLeft: '5em' }}>
                    <Grid columns={5} padded>
                        <Grid.Column width="2">
                            <h4 style={{ textAlign: "right", marginTop: "1em" }}>Vendor Name</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "5em" }}>Address</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "5em" }}>Contact</h4>
                            <Divider hidden />
                        </Grid.Column>
                        <Grid.Column width='1'>
                            <Divider vertical><Icon disabled name='angle right' /></Divider>
                        </Grid.Column>
                        <Grid.Column className="ten wide column">
                            <Popup
                                trigger={<Input error={this.state.vendorNameError} focus label={{ color: 'blue', content: 'Vendor Company Name' }} placeholder='Vendor Company Name' type='text' onChange={this.changeVendorCompanyName} />}
                                content={'Vendor Name must required'}
                                open={this.state.vendorNameError}
                                position='top right'
                            />
                            <br />
                            <Divider />
                            <br />
                            <Input focus label={{ color: 'blue', content: 'Street Name1' }} placeholder='Street Name1' type='text' onChange={this.changeVendorStreetName1} />
                            <Input style={{ marginLeft: '4em' }} focus label={{ color: 'blue', content: 'Street Name2' }} placeholder='Street Name2' type='text' onChange={this.changeVendorStreetName2} />
                            <br />
                            <br />
                            <Input focus label={{ color: 'blue', content: 'city' }} placeholder='city ' type='text' onChange={this.changeVendorCity} />
                            <Input style={{ marginLeft: '8em' }} focus label={{ color: 'blue', content: 'State' }} placeholder='State ' type='text' onChange={this.changeVendorState} />
                            <br />
                            <br />
                            <Input focus label={{ color: 'blue', content: 'country' }} placeholder='country ' type='text' onChange={this.changeVendorCountry} />
                            <br />
                            <br />
                            <Divider />
                            <br />
                            <Input focus label={{ color: 'blue', content: 'vendor Email' }} placeholder='vendor Email' type='email' onChange={this.changeVendorEmail} />
                            <Input style={{ marginLeft: '4em' }} focus label={{ color: 'blue', content: 'vendor Phone' }} placeholder='vendor Phone' type='text' onChange={this.changeVendorPhone} />
                            <br />
                            <br />
                            <Input focus label={{ color: 'blue', content: 'vendor Cell' }} placeholder='vendor cell' type='text' onChange={this.changeVendorCell} /><br /><br />
                        </Grid.Column>
                    </Grid>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        setUpVendor: state.setUpVendor,
        ErrorNotification: state.ErrorNotification

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addnewVendor, changeMsg }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(SetUpVendor);