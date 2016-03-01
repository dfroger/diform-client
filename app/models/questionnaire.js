import DS from 'ember-data';

export default DS.Model.extend({
    filler: DS.belongsTo('user')  
});
