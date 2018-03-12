import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Label, Menu, Table, Checkbox, Button, Confirm, Grid, Divider, Column } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { getAllUsers, deleteUser, delUserPermanent } from '../../user/actions/allUserActions';
import { Link } from 'react-router-dom';

let data=[];
class AllUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            user_id: '',
        }
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.show = this.show.bind(this);
    }
    componentDidMount() {
        this.props.getAllUsers();
    }

    deleteUser(userId, isActive) {
        this.props.deleteUser(userId, isActive);
    }
    show(userId) {
        this.setState({ open: true, user_id: userId })
    }
    handleConfirm() {
        this.setState({ open: false })
        this.props.delUserPermanent(this.state.user_id);
    }
    handleCancel() { this.setState({ open: false }) }
    render() {
        return (
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h3 style={{ marginLeft: '5em' }}>ALL USERS</h3>
                    </Grid.Column>
                    <Grid.Column>
                    
                        <div style={{ alignItems: "right" }}><Link to="/newUser"><Button primary>create new user</Button></Link></div>
                    </Grid.Column>
                </Grid>
                <Table celled sortable size="small">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>user-id</Table.HeaderCell>
                            <Table.HeaderCell>first name</Table.HeaderCell>
                            <Table.HeaderCell>last name</Table.HeaderCell>
                            <Table.HeaderCell>role</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                            <Table.HeaderCell>Activate/Deactivate user</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            this.props.allUsers.map((item, key) => {
                                var roleList=[""];
                                if(item.isAdmin==1)
                                {
                                    roleList=[...roleList,"Admin"];
                                }
                                if(item.isSupervisor==1)
                                {
                                    roleList=[...roleList,"Supervisor"];
                                }
                                if(item.isEmployee==1)
                                {
                                    roleList=[...roleList,"Employee"];
                                }
                                if(item.isProjectManager==1)
                                {
                                    roleList=[...roleList,"Project-Manager"];
                                }
                                return (
                                    <Table.Row key={item.userId} size="small">
                                        <Table.Cell >{item.uEmail}</Table.Cell>
                                        <Table.Cell >{item.uFirstName}</Table.Cell>
                                        <Table.Cell >{item.uLastName}</Table.Cell>
                                        <Table.Cell >{roleList.map((itm, id) => {
                                            return(
                                                <div key={itm}>{itm}</div>
                                            )
                                        })}</Table.Cell>
                                        <Table.Cell>
                                            <div className="ui button" data-inverted="" data-tooltip="edit user" data-position="bottom center">
                                            <Link to={"/editUser/" + item.userId}><Icon name='edit'/></Link>
                                            </div>
                                            <div className="ui button" data-inverted="" data-tooltip="delete user" data-position="bottom center">
                                            <Icon name='user delete' onClick={() => this.show(item.userId)}/></div>
                                            <Confirm
                                                open={this.state.open}
                                                header='Delete User'
                                                onCancel={() => this.handleCancel()}
                                                onConfirm={() => this.handleConfirm()}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                            <div className="ui button" data-inverted="" data-tooltip="activate/deactivate user" data-position="bottom center">
                                            <Checkbox toggle checked={item.uIsActive} onClick={() => this.deleteUser(item.userId, item.uIsActive)} />
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
    data=state.allUsers
    return {
        allUsers: state.allUsers,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllUsers, deleteUser, delUserPermanent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);