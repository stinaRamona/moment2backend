const express = require('express'); 
const sqlite3 = require('sqlite3').verbose(); 
const cors = require('cors'); 

const app = express(); 
const port= 3000;
const db = new sqlite3.Database("./db/experience.db"); 

app.use(express.json()); 
app.use(cors()); 

//routing för att hämta
app.get('/api', (req, res) =>{
    res.json({message: 'Hej. välkommen till mitt API'}); 
}); 

app.get('/api/workexp', (req, res) => {
    res.json({message: 'Tidigare erfarenheter:'})
}); 

//För att lägga till
app.post('/api/workexp', (req, res) => { 

    //variabler sparas från body
    let company = req.body.company; 
    let title = req.body.title; 
    let description = req.body.description; 
    let location = req.body.location; 

    //värden från body sparas i objekt
    let workexp = {
        company: company,
        title: title, 
        description: description, 
        location: location
    }; 

    //objekt för felmeddelanden 
    let errors = {
        message: "", 
        details: "", 
        http_response: { }
    }

    //Ifall inte alla värden är ifyllda hamnar vi här 
    if(!company || !title || !description || !location) {
        errors.message = "Alla värden är inte medskickade"; 
        errors.details = "Du måste ange alla värden för att kunna spara ny erfarenhet";  

        errors.http_response.message = "Bad request"; 
        errors.http_response.code = 400; 

        res.status(400).json({errors})

        return; 
    }

    //annars postas att förfrågan är godkänd och det nya objektet 
    res.json({message: 'POST förfrågan godkänd', workexp}); 
});

//för att uppdatera en post
app.put('/api/workexp/:id', (req, res) => {
    res.json({message: 'Uppdatering av post med id:' + req.params.id}); 
});

//för att radera en post 
app.delete('/api/workexp/:id', (req, res) => {
    res.json({message: 'Tar bort post med id:' + req.params.id}); 
}); 

//sätter igång servern
app.listen(port, () => {
    console.log(`servern är startad på port:${port}`); 
})