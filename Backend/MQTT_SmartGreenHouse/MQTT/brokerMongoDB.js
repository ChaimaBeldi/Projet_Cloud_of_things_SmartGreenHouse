const mqtt = require('mqtt')
const mongoose=require('mongoose')
var url = 'mongodb://localhost:27017'
var MqttData = require('./controllers/mqtt.controller')
var mqttData = new MqttData();
const client = mqtt.connect('mqtt://192.168.43.137', {
  port: 1883,
  username: 'mqttubuntu',
  password: '123456789'
});
const topic = '/nodejs/mqtt'
client.on('connect', () => {
  console.log('Connected')
})
client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
  })
client.on('message', (topic, payload)=>{
    message = payload.toString()
    console.log(message)
    mongoose.connect(
      "mongodb+srv://Chaima:0ASIShergla123@smartgreenhousecluster.u894u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    mongoose.connection.once('open',() => console.log('Connected to database'))
    //Saving received data to MongoDB
    var mongomqttdata = {
        topic: topic,
        payload: message.toString()
      };
      const saved = mqttData.addmqtt(mongomqttdata)
      console.log("a new message is received from your sensors")
    
})