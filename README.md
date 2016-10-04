
## ![logo](app/images/favicon-32x32.png)uestionnaire using React Components

This repo is a ReactJS based questionnaire it is intended to be modular and simple.
It uses simple Twitter Bootstrap-based styling and simple CSS animations.

## Embedding

If you want to embed on your website download the compiled file and add the following code to your website.
<center>
[![Download](/download_btn.png)](http://experiments.plethora.com.mx/react-questionnaire.zip)&nbsp;&nbsp;&nbsp;
[![Try a demo!](/demo_btn.png)](http://experiments.plethora.com.mx/demo-react-questionnaire/#)
</center>

Then simply import the style and script files as shown (with the correct paths):
```html
<script src="scripts/react-questionnaire.js"></script>
<link rel="stylesheet" href="styles/main.css">
```
You must define an element on the DOM with **id** set to *questions*

```html
<div id="questions">
</div>
```


#### Getting started

Make sure you have all the node dependencies using `npm install` on the root directory of this project.

To make your own Questionnaire simply modify the `questions.json` provided.

The `skippable` property is used to define an array of questions that can skipped.

Questions will be displayed based on the question number provided as an **id**.

The `question-type`property should be one of the following:

- **small-multiple-options**: Used to display a small set of multiple options that could be selected with one or more answers.

- **small-unique-options**: Used to display a small set of options but only one answer is selected.

- **small-text-input**: Used to display a small text input that could be used to answer questions that need less than 100 characters.

Both the **small-multiple-options** and **small-unique-options** need to define the set of `options` in an array of objects that have:

- A unique **id**
- A **description** of the answer
- A *true* or *false* value assigned to **selected** used to define if such option is selected as the default value.

The **posturl** is used to send the results, there is a sample server provided that uses NodeJS and SQLite3 to save the results.

To start the development server use `gulp watch`, it will open a browser window with the Questionnaire.

#### How to hack

If you want to personalize or create your own question types then this guide is for you.

First you need to understand the basic structure  of the project.

- `app/scripts/` is where all the js live, everything is managed and compiled by babel and gulp.
- `app/styles/` is where all the styles (css or less) go, there is a bootstrap npm module used to give *bootstrapy* styling; but `main.less` overwrites some to give it a cleaner look.
- `app/images/` is self-explanatory.
- `app/configs/` is where both the `questions.json` a JSON that has both the description of the questionnaire and the configurations of the components, and the `config.js`that holds the variables that involve static configurations.

**Inside** `app/scripts/`

- `app/scripts/question-types` here are all the React Components used to render the questions.

- `app/scripts/ui-lib` small components that help build a better experience for the questionnaire.

- `app/scripts/store.js` this is a simple function to store the question answers. The question-type components use it to store the answers as they need.

- `app/scripts/generate_questions.js` this function generates the questions based from the `questions.json`.It generates an array of JSX elements that the Questionnaire Component then uses.

- `app/scripts/questionnaire.js` this is the Questionnaire Component used to manage the logic behind displaying the questions and other components.

- `app/scripts/app.js` Loads the configs from `config.js` and injects the `question.json` file to the Questionnaire Component.

### What's new?
v1.2
- New iterface to see results.(Still under beta)


#### License

MIT
