---
title: "Adding Easter Eggs"
date: "2025-05-21"
tags: ["webdev"]
category: "development"
excerpt: "I needed to add silly interactive elements that 99% of visitors will never find."
---

So here's a thing about me: once I start something, I tend to go down rabbit holes that no sane person would explore. Case in point: what started as "let's add a simple sprite to my website" turned into "let's create an entire death animation sequence triggered by visitor abuse."

## Finding My Pixel Style

I've been practicing pixel art lately, mostly by studying existing sprites and trying to figure out what makes them work. There's something about the 16-bit era that just hits different. Maybe it's the limited color palettes that force creativity, or maybe it's just pure nostalgia. Either way, I've been spending way too much time on YouTube, and in Aseprite lately.

[aseprite-1]

After a few days of practice, I managed to recreate an existing sprite sheet from itch.io, and create a little pixel version of myself running. Nothing fancy, just a small sprite bobbing up and down that I could place somewhere on my site. Simple, right?

## But Wait, There's More

Then my brain did that thing where it goes: "Wouldn't it be cool if..."

What if people could interact with the sprite? The obvious answer was to add a reaction when someone clicks on it. So I recreated a simple "hit" animation as well — just a few frames of my pixel-self looking confused when clicked.

[aseprite-2]

// Implementation was pretty straightforward. Just a bit of React state to track when the sprite is clicked.

## Taking It Too Far

But then I thought: "Let's be honest, if there's a clickable thing on a website, people are going to click it repeatedly." We've all done it. And that gave me an idea.

What if the sprite actually "dies" if you click it too many times? Because of course that's a normal thing to add to a personal website.

[aseprite-3]

So now my little pixel self has a full health system, complete with a death animation that triggers after a 10 clicks within a few seconds. It took way more time than I'd like to admit, involving sprite states, animation frames, and timers.

## Was It Worth It?

Probably not. But did I spend an entire day on it instead of fixing actual important parts of my site? Absolutely.

But there's something satisfying about knowing it's there. It's like those old video game secrets that you'd only discover if you were curious enough to try weird things. And honestly, building it made me happy, which is the whole point of this project anyway.

Is this feature necessary? Not at all. But it feels like me, and that's what matters.