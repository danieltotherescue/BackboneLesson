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
  taylor, daniel, emily
]);

// studentGroup.add(emily);
//
// studentGroup.remove(taylor);

console.log(studentGroup.toJSON());


var studentGroupView = new app.allStudentsTableView({ collection: studentGroup});

$("#allStudents").html(studentGroupView.render().el);

var newStudent = new app.singleStudent({first_name: $('.first-name-field').val(), last_name: $('.last-name-field').val()})

// var newStudentView = new app.singleStudentRowView({model: })
// var newStudentFormView = $('#form')
// $('#new-student-form').html(newStudentFormView.render().el)
// var flowerRouter = new app.Router();
//
// Backbone.history.start();
