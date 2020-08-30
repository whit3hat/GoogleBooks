import React from 'react';
<<<<<<< HEAD
import Books from './pages/Books';
import Nav from './components/Nav';
import Search from './components/Search';
import Saved from './components/Saved';
//axios variable import for api query
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
=======
import GoogleBooks from './pages/Books';
import Nav from './components/Nav';
>>>>>>> 0c7d7352aebcbf282b975e4d23e986e84e845f26

function App() {
  return (
    <div>
      <Nav />
<<<<<<< HEAD
      <Search />
      <Books />
=======
      <GoogleBooks />
>>>>>>> 0c7d7352aebcbf282b975e4d23e986e84e845f26
    </div>
  );
}

export default App;
