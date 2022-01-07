var express = require('express');
require('dotenv').config();
const fs = require("fs");
const tls = require('spdy');
const config = require('./config');
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const key_file = process.env.KEY_FILE
const cert_file = process.env.CERT_FILE

const options = {
	  key: fs.readFileSync(key_file),
	  cert: fs.readFileSync(cert_file),
	  
}
var app =express();
const helmet = require("helmet");
app.use(helmet());

//var app = express();


const server = tls.createServer(options, app);



const mongoose = require("mongoose");
mongoose.connect(
	    process.env.DB_HOST,
	    {
		          useNewUrlParser: true,
		          useUnifiedTopology: true
		        }
);
const port = process.env.PORT 
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

var cors = require('cors')
app.use(cors())



app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);

server.listen(port, (error) => {
	  if (error) {
		        console.log("An error occured", error);
		    } else {
			          console.log("Server Succesfully connected");
			      }
});

