# Frontend Mentor - Intro Component With Sign Up Form solution

This is a solution to the [Intro Component With Sign Up Form Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

**Frontend Mentor's Challanges**

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

**My Challanges:**

- Receive an error message when the `form` is submitted if:
  - Password is shorter than 8 characters, doesn't include at least one number or a special character. The message for this error should say _"Password must be minimum 8 characters, include at least one number and one special character"_
  - Display a message that says _"Submitted Successfully"_ to indicate that the form went through.
  - Change the color of the outline if the input is formatted correctly.
  - Clear all the inputs after a successful submission.

### Screenshot

![screenshot](./images/screenshot.png)

### Links

- Live Site URL: [https://kens-visuals.github.io/intro-component-with-signup-form/](https://kens-visuals.github.io/intro-component-with-signup-form/)
- Solution URL: [https://www.frontendmentor.io/solutions/intro-comp-with-signup-form-built-with-scss-bem-and-vanilla-js-aIoqL7r_n](https://www.frontendmentor.io/solutions/intro-comp-with-signup-form-built-with-scss-bem-and-vanilla-js-aIoqL7r_n)

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- CSS Flexbox
- CSS Grid
- Vanilla JS
- Mobile-first workflow

### What I learned

I'm really proud of this project for a couple of reasons. First, I've always avoided working with HTML forms, but in the challenge I had to "face my fears". I think I did pretty good considering that this was the first time, using Vanilla JS to validate any type of form. Second, this was the first time when I used Vanilla JS without any outside source, besides RegExp of course (for the record, I know RegExp, but not that good to write an email or password validation), but I mean common it's still pretty cool, eh? 👨🏻‍💻 Anyhow, cool project, simple design, a bunch of cool stuff to learn and practice.

### Continued development

What comes to continued development, I'd like to sharpen my skills of animations and how to manipulate them with Vanilla JS. I'm planning on implementing some basic animations for this project because it looks pretty raw.

### Useful resources

- [Email RegExp Validator](https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression)
- [Password RegExp Validator](https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a)
- [regex101](https://regex101.com/) - The coolest website, to learn, to practice, and to check Regular Expression.

## Author

- Frontend Mentor - [@kens-visuals](https://www.frontendmentor.io/profile/kens-visuals)
- Codewars - [@kens_visuals](https://www.codewars.com/users/kens_visuals)
- CodePen - [@kens-visuals](https://codepen.io/kens-visuals)
