import React from "react";

function LargeListItemBooks({ books }) {
  const { name, price, title, pages } = books;
  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <h2>Title:</h2>
      <p>{title}</p>
      <p># of Pages: {pages}</p>
    </>
  );
}

export default LargeListItemBooks;
