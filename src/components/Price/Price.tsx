import React from "react";

interface Props {
  total: number;
}

const Price: React.FC<Props> = ({ total }) => {
  return <p>Price: {total} som</p>;
};

export default Price;
