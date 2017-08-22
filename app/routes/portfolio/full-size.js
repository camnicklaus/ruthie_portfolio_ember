import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let images = this.modelFor('portfolio');
    let image = images.findBy('id',  params.image_id)
    // debugger;
    // console.log()
    // return this.modelFor('portfolio');
    return image;
  }
});
