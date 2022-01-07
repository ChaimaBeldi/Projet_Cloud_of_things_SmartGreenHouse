const mongoose=require('mongoose')
var url = 'mongodb://localhost:27017/mqttJS'
var MqttData = require('./controllers/mqtt.controller')
mongoose.connect(
    "mongodb+srv://Chaima:0ASIShergla123@smartgreenhousecluster.u894u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
mongoose.connection.once('open',() => console.log('Connected'))