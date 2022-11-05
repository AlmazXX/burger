import React, { ReactNode } from "react";
import './Wrapper.css';

interface Props extends React.PropsWithChildren {}

const Wrapper: React.FC<Props> = ({ children }) => {
  return <div className="Wrapper">{children}</div>;
};

export default Wrapper;
