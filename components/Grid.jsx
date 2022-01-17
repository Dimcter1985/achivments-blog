import React from "react";

const Grid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">{children}</div>
  );
};

export default Grid;
