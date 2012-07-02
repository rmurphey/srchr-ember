define([ 'Ember', 'text!templates/results_item.handlebars' ], function(Ember, tpl) {
  Ember.TEMPLATES.results_item = Handlebars.compile(tpl);

  Srchr.ResultsItemView = Ember.View.extend({
    templateName: 'results_item'
  });
});

