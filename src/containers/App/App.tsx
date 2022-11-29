import { useCallback, useState } from "react";
import baconImg from "../../assets/baconImg.png";
import cheeseImg from "../../assets/cheeseImg.png";
import meatImg from "../../assets/meatImg.png";
import saladImg from "../../assets/saladImg.png";
import BurgerItem from "../../components/Burger/Burger";
import IngredientItem from "../../components/IngredientsItem/IngredientItem";
import Price from "../../components/Price/Price";
import Wrapper from "../../components/Wrapper/Wrapper";
import { IIngredient } from "../../types";
import "./App.css";

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

  const renderComponents = useCallback(() => {
    return items.reduce((acc: JSX.Element[], item) => {
      for (let i = item.count; i > 0; --i) {
        acc.push(<BurgerItem key={item.name + i} name={item.name} />);
      }
      return acc;
    }, []);
  }, [items]);

  const countPrice = useCallback(() => {
    const itemPrices = INGREDIENTS.reduce(
      (acc: { [key: string]: number }, i) => {
        acc[i.name] = i.price;
        return acc;
      },
      {}
    );

    return items.reduce(
      (acc, item) => (acc += item.count * itemPrices[item.name]),
      30
    );
  }, [items]);

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
          {INGREDIENTS.map((ing: IIngredient) => {
            return (
              <IngredientItem
                key={ing.name + ing.name}
                name={ing.name}
                count={items.find((i) => i.name === ing.name)!.count}
                image={ing.image}
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