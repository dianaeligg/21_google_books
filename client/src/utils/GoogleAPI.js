import axios from "axios";


// GOOGLE_BOOKS_API_KEY='AIzaSyBX4JrAbq2KAN_83CWsq_-59V-DGAdO8g4'

const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const APIKEY = "AIzaSyBX4JrAbq2KAN_83CWsq_-59V-DGAdO8g4";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + '&key=' + APIKEY);
  }
};
