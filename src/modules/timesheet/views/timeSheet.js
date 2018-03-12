import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, Button, Icon, Grid, Divider, Dropdown } from 'semantic-ui-react'
import { getTimesheet } from '../../timesheet/actions/timesheetAction';
import WeeklyTimesheet from '../views/weeklyTimesheet';

class TimeSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        this.props.getTimesheet();
    }
    componentWillReceiveProps(next) {
    }
    onAddBtnClick(event) {
        const inputList = this.state.inputList;
        let inp = []
        inp.push(<br />)
        for (let i = 0; i < 4; i++) {
            inp.push(<input className="myinput" placeholder="input here" index={(inputList.length * 4) + i + 1} key={(inputList.length * 4) + i + 1} onChange={this.onInputChange} />)
            if (i === 3) {
                inp.push(<button className="mybutton" key={inputList.length} index={inputList.length} onClick={this.onRemove}><Icon name="close" color="red" /></button>)
            }
        }
        inp.push(<br />)
        this.setState({
            inputList: [...this.state.inputList, inp]
        });
    }
    onInputChange(event) {
    }
    onRemove(index) {
        const inputList = this.state.inputList
        inputList[index.currentTarget.getAttribute("index")] = ''
        this.setState({ inputList: inputList })
    }
    onSaveTimesheet() {
    }
    onSaveAndSubmitTimesheet() {
    }
    render() {

        return (
            <div>
                {
                    this.props.timesheet.map((item, key) => {
                        console.log(item.tsType);
                        if(item.tsType==="WEEKLY"){
                            console.log(item);
                            return(
                                 <WeeklyTimesheet weeklyData={item} />
                            )
                        }
                        if(item.tsType==="MONTHLY"){
                            console.log(item);
                            return(
                                 <WeeklyTimesheet weeklyData={item} />
                            )
                        }
                        if(item.tsType==="SEMI-MONTHLY"){
                            console.log(item);
                            return(
                                 <WeeklyTimesheet weeklyData={item} />
                            )
                        }
                        if(item.tsType==="BI-WEEKLY"){
                            console.log(item);
                            return(
                                 <WeeklyTimesheet weeklyData={item} />
                            )
                        }
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.timesheet);
    return {
        timesheet: state.timesheet
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getTimesheet}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeSheet);



// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Input, Dropdown,Container,Header,Icon,Checkbox, Label, Button, Divider } from 'semantic-ui-react';
// import { formatDate, parseDate } from "react-day-picker/moment";
// import { getTimesheet } from '../../timesheet/actions/timesheetAction';
// import { bindActionCreators } from 'redux';
// import moment, { lang } from 'moment';

// class TimeSheet extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             weekDay: [],
//             timeList: [],
//             listArr:[]
//         }
//         this.generateTimeSheet=this.generateTimeSheet.bind(this);
//     }
//     componentDidMount() {
//         this.props.getTimesheet();
//     }
//     generateTimeSheet() {
//        return(
//         this.state.timeList.map((item, key) => {
//             return (
//                 <Input key={key} size='mini' placeholder={item} />
//             )
//         })
//         )
//     }
//     componentWillReceiveProps(nextProps){
//         let weekday=[], timelist=[];
//         if (nextProps.timesheet[0]){
//             if (nextProps.timesheet[0].startDate) {
//                 let date1 = nextProps.timesheet[0].startDate;
//                 let date2 = nextProps.timesheet[0].endDate;
//                 let startD = new Date(date1);
//                 let endD = new Date(date2);
//                 let mStart = moment(startD);
//                 let mEnd = moment(endD);
//                 while (mEnd.diff(mStart, 'days') != -1) {
//                     let data = mStart;
//                     let day = data.format('dddd');
//                     let timeDate = data.format('DD/MM/YYYY');
//                     mStart.add(1, 'day');
//                     weekday = [...weekday, day];
//                     timelist = [...timelist, timeDate];
//                 }
//             }
//             this.setState({
//                 weekDay:[...weekday],
//                 timeList:[...timelist]
//             })
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <br/><br/><br/>
//                 <Container>
//                     <Header as='h2'>Header</Header>
//                     <div><Icon name='add' onClick={() => this.generateTimeSheet()} /></div>
//                     {this.generateTimeSheet()}
//                 </Container>
//             </div>
//         );
//     }
//  }

//  function mapStateToProps(state) {
//     return {
//         timesheet: state.timesheet
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({getTimesheet}, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TimeSheet);



