const express = require('express')

const app =express();
app.use(express.json())

const persons =[
  { 
    "id": "1",
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": "2",
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": "3",
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": "4",
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/api/persons', (request, response) => {
     return response.json(persons)
  })
 
app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id;
  const result = persons.find((person) => person.id === id)
    if(!result){
      response.status(404).send("not found")
    }
    response.json(result)
  })
 
app.get('/info', (request, response) => {
    response.send(`phonebook has info for ${persons.length}  people <br> <br> ${Date()}`)
  })


const PORT =3001

app.listen(PORT)

