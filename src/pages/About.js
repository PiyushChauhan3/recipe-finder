// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h1 className="my-4">About Recipe Finder</h1>
      <p>Welcome to Recipe Finder, your go-to app for discovering delicious recipes from around the world. Our mission is to make cooking fun and accessible for everyone, whether you're a seasoned chef or just starting out in the kitchen.</p>
      
      <h3 className="mt-4">Features:</h3>
      <ul>
        <li>Search for recipes by keyword.</li>
        <li>View detailed information about each recipe, including ingredients and instructions.</li>
        <li>Get high-quality images of the recipes to inspire your cooking.</li>
      </ul>
      
      <h3 className="mt-4">How to Use:</h3>
      <p>Using Recipe Finder is easy! Simply enter a keyword in the search bar on the home page, and you'll get a list of recipes that match your search. Click on any recipe to see the full details, including ingredients and step-by-step instructions.</p>
      
      <h3 className="mt-4">Future Enhancements:</h3>
      <ul>
        <li>Advanced search options, including filtering by cuisine, diet, and preparation time.</li>
        <li>User accounts to save favorite recipes and create custom meal plans.</li>
        <li>Integration with grocery delivery services to make shopping for ingredients even easier.</li>
      </ul>
      
      <h3 className="mt-4">Contact Us:</h3>
      <p>If you have any questions, suggestions, or feedback, we'd love to hear from you! Please reach out to us at <a href="mailto:contact@recipefinder.com">contact@recipefinder.com</a>.</p>
    </div>
  );
};

export default About;
