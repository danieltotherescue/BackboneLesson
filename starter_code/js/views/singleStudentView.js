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
  }


});
