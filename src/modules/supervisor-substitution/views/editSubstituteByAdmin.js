import React,{Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatDate, parseDate } from "react-day-picker/moment";
import { Input, Checkbox, Button,Divider,Dropdown,Grid,Icon } from 'semantic-ui-react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {getSubstitutionDropdown } from '../../dropdown/actions/substitutionDropDown'
import {getSupervisorDropdown} from '../../dropdown/actions/supervisorListDropdownAction';
import {getEdituSupervisorSubstitteData,changeSupevisor,changeUser,changeUserName,changeStartDate,changeEndDate,changeSendEmail,updateEdituSupervisorSubstitteData,changeSupervisorName} from '../../supervisor-substitution/actions/EditSubstituteByAdminAction'

class EditSubstituteByAdmin extends Component
{
    constructor(props)
    {
        super(props)
         this.state={
            substituteOptions:[],
            supervisorOptions:[]
            }

        this.changeSendEmail=this.changeSendEmail.bind(this);
        this.changeUser=this.changeUser.bind(this);
        this.changeStartDate=this.changeStartDate.bind(this);
        this.changeEndDate=this.changeEndDate.bind(this);
        this.submit=this.submit.bind(this)
        this.changeSupervisor=this.changeSupervisor.bind(this); 

    }

    componentDidMount() {
        this.props.getSubstitutionDropdown();
        this.props.getSupervisorDropdown();
        this.props.getEdituSupervisorSubstitteData(this.props.match.params.supervisorSubstituteId);
    }

    changeSupervisor(event)
    {
       var supevisorId=event.currentTarget.getAttribute('index')
       var supervisorName=event.currentTarget.textContent;
        this.props.changeSupervisorName(supervisorName)
        this.props.changeSupevisor(supevisorId);
    }

    changeUser(event)
    {  
       var userId=event.currentTarget.getAttribute('index')
     var userName=event.currentTarget.textContent;
        this.props.changeUser(userId);
        this.props.changeUserName(userName);

    }

    changeStartDate(day)
    {
        var date = formatDate(day, "DD-MMM-YYYY")
        this.props.changeStartDate(date);
       
    }

    changeEndDate(day)
    {
        var date = formatDate(day, "DD-MMM-YYYY")
        this.props.changeEndDate(day);
    
    }

    changeSendEmail(event)
    {   
        this.props.changeSendEmail(event.target.value);
    }

    submit()
    {
        this.props.updateEdituSupervisorSubstitteData(this.props.match.params.supervisorSubstituteId);
    }

    componentWillReceiveProps(nextProps)
    {
        if(nextProps.SubstitutionDropDown!=null)
         {
            var substituteOptions= nextProps.SubstitutionDropDown
             this.setState({
                substituteOptions:substituteOptions
             })
         }

         if(nextProps.SupervisorListDropDown!=null)
         {
             
            var supervisorOptions= nextProps.SupervisorListDropDown
             this.setState({
                supervisorOptions:supervisorOptions
             })
         }
    }

    render()
    {   
        return(
            <div>
                <Grid columns="equal" padded>
                     <Grid.Column className="twelve wide column">
                         <h2 style={{ marginLeft: '5em' }}>Substitute supervisor</h2>
                    </Grid.Column>
                    <Grid.Column>
                    <div style={{alignItems:"right"}}><Button primary onClick={this.submit}>substitute</Button></div>
                    </Grid.Column>
                </Grid>
                <Divider />

                <div style={{ marginLeft: '7em' }}>
                <Grid columns={5} padded>
                <Grid.Column width="2">
                <h4 style={{textAlign:"right",marginTop:"1em"}}>Supervisor Name</h4>
                <Divider hidden />
                <h4 style={{textAlign:"right",marginTop:"1em"}}>Substitutor Name</h4>
                <Divider hidden />
                <h4 style={{textAlign:"right",marginTop:"2em"}}>Start Date</h4>
                <Divider hidden />
                <h4 style={{textAlign:"right",marginTop:"1.5em"}}>End Date</h4>
                <Divider hidden />
                </Grid.Column>
                <Grid.Column width='1'>
                     <Divider vertical><Icon disabled name='angle right' /></Divider>
                </Grid.Column>
                <Grid.Column className="ten wide column">
                <Dropdown selection search text={this.props.EditSubstituteByAdmin[0].supervisorName} onChange={this.changeSupervisor} options={this.state.supervisorOptions} placeholder='Select Supervisor' /><br />
                  <Divider />
                  <Dropdown selection search text={this.props.EditSubstituteByAdmin[0].userName} onChange={this.changeUser} options={this.state.substituteOptions} placeholder='Select Substitutor' /><br />
                  <Divider />

                  <DayPickerInput  placeholder={formatDate(this.props.EditSubstituteByAdmin[0].startDate, "DD-MMM-YYYY")}  onDayChange={this.changeStartDate} />
                            <Divider /><br />
                            
                            <DayPickerInput placeholder={formatDate(this.props.EditSubstituteByAdmin[0].endDate, "DD-MMM-YYYY")} onDayChange={this.changeEndDate} />
                            <Divider /><br/>
              
                <Checkbox  style={{ marginLeft: '1em' }} checked={this.props.EditSubstituteByAdmin[0].sendEmail} label='Send Email' onChange={this.changeSendEmail} />
                
                <Divider />
              
                </Grid.Column>
                </Grid>
           </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
       
        SubstitutionDropDown:state.SubstitutionDropDown,
        SupervisorListDropDown:state.SupervisorListDropDown,
        EditSubstituteByAdmin:state.EditSubstituteByAdmin
       
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getSubstitutionDropdown,changeUserName,changeSupervisorName,changeSupevisor,changeUser,updateEdituSupervisorSubstitteData,changeStartDate,changeEndDate,changeSendEmail ,getSupervisorDropdown,getEdituSupervisorSubstitteData}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(EditSubstituteByAdmin)