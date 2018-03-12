import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Label, Menu, Table, Checkbox, Button, Confirm, Grid, Divider, Column } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getAllSubDepartments,activeDeActiveSubDepartment,deleteSubDepartmentPermanent } from '../../department/actions/allSubDepartmentActions';

class AllSubDepartments extends Component {
    constructor(props) {
        super(props);
        this.activeDeactive=this.activeDeactive.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
    }
    componentDidMount() {
        this.props.getAllSubDepartments()
    }
    activeDeactive(subdepartmentId, isActive) {
        this.props.activeDeActiveSubDepartment(subdepartmentId, isActive);
        this.props.getAllSubDepartments()
    }
    handleDelete(subdepartmentId) {
        this.props.deleteSubDepartmentPermanent(subdepartmentId);
        this.props.getAllSubDepartments()
    }
    render() {
        return (
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h3 style={{ marginLeft: '5em' }}>ALL SUBDEPARTMENTS</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ alignItems: "right" }}><Link to="/subdepartments"><Button primary>New SubDepartment</Button></Link></div>
                    </Grid.Column>
                </Grid>
                <Divider />
                <Table celled sortable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>SubDepartment Name</Table.HeaderCell>
                            <Table.HeaderCell>Department</Table.HeaderCell>
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
                            this.props.allSubDepartments.map((item, key) => {
                                return (
                                    <Table.Row key={item.subdepartmentId}>
                                        <Table.Cell >{item.subdepartmentName}</Table.Cell>
                                        <Table.Cell >{item.departmentName}</Table.Cell>
                                        <Table.Cell >{item.clientName}</Table.Cell>
                                        <Table.Cell >{item.reportToName}</Table.Cell>
                                        <Table.Cell >{item.reportToEmail}</Table.Cell>
                                        <Table.Cell >{item.reportToCell}</Table.Cell>
                                        <Table.Cell >{item.reportToPhone}</Table.Cell>

                                        <Table.Cell >
                                            <div className="ui button" data-inverted="" data-tooltip="edit subdepartment" data-position="bottom center">
                                                <Link to={"/editsubdepartment/" + item.subdepartmentId}><Icon name='edit' /></Link>
                                            </div>
                                            </Table.Cell>
                                            <Table.Cell >
                                            <div className="ui button" data-inverted="" data-tooltip="delete subdepartment" data-position="bottom center">
                                                <Icon name='delete' onClick={()=>{this.handleDelete(item.subdepartmentId)}} /></div>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <div class="ui button" data-inverted="" data-tooltip="activate/deactivate" data-position="bottom center">
                                                <Checkbox toggle checked={item.dIsActive} onClick={() => this.activeDeactive(item.subdepartmentId, item.dIsActive)} />
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
        allSubDepartments: state.allSubDepartments
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllSubDepartments,activeDeActiveSubDepartment,deleteSubDepartmentPermanent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AllSubDepartments)