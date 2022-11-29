import React from "react";
import "./Burger.css";

interface Props {
  name: string;
}

const BurgerItem: React.FC<Props> = ({ name }) => {
  switch (name) {
    case "breadBottom":
      return <div className="BreadBottom"></div>;
    case "breadTop":
      return (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );
    case "Meat":
      return <div className="Meat"></div>;
    case "Salad":
      return <div className="Salad"></div>;
    case "Cheese":
      return <div className="Cheese"></div>;
    case "Bacon":
      return <div className="Bacon"></div>;
    default:
      return null;
  }
};

export default BurgerItem;