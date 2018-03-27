import React, { Component } from "react";
import API from "../../utils/API";
import SearchCard from "../../components/SearchCard/SearchCard";
import SearchResults from "../SearchResults/SearchResults";

class Home extends Component {
    state = {};

	componentDidMount(){
		this.retrieveData();
	}

	retrieveData(){
		API.getArticles().then((response)=>{
			console.log(response.data);
		});
	}

	render(){
        return(
            <SearchCard />
        )
    }
}

export default Home;