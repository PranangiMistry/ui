import React, { Component } from 'react'
import { Input, Checkbox, Button, Divider, Grid, Icon, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {getProjectDropdown} from '../../dropdown/actions/projectDropdownAction';
import { bindActionCreators } from 'redux';
import { formatDate, parseDate } from "react-day-picker/moment";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {payOrder} from '../../Projects/actions/projectPOAction'
import 'react-day-picker/lib/style.css';

// protected String payOrderId;
// protected String projectId;
// protected String payOrderStartDate;
// protected String payOrderEndDate;
// protected String cost;

var projectId=""
class ProjectPO extends Component
{
    constructor(props)
    {
        super(props)
        this.state=({
            payOrderStartDate:undefined,       
            payOrderEndDate: undefined,
            cost:''

        })
        this.changeProject=this.changeProject.bind(this);
        this.changeStartDate=this.changeStartDate.bind(this);
        this.changeEndDate=this.changeEndDate.bind(this);
        this.changeCost=this.changeCost.bind(this);
        this.addProjectPayOrder=this.addProjectPayOrder.bind(this);
    }
    changeStartDate(day)
    {
        var date = formatDate(day, "DD-MMM-YYYY")
        this.setState({
            payOrderStartDate:date
        })
    }
    changeEndDate(day)
    {
        var date = formatDate(day, "DD-MMM-YYYY")
        this.setState({
            payOrderEndDate:date
        }) 
    }
    changeProject(event)
    {
        projectId = event.currentTarget.getAttribute('index');
    }
    
    changeCost(event){
        this.setState({
            cost:event.target.value
        })
    }

    addProjectPayOrder(){
        if(this.state.payOrderStartDate!= '' && this.state.payOrderEndDate!= '' && this.state.payOrderStartDate> this.state.payOrderEndDate)
        {
        alert("Please ensure that the End Date is greater than or equal to the Start Date.");
        } 
         
        else{      
        let data = {
            payOrderStartDate:this.state.payOrderStartDate,
            payOrderEndDate:this.state.payOrderEndDate,
            cost:this.state.cost,
            projectId:projectId
        }
        this.props.payOrder(data);
    }
    }

    componentDidMount() 
    {
        this.props.getProjectDropdown();
    }

    render(){
        return(
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h2 style={{ marginLeft: '5em' }}>Project Pay Order</h2>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ alignItems: "right" }}><Button primary onClick={this.addProjectPayOrder}>Add Project Pay Order</Button></div>
                    </Grid.Column>
                </Grid>
                <Divider />

                <div style={{ marginLeft: '5em' }}>
                    <Grid columns={10} padded>
                        <Grid.Column width="4">
                            <h4 style={{ textAlign: "right", marginTop: "1em" }}>projects</h4>
                            <h4 style={{ textAlign: "right", marginTop: "4em" }}>Pay Order Start Date</h4>
                            <h4 style={{ textAlign: "right", marginTop: "4em" }}>Pay Order End Date</h4>
                            <h4 style={{ textAlign: "right", marginTop: "24m" }}>Cost</h4>
                        </Grid.Column>
                        <Grid.Column className="ten wide column">
                            <Dropdown selection search onChange={this.changeProject} options={this.props.projectDropdown} placeholder='Select project' /><br/><br/>
                            <Divider /><br />
                            
                            <DayPickerInput onDayChange={this.changeStartDate} />
                            <Divider /><br />
                            
                            <DayPickerInput onDayChange={this.changeEndDate} />
                            <Divider /><br/>

                            <Input focus label={{ color: 'blue', content: 'cost' }} placeholder='cost' type='text' required onChange={this.changeCost} /><br />
                            
                        </Grid.Column>
                    </Grid>
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        projectDropdown: state.projectDropdown,
        ProjectPO:state.ProjectPO
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getProjectDropdown,payOrder }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectPO)