/* =========================================================================
   Units of competency — the training-package units the course maps to.

   The Australian qualification for this trade is the Certificate III in Air
   Conditioning and Refrigeration in the UEE Electrotechnology Training
   Package. Its current code is UEE32225 (released 24 March 2025), which
   superseded UEE32220; training and assessment of apprentices under
   UEE32220 could not continue past 23 March 2026. The mapping used to be a
   table in a document, written against UEE11-era codes; making it data lets
   a module say which units it supports, lets tests check the tags, and lets
   the instructor tooling report by unit.

   How to read `status`:
     "core"      — listed as a core unit of UEE32225 in the sources checked
     "elective"  — a UEE unit available to the qualification as an elective
     "unconfirmed" — a unit of the training package known to sit in the
                   qualification, whose core/elective placement could not be
                   verified from the sources reachable when this was written
   RTOs must confirm every code and its placement against the current release
   on training.gov.au before relying on this mapping: it is a planning aid,
   not a compliance document.

   Loaded as a plain script (exposes `RefrigCompetency`) and require()-able
   in Node for the test suite.
   ========================================================================= */
(function (root) {
  "use strict";

  const QUALIFICATION = {
    code: "UEE32225",
    title: "Certificate III in Air Conditioning and Refrigeration",
    package: "UEE Electrotechnology Training Package",
    released: "2025-03-24",
    supersedes: "UEE32220",
    supersededTeachOutEnds: "2026-03-23",
    structure: "27 core units and 8 elective units",
    checked: "2026-09",
    source: "training.gov.au — confirm codes and placement against the current release",
  };

  /* Titles are the training-package titles. `knowledge` says whether the
     course can carry the unit's knowledge evidence; every unit here is
     assessed on practical performance as well, which the platform does not
     and cannot provide (see docs/CURRICULUM_MAPPING.md). */
  const UNITS = {
    /* ---- Common (UEECD / UEECO) ------------------------------------------ */
    UEECD0007: { title: "Apply work health and safety regulations, codes and practices in the workplace", status: "core" },
    UEECD0016: { title: "Document and apply measures to control WHS risks associated with electrotechnology work", status: "unconfirmed", note: "Was a core unit of the superseded UEE32220; placement in UEE32225 to confirm" },
    UEECD0019: { title: "Fabricate, assemble and dismantle utilities industry components", status: "unconfirmed", note: "Was a core unit of the superseded UEE32220; placement in UEE32225 to confirm" },
    UEECD0020: { title: "Fix and secure electrotechnology equipment", status: "unconfirmed", note: "Was a core unit of the superseded UEE32220; placement in UEE32225 to confirm" },
    UEECD0042: { title: "Solve problems in ELV single path circuits", status: "unconfirmed", note: "Was a core unit of the superseded UEE32220; placement in UEE32225 to confirm" },
    UEECD0043: { title: "Solve problems in direct current circuits", status: "unconfirmed" },
    UEECD0044: { title: "Solve problems in multiple path circuits", status: "unconfirmed" },
    UEECD0046: { title: "Solve problems in single path circuits", status: "unconfirmed" },
    UEECD0048: { title: "Undertake computations in an energy sector environment", status: "unconfirmed" },
    UEECD0051: { title: "Use drawings, diagrams, schedules, standards, codes and specifications", status: "unconfirmed", note: "Was a core unit of the superseded UEE32220; placement in UEE32225 to confirm" },
    UEECO0010: { title: "Participate in refrigeration and air conditioning work and competency development activities", status: "core" },

    /* ---- Refrigeration and air conditioning (UEERA) ---------------------- */
    UEERA0031: { title: "Diagnose and rectify faults in air conditioning and refrigeration control systems", status: "core" },
    UEERA0032: { title: "Diagnose and rectify faults in complex air conditioning/refrigeration systems", status: "elective" },
    UEERA0034: { title: "Establish heat loads for commercial refrigeration and/or air conditioning applications", status: "elective" },
    UEERA0035: { title: "Establish the basic operating conditions of air conditioning systems", status: "core" },
    UEERA0036: { title: "Establish the basic operating conditions of vapour compression systems", status: "core" },
    UEERA0038: { title: "Establish the thermodynamic parameters of refrigeration and air conditioning systems", status: "elective" },
    UEERA0044: { title: "Find and rectify faults in single phase motors and associated controls", status: "core" },
    UEERA0045: { title: "Find and rectify faults in three phase motors and associated controls", status: "core" },
    UEERA0046: { title: "Install and commission ammonia refrigeration systems, components and associated equipment", status: "elective" },
    UEERA0047: { title: "Install and commission carbon dioxide refrigeration systems, components and associated equipment", status: "elective" },
    UEERA0048: { title: "Install and commission flammable refrigerant air conditioning and refrigeration systems", status: "elective" },
    UEERA0049: { title: "Install and start up single head split air conditioning and water heating heat pump systems", status: "unconfirmed" },
    UEERA0050: { title: "Install refrigerant pipe work, flow controls and accessories", status: "core" },
    UEERA0051: { title: "Install, commission, service and maintain air conditioning systems", status: "unconfirmed" },
    UEERA0052: { title: "Install, commission, service and maintain low temperature systems", status: "core" },
    UEERA0053: { title: "Install, commission, service and maintain medium temperature systems", status: "core" },
    UEERA0054: { title: "Maintain microbial control of refrigeration and air conditioning systems", status: "elective" },
    UEERA0059: { title: "Prepare and connect refrigerant tubing and fittings", status: "core" },
    UEERA0060: { title: "Produce HVAC/R control system diagrams", status: "unconfirmed" },
    UEERA0062: { title: "Recover and charge refrigerants", status: "unconfirmed" },
    UEERA0064: { title: "Recover, pressure test, evacuate, charge and leak test refrigerants - split systems", status: "unconfirmed", note: "Named as a requirement of UEE32225 in the sources checked; core/elective placement to confirm" },
  };

  /* What the five interactive tools contribute, by unit. These are
     practice and evidence-style activity, not assessment — see the
     curriculum mapping for the caveats. */
  const TOOLS = {
    simulator:  { label: "Simulator and Technician Quiz", units: ["UEERA0036", "UEERA0035", "UEERA0038"] },
    servicebay: { label: "Service Bay", units: ["UEERA0064", "UEERA0062", "UEECO0010", "UEERA0048"] },
    builder:    { label: "System Builder", units: ["UEERA0050", "UEECD0051", "UEERA0060"] },
    diagnose:   { label: "Diagnosis Workshop", units: ["UEERA0036", "UEERA0031", "UEERA0032", "UEERA0048"] },
    pt:         { label: "PT trainer", units: ["UEERA0036"] },
  };

  const api = {
    QUALIFICATION, UNITS, TOOLS,
    isUnit(code) { return Object.prototype.hasOwnProperty.call(UNITS, code); },
    title(code) { return UNITS[code] ? UNITS[code].title : null; },
    /* The modules of `course` tagged with `code`. */
    modulesFor(course, code) { return (course || []).filter(m => Array.isArray(m.units) && m.units.includes(code)); },
    /* Every unit with the modules and tools that support it. */
    coverage(course) {
      return Object.keys(UNITS).map(code => ({
        code, title: UNITS[code].title, status: UNITS[code].status,
        modules: api.modulesFor(course, code).map(m => m.id),
        tools: Object.keys(TOOLS).filter(t => TOOLS[t].units.includes(code)),
      }));
    },
  };

  root.RefrigCompetency = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
