function User() {}

User.prototype.greet = function(name) {
  return "hello " + name;
};

module.exports = new User();
