import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatDate, parseDate } from "react-day-picker/moment";
import { Input, Checkbox, Button, Divider, Dropdown, Grid, Icon } from 'semantic-ui-react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { getSubstitutionDropdown } from '../../dropdown/actions/substitutionDropDown'
import { getSupervisorDropdown } from '../../dropdown/actions/supervisorListDropdownAction';
import { addSubstitution } from '../../supervisor-substitution/actions/supervisorSubstitutionAction'

class SupervisorSubstitutionForAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            supervisorId: '',
            userId: '',
            startDate: undefined,
            endDate: undefined,
            sendEmail: true,
            substituteOptions: [],
            supervisorOptions: [],
            substituterId: '',
            supervisorId: '',
        }

        this.changeSendEmail = this.changeSendEmail.bind(this);
        this.changeSubstitutor = this.changeSubstitutor.bind(this);
        this.changeStartDate = this.changeStartDate.bind(this);
        this.changeEndDate = this.changeEndDate.bind(this);
        this.submit = this.submit.bind(this)
        this.changeSupervisor = this.changeSupervisor.bind(this);

    }

    changeSupervisor(event) {
        this.setState({
            supervisorId: event.currentTarget.getAttribute('index')
        })

    }

    changeSubstitutor(event) {
        this.setState({
            substituterId: event.currentTarget.getAttribute('index')
        })

    }

    changeStartDate(day) {
        var date = formatDate(day, "DD-MMM-YYYY")
        this.setState({
            startDate: date
        })

    }

    changeEndDate(day) {
        var date = formatDate(day, "DD-MMM-YYYY")
        this.setState({
            endDate: date
        })

    }

    changeSendEmail() {
        if (this.state.sendEmail === true) {
            this.setState({
                sendEmail: false
            })
        }
        else {
            this.setState({
                sendEmail: true
            })
        }

    }

    submit() {

        let data = {
            supervisorId: this.state.supervisorId,
            userId: this.state.substituterId,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            sendEmail: this.state.sendEmail
        }
        this.props.addSubstitution(data);

    }

    componentDidMount() {
        this.props.getSupervisorDropdown();
        this.props.getSubstitutionDropdown();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.SubstitutionDropDown != null) {
            var substituteOptions = nextProps.SubstitutionDropDown
            this.setState({
                substituteOptions: substituteOptions
            })
        }

        if (nextProps.SupervisorListDropDown != null) {

            var supervisorOptions = nextProps.SupervisorListDropDown
            this.setState({
                supervisorOptions: supervisorOptions
            })
        }
    }

    render() {
        return (
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h2 style={{ marginLeft: '5em' }}>Substitute supervisor</h2>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ alignItems: "right" }}><Button primary onClick={this.submit}>substitute</Button></div>
                    </Grid.Column>
                </Grid>
                <Divider />

                <div style={{ marginLeft: '7em' }}>
                    <Grid columns={5} padded>
                        <Grid.Column width="2">
                            <h4 style={{ textAlign: "right", marginTop: "1em" }}>Supervisor Name</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "1em" }}>Substitutor Name</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "2em" }}>Start Date</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "1.5em" }}>End Date</h4>
                            <Divider hidden />
                        </Grid.Column>
                        <Grid.Column width='1'>
                            <Divider vertical><Icon disabled name='angle right' /></Divider>
                        </Grid.Column>
                        <Grid.Column className="ten wide column">
                            <Dropdown selection search onChange={this.changeSupervisor} options={this.state.supervisorOptions} placeholder='Select Supervisor' /><br />
                            <Divider />
                            <Dropdown selection search onChange={this.changeSubstitutor} options={this.state.substituteOptions} placeholder='Select Substitutor' /><br />
                            <Divider />
                            <DayPickerInput onDayChange={this.changeStartDate} />
                            <Divider /><br />

                            <DayPickerInput onDayChange={this.changeEndDate} />
                            <Divider /><br />

                            <Checkbox style={{ marginLeft: '1em' }} label='Send Email' onChange={this.changeSendEmail} checked={this.state.sendEmail} />

                            <Divider />

                        </Grid.Column>
                    </Grid>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

        SubstitutionDropDown: state.SubstitutionDropDown,
        SupervisorListDropDown: state.SupervisorListDropDown,
        SupervisorSubstitutionForAdmin: state.SupervisorSubstitutionForAdmin,

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getSubstitutionDropdown, getSupervisorDropdown, addSubstitution }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SupervisorSubstitutionForAdmin)