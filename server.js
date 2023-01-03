const express = require ('express'); //import the package

const app = express(); //excecute the package

const port = 4000

const cors = require('cors');
app.use(cors({
  origin: '*'
}));

//start listening to the server:
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })

//bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.json());


//Import Routes:
const lobbyRoute = require ('./routes/lobby');
const codeBlockRoute = require ('./routes/codeBlock');
const newCodeBlockRoute = require ('./routes/newCodeBlock');

// //Middlewares
app.use('/', lobbyRoute);
app.use('/newCodeBlock', newCodeBlockRoute);
app.use('/codeBlock', codeBlockRoute);


//DATABASE:
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    //connect to DB
    await mongoose.connect('mongodb+srv://moveoTask:qwe123@cluster0.51emnwa.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true,},
     () => console.log("connected to DB"));
    }

    
