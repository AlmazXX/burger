import React from "react";
import './Ingredient.css'

interface Props {
  name: string;
  price: number;
  image: string;
  count: number;
  addIngredient: (name: string) => void
}


const IngredientBtn: React.FC<Props> = ({name, price, image, count, addIngredient}) => {

  return (
    <div className="ingredient">
      <button onClick={() => addIngredient(name)}>
        <img src={image} alt={name} /> <span>{name}</span>
      </button>
      <span>x{count}</span>
    </div>
  );
};

export default IngredientBtn;
