var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ULNS.Router = (function(superClass) {
  extend(Router, superClass);

  function Router() {
    return Router.__super__.constructor.apply(this, arguments);
  }

  Router.prototype.routes = {
    '': 'root'
  };

  Router.prototype.initialize = function() {
    ULNS.log('Router init');
    return ULNS.app.events.t('router:init:end');
  };

  Router.prototype.root = function() {
    ULNS.log('init root route');
    return ULNS.app.root();
  };

  return Router;

})(Backbone.Router);

//# sourceMappingURL=router.js.map
