const express = require("express");
const app = express();
const port = 8080;

app.get("/home", (req, res) => {
  res.status(200).send("<h1>This is the Home Page!</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "John Doe",
      email: "john@doe.com",
    },
    {
      name: "Jane Doe",
      email: "jane@doe.com",
    },
  ];

  res.status(200).json(users);
});

app.get("/admin", (req, res) => {
  res.status(403).send("<title>Forbidden</title>\n<h1>Forbidden</h1>");
});

app.listen(8080, () => console.log(`Rodando na porta ${port}`));
