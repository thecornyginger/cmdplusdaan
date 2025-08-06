---
title: "When 'refactoring' becomes 'starting over'"
date: "2025-08-06"
tags: ["idle-guild", "gamedev"]
excerpt: "What started as a simple UI cleanup somehow became rebuilding the entire game from scratch. Again."
slug: "idleguild-devlog-3"
image: "/blog-img/idleguild-log-3.png"
---

Remember that nice, sensible roadmap I published? The one where version 0.3 was going to be a simple UI/UX overhaul and some behind-the-scenes code cleanup? Yeah, about that...

My project planning skills remain questionable at best.

## The Plan vs. Reality

**The Plan:** Clean up the UI, restructure some messy code, maybe add a few quality-of-life improvements. Professional, measured, responsible development.

**What Actually Happened:** Threw the entire codebase in the digital trash and started building a completely different game from scratch.

Classic me, honestly.

## The Learning Curve Revelation

Here's the thing about Idle Guild. It was literally the first UI I'd ever built in Godot. First game, first interface, first time touching half the engine's systems. I was basically coding in the dark while learning to use the flashlight.

Fast forward a few months, and I've built maybe half a dozen tiny games and prototypes. Each one taught me something new about Godot's quirks, better ways to structure scenes, cleaner approaches to UI design. You know that feeling when you look back at code you wrote six months ago and physically cringe? Yeah, that was my entire Idle Guild codebase. I literally built it in in one main.gd file of over 3000 lines.

The smart move would have been incremental improvements. The developer move? "Let's burn it all down and do it right this time."

## Enter the Bastions

Right around the same time I was questioning every line of code I'd ever written, I started prepping for a new D&D campaign. My first campaign using the 2024 rulebooks, so I just discovered this brilliant new feature called Bastions. Essentially, your character gets to build and manage their own stronghold.

Reading through those rules, something clicked. The whole concept of building up a base, managing resources, managing hirelings, expanding your influence... it was everything I wanted Idle Guild to be, but with actual depth and purpose.

So naturally, instead of just taking inspiration, I decided to completely pivot the game's direction.

## What 0.3 Actually Will Be

Version 0.3 is no longer "Idle Guild with better buttons." It's becoming "Idle Guild reimagined as a proper Bastion management game."

Same core idle mechanics, but now wrapped in a system that actually makes narrative sense. Instead of just clicking to get arbitrary guild points, you're building facilities, recruiting specific classes, and watching your Guild grow into something meaningful.

The D&D Bastion rules are genuinely great game design. They give players agency over their downtime, create investment in a place, and provide natural quest hooks and story beats. Perfect foundation for an idle game that actually has direction.

## The Technical Fresh Start

Starting from scratch meant I could implement all those "I wish I'd done this differently" ideas from day one:

- Proper scene architecture instead of my original "everything in one massive script" approach
- Clean separation between game logic and UI (revolutionary concept, I know)
- Actually thinking about mobile performance from the beginning
- Building systems that can scale instead of constantly patching around limitations

The new codebase already feels so much cleaner and more maintainable. Past me would be jealous of present me's organization skills.

## The Scope Creep Reality Check

Let me be crystal clear about what I've done here: I took a simple maintenance update and turned it into rebuilding the entire game with expanded scope and new mechanics.

This is either going to be the best decision I've made for Idle Guild, or I'm about to learn some very expensive lessons about feature creep and project management.

Probably both, honestly.

## What This Means for Players

For the daily players who've been patiently waiting for bug fixes and new content... well, you're getting a lot more than you bargained for. Instead of Idle Guild 0.3, you're basically getting Idle Guild 2.0.

However, this is taking significantly longer than "fix the UI and clean up some code" would have taken. Because apparently, I enjoy making my own life complicated.

## Current Status: Controlled Chaos

Right now I'm deep in the fun part of rebuilding. Implementing new systems, seeing ideas come to life, and occasionally remembering why I threw out perfectly functional code in favor of "doing it right."

The new Bastion-inspired progression system is already more engaging than the original guild mechanics. Having actual afacilities to build and adventurers to recruit gives every click more purpose and every milestone more meaning.

## The Commitment Question

Here's what I keep asking myself: did I just commit to building a much bigger, more complex game than I originally planned? Absolutely.

Am I okay with that? Ask me again in a few months when I'm either celebrating a successful relaunch or crying into my keyboard at 2 AM.

But honestly, the daily player count and community feedback gave me the confidence to take this risk. When people are that engaged with your work, it feels worth investing the extra effort to make it truly great instead of just functional.

## What's Next

Currently heads-down on core systems implementation. The UI mockups look clean, the progression mechanics feel satisfying, and the whole thing actually resembles a coherent game instead of a collection of loosely connected features.

Timeline? Longer than originally planned, obviously. But the scope expansion means version 0.3 should feel like a proper evolution rather than just a patch with prettier buttons. I will be adjusting the roadmap when I finish 0.3 this month.

Stay tuned for the next episode: "How I Learned to Stop Worrying and Love Massive Scope Changes."

**What could possibly go wrong, right?**