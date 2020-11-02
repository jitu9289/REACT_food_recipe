import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header'
import Recipe from './Components/Recipe'
import Axios from 'axios';


function App() {

  const [search, setsearch] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "5749348d";
  const APP_KEY = "9dd39ff77a2a859884a974c20f1900c7";
  useEffect(() => {
    getRecipes();
  }, [])
  const getRecipes = async () => {
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)

    setRecipes(res.data.hits);
  }
  const onInputChange = e => {
    setsearch(e.target.value);
  }
  const onSearchClick=()=>{
    getRecipes();
  }
  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}/>
      <div className="container">
        <Recipe recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
