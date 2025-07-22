---
title: "Stealing Ideas and Calling It Inspiration"
date: "2025-05-28"
tags: ["anchor", "appdev"]
excerpt: "Because why use existing solutions when you can reinvent the wheel?"
slug: "anchor-devlog-4"
---

## The Art of Strategic Borrowing

So I discovered this mood tracker called 'Unhinged' (which honestly, perfect name for a mood app), and it had this brilliant feature: tracking *people* and *tags* alongside your mood entries. Basically answering the question "what and who affects how you feel?"

My immediate thought was "Why didn't I think of that?" followed quickly by "I need to build this into my app right now."

## Making It More Me

The original app had "positive" and "negative" tags, which felt way too... academic? I don't know, something about those words just didn't sit right with me. Like I was conducting a psychological study on myself instead of just trying to understand my own patterns.

So I went with "supportive" and "challenging" influences instead. Same concept, but it feels more human. More like I'm acknowledging that even challenging people and situations can be useful for growth, rather than just labeling them as "negative."

Maybe I'm overthinking this, but words matter when you're building something you'll actually use every day.

## The Visual Nightmare Begins

Of course, now I needed pictures for people and icons for influences, because apparently I can't just have a plain text list like a normal person.

For the default people avatars, I dove into Storyset and grabbed some nice illustrations. Clean, friendly, not too distracting. Plus I added photo upload functionality because obviously some users will want real pictures of their actual humans.

For influences, I grabbed MaterialCommunityIcons library and built this icon selection modal. Do you know how many icons are in that library? Too many. Way too many. I spent an embarrassing amount of time categorizing them and making sure the selection UI didn't look like a complete disaster (I could've just automated this, but found out way too late)

## The Feature Creep Is Real

What started as "simple mood tracking" now includes people management, influence categorization, and a custom icon picker. I'm basically building a social network for my emotions at this point.

But hey, at least when I inevitably abandon this project in six months, it'll be a *really* over-engineered abandonment.