const axios = require("axios");

// Environment Variables
require('dotenv').config();


const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const APIKEY = process.env.GOOGLE_BOOKS_API_KEY;

module.exports = {
  search: function(req, res) {
      axios.get(BASEURL + req.params.query + '&key=' + APIKEY)
        .then((data) => {
          console.log('*** data ***', data.data);
              res.json(data.data);
          });
  }
};