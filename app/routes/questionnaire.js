import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        sync(value) {
            console.log("quetionnaire: length:", value.length);
        }
    }
});
