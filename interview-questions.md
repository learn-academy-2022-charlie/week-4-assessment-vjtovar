# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer:
  Props in React is used to pass information from one component to another. Information can only be passed from parent to child component. Once information has been passed from a component to another component props cannot be modified because props are read-only.

  Researched answer:
  Props is a keyword in React that stands for properties. Props is used to pass information and methods between components. Information gets passed from the parent component to the child component through the component call. Props come from a component that holds state. Props are passed onto components that will display the information or will let the user interact with the information. 
  


2. What is a DOM event?

  Your answer:
  DOM events recognize interactions with a user and respond depending on the type of event. A DOM event is an object that looks at key:value pairs. The event is an object that is provided by an onChange or onClick attribute. The document object model listens for any changes made to a certain node and will take action.

  Researched answer:
  The DOM is listening for a change on a particular node using an event listener and will execute a corresponding action. The Document Object Model listens for changes and in order for web applications to recognize user interactions and respond to a particular event listeners are added to HTML (and JSX) tags. The event listeners wait for certain events to happen. Two event listeners that can be used are onClick and onChange. The onClick attribute can be added to a button and the onChange attribute is useful when users are typing in text fields.



3. What is object-oriented programming? How is it different than functional programming?

  Your answer:
  Object-oriented programming is a way of creating containers for information that could be changed without affecting the whole program. OOP focuses on the objects that need to be manipulated instead of the logic. The data is the information stored in variables and the behavior are the methods that belong to the object. In object-oriented programming objects and methods are the main elements and in functional programming the variables and functions are the main elements of the code.

  Researched answer:
  Object-oriented programming (OOP) is a computer programming model that focuses on objects and data rather than logic. Some benefits of OOP are that the code is reusable, it is efficient, and is scaliable. Object-oriented programming uses statements that change state. The programming model used in functional programming focuses on the logic and does not change state. Functions in functional programming do not modify variables, but they can generate new variables as an output. 



4. What is the difference between a Float and an Integer in Ruby?

  Your answer:
  An integer in Ruby is a whole number and a float is a number that contains a decimal point. In Ruby if you divide a whole number and it is not evenly divisiable the output will be a whole number even if the result has a remainder. In order to return a non-whole number a float must be passed into the equation.

  Researched answer:
  In Ruby floats are numbers with a decimal point and integers have no fractional part. In Ruby whole numbers and floats behave differently. When dividing, in order to return a non-whole number we need to use a float in the equation. When dividing whole numbers by zero the output will be a "ZeroDivisonError" message, but floats will have an output of "Infinity" or "NaN" when dividing by zero. 



5. Ruby has an implicit return. What does that mean?

  Your answer:
  In Ruby an implicit return means that the last line of every method will automatically be returned.

  Researched answer:
  An implicit return in Ruby means that the value of the last line of a method is automatically returned without using the return keyword. This is different from JavaScript where if you don't tell a function exactly what to return it will return undefined.


## Looking Ahead: Terms for Next Week

1. Instance Variable:
  An instance variable has an @ symbol in front of it. In Ruby it is used in the local scope of the class it belongs to. Instance variables cannot be accessed from outside of an object like you can with variables in JavaScript. 

2. PostgreSQL:
  PostgreSQL is an open source object-relational database management system. It is a stable database and is used as the primary database for many applications.

3. Ruby on Rails:
  Ruby on Rails is an open source web application framework that is written in Ruby. Rails is a model–view–controller (MVC) framework. This means that it separates a web application into three parts. The model holds the data structure. The view is the visual part of the web application. The controller connects the data and the view and also holds the logic of the application.

4. ORM:
  Object-relational mapping (ORM) is a programming technique that lets you access data from a database and manipulate it using object-oriented programming languages. 

5. Active Record:
  Active Record takes data from a database and lets users interact with the data like a Ruby object. Each active record object has CRUD (create, read, update, and delete) methods that are used to access the database. 
