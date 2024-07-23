import React, { useState, useEffect } from "react";
import RecipeList from "../components/RecipeList";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [topRecipes, setTopRecipes] = useState([]);

  useEffect(() => {
    const fetchTopRecipes = async () => {
      const API_KEY = "36d47ee7767b4b35befa473f9de06305";
            // const API_KEY = 'd56852e599e94e3c86946f4800e399f2';

      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=6&apiKey=${API_KEY}`
        );
        const data = await response.json();
        setTopRecipes(data.recipes || []);
      } catch (error) {
        console.error("Error fetching top recipes:", error);
      }
    };
    fetchTopRecipes();
  }, []);

  useEffect(() => {
    if (query) {
      const fetchRecipes = async () => {
        const API_KEY = "36d47ee7767b4b35befa473f9de06305";
              // const API_KEY = 'd56852e599e94e3c86946f4800e399f2';

        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`
          );
          const data = await response.json();
          setRecipes(data.results || []);
        } catch (error) {
          console.error("Error fetching recipes:", error);
        }
      };
      fetchRecipes();
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;
    const searchQuery = formElements.query.value;
    const cuisine = formElements.cuisine.value;
    const diet = formElements.diet.value;

    const fetchRecipes = async () => {
      const API_KEY = "36d47ee7767b4b35befa473f9de06305";
            // const API_KEY = 'd56852e599e94e3c86946f4800e399f2';

      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&cuisine=${cuisine}&diet=${diet}&apiKey=${API_KEY}`
        );
        const data = await response.json();
        setRecipes(data.results || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
    setQuery(searchQuery);
  };

  return (
    
    <div className="container">
      <h1 className="text-center my-4">Recipe Finder</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for recipes..."
            name="query"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="form-group cu">
            <label htmlFor="cuisine">Cuisine Type:</label>
            <select className="form-control" id="cuisine" name="cuisine">
              <option value="">Select Cuisine</option>
              <option value="American">American</option>
              <option value="British">British</option>
              <option value="Chinese">Chinese</option>
              <option value="French">French</option>
              <option value="Indian">Indian</option>
              <option value="Italian">Italian</option>
              <option value="Mexican">Mexican</option>
            </select>
          </div>

          <div className="form-group diet">
            <label htmlFor="diet">Diet Type:</label>
            <select className="form-control" id="diet" name="diet">
              <option value="">Select Diet</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Gluten Free">Gluten Free</option>
            </select>
          </div>
        </div>
      </form>
      
      {recipes.length > 0 && (
        <div className="search-results">
          <h2 className="my-4">Search Results</h2>
          <RecipeList recipes={recipes} />
        </div>
      )}

      <h2 className="my-4">Top Recipes</h2>
      <div className="row">
        {topRecipes.length > 0 ? (
          topRecipes.map((recipe) => (
            <div key={recipe.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={recipe.image}
                  className="card-img-top"
                  alt={recipe.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <a href={`/recipe/${recipe.id}`} className="btn btn-primary">
                    View Recipe
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No top recipes available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
