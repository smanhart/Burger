# Burger

This is an application which features a custom built ORM to interface between the MySQL database and the HTML. It has been deployed to Heroku, which you can find [here](https://salty-castle-62283.herokuapp.com/). Other technologies used are Node, Express and Handlebars.

On the page, you have the option to enter a burger name, which will add it to the list of burgers to eat. When you hit submit, your creation is populated on the list along with a button which says "Eat Me!". When the "Eat Me!" button is click, the burger is transferred to the "Burgers You Have Eaten" list. Since this is linked to a database, all the burgers will persist, even if the browser is reloaded or closed.
