import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import DeleteButton from '../DeleteButton/DeleteButton'

const style = {
    margin: 12,
};

const SavedArticles = props => (
    <Card>
        <CardTitle title="Saved Articles" />
        <div>
            <List>
                {props.results.map(result => (
                    <div key={result._id}>
                        <ListItem onClick={() => window.open(result.web_url,'_blank')} primaryText={result.headline.print_headline} rightIcon={<DeleteButton />} />
                        <Divider />
                    </div>
                ))}
            </List>
        </div>
    </Card>
);

export default SavedArticles;