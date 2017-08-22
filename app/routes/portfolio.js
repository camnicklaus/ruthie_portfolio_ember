import Ember from 'ember';

let images = [
  {
    id: "birdhouse",
    title: "building the birdhouse",
    url: "/assets/images/portfolio/birdhouse.jpg"
  },
  {
    id: "blairycover",
    title: "blairy the pickle",
    url: "/assets/images/portfolio/blairycover.jpg"
  },
  // {
  //   title: "boys and toys",
  //   url: "/assets/images/portfolio/boysandtoys.jpg"
  // },
  // {
  //   title: "bunnies jumping",
  //   url: "/assets/images/portfolio/bunniesjump.jpg"
  // },
  // {
  //   title: "decorating the tree!",
  //   url: "/assets/images/portfolio/decoratetree.jpg"
  // },
  // {
  //   title: "the lamby show 1",
  //   url: "/assets/images/portfolio/lambparents.jpg"
  // },
  // {
  //   title: "the lamby show 2",
  //   url: "/assets/images/portfolio/lambshowoff.jpg"
  // },
  // {
  //   title: "the lamby show 3",
  //   url: "/assets/images/portfolio/lambyshowtitle.jpg"
  // },
  // {
  //   title: "lando the cat",
  //   url: "/assets/images/portfolio/landofleabite.jpg"
  // },
  // {
  //   title: "why can't we be friends",
  //   url: "/assets/images/portfolio/landointree.jpg"
  // },
  // {
  //   title: "teeth brushin'",
  //   url: "/assets/images/portfolio/mouseteeth.jpg"
  // },
  // {
  //   title: "washington winter",
  //   url: "/assets/images/portfolio/rainman.jpg"
  // },
  // {
  //   title: "swimming lessons",
  //   url: "/assets/images/portfolio/swimminglesson.jpg"
  // },
  // {
  //   title: "life in the trailer",
  //   url: "/assets/images/portfolio/trailertrouble.jpg"
  // },
  // {
  //   title: "walkin'",
  //   url: "/assets/images/portfolio/walkwithboys.jpg"
  // }
];

export default Ember.Route.extend({
  model() {
    return images;
  }
});
