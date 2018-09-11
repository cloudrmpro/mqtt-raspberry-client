
import { connect } from 'mqtt';
var client  = connect('mqtt://127.0.0.1:1883', {
  reconnectPeriod: 5000,
  password: "secret",
  username: 'alice'
})

client.on('close', function(message) {
  console.log(message);
});

client.on('error', function(message) {
  console.log(message);
});

client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    } else {
        console.log(err)
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  
})