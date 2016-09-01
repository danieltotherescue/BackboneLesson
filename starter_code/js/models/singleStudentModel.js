// Namespace our app
var app = app || {};

app.singleStudent = Backbone.Model.extend({

  defaults: {
    first_name: '',
    last_name: '',
    image: "images/placeholder.jpg"
  }

});
