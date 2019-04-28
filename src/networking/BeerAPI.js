import axios from 'axios';
import BaseURL from '../config/baseUrl';

export default {
    getAllBeer() {
        return new Promise(function(resolve,reject) {
            console.log(BaseURL);
            axios.get(BaseURL.DEV_URL+'/beers')
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            })
        })
    } ,

    searchBeer(beer) {
        return new Promise(function(resolve,reject) {
            console.log(BaseURL);
            axios.get(BaseURL.DEV_URL+'/beers'+'?beer_name='+beer)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            })
        })
    }
}