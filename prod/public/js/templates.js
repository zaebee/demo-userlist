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