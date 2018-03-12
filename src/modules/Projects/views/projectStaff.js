import React, { Component } from 'react';
import { Input, Checkbox, Button, Divider, Grid, Icon, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProjectDropdown } from '../../dropdown/actions/projectDropdownAction';
import { getEmployeeDropdown } from '../../dropdown/actions/employeeDropdownAction';
import { addProjectStaff } from '../../Projects/actions/projectStaffAction';
import { getDeliverableDropdown } from '../../dropdown/actions/deliverableDropdown';
import { getSupervisorDropdown, selectSupervisorL3, selectSupervisorL1, selectSupervisorL2 } from '../../dropdown/actions/supervisorDropdownAction';
import MultiSelectReact from 'multi-select-react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from "react-day-picker/moment";
import { weekdays } from 'moment';

let projectId, deliverableId, employeeId,tsType='',dayNumber='',weekStartDay='',weekOff1='',weekOff2='';
let delOptions = [];
let newDeliverablesOptions = [];
let supervisorOptionsL1 = [];
let supervisorOptionsL2 = [];
let supervisorOptionsL3 = [];
var weekDays=[{ index: 'SUNDAY', value: '1', text: 'SUNDAY' ,id:'1'},
{ index: 'MONDAY', value: '2', text: 'MONDAY' ,id:'2'},
{ index: 'TUESDAY', value: '3', text: 'TUESDAY' ,id:'3'},
{ index: 'WEDNESDAY', value: '4', text: 'WEDNESDAY' ,id:'4'}, 
{ index: 'THURSDAY', value: '5', text: 'THURSDAY',id:'5' },
{ index: 'FRIDAY', value: '6', text: 'FRIDAY' ,id:'6'},
{ index: 'SATURDAY', value: '7', text: 'SATURDAY' ,id:'7'},
];
class ProjectStaff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            multiSelect: [],
            deliverablesOptn: [],
            tsStartDate: '',
            tsEndDate: '',
            tsSplitDate: '',

        }
        this.addProjectDetail = this.addProjectDetail.bind(this);
        this.changeProjectName = this.changeProjectName.bind(this);
        this.changeDeliverableName = this.changeDeliverableName.bind(this);
        this.changeTsType = this.changeTsType.bind(this);
        this.changeEmployeeName = this.changeEmployeeName.bind(this);
        this.changeSupervisorL1 = this.changeSupervisorL1.bind(this);
        this.changeSupervisorL2 = this.changeSupervisorL2.bind(this);
        this.changeSupervisorL3 = this.changeSupervisorL3.bind(this);
        this.changeWeekOff1 = this.changeWeekOff1.bind(this);
        this.changeWeekOff2 = this.changeWeekOff2.bind(this);
        this.changeWeekStartDay = this.changeWeekStartDay.bind(this);
        this.changeStartDate=this.changeStartDate.bind(this);
        this.changeEndDate=this.changeEndDate.bind(this);
        this.changeSplitDate=this.changeSplitDate.bind(this);
    }
    addProjectDetail() {
        let data = {
            listDeliverables: delOptions,
            projectId: projectId,
            userId: employeeId,
            timeSheetType:tsType,
            tsEndDate:this.state.tsEndDate,
            tsStartDate:this.state.tsStartDate,
            weekStartDay:weekStartDay,
            weekOff1:weekOff1,
            weekOff2:weekOff2,
            tsSplitDate:this.state.tsSplitDate,
            dayNumber:dayNumber
        }
        console.log("staff :",data.dayNumber);
       this.props.addProjectStaff(data);
    }
    componentDidMount() {
        this.props.getProjectDropdown();
        this.props.getEmployeeDropdown();
        this.props.getDeliverableDropdown();
        this.props.getSupervisorDropdown();
    }
    changeProjectName(event) {
        projectId = event.currentTarget.getAttribute('index');
        newDeliverablesOptions = delOptions.filter(function (el) {
            return el.key == projectId
        });
        this.setState({ deliverablesOptn: newDeliverablesOptions })
    }
    changeEmployeeName(event) {
        employeeId = event.currentTarget.getAttribute('index');
    }
    changeDeliverableName(event) {
        deliverableId = event.currentTarget.getAttribute('index');
    }
    optionClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
        this.setState({ deliverablesOptn: optionsList });
    }
    selectedBadgeClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
        this.setState({ deliverablesOptn: optionsList });
    }
    changeTsType(e)
    {
        tsType = e.currentTarget.getAttribute('index');
    }
    changeWeekOff1(e)
    {
        weekOff1 = e.currentTarget.getAttribute('index');
    }
    changeWeekOff2(e)
    {
        weekOff2 = e.currentTarget.getAttribute('index');
    }
    changeWeekStartDay(e)
    {
        weekStartDay = e.currentTarget.getAttribute('index');
        dayNumber = e.currentTarget.getAttribute('id');
    }
    changeSupervisorL1(e) {
        let supervisorID = e.currentTarget.getAttribute('index');
        this.props.selectSupervisorL1(supervisorID);
    }
    changeSupervisorL2(e) {
        let supervisorID = e.currentTarget.getAttribute('index');
        this.props.selectSupervisorL2(supervisorID);
    }
    changeSupervisorL3(e) {
        let supervisorID = e.currentTarget.getAttribute('index');
        this.props.selectSupervisorL3(supervisorID);
    }
    changeStartDate(day)
    {
       let date = formatDate(day, "DD-MMM-YYYY")
        this.setState({
            tsStartDate:date
        })
    }
    changeEndDate(day)
    {
      let  date = formatDate(day, "DD-MMM-YYYY")
        this.setState({
            tsEndDate:date
        })
    }
    changeSplitDate(day)
    {
        let  date = formatDate(day, "DD-MMM-YYYY")
        this.setState({
            tsSplitDate:date
        })
    }
    render() {
        if (this.props.deliverableDropdown != null) {
            delOptions = this.props.deliverableDropdown
        }
        if (this.props.supervisorDropdownL1 != null) {
            supervisorOptionsL1 = this.props.supervisorDropdownL1
        }
        var tsTypeOptions=[{ index: 'WEEKLY', value: '1', text: 'weekly' },{ index: 'BY-WEEKLY', value: '2', text: 'by-weekly' },
                           { index: 'SEMI-MONTHLY', value: '3', text: 'semi-monthly' },{ index: 'MONTHLY', value: '4', text: 'monthly' }, { index: 'IN-OUT', value: '5', text: 'in-out' }];
        return (
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h2 style={{ marginLeft: '5em' }}>Project-staff-allocation</h2>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ alignItems: "right" }}><Button primary onClick={this.addProjectDetail}>Add Project detail</Button></div>
                    </Grid.Column>
                </Grid>
                <Divider />
                <div style={{ marginLeft: '5em' }}>
                    <Grid columns={10} padded>
                        <Grid.Column width="4">
                            <h4 style={{ textAlign: "right", marginTop: "1em" }}>projects</h4>
                            <h4 style={{ textAlign: "right", marginTop: "5em" }}>select employee</h4>
                            <h4 style={{ textAlign: "right", marginTop: "6em" }}>supervisor</h4>
                            <h4 style={{ textAlign: "right", marginTop: "5em" }}>deliverables </h4>
                            <h4 style={{ textAlign: "right", marginTop: "5em" }}>time sheet type </h4>
                            <h4 style={{ textAlign: "right", marginTop: "5em" }}>week start day</h4>
                            <h4 style={{ textAlign: "right", marginTop: "5em" }}>week off day 1 </h4>
                            <h4 style={{ textAlign: "right", marginTop: "5em" }}>week off day 2 </h4>
                            <h4 style={{ textAlign: "right", marginTop: "4em" }}>time-sheet split date </h4>
                            <h4 style={{ textAlign: "right", marginTop: "4em" }}>time sheet start-end date </h4>
                        </Grid.Column>
                        <Grid.Column className="ten wide column">
                            <Dropdown selection search onChange={this.changeProjectName} options={this.props.projectDropdown} placeholder='Select project' /><br /><br />
                            <Divider /><br />
                            <Dropdown selection search onChange={this.changeEmployeeName} options={this.props.employeeDropdown} placeholder='Select employee' /><br /><br />
                            <Divider /><br />
                            <Dropdown selection search onChange={this.changeSupervisorL1} options={this.props.supervisorDropdownL1} placeholder='Select supervisor (level 1)' />
                            <Dropdown selection search onChange={this.changeSupervisorL2} options={this.props.supervisorDropdownL2} placeholder='Select supervisor (level 2)' />
                            <Dropdown selection search onChange={this.changeSupervisorL3} options={this.props.supervisorDropdownL3} placeholder='Select supervisor (level 3)' /><br /><br />
                            <Divider /><br />
                             <MultiSelectReact
                                options={this.state.deliverablesOptn}
                                optionClicked={this.optionClicked.bind(this)}
                                selectedBadgeClicked={this.selectedBadgeClicked.bind(this)}
                            />
                            <Divider /><br />
                            <Dropdown placeholder='Select time-sheet type' fluid search selection onChange={this.changeTsType} options={tsTypeOptions} />
                            <Divider /><br />
                            <Dropdown placeholder='week start day' fluid search selection onChange={this.changeWeekStartDay} options={weekDays} />
                            <Divider /><br />
                            <Dropdown placeholder='week off 1' fluid search selection onChange={this.changeWeekOff1} options={weekDays} />
                            <Divider /><br />
                            <Dropdown placeholder='week off 2' fluid search selection onChange={this.changeWeekOff2} options={weekDays} />
                            <Divider /><br />
                            <DayPickerInput onDayChange={this.changeSplitDate} />
                            <Divider /><br />
                            <DayPickerInput onDayChange={this.changeStartDate} />
                            <DayPickerInput onDayChange={this.changeEndDate} />
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    var empty = [{ index: '', text: '----', value: '----' }];
    return {
        projectDropdown: state.projectDropdown,
        employeeDropdown: state.employeeDropdown,
        deliverableDropdown: state.deliverableDropdown,
        supervisorDropdownL1: [...state.supervisorDropdown.supervisorList.filter(function (el) {
            return el.index !== state.supervisorDropdown.l2 && el.index !== state.supervisorDropdown.l3
        }), ...empty],
        supervisorDropdownL2: state.supervisorDropdown.supervisorList.filter(function (el) {
            return el.index !== state.supervisorDropdown.l1 && el.index !== state.supervisorDropdown.l3
        }),
        supervisorDropdownL3: state.supervisorDropdown.supervisorList.filter(function (el) {
            return el.index !== state.supervisorDropdown.l1 && el.index !== state.supervisorDropdown.l2
        })
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getSupervisorDropdown, getProjectDropdown, selectSupervisorL3, selectSupervisorL1, selectSupervisorL2, getDeliverableDropdown, getEmployeeDropdown, addProjectStaff }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectStaff);