import React, { Component } from 'react';
import { Input, Checkbox, Dropdown, Button,Table, TextArea, Divider, Grid, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from "react-day-picker/moment";
import 'react-day-picker/lib/style.css';
import {addNewHoliday} from '../../holiday/actions/addHoliday';
import {getAllHolidays,delHoliday} from '../../holiday/actions/view-delete-HolidaysAction';

class Holidays extends Component {

    constructor(props) {
        super(props);
        this.state={
            hide:true,
            date:'',
            desc:''
        }
        this.changeDate = this.changeDate.bind(this)
        this.changeDesc = this.changeDesc.bind(this)
        this.addHoliday = this.addHoliday.bind(this)
        this.viewHoliday = this.viewHoliday.bind(this)
        this.deleteHoliday=this.deleteHoliday.bind(this)
        this.hideHoliday=this.hideHoliday.bind(this)
    }
    componentDidMount(){
        
    }
    changeDate(day) {
        this.setState({date : formatDate(day, "DD-MMM-YYYY")})
    }
    changeDesc(e) {
        this.setState({desc : e.target.value})
    }
    addHoliday() {
        this.props.addNewHoliday({"holidayDate":this.state.date,"holidayDesc":this.state.desc})
    }
    viewHoliday(){
        this.props.getAllHolidays()
        this.setState({hide:false})
    }
    hideHoliday(){
        this.setState({hide:true})
    }
    deleteHoliday(id){
        this.props.delHoliday(id)
    }
    render() {
        return (
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="ten wide column">
                        <h2 style={{ marginLeft: '5em' }}>Holiday Entry</h2>
                    </Grid.Column>
                    <Grid.Column>
                    <div style={{ alignItems: "right" }}>
                        <Button primary onClick={this.viewHoliday}>View/Delete Holidays</Button>
                        <Button primary onClick={this.addHoliday}>Add Holiday</Button></div>
                    </Grid.Column>
                </Grid>
                <Divider />
                <div style={{ marginLeft: '5em' }}>
                    <Grid columns={5} padded>
                        <Grid.Column width="2">
                            <h4 style={{ textAlign: "right", marginTop: "1em" }}>Holiday Date</h4>
                            <Divider hidden />
                            <h4 style={{ textAlign: "right", marginTop: "4em" }}>Holiday Description</h4>
                        </Grid.Column>
                        <Grid.Column width='1'>
                            <Divider vertical><Icon disabled name='angle right' /></Divider>
                        </Grid.Column>
                        <Grid.Column className="ten wide column"><br />
                            <DayPickerInput formatDate={formatDate} placeholder="dd-MMM-yyyy" value={this.state.date} onDayChange={this.changeDate} /><br />
                            <Divider /><br />
                            <TextArea onChange={this.changeDesc} placeholder='Holiday Description' style={{ width: 500, borderColor: "#33A5FF", borderRadius: "3px", minHeight: 80 }} />
                        </Grid.Column>
                    </Grid>
                </div>
        
               <div hidden={this.state.hide}>
               <Button primary onClick={this.hideHoliday}>Hide</Button>
               
                   <Table celled sortable>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Holiday Date</Table.HeaderCell>
                <Table.HeaderCell>Holiday Description</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {
                this.props.allHolidays.map((item, key) => {
                    return (
                        <Table.Row key={item.holidayId}>
                            <Table.Cell >{item.holidayDate}</Table.Cell>
                            <Table.Cell >{item.holidayDesc}</Table.Cell>
                            <Table.Cell>
                                <div class="ui button" data-inverted="" data-tooltip="delete holiday" data-position="bottom center">
                                <Icon name='delete' onClick={()=>this.deleteHoliday(item.holidayId)}/></div>
                            </Table.Cell>
                        </Table.Row>
                    )
                })
            }
        </Table.Body>
    </Table>
    </div>
    
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        holidayData: state.holidayData,
        allHolidays: state.allHolidays
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({addNewHoliday,getAllHolidays,delHoliday}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Holidays)
