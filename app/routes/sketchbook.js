import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        title: "safe biking",
        url: "/assets/images/sketchbook/bike.jpg"
      },
      {
        title: "car safety",
        url: "/assets/images/sketchbook/carsafety.jpg"
      },
      {
        title: "fire safety",
        url: "/assets/images/sketchbook/fire.jpg"
      },
      {
        title: "throwin' rocks",
        url: "/assets/images/sketchbook/river.jpg"
      },
      {
        title: "road safety",
        url: "/assets/images/sketchbook/road.jpg"
      },
      {
        title: "water safety",
        url: "/assets/images/sketchbook/watersafe.jpg"
      },
    ]
  }
});
