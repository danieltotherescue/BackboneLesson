var taylor = new app.singleStudent({
  first_name: 'Taylor',
  last_name: 'Britton'
});

var emily = new app.singleStudent({
  first_name: 'Emily',
  last_name: 'Schmidtling'
});

var daniel = new app.singleStudent({
  first_name: 'Daniel',
  last_name: 'Landau'
});

var studentGroup = new app.StudentsCollection([
  taylor, daniel
]);

studentGroup.add(emily);

studentGroup.remove(taylor);

console.log(studentGroup.toJSON());

//
// var flowerGroupView = new app.allStudentsView({ collection: flowerGroup});
//
// $("#allStudents").html(flowerGroupView.render().el);
//
// var flowerRouter = new app.Router();
//
// Backbone.history.start();
