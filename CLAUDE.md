# CLAUDE.md

See [AGENTS.md](AGENTS.md) — that's the single source of truth for how to work
in this repo, and it's kept vendor-neutral so any agent can use it.

Short version, so it's in front of you either way:

- Shaders live in template literals. `next build` and `eslint` **cannot see
  them**, so a GLSL error passes both and fails at runtime as a black screen.
  Compile them for real before saying a change works — AGENTS.md has the script.
- A backtick inside a shader comment terminates the template literal.
- Every tunable belongs in `gl/config.js` with a slider in `gl/gui.js`. A new
  uniform needs a config key, a `post.js` entry, a push in `tick`, and a
  control. Miss one and it silently does nothing.
- The composite works in display space and the scene pass in linear. Use
  `hexToSRGB` from `gl/color.js` for any colour the composite mixes in, never
  `new THREE.Color()`.
- The images in `public/` are third-party placeholders, not licensed for reuse.
  See CREDITS.md.
