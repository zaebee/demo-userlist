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
