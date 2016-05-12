ULNS.App = (function() {
  function App() {}

  App.prototype.debug = 0;

  App.prototype.events = _.extend(ULNS.Events, Backbone.Events);

  App.prototype.init = function() {
    ULNS.log('App init');
    this.events.t('init:start');
    this.events.on('dom:onload', this.dom_onload, this);
    ULNS.root_view = new ULNS.UserListView({
      collection: new ULNS.Users
    });
    return this.events.on('init:dom:end', function() {
      return this.events.t('init:end');
    }, this);
  };

  App.prototype.dom_onload = function() {
    ULNS.log('DOM loaded, proceeding');
    ULNS.app.dom_exists = true;
    this.events.t('init:dom:start');
    $('#main').append(ULNS.root_view.render().el);
    this.router = new ULNS.Router;
    return this.events.t('init:dom:end');
  };

  App.prototype.root = function() {
    var data;
    data = [
      {
        name: 'Ivan Ivanov',
        phone: '111111111'
      }, {
        name: 'Petr Petrov',
        phone: '222222222'
      }, {
        name: 'Sergei Serov',
        phone: '333333333'
      }, {
        name: 'Ivan Ivanov',
        phone: '444444444'
      }, {
        name: 'Ivan Ivanov',
        phone: '555555555'
      }
    ];
    if (ULNS.root_view.collection.url) {
      return ULNS.root_view.collection.fetch();
    } else {
      return ULNS.root_view.collection.add(data);
    }
  };

  return App;

})();

//# sourceMappingURL=app.js.map
