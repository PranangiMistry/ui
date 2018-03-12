import React, { Component } from 'react'
import { Input, Checkbox, Button,Divider,Grid,Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import {getAllVendorData,getEditVendorData,updateEditVendor,changeVendorCompanyName,
    changeVendorStreetName1,changeVendorStreetName2,changeVendorCity,changeVendorState,
    changeVendorCountry,changeVendorEmail,changeVendorCell,changeVendorPhone
} from '../../vendor/actions/editVendorAction';

class EditVendor extends Component
{
    constructor(props) 
    {
        super(props);
        this.state={
            redirectto:false
        }
        this.updateVendor=this.updateVendor.bind(this);
        this.changeVendorCompanyName=this.changeVendorCompanyName.bind(this);
        this.changeVendorStreetName1=this.changeVendorStreetName1.bind(this);
        this.changeVendorStreetName2=this.changeVendorStreetName2.bind(this);
        this.changeVendorCity=this.changeVendorCity.bind(this);
        this.changeVendorState=this.changeVendorState.bind(this);
        this.changeVendorCountry=this.changeVendorCountry.bind(this);
        this.changeVendorEmail=this.changeVendorEmail.bind(this);
        this.changeVendorCell=this.changeVendorCell.bind(this);
        this.changeVendorPhone=this.changeVendorPhone.bind(this);
    }

    componentDidMount() {
        this.props.getEditVendorData(this.props.match.params.vendorId);
    }

    updateVendor() {
       
        this.props.updateEditVendor(this.props.match.params.vendorId);
       // <Redirect to="/allClients"/>
       this.setState({
           redirectto:true
       })
    }
   
    changeVendorCompanyName(event) {
        this.props.changeVendorCompanyName(event.target.value);
    }

    changeVendorStreetName1(event) {
        this.props.changeVendorStreetName1(event.target.value);
    }

    changeVendorStreetName2(event) {
        this.props.changeVendorStreetName2(event.target.value);
    }

    changeVendorCity(event) {
        this.props.changeVendorCity(event.target.value);
    }

    changeVendorState(event) {
        this.props.changeVendorState(event.target.value);
    }

    changeVendorCountry(event) {
        this.props.changeVendorCountry(event.target.value);
    }
    changeVendorEmail(event) {
        this.props.changeVendorEmail(event.target.value);
    }
    changeVendorCell(event) {
        this.props.changeVendorCell(event.target.value);
    }
    changeVendorPhone(event) {
        this.props.changeVendorPhone(event.target.value);
    }

   render()
   {
    if(this.state.redirectto===true)
    {
         return(
                <Redirect to="/vendors"/>
            )
    }
    const isEnabled =this.props.editVendor[0].vendorCompanyName.length > 0 ;

       return(
           <div>
                <Grid columns="equal" padded>
                     <Grid.Column className="twelve wide column">
                         <h2 style={{ marginLeft: '5em' }}>Edit Vendor</h2>
                    </Grid.Column>
                    <Grid.Column>
                    <div style={{alignItems:"right"}}><Button primary onClick={this.updateVendor} disabled={!isEnabled}>Update</Button></div>
                    </Grid.Column>
                </Grid>
                <Divider />
                
                <div style={{ marginLeft: '5em' }}>
                <Grid columns={5} padded>
                <Grid.Column width="2">
                <h4 style={{textAlign:"right",marginTop:"1em"}}>Vendor Name</h4>
                <Divider hidden />
                <h4 style={{textAlign:"right",marginTop:"5em"}}>Address</h4>
                <Divider hidden />
                <h4 style={{textAlign:"right",marginTop:"7em"}}>Contact</h4>
                </Grid.Column>
                <Grid.Column width='1'>
                     <Divider vertical><Icon disabled name='angle right' /></Divider>
                </Grid.Column>
                <Grid.Column className="ten wide column">

                <Input focus label={{color:'blue',content:'Vendor Company Name'}} placeholder='Vendor Company Name' type='text' value={this.props.editVendor[0].vendorCompanyName}  onChange={this.changeVendorCompanyName} />
                <br/>
                <Divider />
                <br/>
                <Input focus label={{color:'blue',content:'Street Name1'}} placeholder='Street Name1' value={this.props.editVendor[0].vendorStreetName1} type='text' onChange={this.changeVendorStreetName1} />
                <Input style={{ marginLeft: '4em' }}  focus label={{color:'blue',content:'Street Name2'}} placeholder='Street Name2' value={this.props.editVendor[0].vendorStreetName2}  type='text' onChange={this.changeVendorStreetName2} />
                <br/>
                <br/>
                <Input focus label={{color:'blue',content:'city'}} placeholder='city '  value={this.props.editVendor[0].vendorCity}  type='text' onChange={this.changeVendorCity} />
                <Input style={{ marginLeft: '8em' }} focus label={{color:'blue',content:'State'}} placeholder='State '  value={this.props.editVendor[0].vendorState}  type='text' onChange={this.changeVendorState} />
                <br/> 
                <br/>
                <Input  focus label={{color:'blue',content:'country'}} placeholder='country '  value={this.props.editVendor[0].vendorCountry} type='text' onChange={this.changeVendorCountry} />
                <br/>
                <br/>
                <Divider />
                <br/>
                <Input focus label={{color:'blue',content:'vendor Email'}} placeholder='vendor Email'  value={this.props.editVendor[0].vendorEmail} type='email' onChange={this.changeVendorEmail} />
                <Input style={{ marginLeft: '4em' }}  focus label={{color:'blue',content:'vendor Phone'}} placeholder='vendor Phone'  value={this.props.editVendor[0].vendorPhone} type='text' onChange={this.changeVendorPhone} />
                <br/>
                <br/>
                <Input   focus label={{color:'blue',content:'vendor Cell'}} placeholder='vendor cell'  value={this.props.editVendor[0].vendorCell} type='text' onChange={this.changeVendorCell}/><br/><br/>
               
         </Grid.Column>
                </Grid>
                </div>
           </div>
       )
   }
}

function mapStateToProps(state) {
    return {
        editVendor: state.editVendor,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({getAllVendorData,getEditVendorData,updateEditVendor,changeVendorCompanyName,
        changeVendorStreetName1,changeVendorStreetName2,changeVendorCity,changeVendorState,
        changeVendorCountry,changeVendorEmail,changeVendorCell,changeVendorPhone}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditVendor);