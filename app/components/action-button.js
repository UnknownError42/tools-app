import Component from '@ember/component';

export default Component.extend({
  actions: {
    doButtonThing() {
      this.sendAction('action');
    }
  }
});
