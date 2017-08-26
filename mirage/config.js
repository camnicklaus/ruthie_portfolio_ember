export default function() {

  this.namespace = '/api';
  
  const galleries = {
    'portfolio': {
      data: [
        {
          type: 'image',
          id: 'birdhouse',
          attributes: {
            title: "building the birdhouse",
            url: "/assets/images/portfolio/birdhouse.jpg",
            prev: 'boysandtoys',
            next: 'blairycover'
          }
        },
        {
          type: 'image',
          id: 'blairycover',
          attributes: {
            title: "blairy the pickle",
            url: "/assets/images/portfolio/blairycover.jpg",
            prev: 'birdhouse',
            next: 'boysandtoys'
          }
          
        },
        {
          type: 'image',
          id: "boysandtoys",
          attributes: {
            title: "boys and toys",
            url: "/assets/images/portfolio/boysandtoys.jpg",
            prev: 'blairycover',
            next: 'bunniesjump'
          }
        },
        {
          type: 'image',
          id: "bunniesjump",
          attributes: {
            title: "bunnies jumping",
            url: "/assets/images/portfolio/bunniesjump.jpg",
            prev: 'boysandtoys',
            next: 'decoratetree'
          }
        },
        {
          type: 'image',
          id: "decoratetree",
          attributes: {
            title: "decorating the tree!",
            url: "/assets/images/portfolio/decoratetree.jpg",
            prev: 'bunniesjump',
            next: 'lambparents'
          }
        },
        {
          type: 'image',
          id: "lambparents",
          attributes: {
            title: "the lamby show 1",
            url: "/assets/images/portfolio/lambparents.jpg",
            prev: 'decoratetree',
            next: 'lambshowoff'
          }
        },
        {
          type: 'image',
          id: "lambshowoff",
          attributes: {
            title: "the lamby show 2",
            url: "/assets/images/portfolio/lambshowoff.jpg",
            prev: 'lambparents',
            next: 'lambyshowtitle'
          }
        },
        {
          type: 'image',
          id: "lambyshowtitle",
          attributes: {
            title: "the lamby show 3",
            url: "/assets/images/portfolio/lambyshowtitle.jpg",
            prev: 'lambshowoff',
            next: 'landofleabite'
          }
        },
        {
          type: 'image',
          id: "landofleabite",
          attributes: {
            title: "lando the cat",
            url: "/assets/images/portfolio/landofleabite.jpg",
            prev: 'lambyshowtitle',
            next: 'landointree'
          }
        },
        {
          type: 'image',
          id: "landointree",
          attributes: {
            title: "why can't we be friends",
            url: "/assets/images/portfolio/landointree.jpg",
            prev: 'landofleabite',
            next: 'mouseteeth'
          }
        },
        {
          type: 'image',
          id: "mouseteeth",
          attributes: {
            title: "teeth brushin'",
            url: "/assets/images/portfolio/mouseteeth.jpg",
            prev: 'landointree',
            next: 'rainman'
          }
        },
        {
          type: 'image',
          id: "rainman",
          attributes: {
            title: "washington winter",
            url: "/assets/images/portfolio/rainman.jpg",
            prev: 'mouseteeth',
            next: 'swimminglesson'
          }
        },
        {
          type: 'image',
          id: "swimminglesson",
          attributes: {
            title: "swimming lessons",
            url: "/assets/images/portfolio/swimminglesson.jpg",
            prev: 'rainman',
            next: 'trailertrouble'
          }
        },
        {
          type: 'image',
          id: "trailertrouble",
          attributes: {
            title: "life in the trailer",
            url: "/assets/images/portfolio/trailertrouble.jpg",
            prev: 'swimminglesson',
            next: 'walkwithboys'
          }
        },
        {
          type: 'image',
          id: "walkwithboys",
          attributes: {
            title: "walkin'",
            url: "/assets/images/portfolio/walkwithboys.jpg",
            prev: 'trailertrouble',
            next: 'birdhouse'
          }
        }
      ]
    },
    'sketchbook': {
      data: [
        {
          type: 'image',
          id: 'bike',
          attributes: {
            title: 'bike riding',
            url: '/assets/images/sketchbook/bike.jpg',
            prev: 'watersafe',
            next: 'carsafety'
          }
        },
        {
          type: 'image',
          id: 'carsafety',
          attributes: {
            title: 'car safety',
            url: '/assets/images/sketchbook/carsafety.jpg',
            prev: 'bike',
            next: 'fire'
          }
        },
        {
          type: 'image',
          id: 'fire',
          attributes: {
            title: 'fire',
            url: '/assets/images/sketchbook/fire.jpg',
            prev: 'carsafety',
            next: 'river'
          }
        },
        {
          type: 'image',
          id: 'river',
          attributes: {
            title: 'river',
            url: '/assets/images/sketchbook/river.jpg',
            prev: 'fire',
            next: 'road'
          }
        },
        {
          type: 'image',
          id: 'road',
          attributes: {
            title: 'road',
            url: '/assets/images/sketchbook/road.jpg',
            prev: 'river',
            next: 'watersafe'
          }
        },
        {
          type: 'image',
          id: 'watersafe',
          attributes: {
            title: 'water safety',
            url: '/assets/images/sketchbook/watersafe.jpg',
            prev: 'road',
            next: 'bike'
          }
        }
      ]
    }
  };

  this.get('/images', function(db, req) {
    // console.log(db, req.queryParams.gallery)
    return galleries[req.queryParams.gallery];
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
