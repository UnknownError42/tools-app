import Route from '@ember/routing/route';
import Ember from 'ember';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return RSVP.hash({
      tool: Ember.Object.create({name:'',isNew:true}),
      categories: this.get('store').findAll('category'),
      idCategories:[]
    });
  },
  actions:{
    saveToStore(tool){
      delete tool.isNew;
      let model=this.modelFor(this.routeName);
      tool=this.get('store').createRecord('tool',JSON.parse(JSON.stringify(tool)));
      let idCategories=Ember.get(model,'idCategories');
      let categories=Ember.get(model,'categories').filter((item, index, self) => idCategories.indexOf(item.id)!=-1);
      tool.set('categories',categories);
      tool.save();
      this.transitionTo("tools");
    }
  }
});
