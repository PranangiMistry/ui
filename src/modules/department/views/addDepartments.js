import React, { Component } from 'react';
import { Input, Checkbox, Dropdown, Button, Divider, Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getClientDropdown} from '../../dropdown/actions/clientDropdownActions';
import {addNewDepartment} from '../../department/actions/addDepartmentActions';

class AddDepartments extends Component {

    constructor(props) {
        super(props);
        this.state={
            cid:'',
            dname:'',
            reporttoname:'',
            reporttoemail:'',
            reporttocell:'',
            reporttophone:'',
            options : 'undefined'
        }
        this.changeClient=this.changeClient.bind(this)
        this.changeDepartmentName=this.changeDepartmentName.bind(this)
        this.addDepartment=this.addDepartment.bind(this)
        this.changeReportToName=this.changeReportToName.bind(this)
        this.changeReportToEmail=this.changeReportToEmail.bind(this)
        this.changeReportToCell=this.changeReportToCell.bind(this)
        this.changeReportToPhone=this.changeReportToPhone.bind(this)
    }
    componentDidMount() {
        this.props.getClientDropdown();
    }
    changeClient(e){
        this.setState({cid:e.currentTarget.getAttribute('index')})
    }
    changeDepartmentName(e){
        this.setState({dname:e.target.value})
    }
    changeReportToName(e){
        this.setState({reporttoname:e.target.value})
    }
    changeReportToEmail(e){
        this.setState({reporttoemail:e.target.value})
    }
    changeReportToCell(e){
        this.setState({reporttocell:e.target.value})
    }
    changeReportToPhone(e){
        this.setState({reporttophone:e.target.value})
    }
    addDepartment(){
        this.props.addNewDepartment({
            "departmentName":this.state.dname,
            "clientID":this.state.cid,
            "reportToName":this.state.reporttoname,
            "reportToEmail":this.state.reporttoemail,
            "reportToCell":this.state.reporttocell,
            "reportToPhone":this.state.reporttophone
        })
    }

    render() {
        if (this.props.clientDropdown != null && this.state.options==='undefined')
            this.setState({options : this.props.clientDropdown})
        return (
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h2 style={{ marginLeft: '5em' }}>Departments</h2>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ alignItems: "right" }}><Link to="/alldepartments"><Button primary onClick={this.addDepartment}>Add Department</Button></Link></div>
                    </Grid.Column>
                </Grid>
                <Divider />
                <div style={{ marginLeft: '5em' }}>
                    <Grid columns={5} padded>
                        <Grid.Column width="2">
                            <h4 style={{ textAlign: "right", marginTop: "1em" }}>Client</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "4em" }}>New Department</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "6em" }}>Report To</h4>
                        </Grid.Column>
                        <Grid.Column width='1'>
                            <Divider vertical><Icon disabled name='angle right' /></Divider>
                        </Grid.Column>
                        <Grid.Column className="ten wide column">
                            <Dropdown selection search onChange={this.changeClient} options={this.state.options} placeholder='Select Client' /><br /><br />
                            <Divider /><br />
                            <Input style={{ width: "290px" }} onChange={this.changeDepartmentName} focus label={{ color: 'blue', content: 'Department Name' }} placeholder='Department Name' type='text' />
                            <br /> <Divider /><br />
                            <Input focus label={{ color: 'blue', content: 'Report TO Name' }} placeholder='Report TO Name' type='text' onChange={this.changeReportToName} />
                            <Input style={{marginLeft:"1em" }} focus label={{ color: 'blue', content: 'Report TO Email' }} placeholder='Report TO Email' type='text' onChange={this.changeReportToEmail} /><br/><br/>
                            <Input focus label={{ color: 'blue', content: 'Report TO Cell' }} placeholder='Report TO Cell' type='text' onChange={this.changeReportToCell} />
                            <Input style={{marginLeft:"1em" }} focus label={{ color: 'blue', content: 'Report TO Phone' }} placeholder='Report TO Phone' type='text' onChange={this.changeReportToPhone} />
                        
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
        departmentData:state.departmentData
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({getClientDropdown,addNewDepartment}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDepartments);
