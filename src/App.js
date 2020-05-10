import React from 'react';
import Books from './pages/Books';
import Nav from './components/Nav';
const axios = require('axios').default;

// URL for Google Books
const URL = 'https://www.googleapis.com/books/v1/volumes?q='

//function to query the google books api
axios.get(`${URL}=handleResponse`)
      .then(function (res) {
        console.log(res)
      })
      .catch(function (err) {
        console.log(err)
      })
      .then(function () {

      });

function App() {
  return (
    <div>
      <Nav />
      <Books />
    </div>
  );
}

export default App;
