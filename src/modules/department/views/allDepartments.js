import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Label, Menu, Table, Checkbox, Button, Confirm, Grid, Divider, Column } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getAllDepartments,activeDeActiveDepartment,deleteDepartmentPermanent } from '../../department/actions/allDepartmentActions';

class AllDepartments extends Component {
    constructor(props) {
        super(props);
        this.activeDeactive=this.activeDeactive.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
    }
    componentDidMount() {
        this.props.getAllDepartments()
    }
    activeDeactive(departmentId, isActive) {
        this.props.activeDeActiveDepartment(departmentId, isActive);
        this.props.getAllDepartments()
    }
    handleDelete(departmentId) {
        this.props.deleteDepartmentPermanent(departmentId);
        this.props.getAllDepartments()
    }
    render() {
        return (
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h3 style={{ marginLeft: '5em' }}>ALL DEPARTMENTS</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ alignItems: "right" }}><Link to="/departments"><Button primary>New Department</Button></Link></div>
                    </Grid.Column>
                </Grid>
                <Divider />
                <Table celled sortable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Department Name</Table.HeaderCell>
                            <Table.HeaderCell>Client </Table.HeaderCell>
                            <Table.HeaderCell>Report To Name </Table.HeaderCell>
                            <Table.HeaderCell>Report To Email</Table.HeaderCell>
                            <Table.HeaderCell>Report To Cell</Table.HeaderCell>
                            <Table.HeaderCell>Report To Phone</Table.HeaderCell>
                            <Table.HeaderCell>Update Department</Table.HeaderCell>
                            <Table.HeaderCell>Delete Department</Table.HeaderCell>
                            <Table.HeaderCell>Avtive/deactive</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            this.props.allDepartments.map((item, key) => {
                                return (
                                    <Table.Row key={item.departmentId}>
                                        <Table.Cell >{item.departmentName}</Table.Cell>
                                        <Table.Cell >{item.clientName}</Table.Cell>
                                        <Table.Cell >{item.reportToName}</Table.Cell>
                                        <Table.Cell >{item.reportToEmail}</Table.Cell>
                                        <Table.Cell >{item.reportToCell}</Table.Cell>
                                        <Table.Cell >{item.reportToPhone}</Table.Cell>

                                        <Table.Cell >
                                            <div className="ui button" data-inverted="" data-tooltip="edit department" data-position="bottom center">
                                                <Link to={"/editdepartment/" + item.departmentId}><Icon name='edit' /></Link>
                                            </div>
                                            </Table.Cell>
                                            <Table.Cell >
                                            <div className="ui button" data-inverted="" data-tooltip="delete department" data-position="bottom center">
                                                <Icon name='delete' onClick={()=>{this.handleDelete(item.departmentId)}} /></div>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <div className="ui button" data-inverted="" data-tooltip="activate/deactivate" data-position="bottom center">
                                                <Checkbox toggle checked={item.dIsActive} onClick={() => this.activeDeactive(item.departmentId, item.dIsActive)} />
                                            </div>
                                        </Table.Cell>
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
        allDepartments: state.allDepartments
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllDepartments,activeDeActiveDepartment,deleteDepartmentPermanent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AllDepartments)