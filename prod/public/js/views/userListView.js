var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ULNS.UserListView = (function(superClass) {
  extend(UserListView, superClass);

  function UserListView() {
    return UserListView.__super__.constructor.apply(this, arguments);
  }

  UserListView.prototype.id = 'user-list';

  UserListView.prototype.template = function() {
    return ULNS.Templates.userListView;
  };

  UserListView.prototype.initialize = function(options) {
    ULNS.info('UserListView initializing');
    this.listenTo(options.collection, 'add', this.renderUser);
    return this.listenTo(options.collection, 'new:user:add', this.renderUserAddView);
  };

  UserListView.prototype.renderUserAddView = function() {
    var userAddView;
    userAddView = new ULNS.UserAddView({
      collection: this.collection,
      model: new ULNS.User
    });
    return this.$('#user-add-form').html(userAddView.render().el);
  };

  UserListView.prototype.renderUser = function(model) {
    var userDetailView;
    userDetailView = new ULNS.UserDetailView({
      model: model
    });
    return this.$('tbody').append(userDetailView.render().el);
  };

  UserListView.prototype.render = function() {
    ULNS.info('UserListView rendering');
    this.$el.html(this.template());
    this.renderUserAddView();
    this.collection.each((function(_this) {
      return function(model) {
        return _this.renderUser(model);
      };
    })(this));
    return this;
  };

  return UserListView;

})(Backbone.View);

//# sourceMappingURL=userListView.js.map
