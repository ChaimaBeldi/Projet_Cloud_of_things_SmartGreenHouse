const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://102.133.190.83', {
  port: 1883,
});
const topic = '/nodejs/mqtt'
client.on('connect', () => {
  console.log('Connected')
})
