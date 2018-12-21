import * as express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routeIncoming from './routes/incomingRequests'

let app = express();
let port = process.env.port || 3000;  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.Promise = global.Promise;

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost:27017/BotResponseDb');

let db = mongoose.connection;
routeIncoming(app); //register the route
console.log("db",db);
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port);

console.log('RESTful API server started on: ' + port);