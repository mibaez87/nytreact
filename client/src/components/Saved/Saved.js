import React, { Component } from "react";
import API from "../../utils/API";
import SearchCard from "../../components/SearchCard/SearchCard";
import SearchResults from "../SearchResults/SearchResults";
import SavedArticles from "../SavedArticles/SavedArticles";

class Saved extends Component {
    state = {
		results: []
	};

	componentDidMount(){
		this.retrieveData();
	}

	retrieveData = (topic, startDate, endDate) => {
		API.getArticles(topic, startDate, endDate)
			.then( response => this.setState({ results: response.data.response.docs }));
    }
    
    saveArticle = () => {
        
    }

	render(){
        return(
			<div>
            	<SearchCard search={this.retrieveData}/>
				<SearchResults results={this.state.results}/>
                <SavedArticles />
			</div>
        )
    }
}

export default Saved;