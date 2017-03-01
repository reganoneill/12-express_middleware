### Single Resource Express API
===


## Description
  * This program creates a single resource `express` API that can handle **GET**, **POST**, **PUT**, and **DELETE** requests. It offers a file system layer of persistence.
  * It incorporates robust modularity and middleware to allow this program to scale - with the idea that more resources can be added easily and plugged into the express server efficiently.
  * It comes built with a one resource, 'Drink', which requires a temp, size, and name property from the user (each instance will also be assigned a randomly generated id property from ```node-uuid``` which can be used to access existing items in the filesystem).
  * Using a Router instance from Express, the 'Drink' resource has custom endpoints which correspond to the Drink constructor. These endpoint methods then communicate to the Drink Router which then communicate with a storage file to handle any/all data creation.

## Requirements
  * Command line access
  * Node.js
  * npm

## To Use
  * Clone down this repo and run ```npm i``` to get all necessary dependencies.
  * Review the last two sections of the description section to understand existing model and data flow.
  * *Important* --- For file system persistence to work: Create a directory named 'data' at the root of this directory. Then go inside the 'data' directory and create an additional directory called 'drink'. Each model created will require its own aptly named folder within 'data'.
