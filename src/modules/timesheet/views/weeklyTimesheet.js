import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, Button, Icon, Grid, Divider, Dropdown } from 'semantic-ui-react'
import { formatDate, parseDate } from "react-day-picker/moment";
import moment, { lang } from 'moment';

class WeeklyTimesheet extends Component {
    constructor(props) {
        super(props);
        console.log("adcnjkasbvyc")
        this.state = {
            inputList: [],
            dateList:[],
            weekDayList:[]
        };
        this.onAddBtnClick = this.onAddBtnClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSaveTimesheet = this.onSaveTimesheet.bind(this);
        this.generateDates = this.generateDates.bind(this);
        this.onSaveAndSubmitTimesheet = this.onSaveAndSubmitTimesheet.bind(this);
    }
    componentDidMount() {
 
    }
    componentWillReceiveProps(next) {
        console.log("componentWillReceiveProps");
        let startD = new Date(next.weeklyData.startDate);
        let mStart = moment(startD);
        let i = 0,weekday=[],timelist=[];
        while (i < 7) {
            let data = mStart;
            let day = data.format('dddd');
            let timeDate = data.format('DD/MM/YYYY');
            mStart.add(1, 'day');
            weekday = [...weekday, day];
            timelist = [...timelist, timeDate];
        }
        this.setState({
            weekDayList: [...weekday],
            dateList: [...timelist]
        })
    }
    onAddBtnClick(event) {
        // const inputList = this.state.inputList;
        // let inp = []
        // let startD = new Date(this.props.weeklyData.startDate);
        // let mStart = moment(startD);

        // inp.push(<br />)
        // for (let i = 0; i < 4; i++) {
        //     inp.push(<input className="myinput" placeholder={startD} index={(inputList.length * 4) + i + 1} key={(inputList.length * 4) + i + 1} onChange={this.onInputChange} />)
        // }
        // inp.push(<br />)
        // this.setState({
        //     inputList: [...this.state.inputList, inp]
        // });
    }
    onInputChange(event) {
    }
    onSaveTimesheet(ID) {
    }
    onSaveAndSubmitTimesheet() {
    }
    generateDates() {
  
    }
    render() {

        return (
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h2 style={{ marginLeft: '5em' }}>TIMESHEET</h2>
                    </Grid.Column>
                </Grid>
                <Divider />
                <Grid>
                    <Grid.Column style={{ marginLeft: "2em", marginRight: "2em" }} >
                        <div style={{ marginLeft: "2em" }}>
                            <div>Project :{this.props.weeklyData.projectName} </div><br />
                            <div>Supervisor 1 : </div><br />
                            <div>Supervisor 2 : </div><br />
                        </div>
                    </Grid.Column>
                </Grid>
                <Grid>
                {/* { this.generateDates()} */}
                <Dropdown selection search options={this.props.weeklyData.deliverables} placeholder='Select project' /><br /><br />
                { this.state.weekDayList}
                { this.state.dateList}
                </Grid>
                <Grid columns="equal" padded>
                    <Grid.Column className="ten wide column">
                        <div style={{ marginLeft: "2em" }}><button className='mybutton' onClick={this.onAddBtnClick}><Icon name='add' color='green' size='large' /></button></div>
                    </Grid.Column>
                    <Grid.Column className="six wide column">
                        <Button.Group>
                            <Button primary onClick={() => this.onSaveTimesheet(this.props.weeklyData.timesheetId)}>Save</Button>
                            <Button color="green" onClick={this.onSaveAndSubmitTimesheet()}>Save & Submit</Button>
                        </Button.Group>
                    </Grid.Column>
                </Grid>
                <Divider />
                <div style={{ marginLeft: "2em" }}>
                    {this.state.inputList.map(function (input, index) {
                        return input;
                    })}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyTimesheet);