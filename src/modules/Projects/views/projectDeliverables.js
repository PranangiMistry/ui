import React, { Component } from 'react';
import { Input, Checkbox, Button, Divider, Grid, Icon, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProjectDropdown } from '../../dropdown/actions/projectDropdownAction';
import { addProjectDeliverable } from '../../Projects/actions/projectDeliverablesAction';
import DayPickerInput from 'react-day-picker/DayPickerInput';

class ProjectDeliverable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deliverableName: '',
            delStartDate: '',
            delEndDate: '',
            projectId: ''
        }
        this.addProjectDeliverable = this.addProjectDeliverable.bind(this);
        this.changeProjectName = this.changeProjectName.bind(this);
        this.changeDeliverableName = this.changeDeliverableName.bind(this);
        this.changeStartDate = this.changeStartDate.bind(this);
        this.changeEndDate = this.changeEndDate.bind(this);
    }
    addProjectDeliverable() {
        this.props.addProjectDeliverable(this.state);
    }
    componentDidMount() {
        this.props.getProjectDropdown();
    }
    changeProjectName(event) {
        let pId = event.currentTarget.getAttribute('index');
        this.setState({
            projectId: pId
        })
    }
    changeStartDate(day) {
        day = day.toLocaleDateString();
        this.setState({
            delStartDate: day
        })
    }
    changeEndDate(day) {
        day = day.toLocaleDateString();
        this.setState({
            delEndDate: day
        })
    }
    changeDeliverableName(event) {
        this.setState({
            deliverableName: event.target.value
        })
    }
    render() {
        return (
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h2 style={{ marginLeft: '5em' }}>Project-Deliverables</h2>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ alignItems: "right" }}><Button primary onClick={this.addProjectDeliverable}>Add Project detail</Button></div>
                    </Grid.Column>
                </Grid>
                <Divider />
                <div style={{ marginLeft: '5em' }}>
                    <Grid columns={10} padded>
                        <Grid.Column width="4">
                            <h4 style={{ textAlign: "right", marginTop: "1em" }}>project </h4>
                            <h4 style={{ textAlign: "right", marginTop: "5em" }}>deliverable name</h4>
                            <h4 style={{ textAlign: "right", marginTop: "5em" }}>deliverable start date</h4>
                            <h4 style={{ textAlign: "right", marginTop: "5em" }}>deliverable end date</h4>
                        </Grid.Column>
                        <Grid.Column className="ten wide column">
                            <Dropdown selection search onChange={this.changeProjectName} options={this.props.projectDropdown} placeholder='Select project' /><br /><br />
                            <Divider /><br />
                            <Input style={{ width: "290px" }} value={this.state.deliverableNm} onChange={this.changeDeliverableName} focus label={{ color: 'blue', content: 'deliverable name' }} placeholder='deliverable name' type='text' /><br /><br />
                            <Divider /><br />
                            <DayPickerInput onDayChange={this.changeStartDate} /><br /><br />
                            <Divider /><br />
                            <DayPickerInput onDayChange={this.changeEndDate} /><br /><br />
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        projectDropdown: state.projectDropdown,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getProjectDropdown,addProjectDeliverable}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDeliverable);