var app = app || {};

app.singleStudentRowView = Backbone.View.extend({

  tagName: 'tr',
  template: null,
  className: 'studentListItem',

  initialize: function() {
     this.template = _.template( $('#student-row').html() );
  },

  render: function() {
     this.$el.html( this.template( this.model.toJSON()) );
     return this;
  },

  events: {
    "submit newStudent":  "newStudent"
  },

  newStudent: function(e) {
    var newStudent = new singleStudentModel({first_name: $('.first-name-field').val(), last_name: $('.last-name-field').val()});
    $("#allStudents").append(this.$el);
  }

});
