// Namespace our flowerApp
var app = app || {};

// A group (array) of Flower models
app.StudentsCollection = Backbone.Collection.extend({

  // What type of models are in this collection?
  model: app.singleStudent,

  sortAttribute: 'first_name',
  sortDirection: 1,

  sortStudents: function(attr) {
    this.sortAttribute = attr;
    this.sort();
  },

  comparator: function(a, b) {
    var a = a.get(this.sortAttribute),
        b = b.get(this.sortAttribute);
    if (a == b) return 0;
    if (this.sortDirection == 1) {
      return a > b ? 1 : -1;
    } else {
      return a < b ? 1 : -1;
    }
  }

});
