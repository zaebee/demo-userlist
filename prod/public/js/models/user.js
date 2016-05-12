var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ULNS.User = (function(superClass) {
  extend(User, superClass);

  function User() {
    return User.__super__.constructor.apply(this, arguments);
  }

  User.prototype.initialize = function() {
    return ULNS.info('User model initialized');
  };

  User.prototype.validation = {
    name: {
      required: true,
      msg: 'Пожалуйста, напишите имя пользователя'
    },
    phone: [
      {
        required: true,
        msg: 'Пожалуйста, напишите телефон'
      }, {
        pattern: /^\+?([-. 0-9]{6,60})$/,
        msg: 'Напишите, правильный телефон'
      }
    ]
  };

  return User;

})(Backbone.Model);

//# sourceMappingURL=user.js.map
