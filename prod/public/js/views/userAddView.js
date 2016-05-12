var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ULNS.UserAddView = (function(superClass) {
  extend(UserAddView, superClass);

  function UserAddView() {
    return UserAddView.__super__.constructor.apply(this, arguments);
  }

  UserAddView.prototype.tagName = 'form';

  UserAddView.prototype.className = 'form-inline';

  UserAddView.prototype.template = function() {
    return ULNS.Templates.userAddView(this.model.toJSON());
  };

  UserAddView.prototype.events = {
    'click .btn-add': 'userAdd'
  };

  UserAddView.prototype.initialize = function(options) {
    ULNS.info('UserAddView initializing', options);
    this.listenTo(options.model, 'change:errors', this.render);
    this.listenTo(options.model, 'validated', this.validated);
    return Backbone.Validation.bind(this);
  };

  UserAddView.prototype.render = function() {
    ULNS.info('UserAddView rendering');
    this.$el.html(this.template());
    return this;
  };

  UserAddView.prototype.userAdd = function(event) {
    event.preventDefault();
    this.model.set({
      name: this.$('#name').val(),
      phone: this.$('#phone').val()
    });
    return this.model.save();
  };

  UserAddView.prototype.validated = function(isValid, model, errors) {
    if (isValid) {
      model.set({
        editing: false
      });
      model.unset('errors');
      this.collection.add(model);
      return this.collection.trigger('new:user:add');
    } else {
      return this.model.set('errors', errors);
    }
  };

  return UserAddView;

})(Backbone.View);

//# sourceMappingURL=userAddView.js.map
