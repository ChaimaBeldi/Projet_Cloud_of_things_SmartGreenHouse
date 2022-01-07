var mongoose = require('mongoose')

var mqttSchema = new mongoose.Schema({
    topic: String,
    payload: String
  });


mqttSchema.statics.createmqtt = (infos)=> {
    const mqtt = new mongoose.model("MqttData", mqttSchema)(infos);
    return mqtt.save();
};

module.exports = mongoose.model('MqttData',mqttSchema);