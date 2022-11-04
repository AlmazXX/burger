import React, { useState } from "react";
import { Ingredient } from "../../types";
import meatImg from "../../assets/meatImg.png";
import baconImg from "../../assets/baconImg.png";
import cheeseImg from "../../assets/cheeseImg.png";
import saladImg from "../../assets/saladImg.png";
import "./App.css";
import Burger from "../../components/Burger/Burger";
import Meat from "../../components/Burger/Meat/Meat";
import IngredientBtn from "../../components/IngredientsBox/IngredientBtn";

const INGREDIENTS: Ingredient[] = [
  { name: "Meat", price: 80, image: meatImg },
  { name: "Salad", price: 10, image: saladImg },
  { name: "Bacon", price: 60, image: baconImg },
  { name: "Cheese", price: 50, image: cheeseImg },
];

interface ingredientsProps {
  name: string;
  count: number;
}

function App() {
  const [ingredients, setIngredients] = useState<ingredientsProps[]>([
    { name: "Meat", count: 0 },
    { name: "Salad", count: 0 },
    { name: "Bacon", count: 0 },
    { name: "Cheese", count: 0 },
  ]);

  // const mergeIngredients = () => {
  //   return INGREDIENTS.map((I) => {
  //     return {
  //       ...I,
  //       count: ingredients.reduce((acc, ingredient) => {
  //         if (ingredient.name === I.name) {
  //           acc = ingredient.count;
  //         }
  //         return acc;
  //       }, 0),
  //     };
  //   })
  // }

  // const [newIngredients, setNewIngredients] = useState<any>(
  //   mergeIngredients()
  // );

  const addIngredient = (ingredientName: string) => {
    setIngredients((prev) =>
      prev.reduce((acc, ingredient) => {
        if (ingredientName === ingredient.name) {
          ++ingredient.count;
        }
        return acc;
      }, prev)
    );
    console.log(ingredients);
    // console.log(newIngredients);
  };

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {INGREDIENTS.map((ing: any) => (
          <IngredientBtn
            key={ing.name}
            name={ing.name}
            image={ing.image}
            price={ing.price}
            count={ingredients.reduce((acc, i) => {
              if (ing.name === i.name) {
                acc = i.count;
              }
              return acc;
            }, 0)}
            addIngredient={addIngredient}
          />
        ))}
      </div>
      <Burger>
        <Meat />
      </Burger>
    </div>
  );
}

export default App;
