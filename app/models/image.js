import DS from 'ember-data';

export default DS.Model.extend({
  // userid: DS.attr(),
  title: DS.attr('string'),
  url: DS.attr('string'),
  prev: DS.attr('string'),
  next: DS.attr('string')
});
