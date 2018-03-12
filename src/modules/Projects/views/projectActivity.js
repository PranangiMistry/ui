import React, { Component } from 'react';
import { Input, Checkbox, Button, Divider, Grid, Icon, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProjectActivity } from '../../Projects/actions/projectActivityAction';

class ProjectActivity extends Component {
    constructor(props) {
        super(props);
        this.state={
            activityName:''
        }
        this.addProjectActivity=this.addProjectActivity.bind(this);
        this.changeActivityName=this.changeActivityName.bind(this);
    }
    addProjectActivity(){
        this.props.addProjectActivity(this.state);
    }
    changeActivityName(event)
    {
        this.setState({
            activityName:event.target.value
        })
    }
    render() {
        return (
            <div>
                <Grid columns="equal" padded>
                    <Grid.Column className="twelve wide column">
                        <h2 style={{ marginLeft: '5em' }}>Project-activity</h2>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ alignItems: "right" }}><Button primary onClick={this.addProjectActivity}>Add activity</Button></div>
                    </Grid.Column>
                </Grid>
                <Divider />
                <div style={{ marginLeft: '5em' }}>
                    <Grid columns={10} padded>
                        <Grid.Column width="4">
                            <h4 style={{ textAlign: "right", marginTop: "1em" }}>Activity name</h4>
                        </Grid.Column>
                        <Grid.Column className="ten wide column">
                            <Input style={{ width: "290px" }} onChange={this.changeActivityName} focus label={{ color: 'blue', content: 'activity name' }} placeholder='activity name' type='text' />
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
 return{

 }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addProjectActivity}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectActivity);