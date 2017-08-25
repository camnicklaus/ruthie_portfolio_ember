import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // debugger
    return this.get('store').findAll('image');
  }
});
