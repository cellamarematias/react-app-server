import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import 'dotenv/config';
import router from "./src/routes/index.js";
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3000;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// use cross-origin resource sharing
app.use(cors());


// conexion a DB MONGO
const url = `mongodb+srv://matias:${ process.env.PASSWORD}@cluster0.pzons.mongodb.net/${ process.env.DBNAME}?retryWrites=true&w=majority`;  //URL de conexión

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(()  => console.log('Connected to DB'))
  .catch(e => console.log(e))

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', async (req, res) => {
    res.send('Mati app server');
});
app.use('/', router);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



