import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProject,getEditProjectData,changeActive,changeClient,changeDepartment,changeEndDate,changeProjectName,changeProjectType,changeStartDate,changeSubdepartment } from '../../Projects/actions/editProjectAction';
import { Input, Checkbox, Button,Divider,Grid,Icon,Confirm,Dropdown } from 'semantic-ui-react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from "react-day-picker/moment";
import { getClientDropdown } from '../../dropdown/actions/clientDropdownActions';
import { getDepartmentDropdown } from '../../dropdown/actions/departmentDropdownActions';
import { getSubdepartmentDropdown } from '../../dropdown/actions/subdepartmentDropdownAction';

let clientOptions = [];
let departmentOptions = [];
let subDepartmentOptions = [];

class EditProject extends Component {
    constructor(props) {
        super(props);
        this.state={
            stateDepartments:[],
            stateSubdepartments:[],
        }
        this.updateProject = this.updateProject.bind(this);
        this.changeActive = this.changeActive.bind(this);
        this.changeProjectType = this.changeProjectType.bind(this);
        this.changeStartDate=this.changeStartDate.bind(this);
        this.changeEndDate=this.changeEndDate.bind(this);
        this.changeClient = this.changeClient.bind(this);
        this.changeDepartment = this.changeDepartment.bind(this);
        this.changeSubdepartment = this.changeSubdepartment.bind(this);
        this.changeProjectName = this.changeProjectName.bind(this);
    }
    componentDidMount() {
        this.props.getEditProjectData(this.props.match.params.projectId);
        this.props.getClientDropdown();
        this.props.getDepartmentDropdown();
        this.props.getSubdepartmentDropdown();
    }
    updateProject() {
       this.props.updateProject();
    }
    changeProjectName(event) {
        this.props.changeProjectName(event.target.value);
    }
    changeActive(event) {
        this.props.changeActive(event.target.value);
    }
    changeProjectType(event){
       var projType = event.currentTarget.getAttribute('index');
        this.props.changeProjectType(projType);
    }
    changeEndDate(day){
        let date = formatDate(day, "DD-MMM-YYYY");
        this.props.changeEndDate(date);
    }
    changeStartDate(day){
        let date = formatDate(day, "DD-MMM-YYYY");
        this.props.changeStartDate(date);
    }
    changeClient(event){

       var cId = event.currentTarget.getAttribute('index');

       var clientDepartmentsOptions = departmentOptions.filter(function (el) {
        return el.id == cId
       });
       this.setState({ stateDepartments: clientDepartmentsOptions})

       var cName=event.currentTarget.textContent;
       var data={
           clientId:cId,
           clientName:cName
       }
       this.props.changeClient(data);
       this.props.changeDepartment("");
       this.props.changeSubdepartment("");
       
    }
    changeDepartment(event){
       var dId = event.currentTarget.getAttribute('index');

       var sub = subDepartmentOptions.filter(function (el) {
           return el.id == dId
       });
       this.setState({ stateSubdepartments: sub})


       var dName=event.currentTarget.textContent;
       var data={
            departmentId:dId,
            departmentName:dName
        }
        this.props.changeDepartment(data);
    }
    changeSubdepartment(event){
        var subId = event.currentTarget.getAttribute('index');
        var subdeptName=event.currentTarget.textContent;
        var data={
            subdepartmentId:subId,
            subdepartmentName:subdeptName
        }
        this.props.changeSubdepartment(data);
    }
    render() {
        if (this.props.clientDropdown != null){
            clientOptions = this.props.clientDropdown
        }
        if (this.props.departmentDropdown != null) {
            departmentOptions = this.props.departmentDropdown
        }
        if (this.props.subDepartmentDropdown != null) {
            subDepartmentOptions = this.props.subDepartmentDropdown
        }
        var projectTypeOptions = [{ index: 'Fixed price project', value: 'Fixed price project', text: 'Fixed price project' }, { index: 'non-FPP', value: 'non-FPP', text: 'non-FPP' }];
        return (
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h2 style={{ marginLeft: '5em' }}>Edit Project</h2>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ alignItems: "right" }}><Button primary onClick={this.updateProject}>Update</Button></div>
                    </Grid.Column>
                </Grid>
                <Divider />
                <div style={{ marginLeft: '5em' }}>
                    <Grid columns={5} padded>
                        <Grid.Column width="2">
                            <h4 style={{ textAlign: "right", marginTop: "1em" }}>project name</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "2.5em" }}>client</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "3em" }}>department</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "5em" }}>subdepartment</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "7em" }}>project type</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "7em" }}>active</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "7em" }}>project start date</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "7em" }}>project end date</h4>
                        </Grid.Column>
                        <Grid.Column width='1'>
                            <Divider vertical><Icon disabled name='angle right' /></Divider>
                        </Grid.Column>
                        <Grid.Column className="ten wide column">
                            <Input style={{ width: "290px" }} focus label={{ color: 'blue', content: 'Project name' }} value={this.props.editProject[0].projectName} placeholder='project name' type='text' onChange={this.changeProjectName} /><br /><br />
                            <Divider /><br />

                            <Dropdown selection search text={this.props.editProject[0].clientName}  onChange={this.changeClient} options={clientOptions} placeholder='Select client' /><br /><br />
                            <Divider /><br />

                            <Dropdown selection search text={this.props.editProject[0].departmentName}  onChange={this.changeDepartment} options={this.state.stateDepartments} placeholder='Select department' /><br /><br />
                            <Divider /><br />

                            <Dropdown selection search text={this.props.editProject[0].subdepartmentName}  onChange={this.changeSubdepartment} options={this.state.stateSubdepartments} placeholder='Select subdepartment' /><br /><br />
                            <Divider /><br />

                            <Dropdown selection search text={this.props.editProject[0].projectType}  onChange={this.changeProjectType} options={projectTypeOptions} placeholder='Select project type' /><br /><br />
                            <Divider /><br />

                            <Checkbox style={{ marginLeft: '1em' }} label='active' checked={this.props.editProject[0].isActive}   onChange={this.changeActive} />
                            <Divider /><br />

                            <DayPickerInput placeholder={formatDate(this.props.editProject[0].projectStartDate, "DD-MMM-YYYY")} onDayChange={this.changeStartDate} />
                            <Divider /><br />
                            
                            <DayPickerInput placeholder={formatDate(this.props.editProject[0].projectEndDate, "DD-MMM-YYYY")} onDayChange={this.changeEndDate} />
                            <Divider /><br />

                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        editProject: state.editProject,
        clientDropdown: state.clientDropdown,
        departmentDropdown: state.departmentDropdown,
        subDepartmentDropdown: state.subDepartmentDropdown,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({getClientDropdown,getSubdepartmentDropdown,
        getDepartmentDropdown,getEditProjectData ,changeActive,changeClient,
        changeDepartment,changeEndDate,changeProjectName,changeProjectType,
        changeStartDate,changeSubdepartment,updateProject}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);