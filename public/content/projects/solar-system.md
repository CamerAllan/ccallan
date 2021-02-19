---
date: 2/18/21
title: Solar Systems
description: "![Orbits](orbits.png) I spent a couple of days experimenting with creating mathematically defined solar systems."
long: true
live: true
---

One of my uni modules was all about making games, and it was without a doubt my favorite one.

[Processing](https://processing.org/) was the weapon of choice, and the rest was pretty much up to us. After thinking for a while, the final game I landed on making I called ['Return to Planet Earth'](https://github.com/CamerAllan/spacegame). You can read my full writeup of the practical [here](https://github.com/CamerAllan/spacegame/blob/master/submission/report.pdf), although if you just skim it and look at the pictures you'll get the gist.

In short, the game was about planning some fancy orbital manoeuvres in advance, with an attempt at some reward system based on fuel usage and time taken. Kind of like if you took Kerbal Space Program and stripped away all the bits where you're not whizzing about the solar system. I still think this is a pretty cool concept, so recently I've been thinking about having another crack at the concept in Unity rather than Processing (please don't make me go back there).

Skip forward a few hours, and we have this:

![Jupiter in orbit](jupiter.gif)

I got a bit distracted with how it looks - this gif is actually from the tiny preview window I had open, but the pixellated effect really appeals so it's staying. That said, here's some stuff I've bumbled through so far:

## Stars

After a brief and unsuccessful search for a nice space skybox, I decided to make my own in a shader. The nice thing about shadergraphs is that they're fun to look at:

![Delicious fun](skybox-shadergraph.png)