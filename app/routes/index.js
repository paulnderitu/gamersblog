import Ember from 'ember';
export default Ember.Route.extend({
  model() {
    return this.store.findAll('game');
  },
  actions: {
    destroyGame(game) {
      game.destroyRecord();
      this.transitionTo('index');
    }
  }
});
