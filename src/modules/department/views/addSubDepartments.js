import React, { Component } from 'react';
import { Input, Checkbox, Dropdown, Button, Divider, Grid, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom'
import { getClientDropdown } from '../../dropdown/actions/clientDropdownActions';
import { getDepartmentDropdown } from '../../dropdown/actions/departmentDropdownActions';
import { addNewSubDepartment } from '../../department/actions/addSubDepartmentActions';

class AddSubDepartments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newdepartments: [],
            did: '',
            sdname: '',
            reporttoname: '',
            reporttoemail: '',
            reporttocell: '',
            reporttophone: '',
            clientOptions:'undefined',
            departmentOptions:'undefined',
            cid:''
        }
        this.changeClient = this.changeClient.bind(this)
        this.changeDepartment = this.changeDepartment.bind(this)
        this.changeSubDepartmentName = this.changeSubDepartmentName.bind(this)
        this.addSubDepartment = this.addSubDepartment.bind(this)
        this.changeReportToName=this.changeReportToName.bind(this)
        this.changeReportToEmail=this.changeReportToEmail.bind(this)
        this.changeReportToCell=this.changeReportToCell.bind(this)
        this.changeReportToPhone=this.changeReportToPhone.bind(this)
    }
    componentDidMount() {
        this.props.getClientDropdown();
        this.props.getDepartmentDropdown();
    }
    changeClient(e) {
        let mid = e.currentTarget.getAttribute('index')
        let newdepartmentOptions = this.state.departmentOptions.filter(function (el) {
            return el.id == mid
        });
        this.setState({ newdepartments: newdepartmentOptions,cid:mid })
    }
    changeDepartment(e) {
        this.setState({did : e.currentTarget.getAttribute('index')})
    }
    changeSubDepartmentName(e) {
        this.setState({sdname : e.target.value})
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
    addSubDepartment() {
        this.props.addNewSubDepartment({ 
            "subDepartmentName": this.state.sdname, 
            "departmentId": this.state.did, 
            "clientID": this.state.cid,
            "reportToName":this.state.reporttoname,
            "reportToEmail":this.state.reporttoemail,
            "reportToCell":this.state.reporttocell,
            "reportToPhone":this.state.reporttophone
        })
    }

    render() {
        if (this.props.clientDropdown != null && this.state.clientOptions==='undefined')
            this.setState({clientOptions : this.props.clientDropdown})
        if (this.props.departmentDropdown != null && this.state.departmentOptions==='undefined') {
            this.setState({departmentOptions : this.props.departmentDropdown})
        }

        return (
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h2 style={{ marginLeft: '5em' }}>Sub Departments</h2>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ alignItems: "right" }}><Link to="allsubdepartments"><Button primary onClick={this.addSubDepartment}>Add Sub Department</Button></Link></div>
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
                            <h4 style={{ textAlign: "right", marginTop: "4.5em" }}>New Sub Department</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "6em" }}>Report To</h4>
                        </Grid.Column>
                        <Grid.Column width='1'>
                            <Divider vertical><Icon disabled name='angle right' /></Divider>
                        </Grid.Column>
                        <Grid.Column className="ten wide column">
                            <Dropdown selection search onChange={this.changeClient} options={this.state.clientOptions} placeholder='Select Client' /><br /><br />
                            <Divider /><br />
                            <Dropdown selection search onChange={this.changeDepartment} options={this.state.newdepartments} placeholder='Select Department' /><br /><br />
                            <Divider /><br />
                            <Input style={{ width: "290px" }} onChange={this.changeSubDepartmentName} focus label={{ color: 'blue', content: 'Sub Department Name' }} placeholder='Sub Department Name' type='text' />
                            <br /> <Divider /><br />
                            <Input focus label={{ color: 'blue', content: 'Report TO Name' }} placeholder='Report TO Name' type='text' onChange={this.changeReportToName} />
                            <Input style={{ marginLeft: "1em" }} focus label={{ color: 'blue', content: 'Report TO Email' }} placeholder='Report TO Email' type='text' onChange={this.changeReportToEmail} /><br /><br />
                            <Input focus label={{ color: 'blue', content: 'Report TO Cell' }} placeholder='Report TO Cell' type='text' onChange={this.changeReportToCell} />
                            <Input style={{ marginLeft: "1em" }} focus label={{ color: 'blue', content: 'Report TO Phone' }} placeholder='Report TO Phone' type='text' onChange={this.changeReportToPhone} />

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
        subDepartmentData: state.subDepartmentData
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getClientDropdown, getDepartmentDropdown, addNewSubDepartment }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSubDepartments);
