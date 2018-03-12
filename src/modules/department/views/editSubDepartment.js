import React, { Component } from 'react';
import { Input, Checkbox, Dropdown, Button, Divider, Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getClientDropdown } from '../../dropdown/actions/clientDropdownActions';
import { getDepartmentDropdown } from '../../dropdown/actions/departmentDropdownActions';
import { getEditSubDepartmentData, updateSubDepartment } from '../../department/actions/editSubDepartmentAction';


class EditSubDepartment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newdepartments: [],
            cid: '',
            did: '',
            sdname: '',
            reporttoname: '',
            reporttoemail: '',
            reporttocell: '',
            reporttophone: '',
            clientOptions: 'undefined',
            departmentOptions: 'undefined'
        }
        this.changeClient = this.changeClient.bind(this)
        this.changeDepartment = this.changeDepartment.bind(this)
        this.changeSubDepartmentName = this.changeSubDepartmentName.bind(this)
        this.editSubDepartment = this.editSubDepartment.bind(this)
        this.changeReportToName = this.changeReportToName.bind(this)
        this.changeReportToEmail = this.changeReportToEmail.bind(this)
        this.changeReportToCell = this.changeReportToCell.bind(this)
        this.changeReportToPhone = this.changeReportToPhone.bind(this)
    }
    componentDidMount() {
        this.props.getClientDropdown();
        this.props.getDepartmentDropdown();
        this.props.getEditSubDepartmentData(this.props.match.params.subDepartmentId);
    }
    componentWillReceiveProps(next) {
        this.setState({
            cid: next.editSubDepartment[0].clientId,
            sdname: next.editSubDepartment[0].subdepartmentName,
            did: next.editSubDepartment[0].departmentId,
            reporttoname: next.editSubDepartment[0].reportToName,
            reporttoemail: next.editSubDepartment[0].reportToEmail,
            reporttocell: next.editSubDepartment[0].reportToCell,
            reporttophone: next.editSubDepartment[0].reportToPhone
        })
        

    }
    changeClient(e) {
        let mid = e.currentTarget.getAttribute('index')
        let newdepartmentOptions = this.state.departmentOptions.filter(function (el) {
            return el.id == mid
        });
        this.setState({ newdepartments: newdepartmentOptions, cid: mid })
    }
    changeDepartment(e) {
        this.setState({ did: e.currentTarget.getAttribute('index') })
    }
    changeSubDepartmentName(e) {
        this.setState({ sdname: e.target.value })
    }
    changeReportToName(e) {
        this.setState({ reporttoname: e.target.value })
    }
    changeReportToEmail(e) {
        this.setState({ reporttoemail: e.target.value })
    }
    changeReportToCell(e) {
        this.setState({ reporttocell: e.target.value })
    }
    changeReportToPhone(e) {
        this.setState({ reporttophone: e.target.value })
    }
    editSubDepartment() {
        this.props.updateSubDepartment({
            "subDepartmentId": this.props.match.params.subDepartmentId,
            "subDepartmentName": this.state.sdname,
            "departmentId": this.state.did,
            "clientID": this.state.cid,
            "reportToName": this.state.reporttoname,
            "reportToEmail": this.state.reporttoemail,
            "reportToCell": this.state.reporttocell,
            "reportToPhone": this.state.reporttophone
        })
    }

    render() {
        if (this.props.clientDropdown != null && this.state.clientOptions === 'undefined')
            this.setState({ clientOptions: this.props.clientDropdown })
        if (this.props.departmentDropdown != null && this.state.departmentOptions === 'undefined') {
            this.setState({ departmentOptions: this.props.departmentDropdown })
        }
        
        return (
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h2 style={{ marginLeft: '5em' }}>Departments</h2>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ alignItems: "right" }}><Link to="/allsubdepartments"><Button primary onClick={this.editSubDepartment}>Edit SubDepartment</Button></Link></div>
                    </Grid.Column>
                </Grid>
                <Divider />
                <div style={{ marginLeft: '5em' }}>
                    <Grid columns={5} padded>
                        <Grid.Column width="2">
                            <h4 style={{ textAlign: "right", marginTop: "1em" }}>Client</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "4em" }}>Department</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "4em" }}>New SubDepartment</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "6em" }}>Report To</h4>
                        </Grid.Column>
                        <Grid.Column width='1'>
                            <Divider vertical><Icon disabled name='angle right' /></Divider>
                        </Grid.Column>
                        <Grid.Column className="ten wide column">
                            <Dropdown selection search onChange={this.changeClient} value={this.state.cid} options={this.state.clientOptions} placeholder='Select Client' /><br /><br />
                            <Divider /><br />
                            <Dropdown selection search onChange={this.changeDepartment} value={this.state.did} options={this.state.newdepartments} placeholder='Select Department' /><br /><br />
                            <Divider /><br />
                            <Input style={{ width: "290px" }} onChange={this.changeSubDepartmentName} focus label={{ color: 'blue', content: 'Department Name' }} placeholder='Department Name' type='text' value={this.state.sdname} />
                            <br /> <Divider /><br />
                            <Input focus label={{ color: 'blue', content: 'Report TO Name' }} placeholder='Report TO Name' type='text' onChange={this.changeReportToName} value={this.state.reporttoname} />
                            <Input style={{ marginLeft: "1em" }} focus label={{ color: 'blue', content: 'Report TO Email' }} placeholder='Report TO Email' type='text' onChange={this.changeReportToEmail} value={this.state.reporttoemail} /><br /><br />
                            <Input focus label={{ color: 'blue', content: 'Report TO Cell' }} placeholder='Report TO Cell' type='text' onChange={this.changeReportToCell} value={this.state.reporttocell} />
                            <Input style={{ marginLeft: "1em" }} focus label={{ color: 'blue', content: 'Report TO Phone' }} placeholder='Report TO Phone' type='text' onChange={this.changeReportToPhone} value={this.state.reporttophone} />

                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        clientDropdown: state.clientDropdown,
        departmentDropdown: state.departmentDropdown,
        editSubDepartment: state.editSubDepartment
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getClientDropdown, getDepartmentDropdown, updateSubDepartment, getEditSubDepartmentData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSubDepartment);
