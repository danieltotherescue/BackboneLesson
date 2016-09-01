var app = app || {};

// Students Collection View
app.allStudentsTableView = Backbone.View.extend({
  _studentRowViews: [],

  tagName: 'table',
  template: null,
  sortUpIcon: 'ui-icon-triangle-1-n',
  sortDnIcon: 'ui-icon-triangle-1-s',
  events: {
     "click th":                   "headerClick"
  },

  initialize: function() {
     this.template = _.template( $('#student-table').html() );
     this.listenTo(this.collection, "sort", this.updateTable);
  },

  render: function() {
     this.$el.html(this.template());
     // Setup the sort indicators
     this.$('th div')
            .append($('<span>'))
            .closest('thead')
            .find('span')
              .addClass('ui-icon icon-none')
              .end()
            .find('[column="'+this.collection.sortAttribute+'"] span')
              .removeClass('icon-none').addClass(this.sortUpIcon);
     this.updateTable();
     return this;
  },

  addStudent: function(student) {
    var studentView = new app.singleStudentRowView ({model: student});
    this.$el.append(studentView.render().el);
  },

  headerClick: function( e ) {
     var $el = $(e.currentTarget),
         ns = $el.attr('column'),
         cs = this.collection.sortAttribute;
     if (ns == cs) {
        this.collection.sortDirection *= -1;
     } else {
        this.collection.sortDirection = 1;
     }
     $el.closest('thead').find('span').attr('class', 'ui-icon icon-none');
     if (this.collection.sortDirection == 1) {
        $el.find('span').removeClass('icon-none').addClass(this.sortUpIcon);
     } else {
        $el.find('span').removeClass('icon-none').addClass(this.sortDnIcon);
     }
     this.collection.sortStudents(ns);
  },

  updateTable: function () {
     var ref = this.collection,
         $table;
     _.invoke(this._singleStudentRowViews, 'remove');

     $table = this.$('tbody');

     this._singleStudentRowViews = this.collection.map(
           function ( obj ) {

                 var v = new app.singleStudentRowView({  model: ref.get(obj) });

                 $table.append(v.render().$el);

                 return v;
             });
  }
});
