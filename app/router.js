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
    this.route('full-size', { path: '/:image_id' })
  });
});

export default Router;
