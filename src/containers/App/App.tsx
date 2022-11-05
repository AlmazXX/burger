import React, { useState } from "react";
import { IIngredient } from "../../types";
import meatImg from "../../assets/meatImg.png";
import baconImg from "../../assets/baconImg.png";
import cheeseImg from "../../assets/cheeseImg.png";
import saladImg from "../../assets/saladImg.png";
import "./App.css";
import IngredientItem from "../../components/IngredientsItem/IngredientItem";
import Wrapper from "../../components/Wrapper/Wrapper";
import BurgerItem from "../../components/Burger/Burger";
import Price from "../../components/Price/Price";

const INGREDIENTS: IIngredient[] = [
  { name: "Meat", price: 80, image: meatImg },
  { name: "Salad", price: 10, image: saladImg },
  { name: "Bacon", price: 60, image: baconImg },
  { name: "Cheese", price: 50, image: cheeseImg },
];

interface IngredientProps {
  name: string;
  count: number;
}

function App() {
  const [items, setItems] = useState<IngredientProps[]>([
    { name: "Meat", count: 0 },
    { name: "Salad", count: 0 },
    { name: "Bacon", count: 0 },
    { name: "Cheese", count: 0 },
  ]);

  const addIngredient = (name: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const deleteIngredient = (name: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, count: item.count ? item.count - 1 : 0 }
          : item
      )
    );
  };

  const renderComponents = () => {
    const itemCount: JSX.Element[] = [];
    for (const value of items) {
      for (let i = value.count; i > 0; --i) {
        itemCount.push(<BurgerItem key={value.name + i} name={value.name} />);
      }
    }
    return itemCount;
  };

  const countPrice = () => {
    let totalPrice = 30;
    const itemPrices: { [key: string]: number } = {};
    INGREDIENTS.forEach((i) => {
      itemPrices[i.name] = i.price;
    });

    items.forEach((item) => {
      totalPrice += item.count * itemPrices[item.name];
    });
    return totalPrice;
  };

  return (
    <div className="App">
      <Wrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {items.map((ing: IngredientProps) => {
            return (
              <IngredientItem
                key={ing.name + ing.name}
                name={ing.name}
                count={ing.count}
                image={INGREDIENTS.reduce((acc, i) => {
                  if (ing.name === i.name) {
                    acc = i.image;
                  }
                  return acc;
                }, "")}
                addIngredient={addIngredient}
                deleteIngredient={deleteIngredient}
              />
            );
          })}
        </div>
        <Price total={countPrice()} />
      </Wrapper>
      <Wrapper>
        <BurgerItem name="breadTop" />
        {renderComponents()}
        <BurgerItem name="breadBottom" />
      </Wrapper>
    </div>
  );
}

export default App;
