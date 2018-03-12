import React,{Component} from 'react';
import { Input, Checkbox, Button,Divider,Dropdown,Grid,Icon } from 'semantic-ui-react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {addSubstitution} from '../../supervisor-substitution/actions/supervisorSubstitutionAction'
import {getSubstitutionDropdown } from '../../dropdown/actions/substitutionDropDown'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatDate, parseDate } from "react-day-picker/moment";

class SupervisorSubstitution extends Component{

    constructor(props)
    {
        super(props)
        this.state={
            supervisorId:'',
            userId:'',
            startDate:undefined,
            endDate:undefined,
            sendEmail:true,
            substituteOptions:[],
            id:''
        }
        this.changeSendEmail=this.changeSendEmail.bind(this);
        this.changeSubstitutor=this.changeSubstitutor.bind(this);
        this.changeStartDate=this.changeStartDate.bind(this);
        this.changeEndDate=this.changeEndDate.bind(this);
        this.submit=this.submit.bind(this)
    }

    changeSubstitutor(event)
    {  this.setState({
        id:event.currentTarget.getAttribute('index')
    })
    }

    changeStartDate(day)
    {
        var date = formatDate(day, "DD-MMM-YYYY")
        this.setState({
            startDate:date
        })
       
    }

    changeEndDate(day)
    {
        var date = formatDate(day, "DD-MMM-YYYY")
        this.setState({
            endDate:date
        })
    
    }

    changeSendEmail()
    {
        if (this.state.sendEmail === true) {
            this.setState({
                sendEmail: false
            })
        }
        else {
            this.setState({
                sendEmail: true
            })
        }
        
    }

    submit()
    {
            let data={
                supervisorId:this.props.auth.userId,
                userId:this.state.id,
                startDate:this.state.startDate,
                endDate:this.state.endDate,
                sendEmail:this.state.sendEmail
            }
            this.props.addSubstitution(data);

    }

    componentDidMount() {
        this.props.getSubstitutionDropdown();
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
                <h4 style={{textAlign:"right",marginTop:"1em"}}>User Name</h4>
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

                  {/*   */}
                  <Dropdown selection search onChange={this.changeSubstitutor} options={this.state.substituteOptions} placeholder='Select Substitutor' /><br />
                  <Divider />
                  <DayPickerInput onDayChange={this.changeStartDate} />
                            <Divider /><br />
                            
                            <DayPickerInput onDayChange={this.changeEndDate} />
                            <Divider /><br/>
              
                <Checkbox style={{ marginLeft: '1em' }} label='Send Email' onChange={this.changeSendEmail} checked={this.state.sendEmail} />
                
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
        auth: state.login,
        SubstitutionDropDown:state.SubstitutionDropDown,
        SupervisorSubstitution:state.SupervisorSubstitution
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getSubstitutionDropdown,addSubstitution }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps) (SupervisorSubstitution)