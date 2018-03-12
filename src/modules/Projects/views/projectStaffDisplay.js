import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input,Icon, Label, Menu, Table, Checkbox,Dropdown, Button, Confirm, Grid, Divider, Column } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { getProjectStaffDisplay,delProjectStaff} from '../../Projects/actions/projectStaffDisplayAction';
import { Link } from 'react-router-dom';
import { formatDate, parseDate } from "react-day-picker/moment";

let data=[];
class projectStaffDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            projStaffId:''
        }
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.show = this.show.bind(this);
    }
    componentDidMount() {
       this.props.getProjectStaffDisplay();
    }
    show(projStaffId) {
        this.setState({ open: true, projStaffId: projStaffId })
    }
    handleConfirm() {
        this.setState({ open: false })
        this.props.delProjectStaff(this.state.projStaffId);
    }
    handleCancel() { this.setState({ open: false }) }
    render() {

        return (
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h3 style={{ marginLeft: '5em' }}>project staff</h3>
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
                            <Table.HeaderCell>employee name </Table.HeaderCell>
                            <Table.HeaderCell>deliverables </Table.HeaderCell>
                            <Table.HeaderCell>supervisor1</Table.HeaderCell>
                            <Table.HeaderCell>supervisor2</Table.HeaderCell>
                            <Table.HeaderCell>supervisor3</Table.HeaderCell>
                            <Table.HeaderCell>time-sheet type</Table.HeaderCell>
                            <Table.HeaderCell>time-sheet start date</Table.HeaderCell>
                            <Table.HeaderCell>time-sheet end date</Table.HeaderCell>
                            <Table.HeaderCell>actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            this.props.projectStaffDisplayData.map((item, key) => {
                                var tsEndDate='';
                                if(item.tsEndDate!==null)
                                      tsEndDate=formatDate(item.tsEndDate, "DD-MMM-YYYY");
                                return (
                                    <Table.Row key={item.projStaffId}>
                                        <Table.Cell >{item.projectName}</Table.Cell>
                                        <Table.Cell >{item.userName}</Table.Cell>
                                        <Table.Cell >{
                                            item.deliverables.map((itm, idn) => {
                                                return (
                                                    <div key={idn}>{itm}</div>
                                                )
                                            })
                                        }</Table.Cell>
                                        <Table.Cell >{item.supervisor1Name}</Table.Cell>
                                        <Table.Cell >{item.supervisor2Name}</Table.Cell>
                                        <Table.Cell >{item.supervisor3Name}</Table.Cell>
                                        <Table.Cell >{item.tsType}</Table.Cell>
                                        <Table.Cell >{formatDate(item.tsStartDate, "DD-MMM-YYYY")}</Table.Cell>
                                        <Table.Cell >{tsEndDate}</Table.Cell>
                                        <Table.Cell >
                                        <div class="ui button" data-inverted="" data-tooltip="edit user" data-position="bottom center">
                                            <Link to={"/editProjectStaff/" + item.projStaffId}><Icon name='edit'/></Link>
                                        </div>
                                        <div className="ui button" data-inverted="" data-tooltip="delete staff" data-position="bottom center">
                                            <Icon name='user delete' onClick={() => this.show(item.projStaffId)}/></div>
                                            <Confirm
                                                open={this.state.open}
                                                header='Delete staff'
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
        );
    }
}

function mapStateToProps(state) {
    return {
        projectStaffDisplayData:state.projectStaffDisplayData
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getProjectStaffDisplay,delProjectStaff}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(projectStaffDisplay);