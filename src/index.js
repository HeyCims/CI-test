const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.post('/greet', (req, res) => {
    const name = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    res.json({ message: `Hello, ${name}!` });
});

app.listen(port, () => {
    console.log(`Server is running at http:localhost:${port}`);
});