Template.navigation.events ({
  'click .something': function (evt, tmpl) {
    var name = tmpl.find ('.name').value;
  }
});
Template.navigation.firstvar = function () {
  return "First Var";
}