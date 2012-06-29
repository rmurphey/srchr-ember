define([ 'Ember', 'text!templates/application.handlebars' ], function(Ember, tpl) {
  Ember.TEMPLATES.application = Ember.Handlebars.compile(tpl);

  Srchr.ApplicationView = Ember.View.extend({
    templateName: 'application'
  });
});
