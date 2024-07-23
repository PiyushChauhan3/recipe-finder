// src/components/RecipeList.js
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  return (
    <div className="row">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="col-md-4 mb-4">
          <div className="card">
            <img src={recipe.image} className="card-img-top" alt={recipe.title} />
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">View Recipe</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
