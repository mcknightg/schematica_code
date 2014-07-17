Template.home.events ({
  'dblclick .schema': function (evt, tmpl) {
    evt.preventDefault();
    evt.stopPropagation();
    if(evt.target.className === 'container-fluid schema'){
      var id = Positions.insert({name:'New Table',left:(evt.pageX + 280) + 'px',top:(evt.pageY) + 'px'});
      Session.set('editing_table',id);
    }
  }
});
Template.home.positions = function () {
  return Positions.find();
}