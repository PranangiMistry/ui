import React, { Component } from "react";
import {
    getEditClientData, updateEditClient, changeClientName, changeClientCode,
    changeStreetName1, changeStreetName2, changeCity, changeState, changeCountry, changeZipCode,
    changeReportToName, changeReportToEmail, changeReportToCell, changeReportToPhone
} from '../../client/actions/editClientAction';
import { Input, Checkbox, Button, Divider, Grid, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { getAllClientData } from "../../client/actions/allClientAction";

class EditClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectto: false
        }
        this.updateClient = this.updateClient.bind(this);
        this.changeClientName = this.changeClientName.bind(this);
        this.changeClientCode = this.changeClientCode.bind(this);
        this.changeStreetName1 = this.changeStreetName1.bind(this);
        this.changeStreetName2 = this.changeStreetName2.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeCountry = this.changeCountry.bind(this);
        this.changeZipCode = this.changeZipCode.bind(this);
        this.changeReportToName = this.changeReportToName.bind(this);
        this.changeReportToEmail = this.changeReportToEmail.bind(this);
        this.changeReportToCell = this.changeReportToCell.bind(this);
        this.changeReportToPhone = this.changeReportToPhone.bind(this);
    }

    componentDidMount() {
        this.props.getEditClientData(this.props.match.params.clientId);
    }

    updateClient() {

        this.props.updateEditClient(this.props.match.params.clientId);
        this.setState({
            redirectto: true
        })
    }

    changeClientName(event) {
        this.props.changeClientName(event.target.value);
    }

    changeClientCode(event) {
        this.props.changeClientCode(event.target.value);
    }

    changeStreetName1(event) {
        this.props.changeStreetName1(event.target.value);
    }

    changeStreetName2(event) {
        this.props.changeStreetName2(event.target.value);
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
    changeZipCode(event) {
        this.props.changeZipCode(event.target.value);
    }
    changeReportToName(event) {
        this.props.changeReportToName(event.target.value);
    }
    changeReportToEmail(event) {
        this.props.changeReportToEmail(event.target.value);
    }
    changeReportToCell(event) {
        this.props.changeReportToCell(event.target.value);
    }
    changeReportToPhone(event) {
        this.props.changeReportToPhone(event.target.value);
    }

    render() {
        if (this.state.redirectto === true) {
            return (
                <Redirect to={{ pathname: "/allClients", query: { activePage: this.props.location.query.activepage } }} />
            )
        }
        const isEnabled =
            this.props.editClient[0].clientName.length > 0 &&
            this.props.editClient[1].reportToName.length > 0;
        return (
            <div>

                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h2 style={{ marginLeft: '5em' }}>Edit Client</h2>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ alignItems: "right" }}><Button primary onClick={this.updateClient} disabled={!isEnabled}>Update</Button></div>
                    </Grid.Column>
                </Grid>
                <Divider />

                <div style={{ marginLeft: '5em' }}>
                    <Grid columns={5} padded>
                        <Grid.Column width="2">
                            <h4 style={{ textAlign: "right", marginTop: "3em" }}>About</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "5em" }}>Address</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "7em" }}>Contact</h4>
                        </Grid.Column>
                        <Grid.Column width='1'>
                            <Divider vertical><Icon disabled name='angle right' /></Divider>
                        </Grid.Column>
                        <Grid.Column className="ten wide column">

                            <Input style={{ width: "290px" }} focus label={{ color: 'blue', content: 'client Name' }} value={this.props.editClient[0].clientName} placeholder='client Name' type='text' required onChange={this.changeClientName} />

                            {/* <Checkbox style={{ marginLeft: '1em' }} label='Active' checked={this.props.editUser[1].Supervisor} /> */}
                            <Input style={{ width: "290px" }} focus label={{ color: 'blue', content: 'client Code' }} value={this.props.editClient[0].clientCode} placeholder='client Code' type='text' onChange={this.changeClientCode} />
                            <Divider />

                            <Input style={{ marginLeft: '1em', width: "290px" }} focus label={{ color: 'blue', content: 'street Name 1' }} value={this.props.editClient[0].streetName1} placeholder='Street Name 1' type='text' onChange={this.changeStreetName1} />

                            <Input style={{ width: "290px" }} focus label={{ color: 'blue', content: 'street Name 2' }} value={this.props.editClient[0].streetName2} placeholder='street Name 2' type='text' onChange={this.changeStreetName2} />

                            <br /><br />
                            <Input style={{ marginLeft: '1em', width: "290px" }} focus label={{ color: 'blue', content: ' city' }} value={this.props.editClient[0].city} placeholder='city' type='text' onChange={this.changeCity} /><br /><br />

                            <Input focus label={{ color: 'blue', content: 'state' }} value={this.props.editClient[0].state} placeholder='State' type='text' onChange={this.changeState} />
                            <Input style={{ marginLeft: '1em', width: "280px" }} focus label={{ color: 'blue', content: 'country' }} value={this.props.editClient[0].country} placeholder='country' type='text' onChange={this.changeCountry} /><br /><br /><br />
                            <Input focus label={{ color: 'blue', content: 'Zip Code' }} value={this.props.editClient[0].zipCode} placeholder='Zip Code' type='text' onChange={this.changeZipCode} />
                            <Divider /><br />
                            <Input focus label={{ color: 'blue', content: 'Report TO Name' }} value={this.props.editClient[1].reportToName} placeholder='Report TO Name' type='text' onChange={this.changeReportToName} />
                            <Input focus label={{ color: 'blue', content: 'Report TO Email' }} value={this.props.editClient[1].reportToEmail} placeholder='Report TO Email' type='text' onChange={this.changeReportToEmail} />
                            <Input focus label={{ color: 'blue', content: 'Report TO Cell' }} value={this.props.editClient[1].reportToCell} placeholder='Report TO Cell' type='text' onChange={this.changeReportToCell} />
                            <Input focus label={{ color: 'blue', content: 'Report TO Phone' }} value={this.props.editClient[1].reportToPhone} placeholder='Report TO Phone' type='text' onChange={this.changeReportToPhone} />
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        editClient: state.editClient,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getEditClientData, updateEditClient, changeClientName, changeClientCode,
        changeStreetName1, changeStreetName2, changeCity, changeState, changeCountry, changeZipCode,
        changeReportToName, changeReportToEmail, changeReportToCell, changeReportToPhone
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditClient);