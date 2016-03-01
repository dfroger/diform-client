import Ember from 'ember';

export default Ember.Controller.extend({

  init: function() {
    this._super();
    const socket = this.get('socketIOService').socketFor('http://localhost:7000/');
    socket.on('connect', this.onConnect, this);
    socket.on('message', this.onMessage, this);
    socket.on('close', function(event) {
        console.log('closed', event);
    }, this);
  },
  message: '',


  onConnect() {
    const socket = this.get('socketIOService').socketFor('http://localhost:7000/');
    socket.send('Hello World');
    socket.emit('Hello server');
  },

  onMessage(data) {
    console.log("message", data);
  }

});

