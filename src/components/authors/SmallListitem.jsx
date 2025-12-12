import React from "react";

function SmallListItem({ author }) {
  const { name, age } = author;
  return (
    <div>
      <p>
        Name: {name}, Age: {age}
      </p>
    </div>
  );
}

export default SmallListItem;
