// Slide-by-slide autoplay, driven from the frame loop.
//
// A deadline rather than a setInterval. The frame loop already owns every move
// the helix makes, so checking a timestamp there means an advance can never
// land mid-tween, mid-drag or on top of a settling snap — the three ways a
// free-running timer double-steps. Nothing here keeps its own timer, so there
// is nothing to leak or to drift out of step with the render.

// Fraction of a slot. Tight enough that a card still visibly gliding in counts
// as moving, loose enough that the snap spring's last sub-pixel creep doesn't
// hold autoplay off indefinitely.
const SLOT_TOLERANCE = 0.01;

export function createAutoplay(scroll, config, { reducedMotion, isHidden }) {
  // Null holds it until something schedules the first advance — the entry,
  // normally, so the arrival is never cut short.
  let dueAt = null;

  function schedule(from = performance.now()) {
    dueAt = from + config.autoplayInterval;
  }

  function step(now) {
    if (!config.autoplay || config.autoSpin || reducedMotion()) return false;
    if (dueAt === null || isHidden()) return false;

    // A person's input always wins: the deadline is pushed past their last
    // touch, so it only resumes once they've let go and left it alone.
    const due = Math.max(dueAt, scroll.lastUserInput + config.autoplayResume);
    if (now < due) return false;
    // Settled means still and sitting on a card. The snap flag can't stand in
    // for this — it latches on and stays on at rest — so test the position:
    // a fling still drifting, or a snap still rocking in, is off a whole slot.
    if (scroll.busy) return false;
    const { current, velocity } = scroll.state;
    if (Math.abs(velocity) > config.autoplaySettle) return false;
    if (Math.abs(current - Math.round(current)) > SLOT_TOLERANCE) return false;

    // Progress is measured in slots and rises toward the next card, so the
    // rounded resting position plus one is the next card along.
    scroll.goTo(Math.round(scroll.state.current) + 1, {
      duration: config.autoplayDuration,
      easeIn: config.focusEaseIn,
      easeOut: config.focusEaseOut,
    });
    // Start to start, so a card holds for interval − duration once it lands.
    schedule(now);
    return true;
  }

  // rAF stops while the tab is hidden but the clock doesn't, so the deadline
  // would already be past on return and fire the instant the page is seen.
  // Restart the hold instead.
  function resume() {
    if (dueAt !== null) schedule();
  }

  return {
    schedule,
    step,
    resume,
    get dueAt() {
      return dueAt;
    },
  };
}
