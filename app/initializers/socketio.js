export function initialize(application) {
   application.inject('controller', 'socketIOService', 'service:socket-io');
}

export default {
  name: 'socket-io',
  initialize: initialize
};
