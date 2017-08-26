import Ember from 'ember';
import config from './config/environment';
import RouterScroll from 'ember-router-scroll';

const Router = Ember.Router.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('sketchbook', function() {
    this.route('show', { path: '/sketchbook/:image_id' });
  });
  this.route('portfolio', function() {
    this.route('show', { path: '/:image_id' });
  });
});

export default Router;
