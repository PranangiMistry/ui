import React, { Component } from 'react';
import { Input, Checkbox, Button, Divider, Grid, Icon, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEditProjectStaffData,updateProjectStaff, changeTsStartDate,changeSupervisor1,changeSupervisor2,changeSupervisor3, changeTsEndDate, changeWeekOff1, changeWeekOff2, changeTsSplitDate, changeWeekStartDay, changeTsType } from '../../Projects/actions/editProjectStaffAction'
import { getProjectDropdown } from '../../dropdown/actions/projectDropdownAction';
import { getEmployeeDropdown } from '../../dropdown/actions/employeeDropdownAction';
import { getDeliverableDropdown } from '../../dropdown/actions/deliverableDropdown';
import { getSupervisorDropdown, selectSupervisorL3,clearSupervisor,selectSupervisorL1, selectSupervisorL2 } from '../../dropdown/actions/supervisorDropdownAction';
import MultiSelectReact from 'multi-select-react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from "react-day-picker/moment";
import { weekdays } from 'moment';

let projectId, deliverableId, employeeId, tsType = '', weekStartDay = '', weekOff1 = '', weekOff2 = '';
let newDeliverablesOptions = [];
let supervisorOptionsL1 = [];
let supervisorOptionsL2 = [];
let supervisorOptionsL3 = [];
var weekDays = [{ index: 'SUNDAY', value: '1', text: 'SUNDAY' },
{ index: 'MONDAY', value: '2', text: 'MONDAY' },
{ index: 'TUESDAY', value: '3', text: 'TUESDAY' },
{ index: 'WEDNESDAY', value: '4', text: 'WEDNESDAY' },
{ index: 'THURSDAY', value: '5', text: 'THURSDAY' },
{ index: 'FRIDAY', value: '6', text: 'FRIDAY' },
{ index: 'SATURDAY', value: '7', text: 'SATURDAY' },
];
class EditProjectStaff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            multiSelect: [],
            deliverablesOptn: [],
            tsStartDate: '',
            tsEndDate: '',
            tsSplitDate: '',
        }
        this.updateProjectStaff = this.updateProjectStaff.bind(this);
        this.changeDeliverableName = this.changeDeliverableName.bind(this);
        this.changeTsType = this.changeTsType.bind(this);
        this.changeSupervisorL1 = this.changeSupervisorL1.bind(this);
        this.changeSupervisorL2 = this.changeSupervisorL2.bind(this);
        this.changeSupervisorL3 = this.changeSupervisorL3.bind(this);
        this.changeWeekOff1 = this.changeWeekOff1.bind(this);
        this.changeWeekOff2 = this.changeWeekOff2.bind(this);
        this.changeWeekStartDay = this.changeWeekStartDay.bind(this);
        this.changeStartDate = this.changeStartDate.bind(this);
        this.changeEndDate = this.changeEndDate.bind(this);
        this.changeSplitDate = this.changeSplitDate.bind(this);
    }
    updateProjectStaff() {
        this.props.updateProjectStaff(this.state.deliverablesOptn);
        this.props.clearSupervisor();
    }
    componentDidMount() {
        this.props.getEditProjectStaffData(this.props.match.params.projStaffId);
        this.props.getDeliverableDropdown();
        this.props.getSupervisorDropdown();
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
    changeTsType(e) {
        tsType = e.currentTarget.getAttribute('index');
        this.props.changeTsType(tsType);
    }
    changeWeekOff1(e) {
        weekOff1 = e.currentTarget.getAttribute('index');
        this.props.changeWeekOff1(weekOff1);
    }
    changeWeekOff2(e) {
        weekOff2 = e.currentTarget.getAttribute('index');
        this.props.changeWeekOff2(weekOff2);
    }
    changeWeekStartDay(e) {
        weekStartDay = e.currentTarget.getAttribute('index');
        this.props.changeWeekStartDay(weekStartDay);
    }
    changeSupervisorL1(e) {
        let supervisorID = e.currentTarget.getAttribute('index');
        this.props.selectSupervisorL1(supervisorID);
        this.props.changeSupervisor1(supervisorID);
    }
    changeSupervisorL2(e) {
        let supervisorID = e.currentTarget.getAttribute('index');
        this.props.selectSupervisorL2(supervisorID);
        this.props.changeSupervisor2(supervisorID);
    }
    changeSupervisorL3(e) {
        let supervisorID = e.currentTarget.getAttribute('index');
        this.props.selectSupervisorL3(supervisorID);
        this.props.changeSupervisor3(supervisorID);
    }
    changeStartDate(day) {
        let date = formatDate(day, "DD-MMM-YYYY")
        this.props.changeTsStartDate(date);
    }
    changeEndDate(day) {
        let date = formatDate(day, "DD-MMM-YYYY")
        this.props.changeTsEndDate(date);
    }
    changeSplitDate(day) {
        let date = formatDate(day, "DD-MMM-YYYY");
        this.props.changeTsSplitDate(date);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.deliverableDropdown != null) {
            this.setState({
                deliverablesOptn: nextProps.deliverableDropdown.filter(function (el) {
                    return el.key == nextProps.staffData[0].projectIdFk
                })
            })
        }
    }
    render() {
        if (this.props.supervisorDropdownL1 != null) {
            supervisorOptionsL1 = this.props.supervisorDropdownL1
        }
        var tsTypeOptions = [{ index: 'WEEKLY', value: '1', text: 'weekly' }, { index: 'BY-WEEKLY', value: '2', text: 'by-weekly' },
        { index: 'SEMI-MONTHLY', value: '3', text: 'semi-monthly' }, { index: 'MONTHLY', value: '4', text: 'monthly' }, { index: 'IN-OUT', value: '5', text: 'in-out' }];
        return (
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h2 style={{ marginLeft: '5em' }}>Project-staff-allocation</h2>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ alignItems: "right" }}><Button primary onClick={this.updateProjectStaff}>update staff</Button></div>
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
                            <Input style={{ width: "290px" }} focus label={{ color: 'blue', content: 'Project Name' }} value={this.props.staffData[0].projectName} type='text' disabled />
                            <Divider /><br />
                            <Input style={{ width: "290px" }} focus label={{ color: 'blue', content: 'Employee Name' }} value={this.props.staffData[0].userName} type='text' disabled />
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
                            <Dropdown placeholder='Select time-sheet type' fluid search selection text={this.props.staffData[0].tsType} onChange={this.changeTsType} options={tsTypeOptions} />
                            <Divider /><br />
                            <Dropdown placeholder='week start day' fluid search selection text={this.props.staffData[0].weekStartDay} onChange={this.changeWeekStartDay} options={weekDays} />
                            <Divider /><br />
                            <Dropdown placeholder='week off 1' fluid search selection text={this.props.staffData[0].weekOff1} onChange={this.changeWeekOff1} options={weekDays} />
                            <Divider /><br />
                            <Dropdown placeholder='week off 2' fluid search selection text={this.props.staffData[0].weekOff2} onChange={this.changeWeekOff2} options={weekDays} />
                            <Divider /><br />
                            <DayPickerInput placeholder={formatDate(this.props.staffData[0].tsSplitDate, "DD-MMM-YYYY")} onDayChange={this.changeSplitDate} />
                            <Divider /><br />
                            <DayPickerInput placeholder={formatDate(this.props.staffData[0].tsStartDate, "DD-MMM-YYYY")} onDayChange={this.changeStartDate} />
                            <DayPickerInput placeholder={formatDate(this.props.staffData[0].tsEndDate, "DD-MMM-YYYY")} onDayChange={this.changeEndDate} />
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
        staffData: state.editProjectStaffData,
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
    return bindActionCreators({ getSupervisorDropdown,updateProjectStaff, clearSupervisor,getEditProjectStaffData, changeSupervisor1,changeSupervisor2,changeSupervisor3,selectSupervisorL3, selectSupervisorL1, selectSupervisorL2, getDeliverableDropdown, changeTsStartDate, changeTsEndDate, changeWeekOff1, changeWeekOff2, changeTsSplitDate, changeWeekStartDay, changeTsType }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectStaff);