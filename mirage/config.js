export default function() {

  this.namespace = '/api';
  

  this.get('/images', function() {
    // debugger
    return {
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
            next: 'birdhouse'
          }
        },
        // {
        //   type: 'image',
        //   id: "bunniesjump",
        //   attributes: {
        //     title: "bunnies jumping",
        //     url: "/assets/images/portfolio/bunniesjump.jpg"
        //   }
        // },
        // {
        //   type: 'image',
        //   id: "decoratetree",
        //   attributes: {
        //     title: "decorating the tree!",
        //     url: "/assets/images/portfolio/decoratetree.jpg"
        //   }
        // },
        // {
        //   type: 'image',
        //   id: "lambparents",
        //   attributes: {
        //     title: "the lamby show 1",
        //     url: "/assets/images/portfolio/lambparents.jpg"
        //   }
        // },
        // {
        //   type: 'image',
        //   id: "lambshowoff",
        //   attributes: {
        //     title: "the lamby show 2",
        //     url: "/assets/images/portfolio/lambshowoff.jpg"
        //   }
        // },
        // {
        //   type: 'image',
        //   id: "lambyshowtitle",
        //   attributes: {
        //     title: "the lamby show 3",
        //     url: "/assets/images/portfolio/lambyshowtitle.jpg"
        //   }
        // },
        // {
        //   type: 'image',
        //   id: "landofleabite",
        //   attributes: {
        //     title: "lando the cat",
        //     url: "/assets/images/portfolio/landofleabite.jpg"
        //   }
        // },
        // {
        //   type: 'image',
        //   id: "landointree",
        //   attributes: {
        //     title: "why can't we be friends",
        //     url: "/assets/images/portfolio/landointree.jpg"
        //   }
        // },
        // {
        //   type: 'image',
        //   id: "mouseteeth",
        //   attributes: {
        //     title: "teeth brushin'",
        //     url: "/assets/images/portfolio/mouseteeth.jpg"
        //   }
        // },
        // {
        //   type: 'image',
        //   id: "rainman",
        //   attributes: {
        //     title: "washington winter",
        //     url: "/assets/images/portfolio/rainman.jpg"
        //   }
        // },
        // {
        //   type: 'image',
        //   id: "swimminglesson",
        //   attributes: {
        //     title: "swimming lessons",
        //     url: "/assets/images/portfolio/swimminglesson.jpg"
        //   }
        // },
        // {
        //   type: 'image',
        //   id: "trailertrouble",
        //   attributes: {
        //     title: "life in the trailer",
        //     url: "/assets/images/portfolio/trailertrouble.jpg"
        //   }
        // },
        // {
        //   type: 'image',
        //   id: "walkwithboys",
        //   attributes: {
        //     title: "walkin'",
        //     url: "/assets/images/portfolio/walkwithboys.jpg"
        //   }
        // }
      ]
    };
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
