import Route from '@ember/routing/route';
import Ember from 'ember';
import RSVP from 'rsvp';
import BufferedProxy from 'ember-buffered-proxy/proxy';

export default Route.extend({
  model(params){
    var store=this.get('store');
    return RSVP.hash({
      tool: store.peekRecord('tool',params.tool_id),
      categories: store.findAll('category',{ reload: true })
    });
  },
  afterModel(model,transition){
    let tool=Ember.get(model,'tool');
    let toolCategories=Ember.get(tool,'categories');
    if(toolCategories.length)
      Ember.set(model,'idCategories',toolCategories.getEach('id'));
    else
      Ember.set(model,'idCategories',[]);
    Ember.set(model,'modified',BufferedProxy.create({
      content: tool
    }));

  },
   actions:{
    saveToStore(devDuplicate){
      devDuplicate.applyChanges();
      let model=this.modelFor(this.routeName);
      let tool=Ember.get(model,'tool');
      delete devDuplicate.categories;
      let idCategories=Ember.get(model,'idCategories');
      let categories=Ember.get(model,'categories').filter((item, index, self) => idCategories.indexOf(item.id)!=-1);
      tool.set('categories',categories);
      tool.save();
      let transition=Ember.get(model,'transition');
      if(transition)
        transition.retry();
      else
        this.transitionTo('tools');
    },
     willTransition(transition) {
       let model=this.modelFor(this.routeName);
       let tool=Ember.get(model,'modified');
       if (Ember.get(tool,'hasChanges') && !Ember.get(model,'dirty')) {
         Ember.set(model,'dirty',true);
         debugger
         Ember.set(model,'transition',transition);
         transition.abort();
       } else {
         return true;
       }
     }
  }
});
