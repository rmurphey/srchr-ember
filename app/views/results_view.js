define([ 'Ember', 'text!templates/results.handlebars' ], function(Ember, tpl) {
  Ember.TEMPLATES.results = Ember.Handlebars.compile(tpl);

  Srchr.ResultsView = Ember.View.extend({
    templateName: 'results'
  });
});
