define([ 'Ember', 'text!templates/search.handlebars' ], function(Ember, tpl) {
  Ember.TEMPLATES.search = Ember.Handlebars.compile(tpl);

  Srchr.SearchView = Ember.View.extend({
    templateName: 'search'
  });
});
