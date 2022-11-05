import React from "react";
import "./Burger.css";

interface Props {
  name: string;
}

const BurgerItem: React.FC<Props> = ({ name }) => {
  let item = null;

  switch (name) {
    case "breadBottom":
      item = <div className="BreadBottom"></div>;
      break;
    case "breadTop":
      item = (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );
      break;
    case "Meat":
      item = <div className="Meat"></div>;
      break;
    case "Salad":
      item = <div className="Salad"></div>;
      break;
    case "Cheese":
      item = <div className="Cheese"></div>;
      break;
    case "Bacon":
      item = <div className="Bacon"></div>;
      break;
    default:
      item = null;
  }
  return item;
};

export default BurgerItem;