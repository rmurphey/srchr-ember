require([
  'Ember'
], function(Ember) {
  var Srchr = window.Srchr = Ember.Application.create();

  require([ 'app/routes/app_router' ], function(Router) {
    var router = Router.create({
      location : 'hash'
    });

    Srchr.initialize(router);
  });

});
