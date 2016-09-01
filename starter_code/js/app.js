var taylor = new app.singleStudent({
  first_name: 'Taylor',
  last_name: 'Britton',
  image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAArAAAAJDNhMGYzODQ0LWQzZGYtNDExOS1hMDkzLTg5Y2JlM2VjYTQ5MA.jpg'
});

var emily = new app.singleStudent({
  first_name: 'Emily',
  last_name: 'Schmidtling',
  image: 'https://media.licdn.com/media/AAEAAQAAAAAAAAZTAAAAJGU0ZGYwMmViLWIwYTctNDRkMy1iYThjLWE4ODQ0MjVjNTRlOA.jpg'
});

var daniel = new app.singleStudent({
  first_name: 'Daniel',
  last_name: 'Landau',
  image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAbLAAAAJGY2NWM5YTdjLWE5NjUtNDI3NS1iMzJiLWExNjcyYWJjYjRmNQ.jpg'
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

// // var newStudent = new app.singleStudent({first_name: $('.first-name-field').val(), last_name: $('.last-name-field').val()})
//
// $('#submit').on('click', )

// var newStudentView = new app.singleStudentRowView({model: })
// var newStudentFormView = $('#form')
// $('#new-student-form').html(newStudentFormView.render().el)
// var flowerRouter = new app.Router();
//
// Backbone.history.start();
