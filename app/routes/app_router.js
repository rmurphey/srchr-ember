define([
  'Ember',

  'app/controllers/application_controller',
  'app/controllers/recents_controller',
  'app/controllers/results_controller',
  'app/controllers/search_controller',

  'app/views/application_view',
  'app/views/recents_view',
  'app/views/recents_item_view',
  'app/views/results_view',
  'app/views/results_item_view',
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
        router.transitionTo('result', query);
      },

      searchRecent: function(router, event) {
        router.setPath('searchController.query', event.context);
        router.send('performSearch');
      },

      eventTransitions: {
        searchRecent: 'result'
      },

      index: Ember.Route.extend({
        route: '/'
      }),

      result: Ember.Route.extend({
        route: '/search/:query',

        connectOutlets: function(router, query) {
          var recentsController = router.get('recentsController');
          var applicationController = router.get('applicationController');

          recentsController.addQuery(query);
          applicationController.connectOutlet('results');
          router.get('resultsController').fetch(query);
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
