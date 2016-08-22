
### Questionnaire using React Components

This repo is a ReactJS based questionnaire it is intended to be modular and simple.
It uses simple Twitter Bootstrap-based styling and simple CSS animations.

#### Getting started

Make sure you have all the node dependencies using `npm install` on the root directory of this project.

To make your own Questionnaire simply modify the `questions.json` provided.

The `required` property is used to define an array of required questions that cannot be skipped.

Questions will be displayed based on the question number provided as an **id**.

The `question-type`property should be one of the following:

- **small-multiple-options**: Used to display a small set of multiple options that could be selected with one or more answers.

- **small-unique-options**: Used to display a small set of options but only one answer is selected.

- **small-text-input**: Used to display a small text input that could be used to answer questions that need less than 100 characters.

Both the **small-multiple-options** and **small-unique-options** need to define the set of options in an array of objects that have:

- A unique **id**
- A **description** of the answer
- A *true* or *false* value assigned to **selected** used to define if such option is selected as the default value.
