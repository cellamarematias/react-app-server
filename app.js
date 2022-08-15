import express from 'express';
import cors from 'cors';
import Router from "./src/routes/index.js";

const app = express();



app.use(cors());
app.use(express.json());
app.use(Router);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
    });

app.get('/', (req, res) => {
    res.send('Mati server');
});

export default app;