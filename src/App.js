import React, { useState } from 'react';
import Search from './Components/SearchComponent'
import axios from 'axios';

function App() {
  const [state, setState] = useState ({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?=&apikey=46f8af69";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then((data) => {
        console.log(data);
      })
    }
  }
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return {...prevState, s: s}
    })
  }

  return (
    <div className="App">
      <header>
       <h1>Movie Database</h1>
      </header>
      <main>
        <Search 
          handleInput={handleInput} 
          search={search}  
        />
      </main>
    </div>
  );
}

export default App;
