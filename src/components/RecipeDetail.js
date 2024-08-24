// src/components/RecipeDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
              // const API_KEY = 'd56852e599e94e3c86946f4800e399f2';
              

        const API_KEY = '36d47ee7767b4b35befa473f9de06305';
        const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <h1 className="my-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="img-fluid img-css" />
      <h3 className="ingre">Ingredients:</h3>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id} className='li-ingre'>{ingredient.original}</li>
        ))}
      </ul>
      <h3 className="mt-4">Instructions:</h3>
      <p className='li-ingre' dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
    </div>
  );
};

export default RecipeDetail;
