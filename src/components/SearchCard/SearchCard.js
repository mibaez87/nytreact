import React, {Component} from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import "./SearchCard.css";
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
  };
  
class SearchCard extends Component {
    state = {
        topic: "",
        startDate: "",
        endDate: ""
    }

    handleSubmit (event, props, topic, startDate, endDate){
        event.preventDefault();

        this.props.search(topic, startDate, endDate);
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    handleStartDateChange = (date) => {
        this.setState({startDate: date})
    }
    handleEndDateChange = (date) => {
        this.setState({endDate: date})
    }

    render(){
        return (
            <Card>
                <CardTitle title="Search" />
                <form onSubmit={(event) => this.handleSubmit(event, this.props)} >
                    <div>
                        <TextField name="topic" value={this.state.topic} className="hint" hintText="Topic" onChange={this.handleChange} />
                    </div>
                    <div>
                        <DatePicker name="startDate" value={this.state.startDate} hintText="Start Year" openToYearSelection={true} onChange={this.handleStartDateChange} />
                        <DatePicker name="endDate" value={this.state.endDate} hintText="End Year" openToYearSelection={true} onChange={this.handleEndDateChange} />
                    </div>
                    <div>
                        <RaisedButton type="submit" label="Search" primary={true} style={style} />
                    </div>
                </form>
            </Card>
        );
    }   
} 

export default SearchCard;