
export default function(){
  const duration = 500;
  
  this.transition(
    this.hasClass('fire-wrap'),
    this.use('explode', {
      matchBy: 'data-photo-id',      // matchBy will look for the same
                                     // HTML attribute value in both
                                     // the old and new elements, and
                                     // for each matching pair, it
                                     // runs the given transition.
  
      // fly-to is a built in transition that animate the element
      // moving from the position of oldElement to the position of
      // newElement.
      use: ['fly-to', {duration, easing: 'easeOutCirc'}]
    })
  );
  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );
}
