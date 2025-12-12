import express from "express";
import cors from "cors";
const app = express();

app.use(express());
app.use(cors());
let currentUser = {
  name: "Sarah Waters",
  age: 55,
  country: "United Kingdom",
  books: ["Fingersmith", "The Night Watch"],
};
let users = [
  {
    id: 1,
    name: "Sarah Waters",
    age: 55,
    country: "United Kingdom",
    books: ["Fingersmith", "The Night Watch"],
  },
  {
    id: 2,
    name: "Haruki Murakami",
    age: 71,
    country: "Japan",
    books: ["Norwegian Wood", "Kafka on the shore"],
  },

  {
    id: 3,
    name: "Chimamanda Ngozi Adichie",
    age: 43,
    country: "Nigeria",
    books: ["Half of a Yellow Sun", "American"],
  },
];
let books = [
  {
    name: "To Kill a MockingBird",
    pages: 281,
    title: "Harper Lee",
    price: 10.99,
  },
  {
    name: "The Catcher in the Rye",
    pages: 224,
    title: "J.D. Salinger",
    price: 9.99,
  },
  {
    name: "The Little Prince",
    pages: 85,
    title: "Antonie de Saint-Exupery",
    price: 7.99,
  },
];
app.get("/current-user", (req, res) => res.json(currentUser));

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  let userId = Number(id);
  const user = users.find((user) => user.id === userId);
  console.log(user);
  res.json(user);
});

app.get("/users", (req, res) => res.json(users));

app.post("/users/:id", (req, res) => {
  const { id } = req.params;
  let userId = Number(id);
  const { user: editedUser } = req.body;
  users = users.map((user) => (user.id === userId ? editedUser : user));
  res.json(users.find((user) => user.id === id));
});

app.get("/books", (req, res) => res.json(books));

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  res.json(books.find((book) => book.id === id));
});

let SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => {
  console.log(
    `server is runnning on this port http://localhost:${SERVER_PORT}`
  );
});
