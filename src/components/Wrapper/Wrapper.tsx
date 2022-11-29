import React from "react";

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        flex: "1 1 50%",
        border: "2px solid #000",
        height: "calc(100vh - 100px)",
        padding: "20px",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
