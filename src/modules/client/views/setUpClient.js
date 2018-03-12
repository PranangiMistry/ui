import React, { Component } from 'react';
import { Form, Input, Divider, Checkbox, Button, Grid, Icon ,Popup} from 'semantic-ui-react';
import { addnewClient } from '../../client/actions/setUpClientAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Notification from '../../../components/Notifications/Notification';
import { Redirect } from 'react-router-dom';
import ErrorNotification from '../../../components/Notifications/errorNotification'
import { changeMsg } from '../../../components/Notifications/errorNotificationAction'
class SetUpClient extends Component {

    constructor(props) {
        super(props)
        this.state =
            {
                clientName: '',
                clientCode: '',
                streetName1: '',
                streetName2: '',
                city: '',
                state: '',
                country: '',
                zipCode: '',
                reportToName: '',
                reportToEmail: '',
                reportToCell: '',
                reportToPhone: '',
                isActive: true,
                clientNameError: false,
                clientCodeError: false,
                reportToNameError: false,
                redirect:false

            }
        this.changeClientName = this.changeClientName.bind(this);
        this.changeClientCode = this.changeClientCode.bind(this);
        this.changestreetName1 = this.changestreetName1.bind(this);
        this.changestreetName2 = this.changestreetName2.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeCountry = this.changeCountry.bind(this);
        this.changeZipCode = this.changeZipCode.bind(this);
        this.changeIsActive = this.changeIsActive.bind(this);
        this.changeReportToName = this.changeReportToName.bind(this);
        this.changeReportToEmail = this.changeReportToEmail.bind(this);
        this.changeReportToCell = this.changeReportToCell.bind(this);
        this.changeReportToPhone = this.changeReportToPhone.bind(this);
        this.submitNewClient = this.submitNewClient.bind(this);
        this.fnotificationData = this.fnotificationData.bind(this)
        this.changeMsg = this.changeMsg.bind(this);
    }

    changeClientName(event) {
        this.setState({
            clientName: event.target.value
        })
        if (event.target.value.length === 0) {
            this.setState({
                clientNameError: true,
            })
        }
        else {
            this.setState({
                clientNameError: false
            })
        }
    }

    changeClientCode(event) {
        this.setState({
            clientCode: event.target.value
        })
        if (event.target.value.length === 0) {
            this.setState({
                clientCodeError: true,
            })
        }
        else {
            this.setState({
                clientCodeError: false,
            })
        }
    }

    changestreetName1(event) {
        this.setState({
            streetName1: event.target.value
        })
    }

    changestreetName2(event) {
        this.setState({
            streetName2: event.target.value
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

    changeZipCode(event) {
        this.setState({
            zipCode: event.target.value
        })
    }

    changeIsActive(event) {
        if (this.state.isActive === true) {
            this.setState({
                isActive: false
            })
        }
        else {
            this.setState({
                isActive: true
            })
        }
    }

    changeReportToName(event) {
        this.setState({
            reportToName: event.target.value
        })
        if (event.target.value.length === 0) {
            this.setState({
                reportToNameError: true,
            })
        }
        else {
            this.setState({
                reportToNameError: false,
            })
        }
    }

    changeReportToEmail(event) {
        this.setState({
            reportToEmail: event.target.value
        })
    }

    changeReportToCell(event) {
        this.setState({
            reportToCell: event.target.value
        })
    }

    changeReportToPhone(event) {
        this.setState({
            reportToPhone: event.target.value
        })
    }
    submitNewClient() {
        console.log(this.state);
        let data = {
            clientName: this.state.clientName,
            clientCode: this.state.clientCode,
            streetName1: this.state.streetName1,
            streetName2: this.state.streetName2,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            zipCode: this.state.zipCode,
            reportToName: this.state.reportToName,
            reportToEmail: this.state.reportToEmail,
            reportToCell: this.state.reportToCell,
            reportToPhone: this.state.reportToPhone,
            isActive: this.state.isActive,

        }
        this.props.addnewClient(data);
        console.log("proprs in submit----------", this.props.setUpClient)
        this.setState({
            redirect:true
        })
        this.changeMsg()
    }

    changeMsg() {
          this.props.changeMsg("client Name already exists")
        }

    fnotificationData() {
        if (this.props.setUpClient.msg === 'client Name alredy exsist') {
            if (this.props.ErrorNotification.msg != null) {
                return <ErrorNotification />
            }
        }
    }

    render() {
        const isEnabled =
            this.state.clientName.length > 0 &&
            this.state.reportToName.length > 0 && this.state.clientCode.length > 0;
        var button = null;
        if (isEnabled) {
            button = <Button primary onClick={this.submitNewClient}>Save</Button>
        }

        if (this.props.setUpClient.msg === 'value inserted')
        {
            if(this.state.redirect)
            return <div> <Redirect to='/allClients' /></div>
        }

        return (
            <div>
                {this.fnotificationData()}
                <div>
                    <Grid columns="equal" padded>
                        <Grid.Column className="twelve wide column">
                            <h2 style={{ marginLeft: '5em' }}>Set Up Client</h2>
                        </Grid.Column>
                        <Grid.Column>
                            <div style={{ alignItems: "right" }}>
                                {button}
                            </div>
                        </Grid.Column>
                    </Grid>
                    <Divider />
                </div>

                <div style={{ marginLeft: '5em' }}>
                    <Grid columns={5} padded>
                        <Grid.Column width="2">
                            <h4 style={{ textAlign: "right", marginTop: "1em" }}>Client Name and Code</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "5em" }}>Address</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "8em" }}>Ative-Deactive</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "5em" }}>Contact</h4>
                            <Divider hidden />
                        </Grid.Column>
                        <Grid.Column width='1'>
                            <Divider vertical><Icon disabled name='angle right' /></Divider>
                        </Grid.Column>
                        <Grid.Column className="ten wide column">
                            <Popup
                                trigger={<Input error={this.state.clientNameError} style={{ width: "305px" }} focus label={{ color: 'blue', content: 'Client Name' }} placeholder='Client Name' type='text' required onChange={this.changeClientName} />}
                                content={'Client Name must required'}
                                open={this.state.clientNameError}
                                position='top right'
                            />

                            <Popup
                                trigger={<Input error={this.state.clientCodeError} style={{ marginLeft: '1em', width: "305px" }} focus label={{ color: 'blue', content: 'Client code' }} placeholder='Client code' type='text' required onChange={this.changeClientCode} />}
                                content={'Client Code must required'}
                                open={this.state.clientCodeError}
                                position='top right'
                            />

                            <br /><br />
                            <Divider /> <br />
                            <Input style={{ width: "305px" }} focus label={{ color: 'blue', content: 'Street Name 1' }} placeholder='Street Name 1' type='text' onChange={this.changestreetName1} />
                            <Input style={{ marginLeft: '1em', width: "305px" }} focus label={{ color: 'blue', content: 'Street Name 2' }} placeholder='Street Name 2' type='text' onChange={this.changestreetName2} /><br /><br />
                            <Input style={{ width: "305px" }} focus label={{ color: 'blue', content: 'city' }} placeholder='city' type='text' onChange={this.changeCity} />
                            <Input style={{ marginLeft: '1em', width: "305px" }} focus label={{ color: 'blue', content: 'State' }} placeholder='state' type='text' onChange={this.changeState} /><br /><br />
                            <Input style={{ width: "305px" }} focus label={{ color: 'blue', content: 'country' }} placeholder='Country' type='text' onChange={this.changeCountry} />
                            <Input style={{ marginLeft: '1em', width: "305px" }} focus label={{ color: 'blue', content: 'Zip Code' }} placeholder='Zip code' type='text' onChange={this.changeZipCode} /><br /><br />

                            <Divider />
                            <Checkbox label='Active' checked={this.state.isActive} onChange={this.changeIsActive} /><br />

                            <Divider /><br />
                            <Popup
                                trigger={<Input error={this.state.reportToNameError} focus label={{ color: 'blue', content: 'Report To Name' }} placeholder='Report To Name' type='text' required onChange={this.changeReportToName} />}
                                content={'Report To Name must required'}
                                open={this.state.reportToNameError}
                                position='top right'
                            />
                            <Input style={{ marginLeft: '1em', width: "305px" }} focus label={{ color: 'blue', content: 'Report To Email' }} placeholder='Report To Email' type='email' onChange={this.changeReportToEmail} /><br /><br />
                            <Input style={{ width: "305px" }} focus label={{ color: 'blue', content: 'Report To cell' }} placeholder='Report To cell' type='text' onChange={this.changeReportToCell} />
                            <Input style={{ marginLeft: '1em', width: "305px" }} focus label={{ color: 'blue', content: 'Report To Phone' }} placeholder='Report To Phone' type='text' onChange={this.changeReportToPhone} /><br /><br />
                        </Grid.Column>
                    </Grid>
                </div>


            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        setUpClient: state.setUpClient,
        ErrorNotification: state.ErrorNotification
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addnewClient, changeMsg }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SetUpClient);