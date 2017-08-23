import Ember from 'ember';

let images = [
  {
    id: "bike",
    title: "safe biking",
    url: "/assets/images/sketchbook/bike.jpg"
  },
  {
    id: "carsafety",
    title: "car safety",
    url: "/assets/images/sketchbook/carsafety.jpg"
  },
  {
    id: "fire",
    title: "fire safety",
    url: "/assets/images/sketchbook/fire.jpg"
  },
  {
    id: "river",
    title: "throwin' rocks",
    url: "/assets/images/sketchbook/river.jpg"
  },
  {
    id: "road",
    title: "road safety",
    url: "/assets/images/sketchbook/road.jpg"
  },
  {
    id: "watersafe",
    title: "water safety",
    url: "/assets/images/sketchbook/watersafe.jpg"
  },
];

export default Ember.Route.extend({
  model() {
    return images;
  }
});
