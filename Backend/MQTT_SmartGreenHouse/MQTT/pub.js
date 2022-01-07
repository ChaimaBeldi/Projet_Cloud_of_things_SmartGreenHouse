const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://192.168.43.137', {
  port: 1883,
  username: 'mqttubuntu',
  password: '123456789'
});
const topic = '/nodejs/mqtt'
client.on('connect', () => {
  console.log('Connected')
  client.publish(topic, 'hello from hassine', { qos: 0, retain: false }, (error) => {
    if (error) {
      console.error(error)
    }
    console.log('message sent')
  })
})