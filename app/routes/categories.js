import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.get('store').findAll('category');
  }
  //,
  //afterModel(model, transition){
    //return Ember.RSVP.all(model.getEach('developer'));
  //}
});
