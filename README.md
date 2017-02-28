![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Lab 12: Single Resource Express API
===

## To Submit this Assignment
  * Fork this repository
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-brian`
  * Push to your repository
  * Submit a pull request to this repository
  * Submit a link to your PR in canvas
  * Write a question and observation on canvas

## Include
  * `package.json`
  * `.eslintrc`
  * `gulpfile.js`
  * `.gitignore`
  * `README.md`

## Description
  * Create a single resource `express` API that can handle **GET**, **POST**, and **PUT** requests
  * Use the `http-errors` module to create new errors and associate them with a proper status code
  * Create an `error-middleware` module to handle errors and *use* it in your server file
  * Create a `cors-middleware` module that will allow for public use of your API
  * Create the `deleteItem` and `availIDs` methods and add them to your `storage` module
    * these methods should be used to delete a resource (`deleteItem`) and return an array of id's from persisted resource filenames (`availIDs`)
  * Create the `updateNote`, `fetchNote`, and `fetchIDs` static methods as part of your `Note` model
  * Create a series of `note-route-tests` to test your **GET**, **POST**, and **PUT** routes
    * **hint:** *you'll want to use the `before` and `after` hooks provided by `mocha` in order to create a test note and delete the note after the test has completed*
