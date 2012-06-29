define([
  'Ember',

  'app/controllers/application_controller',
  'app/controllers/recents_controller',
  'app/controllers/results_controller',
  'app/controllers/search_controller',

  'app/views/application_view',
  'app/views/recents_view',
  'app/views/results_view',
  'app/views/search_view'
], function(Ember) {
  var router = Ember.Router.extend({
    enableLogging: true,

    root: Ember.Route.extend({
      connectOutlets: function(router) {
        Ember.run.next(function() {
          var applicationController = router.get('applicationController');
          applicationController.connectOutlet({
            outletName: 'search',
            name: 'search'
          });

          applicationController.connectOutlet({
            outletName: 'recents',
            name: 'recents'
          });
        });
      },

      performSearch: function(router) {
        var query = router.getPath('searchController.query');
        var recentsController = router.get('recentsController');

        recentsController.addQuery(query);
        router.transitionTo('result', query);
      },

      index: Ember.Route.extend({
        route: '/'
      }),

      result: Ember.Route.extend({
        route: '/search/:query',

        connectOutlets: function(router, context) {
          var applicationController = router.get('applicationController');
          applicationController.connectOutlet('results');
          router.get('resultsController').fetch(context);
        },

        serialize: function(router, context) {
          return {
            query: context
          };
        },

        deserialize: function(router, params) {
          return params.query;
        }
      })
    })
  });

  return router;
});
