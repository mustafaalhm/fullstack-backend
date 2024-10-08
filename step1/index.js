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
    response.json(persons)
  })
 
app.get('/info', (request, response) => {
    response.send(`phonebook has info for ${persons.length}  people <br> <br> ${Date()}`)
  })
 app.get('/api/persons/:id',(req,res)=>{
  const id = req.params;
  console.log(id) 
 })

const PORT =3001

app.listen(PORT)

