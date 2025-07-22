---
title: "2048: My Pixel Retro Take on a Classic"
date: "2025-05-29"
tags: ["experiments", "gamedev"]
excerpt: "Combining 2048 with pixel animations in Godot"
slug: "building-retro-2048"
---

So I fell into the 2048 rabbit hole again last week. One minute I'm casually swiping tiles "just to kill time," and the next thing I know, it's 2 AM and I'm still convinced I can hit that elusive 4096 tile. Instead of accepting my addiction, I decided to make it worse by building my own version. You know, for "practice."

## The Idea

This is my 5th or 6th Godot project, so I'm comfortable enough with the engine to know exactly how to make things harder for myself. The core 2048 functionality wasn't too difficult to implement - just a grid, some numbers, and merge logic.

But then I played it and thought: "This is too smooth. Too modern. What if..."

The pixel art style decision wasn't planned. It happened organically after I saw those sleek tween animations and thought: "No, this needs to feel more... chunky."

## Making It "Worse" (Better)

I intentionally toned down the frame rate and restricted the animations to create that classic pixel art feel. No smooth tweens here. Just pure, abrupt state changes like we had in "the early" days".

Then my brain made the Mario connection: "What if merging tiles felt like Mario grabbing a power-up?"

So I added this little pause-and-flash effect when tiles merge, mimicking that moment when Mario grabs a mushroom and does his little power-up dance. It's completely unnecessary and absolutely essential at the same time.

## The Technical Nightmare

Getting those pixel-perfect animations was shockingly difficult. Modern engines really want to make things smooth, so fighting against Godot's helpful tweening to create deliberately "worse" animations was a challenge.

For the aesthetic, I stuck with the same font and color palette as my website to maintain that retro vibe. Consistency matters, even in my questionable game design choices.

## Bugs, Bugs, Bugs

Every. Single. Change. Creates. New. Bugs.

I spent more time debugging than actually implementing features. The worst was when merging tiles would sometimes create ghost tiles that couldn't be interacted with but still took up space. Turns out I was freeing the nodes but not properly removing them from my game logic arrays.

You can actually play it on itch.io right here: [2048 Arcade on itch.io](https://cmdplusdaan.itch.io/2048-arcade)

## What's Next?

I'm planning to add some unique mechanics beyond standard 2048 gameplay. Not sure what yet, but I'm thinking something appropriately retro and unnecessarily complicated. Maybe Goomba tiles that block merges unless you squash them first? We'll see.

The only question that remains: Will my Mario-fied 2048 be more or less addictive than the original? Either way, I'm still not getting to bed at a reasonable hour.