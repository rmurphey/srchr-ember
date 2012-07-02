define([ 'Ember' ], function(Ember) {
  Srchr.RecentsItemView = Ember.View.extend({
    tagName: 'li',

    isActive: function() {
      var context = this.get('context'),
          controller = this.get('controller');

      return context === controller.objectAt(0);
    }.property('controller.@each')
  });
});

