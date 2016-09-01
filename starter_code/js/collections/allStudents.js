// Namespace our flowerApp
var app = app || {};

// A group (array) of Flower models
app.StudentsCollection = Backbone.Collection.extend({

  // What type of models are in this collection?
  model: app.singleStudent

});
