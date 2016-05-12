window.ULNS = (function() {
  function ULNS() {}

  return ULNS;

})();

//# sourceMappingURL=ns.js.map

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

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ULNS.Users = (function(superClass) {
  extend(Users, superClass);

  function Users() {
    return Users.__super__.constructor.apply(this, arguments);
  }

  Users.prototype.model = ULNS.User;

  Users.prototype.initialize = function() {
    return ULNS.info('Users collection initialized');
  };

  return Users;

})(Backbone.Collection);

//# sourceMappingURL=users.js.map

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

ULNS.Events = {
  t: function(event_name, options) {
    if (options == null) {
      options = {};
    }
    ULNS.log(6, "EVENT Triggered '" + event_name + "'", options);
    return this.trigger(event_name, options);
  }
};

//# sourceMappingURL=events.js.map

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

var slice = [].slice;

if (!window.console) {
  window.console = {};
}

if (!console.log) {
  console.log = function() {};
}

if (!console.warn) {
  console.warn = function() {};
}

if (!console.error) {
  console.error = function() {};
}

if (!console.info) {
  console.info = function() {};
}

ULNS.console_output = function() {
  var args, date, level, msg, output_routine, timestamp;
  args = Array.prototype.slice.call(arguments);
  output_routine = args[0];
  args.shift();
  if (!output_routine) {
    return;
  }
  if (args.length > 1) {
    level = parseInt(args[0]);
    if ([0, 1, 2, 3, 4, 5, 6].indexOf(level) > -1) {
      args.shift();
      if (ULNS.app.debug < level) {
        return false;
      }
    }
  }
  if (isNaN(level)) {
    level = 0;
  }
  if (level == null) {
    level = 0;
  }
  date = new Date;
  timestamp = (date.getUTCFullYear()) + "-" + (date.getUTCMonth() + 1) + "-" + (date.getUTCDate()) + "@" + (date.getUTCHours()) + ":" + (date.getUTCMinutes()) + ":" + (date.getUTCSeconds()) + "." + (date.getUTCMilliseconds());
  msg = args[0];
  if (args.length > 1) {
    args.shift();
  } else {
    args = [];
  }
  console[output_routine].apply(console, ["[" + level + ":" + timestamp + "] " + msg].concat(slice.call(args)));
  return true;
};

ULNS.log = function() {
  return ULNS.console_output.apply(ULNS, ['log'].concat(slice.call(arguments)));
};

ULNS.info = function() {
  return ULNS.console_output.apply(ULNS, ['info'].concat(slice.call(arguments)));
};

ULNS.warn = function() {
  return ULNS.console_output.apply(ULNS, ['warn'].concat(slice.call(arguments)));
};

ULNS.error = function() {
  return ULNS.console_output.apply(ULNS, ['error'].concat(slice.call(arguments)));
};

//# sourceMappingURL=log.js.map

ULNS.app = new ULNS.App;

ULNS.app.events.on('router:init:end', function() {
  return Backbone.history.start({
    pushState: true
  });
});

ULNS.app.init();

$(function() {
  return ULNS.app.events.t('dom:onload');
});

//# sourceMappingURL=init.js.map

this["ULNS"] = this["ULNS"] || {};
this["ULNS"]["Templates"] = this["ULNS"]["Templates"] || {};

this["ULNS"]["Templates"]["userAddView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "has-error";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <span class=\"help-block\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.errors : depth0)) != null ? stack1.name : stack1), depth0))
    + "</span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <span class=\"help-block\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.errors : depth0)) != null ? stack1.phone : stack1), depth0))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<div class=\"form-group col-md-5 "
    + ((stack1 = helpers["if"].call(depth0,((stack1 = (depth0 != null ? depth0.errors : depth0)) != null ? stack1.name : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n  <label for=\"name\">Имя</label>\n  <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Сергей Кузнецов\" value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(depth0,((stack1 = (depth0 != null ? depth0.errors : depth0)) != null ? stack1.name : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<div class=\"form-group col-md-5 "
    + ((stack1 = helpers["if"].call(depth0,((stack1 = (depth0 != null ? depth0.errors : depth0)) != null ? stack1.phone : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n  <label for=\"phone\">Телефон</label>\n  <input type=\"email\" class=\"form-control\" id=\"phone\" placeholder=\"7-871-501-11-12\" value=\""
    + alias3(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phone","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(depth0,((stack1 = (depth0 != null ? depth0.errors : depth0)) != null ? stack1.phone : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<button type=\"submit\" class=\"col-md-2 btn btn-default btn-add\">Добавить</button>\n";
},"useData":true});

this["ULNS"]["Templates"]["userDetailView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    <div class=\"form-group "
    + ((stack1 = helpers["if"].call(depth0,((stack1 = (depth0 != null ? depth0.errors : depth0)) != null ? stack1.name : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n      <input name=\"name\" class=\"form-control\" placeholder=\"Сергей Кузнецов\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(depth0,((stack1 = (depth0 != null ? depth0.errors : depth0)) != null ? stack1.name : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "has-error";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <span class=\"help-block\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.errors : depth0)) != null ? stack1.name : stack1), depth0))
    + "</span>\n    </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    <div class=\"form-group "
    + ((stack1 = helpers["if"].call(depth0,((stack1 = (depth0 != null ? depth0.errors : depth0)) != null ? stack1.phone : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n      <input name=\"phone\" class=\"form-control\" placeholder=\"7-871-501-11-12\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"phone","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(depth0,((stack1 = (depth0 != null ? depth0.errors : depth0)) != null ? stack1.phone : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <span class=\"help-block\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.errors : depth0)) != null ? stack1.phone : stack1), depth0))
    + "</span>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    "
    + container.escapeExpression(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"phone","hash":{},"data":data}) : helper)))
    + "\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "    <a href=\"#\" class=\"btn btn-default btn-save\">Сохранить</a>\n    <a href=\"#\" class=\"btn btn-danger btn-cancel\">Отменить</a>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "    <a href=\"#\" class=\"btn btn-default btn-edit\">Редактировать</a>\n    <a href=\"#\" class=\"btn btn-danger btn-remove\">Удалить</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<td>\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.editing : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "</td>\n<td>\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.editing : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "</td>\n<td>\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.editing : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "</td>\n";
},"useData":true});

this["ULNS"]["Templates"]["userListView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>User List Table</h2>\n<table class=\"table user-table\">\n  <thead>\n    <tr>\n      <th width=\"40%\">Имя</th>\n      <th width=\"40%\">Телефон</th>\n      <th width=\"20%\">Действия</th>\n    </tr>\n  </thead>\n  <tbody></tbody>\n  <tfoot></tfoot>\n</table>\n\n<div id=\"user-add-form\"></div>\n";
},"useData":true});