import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const API_ID = "d7a5a694";
  const API_KEY = "286e3bf218dfffc0781b1a3e14833cb5";

  const [recipes, setRecipes] = useState([]); //! recipe adalah data | setRecepies untuk men-set data / mencari data
  const [search, setSearch] = useState(''); //! useState(default value | nilai awal)
  const [query, setQuery] = useState('chicken'); //! property untuk Submit

  // ! digunakan untuk fetch data, dimana setiap halaman di-reload maka useEffect dijalankan untuk mengambil data
  // 2. jalankan method useEffect ketika halaman di-reload
  useEffect(() => {
    getRecipes();
  }, [query]); // [query] adalah parameter untuk meng-update data otomatis ketika mengetikan di pencarian

  // 1. Ambil data dari API
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits); // ! untuk men-set data dari API
    console.log(data.hits);
  }

  // 4. set even | e adalah event
  const updateSearch = e => {
    setSearch(e.target.value);
  } 

  const getSearch = e => {
    e.preventDefault(); // menghilangkan sifat asli dari elemen | misalnya form akan melakukan action
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search} // set nilai awal
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          // 3. passing data ke component Recipe.js
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
