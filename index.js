// import mongoose from "mongoose";
// import express from "express";
// import bodyParser from "body-parser";
// import 'dotenv/config';
// import router from "./src/routes/index.js";
// import cors from 'cors';
// const app = express();
// const PORT = process.env.PORT || 3000;


// // conexion a DB MONGO
// const url = 

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }
// )
//   .then(()  => console.log('Connected to DB'))
//   .catch(e => console.log(e))

// app.all('*', function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, PATCH, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// app.get('/', async (req, res) => {
//     res.send('Mati app server');
// });
// app.use('/', router);
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



// eslint-disable-next-line import/no-unresolved
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app.js';

dotenv.config();

const port = process.env.PORT || 3000;
const MONGO_URL = `mongodb+srv://matias:${ process.env.PASSWORD}@cluster0.pzons.mongodb.net/${ process.env.DBNAME}?retryWrites=true&w=majority`;  //URL de conexión

mongoose.connect(
  MONGO_URL,
  (error) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('Fail to connect', error);
    } else {
      // eslint-disable-next-line no-console
      console.log('Connected to database');
      app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`Example app listening on port ${port}`);
      });
    }
  },
);