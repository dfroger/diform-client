import Ember from 'ember';

export default Ember.TextArea.extend({
    classNames: ['synced'],
    valueDidChange: Ember.observer('value', function() {
        this.sendAction('action', this.get('value'));
    })
});
