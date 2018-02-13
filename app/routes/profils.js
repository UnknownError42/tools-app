import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.get('store').findAll('profil');
  },
  actions:{
    addNew:function(){
      let profil=this.get('store').createRecord('profil',{name:'Profil test',description:'pas de description'});
      profil.save();
    },
    delete:function(profil){
      profil.deleteRecord();
      profil.save();
    }
  }
});
