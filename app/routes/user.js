import Ember from 'ember';

var users = [{
    id: 1,
    name: "Riri"
}, {
    id: 2,
    name: "Fifi"
}, {
    id: 3,
    name: "Loulou"
}];

export default Ember.Route.extend({
    model() {
        //return this.store.findAll('user');
        return users;
    }
});
