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
