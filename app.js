import express from 'express';
import connection from './db.js';
const app = express();
const port = 3000;







app.get('/', (req, res) => {

    connection.query('SELECT * FROM grades where id=1', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
