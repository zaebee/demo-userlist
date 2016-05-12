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
