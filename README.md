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


####Similarities/differences to other types of tech we've studied.

######Differences:
Backbone has a collections component, and collections are a group of models. Behind the scenes, collections are really just JavaScript arrays. There's also the Backbone events component. This component allows us to bind custom JavaScript events to our code.

Now Backbone sync is the last component. It's mostly used to help Backbone communicate with server side technologies like databases. We won't be needing this today because we are only building a client-side app.



Any code files that are needed should be included in this repo. This includes things like Gemfile or package.json!


####Why would someone choose to use Backbone?

####teaching techniques
Push ups, Jumping jacks after every major checkpoint

####Pros

- if you want to clean up messy jQuery code
- small - more of a library than a framework
- good for refactoring old code, cleaning things up and getting more modularity
- a lot more control over performance, particularly in mobile scenarios
- if you’re really comfortable in JS and don’t want a framework in your way
- The single most important thing that Backbone can help you with is keeping your business logic separate from your user interface. When the two are entangled, change is hard; when logic doesn't depend on UI, your interface becomes easier to work with.

####Cons

- productivity - doesn’t help you as much or write as much code for you
- you will have more code to write b/c of no 2 way data binding
- architecture can be unclear at times
- easy to leak memory when writing apps
