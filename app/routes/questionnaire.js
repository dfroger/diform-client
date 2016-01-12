import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        sync(name, value) {
            console.log("quetionnaire: ", 
                        name, value.length);
        }
    }
});
