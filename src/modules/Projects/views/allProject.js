import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input,Icon, Label, Menu, Table, Checkbox,Dropdown, Button, Confirm, Grid, Divider, Column } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { getAllProjects ,delProjectPermanent} from '../../Projects/actions/allProjectsAction';
import { Link } from 'react-router-dom';
import { getClientDropdown } from '../../dropdown/actions/clientDropdownActions';
import { formatDate, parseDate } from "react-day-picker/moment";

let data=[];
class AllProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            projectId: '',
            allProject:[],
            projectName:'',
            clientId:'',
            departmentId:'',
            subdepartmentId:'',
            projectStartDate:'',
            projectEndDate:''
        }
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.changeProjectName = this.changeProjectName.bind(this);
        this.changeClientName=this.changeClientName.bind(this);
        this.show = this.show.bind(this);
    }
    componentDidMount() {
        this.props.getAllProjects();
        this.props.getClientDropdown();
    }
    changeClientName(event){
        var clientId=event.currentTarget.getAttribute('index');
        this.setState({
            clientId:clientId
        })
    }
    changeDepartmentName(event){
        var departmentId=event.currentTarget.getAttribute('index');
        this.setState({
            departmentId:departmentId
        })
    }
    changeSubdepartmentName(event){
        var subdepartmentId=event.currentTarget.getAttribute('index');
        this.setState({
            subdepartmentId:subdepartmentId
        })
    }
    changeProjectName(event){
        this.setState({
            projectName:event.target.value
        })
    }
    show(projectId) {
        this.setState({ open: true, projectId: projectId })
    }
    handleConfirm() {
        this.setState({ open: false })
        this.props.delProjectPermanent(this.state.projectId);
    }
    handleCancel() { this.setState({ open: false }) }
    render() {

        return (
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h3 style={{ marginLeft: '5em' }}>ALL PROJECTS</h3>
                        <Dropdown selection search onChange={this.changeClientName} options={this.props.clientDropdown} placeholder='Select client' /><br /><br />
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ alignItems: "right" }}><Link to="/project"><Button primary>create new project</Button></Link></div>
                    </Grid.Column>
                </Grid>
                <Divider />
                <Table celled sortable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>project name</Table.HeaderCell>
                            <Table.HeaderCell>client </Table.HeaderCell>
                            <Table.HeaderCell>department </Table.HeaderCell>
                            <Table.HeaderCell>sub-department</Table.HeaderCell>
                            <Table.HeaderCell>project type</Table.HeaderCell>
                            <Table.HeaderCell>project start date</Table.HeaderCell>
                            <Table.HeaderCell>project end date</Table.HeaderCell>
                            <Table.HeaderCell>Edit project</Table.HeaderCell>
                            <Table.HeaderCell>Active</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            this.props.allProjects.map((item, key) => {
                                var projectEndDate='',className='checkmark';
                                if(item.isActive==true)
                                {
                                    className='checkmark';
                                }
                                else
                                {
                                    className='close'
                                }
                                if(item.projectEndDate!==null)
                                    projectEndDate=formatDate(item.projectEndDate, "DD-MMM-YYYY");
                                return (
                                    <Table.Row key={item.projectId}>
                                        <Table.Cell >{item.projectName}</Table.Cell>
                                        <Table.Cell >{item.clientName}</Table.Cell>
                                        <Table.Cell >{item.departmentName}</Table.Cell>
                                        <Table.Cell >{item.subdepartmentName}</Table.Cell>
                                        <Table.Cell >{item.projectType}</Table.Cell>
                                        <Table.Cell >{formatDate(item.projectStartDate, "DD-MMM-YYYY")}</Table.Cell>
                                        <Table.Cell >{projectEndDate}</Table.Cell>
                                        <Table.Cell >
                                            <div className="ui button" data-inverted="" data-tooltip="edit project" data-position="bottom center">
                                               <Link to={"/editProject/" + item.projectId}><Icon name='edit'/></Link>
                                            </div>
                                            <div className="ui button" data-inverted="" data-tooltip="delete project" data-position="bottom center">
                                            <Icon name='delete' onClick={() => this.show(item.projectId)}/></div>
                                            <Confirm
                                                open={this.state.open}
                                                header='Delete project'
                                                onCancel={() => this.handleCancel()}
                                                onConfirm={() => this.handleConfirm()}
                                            />
                                        </Table.Cell>
                                        <Table.Cell ><Icon color='green' name={className} size='large' /></Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        allProjects: state.allProjects,
        clientDropdown: state.clientDropdown,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllProjects,delProjectPermanent,getClientDropdown}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProject);