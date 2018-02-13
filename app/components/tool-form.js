import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  router: Ember.inject.service('-routing'),
  back: 'tools',
  title:Ember.computed('tool.id',function(){
    let tool=this.get('tool');
    if(tool.isNew){
      return 'Ajout';
    }
    return `Modification de [${tool.get('name')}]`;
  }),
  positionalParams: ['tool'],
  actions:{
    doButtonThing(tool){
      this.sendAction('save',tool);
    },
    back:function(tool){
      if(Ember.get(tool,'hasChanges'))
        tool.discardBufferedChanges();
      this.get('router').transitionTo(this.get("back"));
    }
  }
});
