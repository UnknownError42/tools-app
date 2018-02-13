import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  categories: DS.hasMany('category',{embedded: 'always',async: true})
});
