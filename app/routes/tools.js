import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  model(){
    return this.get('store').findAll('tool');
  },
  actions:{
    didTransition() {
      Ember.run.next(this, 'initTooltip');
    },
    toDelete:function(tool){
      Ember.set(tool,'toDelete',true);
    },
    supprimer:function(tool){
      tool.deleteRecord();
      return tool.save();
    },
    newTool() {
      this.replaceWith('tools.new');
    }
  },
  initTooltip() {
    Ember.$('[data-toggle="popover"]').popover({
      container: 'body',
      html: true,
      trigger: 'hover',
      content: function () {
        return $(this).next('.popper-content').html();
      }
    });

  }
});
