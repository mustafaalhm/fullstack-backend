const express = require("express");

const app = express();
app.use(express.json());

let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (request, response) => {
  return response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  const result = persons.find((person) => person.id === id);
  if (!result) {
    response.status(404).send("not found");
    console.log("not not not")
  }
  response.json(result);
});

app.get("/info", (request, response) => {
  response.send(
    `phonebook has info for ${persons.length}  people <br> <br> ${Date()}`
  );
});
// delete person
app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  // check if found
  let found = persons.find((person) => person.id === id);
  if (!found) {
    res.send("invalid id");
  }
  const person = persons.filter((person) => person.id !== id);
  res.send(person);
});
// create new
app.post("/api/persons", (req, res) => {
  try {
     let newPerson = req.body;
  persons = persons.concat(newPerson);
  
  res.send(persons);
  } catch (error) {
    console.log({error})
  }
 
});
const PORT = 3001;

app.listen(PORT);
