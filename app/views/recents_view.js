define([ 'Ember', 'text!templates/recents.handlebars' ], function(Ember, tpl) {
  Ember.TEMPLATES.recents = Ember.Handlebars.compile(tpl);

  Srchr.RecentsView = Ember.View.extend({
    templateName: 'recents'
  });
});
