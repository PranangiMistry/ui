import React, { Component } from 'react'
import { Icon, Label, Menu, Table, Checkbox, Button, Confirm, Grid, Divider, Column } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import {getAllVendorData,deleteVendor} from '../../vendor/actions/vendorAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

let data=[];
class Vendors extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            vendor_id: '',
        }
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.show = this.show.bind(this);
    }

    show(vendorId) {
        this.setState({ open: true, vendor_id: vendorId })
    }
    handleConfirm() {
        this.setState({ open: false })
        this.props.deleteVendor(this.state.vendor_id);
    }
    handleCancel() { this.setState({ open: false }) }

    componentDidMount() {
        this.props.getAllVendorData();
    }

    render(){
        return(
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h3 style={{ marginLeft: '5em' }}>ALL VENDOR</h3>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ alignItems: "right" }}><Link to="/setUpVendor"><Button primary>create new vendor</Button></Link></div>
                    </Grid.Column>
                </Grid>
                <Divider />

                <Table celled sortable>
                    <Table.Header>
                        <Table.Row>
                             <Table.HeaderCell>Vendor Name</Table.HeaderCell>
                             <Table.HeaderCell>vendor Cell</Table.HeaderCell>
                             <Table.HeaderCell>vendor Phone</Table.HeaderCell>
                             <Table.HeaderCell>Update Vendor</Table.HeaderCell>
                             <Table.HeaderCell>Delete Vendor</Table.HeaderCell>
                                                         
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            this.props.vendors.map((item, key) => {
                                return (
                                    <Table.Row key={item.vendorId}>
                                        <Table.Cell >{item.vendorCompanyName}</Table.Cell>
                                        <Table.Cell >{item.vendorCell}</Table.Cell>
                                        <Table.Cell >{item.vendorPhone}</Table.Cell>
                                        <Table.Cell>
                                            <div class="ui button" data-inverted="" data-tooltip="edit vendor" data-position="bottom center">
                                            <Link to={"/editVendor/" + item.vendorId}><Icon name='edit'/></Link>
                                            </div>
                                            </Table.Cell>
                                            <Table.Cell>
                                            <div class="ui button" data-inverted="" data-tooltip="delete vendor" data-position="bottom center">
                                            <Icon name='user delete' onClick={() => this.show(item.vendorId)}/></div>
                                            <Confirm
                                                open={this.state.open}
                                                header='Delete vendor'
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
    data=state.vendors;
    return {
        vendors: state.vendors,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({getAllVendorData,deleteVendor}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Vendors);