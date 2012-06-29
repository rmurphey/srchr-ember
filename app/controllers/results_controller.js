define(function() {
  Srchr.ResultsController = Ember.ArrayController.extend({
    fetch : function(query) {
      console.log('searching for', query);
      var req = $.getJSON('/_data/search', { term : query }, $.noop);
      req.done($.proxy(this, '_loadResults'));
    },

    _loadResults : function(resp) {
      this.set('content', resp);
    }
  });
});
