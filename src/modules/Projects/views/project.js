import React, { Component } from 'react';
import { Input, Checkbox, Button, Divider, Grid, Icon, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getClientDropdown } from '../../dropdown/actions/clientDropdownActions';
import { addNewProject } from '../../Projects/actions/addProjectAction';
import { getDepartmentDropdown } from '../../dropdown/actions/departmentDropdownActions';
import { getSubdepartmentDropdown } from '../../dropdown/actions/subdepartmentDropdownAction';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from "react-day-picker/moment";

let clientOptions = [];
let departmentOptions = [];
let clientDepartmentsOptions = [];
let subDepartmentsOptions = [];
let deprtSubDepartmentsOptions = [];

let cid = '', did = '',subDeptId='';
class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectStartDate: '',
            projectEndDate: '',
            projectName: '',
            projectType: '',
            clientDepartments:[],
            subDepartments:[],
            isActive:true,
            supervisorName:'',
        }
        this.changeClient = this.changeClient.bind(this);
        this.changeDepartment = this.changeDepartment.bind(this);
        this.changeSubDepartment = this.changeSubDepartment.bind(this);
        this.addProject = this.addProject.bind(this);
        this.changeProjectName = this.changeProjectName.bind(this);
        this.changeProjectType = this.changeProjectType.bind(this);
        this.changeIsActive = this.changeIsActive.bind(this);
        this.changeStartDate=this.changeStartDate.bind(this);
        this.changeEndDate=this.changeEndDate.bind(this);
    }
    componentDidMount() {
        this.props.getClientDropdown();
        this.props.getDepartmentDropdown();
        this.props.getSubdepartmentDropdown();
    }
    changeSubDepartment(event)
    {
        subDeptId = event.currentTarget.getAttribute('index');
    }
    changeStartDate(day)
    {
        let date = formatDate(day, "DD-MMM-YYYY")
        this.setState({
            projectStartDate:date
        })
    }
    changeEndDate(day)
    {
        let date = formatDate(day, "DD-MMM-YYYY")
        this.setState({
            projectEndDate:date
        })
    }
    changeProjectName(event) {
        this.setState({
            projectName: event.target.value
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
    addProject() {
        let data={projectName:this.state.projectName,
        clientId:cid,
        departmentId:did,
        projectType:this.state.projectType,
        projectStartDate:this.state.projectStartDate,
        projectEndDate:this.state.projectEndDate,
        subdepartmentId:subDeptId
    }
        if(this.state.isActive===true)
           data.isActive=1;
        if(this.state.isActive===false)
           data.isActive=0;
       this.props.addNewProject(data);
    }
    changeClient(e) {
        cid = e.currentTarget.getAttribute('index');
        clientDepartmentsOptions = departmentOptions.filter(function (el) {
            return el.id == cid
        });
        this.setState({ clientDepartments: clientDepartmentsOptions})
    }
    changeProjectType(e) {
        let type = e.currentTarget.getAttribute('index');
        this.setState({
            projectType: type
        })
    }
    changeDepartment(e) {
        did = e.currentTarget.getAttribute('index');
        deprtSubDepartmentsOptions = subDepartmentsOptions.filter(function (el) {
            return el.id == did
        });
        this.setState({ subDepartments: deprtSubDepartmentsOptions})
    }
    render() {
        if (this.props.clientDropdown != null)
            clientOptions = this.props.clientDropdown
        if (this.props.departmentDropdown != null) {
            departmentOptions = this.props.departmentDropdown
        }
        if (this.props.subDepartmentDropdown != null) {
            subDepartmentsOptions = this.props.subDepartmentDropdown
        }
        var projectTypeOptions = [{ index: 'FPP', value: 'FPP', text: 'Fixed price project' }, { index: 'non-FPP', value: 'non-FPP', text: 'non FPP' }];
        return (
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h2 style={{ marginLeft: '5em' }}>Project</h2>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ alignItems: "right" }}><Button primary onClick={this.addProject}>Add Project</Button></div>
                    </Grid.Column>
                </Grid>
                <Divider />
                <div style={{ marginLeft: '5em' }}>
                    <Grid columns={10} padded>
                        <Grid.Column width="4">
                            <h4 style={{ textAlign: "right", marginTop: "1em" }}>project name</h4>
                            <h4 style={{ textAlign: "right", marginTop: "3em" }}>client</h4>
                            <h4 style={{ textAlign: "right", marginTop: "3em" }}>Department</h4>
                            <h4 style={{ textAlign: "right", marginTop: "3em" }}>sub department</h4>
                            <h4 style={{ textAlign: "right", marginTop: "3em" }}>project type</h4>
                            <h4 style={{ textAlign: "right", marginTop: "3em" }}>Active</h4>
                            <h4 style={{ textAlign: "right", marginTop: "3em" }}>select project start and end date</h4>
                        </Grid.Column>
                        <Grid.Column className="ten wide column">
                            <Input focus label={{ color: 'blue', content: 'project name' }} placeholder='project name' type='text' required onChange={this.changeProjectName} /><br />
                            <Divider />
                            <Dropdown selection search onChange={this.changeClient} options={clientOptions} placeholder='Select Client' /><br />
                            <Divider />
                            <Dropdown selection search onChange={this.changeDepartment} options={this.state.clientDepartments} placeholder='Select Department' /><br />
                            <Divider />
                            <Dropdown selection search onChange={this.changeSubDepartment} options={this.state.subDepartments} placeholder='Select Department' /><br />
                            <Divider />
                            <Dropdown selection search onChange={this.changeProjectType} options={projectTypeOptions} placeholder='Select project type' /><br />
                            <Divider />
                            <Checkbox label='Active'  checked={this.state.isActive} onChange={this.changeIsActive} /><br />
                            <Divider />
                            <DayPickerInput onDayChange={this.changeStartDate} />
                            <DayPickerInput onDayChange={this.changeEndDate} />
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        clientDropdown: state.clientDropdown,
        departmentDropdown: state.departmentDropdown,
        subDepartmentDropdown: state.subDepartmentDropdown,
  
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getClientDropdown,getSubdepartmentDropdown,getDepartmentDropdown,addNewProject }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);