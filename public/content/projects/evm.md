---
date: 9/11/20
title: EVM
description: I just published version `0.1.0` of my binary version management tool, [evm](https://github.com/CamerAllan/evm)!
long: true
live: true
---

I just published version `0.1.0` of my binary version management tool, [evm](https://github.com/CamerAllan/evm)!
Evm stands for [Everything Version Manager].

I started making this tool after a frustrating situation at work.
I was trying to locate the version of a [working version](https://github.com/roboll/helmfile/releases/tag/v0.125.0) of the [helmfile](https://github.com/roboll/helmfile/tree/master) binary.
There was a series of broken releases, which I was frequently swapping between to test their behaviour.
I did this by renaming each version to add on the version to the name of the binary.
This worked fine but felt a bit unwieldy, and it meant getting used to typing out `helmfile-0.125.X` several times which got tiresome.

After thinking about this problem, I realised there was a solution that's more applicable to another binary I use at work - we have different repos using different versions of `terraform`. 
I thought it'd be nice to only have to specify the version when switching to a repo, after which you could use the tool as normal while getting the right version.

I spied an excuse to start looking at Rust!

So I made a thing in rust that lets you quickly swap between versions of a binary, as well as encouraging you to give them a sweet alias.
Maybe this is a horrible idea that breaks loads of best practices 🤷‍♂️.
Either way, it was fun to make, and it's an idea that turned up no results when I (briefly) searched for another tool that does this.

It currently supports Linux, maybe OSX, definitely not Windows.
There's also very little error handling and no tests.

Hopefully I'll get around to fixing these things but if you get there first, feel free to submit feature requests, issues or PRs!