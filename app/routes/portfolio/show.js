import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let images = this.modelFor('portfolio');
    let image = images.findBy('id', params.image_id);
    // console.log(params)
    // debugger;
    return image;
 
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('image', model)
  }
});
