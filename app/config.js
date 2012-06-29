requirejs.config({
  deps : [ 'application' ],

  paths : {
    lib : '../lib',
    app : '.',

    // Libraries
    jquery : '../lib/jquery',
    handlebars : '../lib/handlebars',
    Ember : '../lib/ember.min',
    templates : './templates',
    hbs : '../lib/hbs',
    Handlebars : '../lib/Handlebars',
    text : '../lib/plugins/text'
  },

  hbs : {
    templateExtension : 'handlebars',
    disableI18n : true
  },

  shim : {
    Handlebars : {
      exports : 'Handlebars'
    },
    Ember : {
      deps : [ 'jquery', 'Handlebars' ],
      exports : 'Ember'
    }
  }
});
