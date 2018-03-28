import React, { Component } from "react";
import API from "../../utils/API";
import SearchCard from "../../components/SearchCard/SearchCard";
import SearchResults from "../SearchResults/SearchResults";

class Home extends Component {
    state = {
		results: []
	};

	componentDidMount(){
		this.retrieveData(`florida`, '20170101', '20180101');
	}

	retrieveData = (topic, startDate, endDate) => {
		API.getArticles(topic, startDate, endDate)
			.then( response => this.setState({ results: response.data.response.docs }));
	}

	render(){
        return(
			<div>
            	<SearchCard search={this.retrieveData}/>
				<SearchResults results={this.state.results}/>
			</div>
        )
    }
}

export default Home;