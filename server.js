const express = require('express'); 
//const sqlite = require('sqlite3').verbose(); 
const cors = require('cors'); 

const app = express(); 
const port= 3000; 

app.use(express.json()); 
app.use(cors()); 

//routing 
app.get('/api', (req, res) =>{
    res.json({message: 'Hej. välkommen till mitt API'}); 
}); 

app.get('/api/workexp', (req, res) => {
    res.json({message: 'Tidigare erfarenheter:'})
}); 

app.post('/api/workexp', (req, res) => {
    res.json({message: 'POST förfrågan'}); 
});

app.put('/api/workexp', (req, res) => {
    res.json({message: 'Uppdatering av post med id:' + req.params.id}); 
});

app.delete('/api/workexp', (req, res) => {
    res.json({message: 'Tar bort post med id:' + req.params.id}); 
}); 

app.listen(port, () => {
    console.log(`servern är startad på port:${port}`); 
})