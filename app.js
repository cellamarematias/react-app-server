import express from 'express';
import cors from 'cors';
import Router from "./src/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(Router);

app.get('/', (req, res) => {
    res.send('Mati server');
});

export default app;