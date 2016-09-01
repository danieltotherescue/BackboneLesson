# BackboneLesson

![Baby Ostrich](assets/backbone-ostrich.jpg)

##Task:
Backbone groups needs to create a client-side only single page application (no server-side) that has a form for collecting data into a list of rows and columns. The user should be able to sort the collection by clicking on the column headers. You do not need to persist data.

###Visual Aids
screen shots,
gifs,
diagrams,
other tools that will help make the guide as useful as possible

(but don't waste time on styling, this project is about content, not style).

make yours more approachable for WDI students - ASSUME NOTHING


####Dependencies:
http://underscorejs.org/
core jQuery library

######Order of scripts in your index file is important:
jQuery
underscore.js
backbone


####Similarities/differences to other types of tech we've studied.

######Differences:
Backbone has a collections component, and collections are a group of models. Behind the scenes, collections are really just JavaScript arrays. There's also the Backbone events component. This component allows us to bind custom JavaScript events to our code.

Now Backbone sync is the last component. It's mostly used to help Backbone communicate with server side technologies like databases. We won't be needing this today because we are only building a client-side app.



Any code files that are needed should be included in this repo. This includes things like Gemfile or package.json!


####Why would someone choose to use Backbone?


#####Pros

- if you want to clean up messy jQuery code
- small - more of a library than a framework
- good for refactoring old code, cleaning things up and getting more modularity
- a lot more control over performance, particularly in mobile scenarios
- if you’re really comfortable in JS and don’t want a framework in your way
- The single most important thing that Backbone can help you with is keeping your business logic separate from your user interface. When the two are entangled, change is hard; when logic doesn't depend on UI, your interface becomes easier to work with.

#####Cons

- productivity - doesn’t help you as much or write as much code for you
- you will have more code to write b/c of no 2 way data binding
- architecture can be unclear at times
- easy to leak memory when writing apps


####important stuff
- initialize method - internal method that executes code every time a new instance of a component is created --> watching for model changes
  - we can use an instance's attr in our web app however we want to
- get method - gets or finds a specific property of our model to use as we see fit
- set method - changes already existing model properties or adds new ones after creation of the instance
- on method - triggers actions that should happen when a model changes

collection is a group of model instances
  - powerful and contain a lot of built in functionality
  - you can add and remove instances
  - <strong>must know what model it's based on</strong>
    - won't work if you don't tell it this
  - you can add collectively or individually
    - can be a parameter of the collection
    - or can be added individually w/ internal .add method

#####add flower challenge
- create new collection files
- in the model, create a new initialize function that uses this.on to watch for a change and send a message
- create the instances in app.js
  - new app.Flower
  - added the attributes appropriately
- create an instance of the collection that references the model instances that you want in it!!!
  - new app.EuropeanFlower
- use .set to change one of the instances
- console.log the whole collection with .toJSON()

####Views
- how you get info from your model onto the page (duh)
- we will create collections of views as well as of models
- views will communicate w/ each other as they do their jobs
- what html elements will be displayed
- you make the view similarly to how you make a model
  - attributes are the tagName and className for the html element that the view will be
  - automatically defined as a div if we don't give it a tagName
- on the index page, you use a script tag to enclose your code
```
<script id="flowerElement" type="text/template">
  <a href="#<%= link %>"><img src="<%= img %>" alt="<%= name %>" class="image" /></a>
  <ul>
    <li class="flowerInfo"><strong>Name:</strong> <%= name %></li>
    <li class="flowerInfo"><strong>Price:</strong> <%= price %></li>
    <li class="flowerInfo"><strong>Color:</strong> <%= color %></li>
  </ul>
</script>
```
  - has an id and a type
  - type is text/template --> we DON'T want it to execute as JS
  - we use <%= %> to reference our model properties, like links, image, name, price, etc.
- template method: we insert a template line of code into our view definition
  ```
  template: _.template( $('#flowerElement').html() )
  ```
- under this in our view, we will include a render functionality
  - looks at logic defined so framework
    - tag name, class name, template property
    - builds out the element based on those
    - makes a new variable and puts it in there
      - JSON-like JS object
      - looking for model data but doesn't know which one to look at
    - $el, or 'L' is a jQuery ref to the element, which makes it so we can apply jQuery methods

```
render: function() {
  var flowerTemplate = this.template(this.model.toJSON());
  this.$el.html(flowerTemplate);
  return this;
}
```

######collection view
- same as collections model, we make a separate view
- give it a tagName and a render function
  - looks for this.collection.each
- custom addFlower method
```
addFlower: function(flower) {
   var flowerView = new app.singleFlowerView ({ model: flower });
   this.$el.append(flowerView.render().el);
}
```

```
$("#allFlowers").html(flowerGroupView.render().el);
```
- .el makes sure the model data gets loaded into the collection view's root element

####Events
- component also mixed into other ones
- views have a small event element that can be used for DOM manipulation
  - object inside of the singleFlowerView
  - functions then defined that do something for DOM manipulation, like changing a class or something

####teaching techniques
Push ups, Jumping jacks after every major checkpoint
