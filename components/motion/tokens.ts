/**
 * Motion tokens
 * -------------
 * The animation-side mirror of the `transitionTimingFunction` /
 * `transitionDuration` tokens in tailwind.config.ts. Import these instead of
 * hand-writing easing curves so every interaction in the product feels like
 * it belongs to the same system.
 *
 * Philosophy (see README §Motion): motion communicates hierarchy, state, and
 * relationships — never decoration for its own sake. Every export here maps
 * to a specific *purpose*, not just a duration.
 */

export const easing = {
  signature: [0.16, 1, 0.3, 1] as const, // confident, decelerating — entrances
  snap: [0.65, 0, 0.35, 1] as const, // symmetric — state toggles, tabs
  linear: [0, 0, 1, 1] as const, // progress indicators, scroll-linked values
};

export const duration = {
  instant: 0.15, // hover feedback, button press
  fast: 0.25, // small UI transitions (tag toggle, tooltip)
  base: 0.4, // default entrance/exit
  slow: 0.6, // section reveals
  slower: 0.9, // hero / page-level choreography
};

/** Standard reveal-on-scroll: content rises 16px and fades in. */
export const revealUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: easing.signature },
  },
};

/** Stagger container for grids of cards / tags / list items. */
export const staggerContainer = (staggerChildren = 0.06, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Page-level transition used by the route change wrapper. */
export const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: duration.base, ease: easing.signature } },
  exit: { opacity: 0, y: -8, transition: { duration: duration.fast, ease: easing.snap } },
};
