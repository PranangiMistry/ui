import React,{Component} from 'react'
import { Icon, Label, Menu, Table, Checkbox, Pagination, Button, Confirm, Grid, Divider, Column } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatDate, parseDate } from "react-day-picker/moment";
import {getallSupervisorSubstitute,deleteSubstituter} from '../../supervisor-substitution/actions/allSupervisorSubstitutionAction';
class AllSupervisorSubstitution extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            supervisorSubstituteId:''
        }
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.show = this.show.bind(this);

    }

    componentDidMount() {
        this.props.getallSupervisorSubstitute();
    }

    show(supervisorSubstituteId) {
        this.setState({ open: true, supervisorSubstituteId: supervisorSubstituteId })
    }
    handleConfirm() {
        
        this.props.deleteSubstituter(this.state.supervisorSubstituteId);
        this.setState({ open: false })
    }
    handleCancel() { 
        this.setState({ open: false }) }

    render()
    {
        return(
            <div>
                 <Grid columns="equal" padded>
                <Grid.Column className="twelve wide column">
                    <h3 style={{ marginLeft: '5em' }}>All Approvers</h3>
                </Grid.Column>
                <Grid.Column>
                    <div style={{ alignItems: "right" }}><Link to="/supervisorSubstitutionForAdmin"><Button primary>create new Approver</Button></Link></div>
                </Grid.Column>
            </Grid>
            <Divider />
            <Table celled sortable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Supervisor Name</Table.HeaderCell>
                        <Table.HeaderCell>Substitute Name</Table.HeaderCell>
                        <Table.HeaderCell>Start Date</Table.HeaderCell>
                        <Table.HeaderCell>End Date</Table.HeaderCell>
                        <Table.HeaderCell>Edit Approver</Table.HeaderCell>
                        <Table.HeaderCell>Delete Approver</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {
                    this.props.AllSupervisorSubstitute.map((item, key) => {
                        return (
                            <Table.Row key={item.supervisorSubstituteId}>
                                <Table.Cell >{item.supervisorName}</Table.Cell>
                                <Table.Cell >{item.userName}</Table.Cell>
                                <Table.Cell >{formatDate(item.startDate, "DD-MMM-YYYY")}</Table.Cell>
                                <Table.Cell >{formatDate(item.endDate, "DD-MMM-YYYY")}</Table.Cell>
                                <Table.Cell>
                                    <div class="ui button" data-inverted="" data-tooltip="edit Approver" data-position="bottom center">
                                        <Link to={"/editSubstituteByAdmin/" + item.supervisorSubstituteId}><Icon name='edit'/></Link>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div class="ui button" data-inverted="" data-tooltip="delete substituter" data-position="bottom center">
                                        <Icon name='user delete' onClick={() => this.show(item.supervisorSubstituteId)}/></div>
                                            <Confirm
                                                open={this.state.open}
                                                header='Delete substituter'
                                                onCancel={() => this.handleCancel()}
                                                onConfirm={() => this.handleConfirm()}
                                            />
                                        </Table.Cell>
                            </Table.Row>
                        )
                    })
                }
                </Table.Body>
            </Table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
       
        AllSupervisorSubstitute: state.AllSupervisorSubstitute
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getallSupervisorSubstitute,deleteSubstituter}, dispatch);
}

export default connect (mapStateToProps,mapDispatchToProps)(AllSupervisorSubstitution);