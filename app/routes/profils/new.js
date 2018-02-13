import Route from '@ember/routing/route';
import Ember from 'ember';
export default Route.extend({
  model(){
    return Ember.Object.create({});
  },
  actions:{
    save:function(){
      let model=this.modelFor(this.routeName);
      let profil=this.get('store').createRecord('profil',JSON.parse(JSON.stringify(model)));
      profil.save().then(()=>{this.transitionTo("profils");}).
      catch((error)=>console.log(error));

    }
  }
});
