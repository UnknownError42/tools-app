import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tools', function() {
    this.route('new');
    this.route('update',{ path: 'update/:tool_id' });
  });
  this.route('categories');

  this.route('category', {
    path: 'category/:category_id'
  });
  this.route('profils', function() {
    this.route('new');
  });
  this.route('profil', {path: 'profil/:profil_id'});
});

export default Router;
