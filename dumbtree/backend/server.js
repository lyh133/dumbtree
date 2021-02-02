import express from 'express';
import data from './data.js';
const app = express();
app.get('/api/listings', (req, res) => {
    res.send(data.listings);
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server at ${port}`);
})