import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return this.get('store').findAll('image');
    return this.get('store').query('image', { gallery: 'sketchbook' })
  },
});
