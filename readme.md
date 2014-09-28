#Nodejs & express API server example

##Set up project

Make sure you have installed mongo and node js

Open a terminal and install the following

* npm update -g express
* npm update -g generator-express

Clone the project from git. Change the directory to nodetest2 where package.json is and enter the following in the terminal
* npm install

##Set up the database

* Create a data folder in nodetest2. This is the point where mongo is going to put it's files
* Open a terminal and start mongo daemon with following command: 
ulimit -n 2048  & mongod --dbpath ~/IdeaProjects/nodetest2/nodetest2/data
* Open a terminal and type mongo
* In the mongo shell type *use nodetest2*
* To insert the data type the following copy the command in the mongo.js

##Set up Intellij

Right MB click in app.js and create a run configuration. Edit this run configuration and point
the javascript file input field to bin/www

###Run

In intellij hit the green arrow and point your browser to

http://localhost:3000/products/productlist
