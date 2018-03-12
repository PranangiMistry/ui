import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, Button, Icon, Grid, Divider, Dropdown } from 'semantic-ui-react'
import {getProjectDropdown} from '../../dropdown/actions/weeklyTimesheet-ProjectDropdown-Actions';
import {getSupervisorDropdown} from '../../dropdown/actions/weeklyTimesheet-SupervisorDropdown-Actions';

class WeeklyTimesheet extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputList: [],
            projectOptions:undefined,
            timesheetOptions:undefined,
            supervisorOptions:undefined
        };
        this.onAddBtnClick = this.onAddBtnClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onSaveTimesheet = this.onSaveTimesheet.bind(this);
        this.onSubmitTimesheet = this.onSubmitTimesheet.bind(this);
        this.onSaveAndSubmitTimesheet = this.onSaveAndSubmitTimesheet.bind(this);
    }
    componentDidMount(){
        this.props.getProjectDropdown()
        this.props.getSupervisorDropdown()
    }
    componentWillReceiveProps(next){
        if(this.state.projectOptions===undefined && next.tsProjectDropdown!=null){
            this.setState({projectOptions:next.tsProjectDropdown})
        }
        // if(this.state.timesheetOptions===undefined && next.wtTimesheetDropdown!=null){
        //     this.setState({timesheetOptions:next.wtTimesheetDropdown})
        // }
        if(this.state.supervisorOptions===undefined && next.tsSupervisorDropdown!=null){
            this.setState({supervisorOptions:next.tsSupervisorDropdown})
        }
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
    onSaveTimesheet(){
    }
    onSubmitTimesheet(){
    }
    onSaveAndSubmitTimesheet(){
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
                            <div>Projects : </div><br />
                            <div>Supervisor 1 : </div><br />
                            <div>Supervisor 2 : </div><br />
                        </div>
                        <Divider /><br />
                        <Dropdown selection search options={this.state.projectOptions} placeholder='select project' />
                        <Dropdown selection search options={[{ value: "timesheet", text: "Timesheet" }]} placeholder='select timesheet' />
                        <Dropdown selection search options={this.state.supervisorOptions} placeholder='select supervisor' /><br /><br />
                        {/* <Divider /><br /> */}
                    </Grid.Column>
                </Grid>
                <Grid columns="equal" padded>
                    <Grid.Column className="ten wide column">
                        <div style={{ marginLeft: "2em" }}><button className='mybutton' onClick={this.onAddBtnClick}><Icon name='add' color='green' size='large' /></button></div>
                    </Grid.Column>
                    <Grid.Column className="six wide column">
                        <Button.Group>
                            <Button primary onClick={this.onSaveTimesheet}>Save</Button>
                            <Button color="orange" onClick={this.onSubmitTimesheet}>Submit</Button>
                            <Button color="green" onClick={this.onSaveAndSubmitTimesheet}>Save & Submit</Button>
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
    tsProjectDropdown: state.tsProjectDropdown,
    tsSupervisorDropdown:state.tsSupervisorDropdown
   }
}
function mapDispatchToProps(dispatch) {
   return bindActionCreators({getProjectDropdown,getSupervisorDropdown}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyTimesheet);