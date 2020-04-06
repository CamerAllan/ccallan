---
id: test-post
date: 6/4/20
title: Test post!
---

# Hello!

This is my first post on this site. 

I'll be using this as a baseline for development, so it might grow to allow me to try out different features.

If you're interested in what's going on behind the scenes, keep reading. I'll elaborate in a future post when I have more of an understanding myself.

## Tech Stack

### Site

I'm using [react-static](https://github.com/react-static/react-static) - a *static site generator* for react. What this means is, when I deploy this site with `react-static build`, the site is rendered server-side which produces plain old `.html` and `.css` files. These are super fast to load compared to all the hefty `.js` that comes with react. I then host these simple files, which source the `.js` files - when you load the page you will first see the fast loading `.html`. Once the html has finished sourcing the `.js`, react-static slyly swaps out the plain html you're looking at for a fully-fledged react app.

### Blog

I'm writing these posts in markdown, then having react-static scoop them up during the build process and hook them up to routes. In doing this I discovered [gray-matter](https://github.com/jonschlinkert/gray-matter), a simple library that parses attributes defined in the markdown.

## That all sounds great, but why do I see flickers of odd stuff when navigating this site?

I am stylnig my application with *css-in-js*. react-static is not currently looking for this, so it doesn't know to create any static css files. This leaves us with unstyled html. So what you're really seeing is react-static *not-so-slyly* swapping in the full js app.
