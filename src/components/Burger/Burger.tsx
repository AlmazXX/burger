import React from "react";
import './Burger.css';

interface Props extends React.PropsWithChildren {}

const Burger: React.FC<Props> = ({children}) => {
  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      {children}
      <div className="BreadBottom"></div>
    </div>
  );
};

export default Burger;
