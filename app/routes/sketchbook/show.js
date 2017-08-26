import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let images = this.modelFor('sketchbook');
    let image = images.findBy('id', params.image_id);
    return image;
 
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('image', model);
    $('.header').fadeOut(400, function() {
      $('.arrow').show();
    });
  },
  resetController(controller, isExiting) {
    if (isExiting) {
      $('.header').fadeIn(500);
    }
  }
});