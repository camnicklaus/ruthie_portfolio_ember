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
  {
    id: "boysandtoys",
    title: "boys and toys",
    url: "/assets/images/portfolio/boysandtoys.jpg"
  },
  {
    id: "bunniesjump",
    title: "bunnies jumping",
    url: "/assets/images/portfolio/bunniesjump.jpg"
  },
  {
    id: "decoratetree",
    title: "decorating the tree!",
    url: "/assets/images/portfolio/decoratetree.jpg"
  },
  {
    id: "lambparents",
    title: "the lamby show 1",
    url: "/assets/images/portfolio/lambparents.jpg"
  },
  {
    id: "lambshowoff",
    title: "the lamby show 2",
    url: "/assets/images/portfolio/lambshowoff.jpg"
  },
  {
    id: "lambyshowtitle",
    title: "the lamby show 3",
    url: "/assets/images/portfolio/lambyshowtitle.jpg"
  },
  {
    id: "landofleabite",
    title: "lando the cat",
    url: "/assets/images/portfolio/landofleabite.jpg"
  },
  {
    id: "landointree",
    title: "why can't we be friends",
    url: "/assets/images/portfolio/landointree.jpg"
  },
  {
    id: "mouseteeth",
    title: "teeth brushin'",
    url: "/assets/images/portfolio/mouseteeth.jpg"
  },
  {
    id: "rainman",
    title: "washington winter",
    url: "/assets/images/portfolio/rainman.jpg"
  },
  {
    id: "swimminglesson",
    title: "swimming lessons",
    url: "/assets/images/portfolio/swimminglesson.jpg"
  },
  {
    id: "trailertrouble",
    title: "life in the trailer",
    url: "/assets/images/portfolio/trailertrouble.jpg"
  },
  {
    id: "walkwithboys",
    title: "walkin'",
    url: "/assets/images/portfolio/walkwithboys.jpg"
  }
];

export default Ember.Route.extend({
  model() {
    return images;
  }
});
