import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('sketchbook');
  this.route('portfolio', function() {
    this.route('show', { path: ':image_id'} );
  });
  // this.route('view-full-size', { path: '/:collection/:image_id' });
});

export default Router;
