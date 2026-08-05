# Contributing

Happy to take patches. It's a small project, so nothing formal — open an issue
or a PR.

## Setup

```bash
npm install
npm run dev
```

Press `g` for the tuning panel.

## Before opening a PR

```bash
npm run build
npx eslint gl components app
```

**If you touched anything in `gl/shaders/`, that isn't enough.** Shaders live
inside template literals, so the build and the linter never look at them — a
GLSL error passes both cleanly and shows up at runtime as a black screen.
Compile them properly first; [AGENTS.md](AGENTS.md) has a short script for it.

## Tuning changes

Don't hard-code numbers into shaders. Everything adjustable lives in
[`gl/config.js`](gl/config.js) and gets a control in [`gl/gui.js`](gl/gui.js).
A new uniform needs all four of: a config key, an entry in `post.js`, a push in
the `tick` loop (or an `onChange` handler if it's a colour), and a slider. Miss
one and it quietly does nothing.

If you're changing defaults because a look is better, say what you dialled and
why in the PR — the values in `config.js` were arrived at by eye and there's no
test that can tell me you improved them.

## Timing behaviour

Anything about how something changes over *time* — a fade-out, the trail
clearing, hover intent during a fast sweep — can't be shown in a screenshot.
The easings are plain arithmetic, so replay them frame by frame in Node and
paste the numbers instead. There are examples of this in AGENTS.md.

## Comments

Explain **why**, not what. Most comments in here record a decision and the
alternative that was tried and rejected — that's the useful part. Don't add
comments that restate the line below them, and don't reformat code you aren't
otherwise changing.

## Images

Don't add anything to `public/` without checking its licence. The images
currently in there are third-party placeholders and are a known problem, not a
pattern to follow — see [CREDITS.md](CREDITS.md).
