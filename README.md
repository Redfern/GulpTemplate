# Gulp template

This is a boilerplate template for gulp that will compile, concatenate and minify sass also concatenate, minify and uglify javascript.

## Tasks

* styles - this will compile, concatenate and minify sass
* scripts - this will concatenate, minify and uglify javascript
* default - this will run both styles and scripts
* watch - if you run this, it will look for changes for .scss files and .js files and run the relevant task for that file e.g. styles or scripts.

## How to use

If you simply copy the directory structure in this repo then everything should work as it should.

Run **npm install -g gulp** to download gulp globally to your computer, alternatively don't include the -g and it won't install globally and only for this project.

Run **npm install** on the main directory through terminal to download the necessary dependencies.

### Sass

For sass files, you can input sass in the /sass/site.scss or in /sass/modules/* dir.

You can add a new module in the /sass/modules dir and include it in the site.scss file using "@import "modules/heading";"

The minified file will be place in the root called site.min.css

### Javascript

For js files, you can input js in the /js/site.js file or in the /js/modules/* dir.

To add a new module you just need to include it in the modules dir and gulp will automatically pick it up.

The minified file will be place in the root called site.min.js

## Other

`/// <binding ProjectOpened='watch' />` is included at the top of the file for integration with Visual Studio 2015 to automatically run the watch when the project gets opened.
