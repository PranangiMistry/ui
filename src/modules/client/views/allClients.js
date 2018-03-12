import { getAllClientData, activeDeActiveClient, deleteClientPermanent } from '../../client/actions/allClientAction';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Label, Menu, Table, Checkbox, Pagination, Button, Confirm, Grid, Divider, Column } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { getPage } from '../../pagination/actions/paginationAction';
import { Link } from 'react-router-dom';
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown';

let count = 0
let totalPages = 1
let oldProps = []
const initialState = [{ clientId: '', clientName: '', clientCode: '', streetName1: '', streetName2: '', isActive: '', city: '', state: '', country: '', zipCode: '' }];
class AllClients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            client_id: '',
            activePage: 1,
            flag: false,
            editClient: false,
            sort: false
        }
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.activeDeactive = this.activeDeactive.bind(this);
        this.show = this.show.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.sortData = this.sortData.bind(this);
    }
    componentDidMount() {
        this.props.getAllClientData();
        count = 0
    }
    componentWillReceiveProps(next) {
        if (next.allClients != oldProps) {
            oldProps = next.allClients
            if (count === 0 || count === 1) {
                this.props.getAllClientData()
                this.props.getPage(this.state.activePage, next.allClients)
                count++

            }
            if (this.props.location.query != null) {
                this.props.getPage(this.props.location.query.activePage, next.allClients)
                this.setState({ activePage: this.props.location.query.activePage })
                count = 0
                this.props.location.query = null
            }
        }

    }

    activeDeactive(clientId, isActive) {
        this.props.activeDeActiveClient(clientId, isActive);
        count = 0
    }

    show(clientId) {
        this.setState({ open: true, client_id: clientId })
    }
    handleConfirm() {
        this.props.deleteClientPermanent(this.state.client_id);
        this.setState({ open: false })
        count = 0
    }
    handleCancel() { this.setState({ open: false }) }

    handlePageChange(e, { activePage }) {
        this.setState({ activePage: activePage });
        this.props.getPage(activePage, this.props.allClients)
    }
    // sortData(e) {
    //     const m = this.props.allClients
    //     let genreA, genreB
    //     function compare(a, b) {
    //         if (e.currentTarget.textContent === "clientName") {
    //             genreA = a.clientName.toUpperCase();
    //             genreB = b.clientName.toUpperCase();
    //         }
    //         if (e.currentTarget.textContent === "clientCode") {
    //             genreA = a.clientCode.toUpperCase();
    //             genreB = b.clientCode.toUpperCase();
    //         }
    //         let comparison = 0;
    //         if (genreA > genreB) {
    //             comparison = 1;
    //         } else if (genreA < genreB) {
    //             comparison = -1;
    //         }
    //         return comparison;
    //     }
    //     const m1 = m.sort(compare);
    //     this.props.getPage(this.state.activePage, m1)
    //     this.setState({ sort: true })
    // }
    sortData(columnName, type) {
        const m = this.props.allClients
        let genreA, genreB
        function compare(a, b) {
            if (columnName === "clientName") {
                genreA = a.clientName.toUpperCase();
                genreB = b.clientName.toUpperCase();
            }
            if (columnName === "clientCode") {
                genreA = a.clientCode.toUpperCase();
                genreB = b.clientCode.toUpperCase();
            }
            if (type === "asc") {
                let comparison = 0;
                if (genreA > genreB) {
                    comparison = 1;
                } else if (genreA < genreB) {
                    comparison = -1;
                }
                return comparison;
            } else {
                let comparison = 0;
                if (genreA < genreB) {
                    comparison = 1;
                } else if (genreA > genreB) {
                    comparison = -1;
                }
                return comparison;
            }

        }
        const m1 = m.sort(compare);
        this.props.getPage(this.state.activePage, m1)
        this.setState({ sort: true })
    }

    render() {
        if (this.props.allClients != null) {
            if (this.props.allClients.length % 7 != 0)
                totalPages = (Math.floor(this.props.allClients.length / 7)) + 1
            else
                totalPages = Math.floor(this.props.allClients.length / 7)

        }
        return (
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h3 style={{ marginLeft: '5em' }}>ALL CLIENTS</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ alignItems: "right" }}>
                            {/* Sort By : <Dropdown onChange={this.sortData} selection placeholder="Select Column" options={[{ value: "clientName", text: "clientName" }, { value: "clientCode", text: "clientCode" }]}></Dropdown> */}
                            <Link to="/setUpClient" style={{ marginLeft: "1em" }}><Button primary>create new client</Button></Link>
                        </div>
                    </Grid.Column>
                </Grid>
                <Table celled sortable size="small" basic>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Client Name
                                <Button onClick={() => { this.sortData("clientName", "asc") }}><Icon name='sort alphabet ascending' /></Button>
                                <Button onClick={() => { this.sortData("clientName", "desc") }}><Icon name='sort alphabet descending' /></Button>
                            </Table.HeaderCell>
                            <Table.HeaderCell>Client Code
                                <Button onClick={() => { this.sortData("clientCode", "asc") }}><Icon name='sort alphabet ascending' /></Button>
                                <Button onClick={() => { this.sortData("clientCode", "desc") }}><Icon name='sort alphabet descending' /></Button>
                            </Table.HeaderCell>
                            <Table.HeaderCell>Update Client</Table.HeaderCell>
                            <Table.HeaderCell>Delete Client</Table.HeaderCell>
                            <Table.HeaderCell>Active/deactive Client</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            this.props.pageData.map((item, key) => {
                                return (
                                    <Table.Row key={item.clientId}>
                                        <Table.Cell >{item.clientName}</Table.Cell>
                                        <Table.Cell >{item.clientCode}</Table.Cell>
                                        <Table.Cell>
                                            <div className="ui button" data-inverted="" data-tooltip="edit client" data-position="bottom center">
                                                <Link to={{ pathname: "/editClient/" + item.clientId, query: { activepage: this.state.activePage } }}><Icon name='edit' /></Link>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <div className="ui button" data-inverted="" data-tooltip="delete client" data-position="bottom center">
                                                <Icon name='user delete' onClick={() => this.show(item.clientId)} /></div>
                                            <Confirm
                                                open={this.state.open}
                                                header='Delete Client'
                                                onCancel={() => this.handleCancel()}
                                                onConfirm={() => this.handleConfirm()}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                            <div className="ui button" data-inverted="" data-tooltip="activate/deactivate Client" data-position="bottom center">
                                                <Checkbox toggle checked={item.isActive} onClick={() => this.activeDeactive(item.clientId, item.isActive)} />
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
                    </Table.Body>
                </Table>
                <Pagination
                    activePage={this.state.activePage}
                    onPageChange={this.handlePageChange}
                    totalPages={totalPages}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        allClients: state.allClients,
        pageData: state.PaginationPage
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getPage, getAllClientData, activeDeActiveClient, deleteClientPermanent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AllClients);