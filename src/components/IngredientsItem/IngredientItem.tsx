import React from "react";
import "./Ingredient.css";

interface Props {
  name: string;
  image: string;
  count: number;
  addIngredient: (name: string) => void;
  deleteIngredient: (name: string) => void;
}

const IngredientItem: React.FC<Props> = (props) => {
  return (
    <div className="ingredient">
      <button
        className="addBtn"
        onClick={() => props.addIngredient(props.name)}
      >
        <img src={props.image} alt={props.name} /> <span>{props.name}</span>
      </button>
      <div>
        <span>x{props.count}</span>
        <button onClick={() => props.deleteIngredient(props.name)}>
          Delete ingredient
        </button>
      </div>
    </div>
  );
};

export default IngredientItem;