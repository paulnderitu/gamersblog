import Ember from 'ember';

export default Ember.Component.extend({
  addNewGame: false,
  actions: {
    gameFormShow() {
      this.set ('addNewGame', true);
    },
    saveGame1() {
      var params= {
        title: this.get('title'),
        writer: this.get('writer'),
        type: this.get('type'),
        image: this.get('image'),
        date: this.get('date'),
      };
      this.set('addNewGame', false);
      this.sendAction('saveGame2', params);
    }
  }
});
