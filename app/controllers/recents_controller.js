define(function() {
  Srchr.RecentsController = Ember.ArrayController.extend({
    init: function() {
      var recents = localStorage.recents || '[]';
      recents = JSON.parse(recents);
      this.set('content', recents);
    },

    addQuery: function(query) {
      var index = this.indexOf(query);
      if (index === -1) {
        this.unshiftObject(query);
      } else {
        this.removeAt(index);
        this.unshiftObject(query);
      }

      localStorage.recents = JSON.stringify(this.get('content'));
    }
  });
});
