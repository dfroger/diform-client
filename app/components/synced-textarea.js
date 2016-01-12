import Ember from 'ember';

export default Ember.TextArea.extend({
    valueDidChange: Ember.observer('value', function() {
        console.log("length:", this.get('value').length);
    })
});
