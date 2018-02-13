import Service from '@ember/service';

export default Service.extend({
  actions: {
    supprimer(object) {
      object.deleteRecord();
      return object.save();
    }
  }
});
