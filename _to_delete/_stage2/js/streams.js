/* =========================================================================
   Course streams — the top level of the syllabus.

   The course grew past the point where a single flat list of modules is
   navigable, so every module now belongs to a stream. A module with no
   `stream` field belongs to "core", which keeps every pre-existing module
   (and every saved progress key) working untouched.

   Streams drive: the sidebar grouping, the course overview page, and the
   per-stream exams. Loaded as a plain script (exposes `RefrigStreams`) and
   require()-able in Node for the test suite.
   ========================================================================= */
(function (root) {
  "use strict";

  const STREAMS = [
    {
      id: "core",
      title: "Core program",
      short: "Core",
      icon: "❄",
      blurb:
        "The guided pathway: how a vapour-compression system works, how to read it " +
        "on gauges and on a P–h chart, how to diagnose it and how to work on it " +
        "safely and lawfully. Every lesson links into the live simulator.",
      audience: "Start here. Suits first-year apprentices, career changers and anyone new to the trade.",
    },
    {
      id: "v1",
      title: "Refrigeration & air-conditioning 1",
      short: "Refrigeration 1",
      icon: "🧊",
      blurb:
        "The full first-year technical stream: principles and thermodynamics, every " +
        "major component in depth, system types from domestic to industrial, hand and " +
        "specialised tools, brazing and welding, tubing practice, electrical basics for " +
        "refrigeration, installation, commissioning and servicing, psychrometry and " +
        "air-conditioning, and load estimation.",
      audience: "Trade-course depth: the technical detail behind the core program.",
    },
    {
      id: "v2",
      title: "Refrigeration & air-conditioning 2",
      short: "Refrigeration 2",
      icon: "🏭",
      blurb:
        "The second-year and post-trade stream: applied thermodynamics and cycle " +
        "analysis, commercial and industrial plant, multi-stage and cascade systems, " +
        "secondary refrigerants, controls and automation, air-conditioning system " +
        "design, energy efficiency and plant management.",
      audience: "Advanced: assumes the material in Refrigeration 1.",
    },
    {
      id: "elec",
      title: "Electrical principles",
      short: "Electrical",
      icon: "⚡",
      blurb:
        "The electrical trade stream that underpins every refrigeration control " +
        "circuit: circuit theory and calculation, magnetism and electromagnetism, " +
        "AC theory, power and power factor, machines and transformers, measuring " +
        "instruments, protection, earthing and electrical safety.",
      audience: "Runs alongside the refrigeration streams; no prior electrical study assumed.",
    },
    {
      id: "capstone",
      title: "Capstone exam preparation",
      short: "Capstone",
      icon: "\ud83c\udf93",
      blurb:
        "Revision aimed squarely at the end-of-apprenticeship knowledge assessment: " +
        "the mandatory electrical tests and their acceptance values, the limits of a " +
        "restricted electrical licence, reading a manufacturer wiring diagram, the " +
        "calculations that come up under exam conditions, installation and " +
        "commissioning to the standards, recovery and cylinder arithmetic, TX valve " +
        "superheat, and drawing a piping schematic from a written brief.",
      audience: "Final-stage revision. Written practice questions with model answers, not a copy of any real paper.",
    },
  ];

  const BY_ID = Object.fromEntries(STREAMS.map(s => [s.id, s]));

  /* Every module belongs to a stream; modules that predate streams are core. */
  function streamIdOf(mod) {
    return (mod && mod.stream) || "core";
  }

  function streamOf(mod) {
    return BY_ID[streamIdOf(mod)] || BY_ID.core;
  }

  /* Modules of one stream, in course order. */
  function modulesIn(course, streamId) {
    return course.filter(m => streamIdOf(m) === streamId);
  }

  /* Streams that actually have modules loaded, in declared order. */
  function present(course) {
    return STREAMS.filter(s => modulesIn(course, s.id).length > 0);
  }

  const api = { STREAMS, BY_ID, streamIdOf, streamOf, modulesIn, present };
  root.RefrigStreams = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
