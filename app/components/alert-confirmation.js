import Component from '@ember/component';

export default Component.extend({
  classNames: ['alert-confirmation'],
  actions: {
    launchConfirmDialog() {
      this.set('visible',true);
    },

    submitConfirm() {
      this.sendAction('action',this.get('param'));
      this.set('visible',false);
    },

    cancelConfirm() {
      this.set('visible', false);
      if(this.get('cancel')){
        this.sendAction('cancel',this.get('param'));
      }
    }
  }
});
