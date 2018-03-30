import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import SaveButton from '../SaveButton/SaveButton'

const style = {
    margin: 12,
};

const SearchResults = props => (
    <Card>
        <CardTitle title="Results" />
        <div>
            <List>
                {props.results.map(result => (
                    <div key={result._id}>
                        <ListItem onClick={() => window.open(result.web_url,'_blank')} primaryText={result.headline.print_headline} rightIcon={<SaveButton secondary={true}/>} />
                        <Divider />
                    </div>
                ))}
            </List>
        </div>
    </Card>
);

export default SearchResults;