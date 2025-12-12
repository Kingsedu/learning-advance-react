import React from "react";

function List({ items, sourceName, ItemComponent }) {
  return (
    <div>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </div>
  );
}

export default List;
