(function() {
  "use strict";

  var global;
  var q;

  // Use require() if defined
  if (typeof require === "function") {
    q = require("q");
  } else {
    q = Q;
  }

  if (typeof exports === "object") {
    global = exports;
  } else {
    global = window;
  }

  global.greet = function greet(name) {
    return q.when("Hello, " + name + "!");
  };
}());
