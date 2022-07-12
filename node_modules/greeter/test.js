var greet = require("./greeter").greet;
var print = require("util").print;

greet("Bob").then(function(greeting) {
  print(greeting);
});
