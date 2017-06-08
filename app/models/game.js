import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  writer: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  date: DS.attr()

});
