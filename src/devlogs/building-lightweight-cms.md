---
title: "Building a lightweight CMS"
date: "2025-05-26"
tags: ["webdev"]
category: "development"
excerpt: "Building a 'simple' markdown-based devlog system"
---

 So I figured I should build a proper devlog system. The goal was simple enough: write posts in md, commit to Git, and have them automatically show up on the site.

## The Requirements

I had some non-negotiables, because ofc I did:

- No backend. This needed to work on GitHub Pages because I'm too cheap to pay for hosting rn.
- No external CMS. I wanted everything in the repo, to have everything in one place.
- Markdown-based. I've been using Obsidian obsessively for the last year, so I'm all in for markdown.
- Git workflow. Write, commit, push, done. Simple enough that even I can't mess it up.

## The Tech Stack

I was already using Vite, React, and Tailwind. So, I just needed a few more packages:

- `gray-matter` for parsing frontmatter
- `marked` for rendering Markdown to HTML
- `react-router-dom` for routing

Nothing too fancy. I didn't want to overcomplicate things more than I already am.

## The Magic: Vite's import.meta.glob

After a few days of ~~cursing~~ trial and error, I discovered Vite's `import.meta.glob()` function, which lets me dynamically import all `.md` files at build time. This gives me all the markdown files as raw strings, which I can then process with `gray-matter` and `marked`. Not rocket science, but it took me longer than I'd like to admit to figure this out.

## File Structure

Each devlog is just a markdown file with some frontmatter:

```markdown
---
title: "My Post Title"
date: "2025-01-01"
tags: ["tag1", "tag2"]
excerpt: "Description"
---

# My content here
```

The system automatically generates slugs from filenames and sorts posts by date.

## Adding images

I then needed a way to add images to my devlog posts without having to write full HTML img tags or deal with complex paths. The solution? A custom image processing system that lets me just write `image-name` in my markdown and automatically converts it to a proper image. I built this using Vite's `import.meta.glob()` to dynamically load all images from my image folder, then created a preprocessing step that runs before the markdown gets converted to HTML. The system supports direct filename references like `screenshot` for `screenshot.png`.

The implementation was surprisingly straightforward once I figured out async/await. Now I can just drop images in the folder and reference them with simple bracket notation.

The whole system is about 200 lines of code and does exactly what I need. Sometimes the simple solution is the right solution. Who knew? ¯\_(ツ)_/¯