import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
  };
  
const SearchResults = () => (
    <Card>
        <CardTitle title="Results" />
        <div>
                <List>
                    <ListItem primaryText="Article Here" rightIcon={<RaisedButton label="Save" primary={true} style={style} />} />
                    <Divider />
                    <ListItem primaryText="Article Here" rightIcon={<RaisedButton label="Save" primary={true} style={style} />} />
                    <Divider />
                    <ListItem primaryText="Article Here" rightIcon={<RaisedButton label="Save" primary={true} style={style} />} />
                    <Divider />
                    <ListItem primaryText="Article Here" rightIcon={<RaisedButton label="Save" primary={true} style={style} />} />
                    <Divider />
                    <ListItem primaryText="Article Here" rightIcon={<RaisedButton label="Save" primary={true} style={style} />} />
                    <Divider />
                </List>
        </div>
    </Card>
);

export default SearchResults;