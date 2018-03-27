import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import "./SearchCard.css";
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
  };
  
const SearchCard = () => (
    <Card>
        <CardTitle title="Search" />
        <div>
            <TextField class="hint" hintText="Topic" />
        </div>
        <div>
            <DatePicker hintText="Start Year" openToYearSelection={true} />
            <DatePicker hintText="End Year" openToYearSelection={true} />
        </div>
        <div>
            <RaisedButton label="Search" primary={true} style={style} />
        </div>
    </Card>
);

export default SearchCard;