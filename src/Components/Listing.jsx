import { useState } from "react";

export default function Listing() {
  // CREATING EMPTY ARRAY
  const [ingredients, setIngredients] = useState([]);
  // MAPPING ITEMS FROM INGREDIENTS ARRAY INTO NEW VARIABLE FOR JSX DISPLAY BELOW
  const ingredientListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  // FUNCTION FOR ADDING MORE ITEMS TO ARRAY
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient-input");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <>
      <form action={addIngredient}>
        <input
          id="ingredient-input"
          type="text"
          name="ingredient-input"
          placeholder="for example: 500 grams of beef"
          aria-label="adding ingredient"
        ></input>
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientListItems}</ul>
    </>
  );
}
