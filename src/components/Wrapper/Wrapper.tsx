import React from "react";
import "./Wrapper.css";

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="Wrapper">{children}</div>;
};

export default Wrapper;