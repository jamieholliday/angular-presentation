#Angular presentation

Simple presentation about Angular built with Angular for front end sessions at Vaimo

## Develop

To develop / edit using gulp 

Ensure you have node installed: http://nodejs.org/

Install gulp globally:

```
npm install -g gulp
```

Run gulp:

```
gulp
```

Gulp is simply used for live reloading of the files. Please make sure you have the livereload browser plugin installed:
Alternatively if you are old school just edit the files normally and refresh the browser over and over

### Editing slides

Add new slides into the partials folder
Update the controller in the slides module with the new slide details

Options:

```
{
	template: 'partials/slide9.html', 	//path to the html file for the slide
	style: 'highlight',					// Any additional styles to apply to slide
	middle: true,						//vertical center slide content
	center: true						//Center align text on slide
}
```

## Deploy

To run this presentation using node

```
node server.js
```


