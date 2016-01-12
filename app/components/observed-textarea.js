import Ember from 'ember';

export default Ember.TextArea.extend({
    classNames: ['observed'],
    valueDidChange: Ember.observer('value', function() {
        this.sendAction('action', 
                        this.get('name'),
                        this.get('value')
        );
    })
});
