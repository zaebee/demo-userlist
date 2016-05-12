var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ULNS.UserDetailView = (function(superClass) {
  extend(UserDetailView, superClass);

  function UserDetailView() {
    return UserDetailView.__super__.constructor.apply(this, arguments);
  }

  UserDetailView.prototype.id = 'user-detail';

  UserDetailView.prototype.tagName = 'tr';

  UserDetailView.prototype.template = function() {
    return ULNS.Templates.userDetailView(this.model.toJSON());
  };

  UserDetailView.prototype.events = {
    'click .btn-edit': 'userEdit',
    'click .btn-save': 'userSave',
    'click .btn-remove': 'userRemove',
    'click .btn-cancel': 'userCancel'
  };

  UserDetailView.prototype.initialize = function(options) {
    ULNS.info('UserDetailView initializing', options);
    this.listenTo(options.model, 'change:editing', this.render);
    this.listenTo(options.model, 'change:errors', this.render);
    this.listenTo(options.model, 'validated', this.validated);
    return Backbone.Validation.bind(this);
  };

  UserDetailView.prototype.render = function() {
    ULNS.info('UserDetailView rendering');
    this.$el.html(this.template());
    return this;
  };

  UserDetailView.prototype.userEdit = function(event) {
    ULNS.info(event);
    event.preventDefault();
    return this.model.set({
      editing: true
    });
  };

  UserDetailView.prototype.userSave = function(event) {
    event.preventDefault();
    this.model.set({
      name: this.$('[name=name]').val(),
      phone: this.$('[name=phone]').val()
    });
    return this.model.save();
  };

  UserDetailView.prototype.userRemove = function(event) {
    event.preventDefault();
    this.model.destroy();
    return this.remove();
  };

  UserDetailView.prototype.userCancel = function(event) {
    event.preventDefault();
    return this.model.set({
      editing: false
    });
  };

  UserDetailView.prototype.validated = function(isValid, model, errors) {
    if (isValid) {
      model.set({
        editing: false
      });
      return model.unset('errors');
    } else {
      return this.model.set('errors', errors);
    }
  };

  return UserDetailView;

})(Backbone.View);

//# sourceMappingURL=userDetailView.js.map
