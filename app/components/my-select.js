import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  selectedIds:[],
  selectedElements: Ember.computed('selectedIds.[]', function() {
    return this.get('selectedIds').map((id) => {
      return this.get('elements').findBy('id', id);
    });
  }),
  actions:{
    selectElement:function(event){
      const selectedIds = Ember.$(event.target).val();
      this.set('selectedIds', selectedIds || []);
    }
  }
});
