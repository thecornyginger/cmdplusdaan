---
title: "Version 0.1: It Actually Works (Mostly)"
date: "2025-06-06"
tags: ["anchor", "appdev"]
excerpt: "Built my first real app version using EAS."
slug: "anchor-devlog-5"
---

## The Moment of Truth

After weeks of tinkering and second-guessing every design decision, I finally pulled the trigger and used EAS to create actual iOS build. You know that moment when your hobby project suddenly becomes a "real app" that could theoretically appear on someone's home screen? Yeah, that's terrifying and exciting in equal measure.

Version 0.1 is officially alive, and somehow it actually... works?

## What Actually Made It In

**Mood Journal**: The core feature that started this whole mess. Users can log their mood three times a day (morning, afternoon, evening), add descriptions, tag people and influences, and set up notifications so they don't forget to actually use the thing I built.

**Habit Tracking**: My overly-complicated-but-hopefully-useful habit system with flexible scheduling and that breakdown feature I'm probably too proud of. Plus individual notifications per habit, because apparently I love giving people ways to have their phone buzz at them more often.

**People & Influences Management**: Add people with photos, create influences with custom icons, and actually see stats on both. Because what's the point of tracking this stuff if you can't obsess over the data later?

**Stats Dashboard**: Monthly overviews, mood distribution charts, most-interacted-with people, top influences - basically everything you need to completely overthink your emotional patterns.

Oh, and I added dark and light mode support. You know what's fun? Implementing theming *after* you've built your entire UI. Every single component, every color reference, every tiny visual element had to be touched. If I ever build another app (which, let's be honest, I probably will), theming is going in from day one. Live and learn, I guess.

## Time for Human Testing

I've convinced a few brave iPhone-owning friends and family members to test the iOS version first. Nothing quite like watching real humans interact with something you built to immediately reveal every assumption you got wrong.

If you're feeling adventurous and want to help me find all the bugs I definitely didn't catch, here's the [public TestFlight link](https://testflight.apple.com/join/MRfgJrhQ) for version 0.1. Fair warning: it's a 0.1 for a reason, so manage your expectations accordingly.

Now I get to sit back and wait for the inevitable "it crashes when I..." messages. This should be fun.