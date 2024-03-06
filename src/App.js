// In your component file
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=lunch&app_id=e2137b30&app_key=%200447e7315ed8838095a0ba6435f97015%09');
      const data = await response.json();
      console.log(data)
      setRecipes(data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <div className="recipes">
        {recipes?.map(recipe => (
          <div key={recipe} className="recipe">
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
