import axios from "axios";

export default {
    getArticles: function(topic, startDate, endDate){
        const key = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';
        return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${key}&start_date=${startDate}&end_date=${endDate}&q=${topic}`);
    },
};

