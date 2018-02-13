import DS from 'ember-data';
//import { singularize } from 'ember-inflector';
import { pluralize } from 'ember-inflector';

var Adapater=DS.RESTAdapter.extend({
  ajaxOptions: function(url, type, options) {
    var hash = this._super(url, type, options);
    if (type == 'POST' || type=='PUT') {
      hash.dataType = 'text';
    }
    return hash;
  },
/*
  ajaxSuccess: function(jqXHR, data) {
    if (typeof data === 'string') {
      // return an empty object so the Serializer
      // handles it correctly
      return {};
    } else {
      return data;
    }
  },*/
  host:'http://127.0.0.1:8080',
  namespace: 'tools',
  /*pathForType(type) {
    //var str= singularize(type);
    return Ember.String.capitalize(str);
  },*/
  urlForDeleteRecord(id, modelName) {
    modelName=pluralize(modelName);
    return this.get('host')+'/'+this.get('namespace')+`/${modelName}/*?filter={_id:'${id}'}`;
  }
});

export default Adapater;
