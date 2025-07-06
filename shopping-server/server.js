const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json);

let item = [
    { id: 1, text: 'לחם'},
    { id: 2, text: 'חלב'},
    { id: 3, text: 'תפוזים'},
    { id: 4, text: 'מעדנים'},
    { id: 5, text: 'עגבניה'},
    { id: 6, text: 'פלפל אדום'},
];

app.get('/api/items', (req,res) => {
    res.json(item);
});

app.post('/api/items', (req,res) => {
    const newItem = {
        id: Date.now(),
        text: req.body.text,
    };
    items.push(newItem);
    res.status(201).json(newItem);
});
//Delete
app.delete('/api/items/:id', (req,res) =>{
    const id = Number(req.params.id);
    items = items.filter(item => item.id !== id);
    res.status(204).end();
});

app.listen(PORT, () =>{
    console.log(`Server running on port http://localhost:${PORT}`)
});

