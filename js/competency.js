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

   The unit list was verified against a real UEE32225 Record of Results
   issued by TAFE Queensland (35 units: the 27 core plus that RTO's eight
   electives). Which of the 35 are the electives is not printed on a record,
   so `status` says what could be confirmed. RTOs must confirm every code
   and its placement against the current release on training.gov.au before
   relying on this mapping: it is a planning aid, not a compliance document.

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
    source:
      "Unit codes and titles verified against a TAFE Queensland Record of Results for UEE32225 " +
      "(35 units, approved August 2026). Core/elective placement is from training.gov.au where " +
      "it could be confirmed; confirm the rest against the current release.",
  };

  /* Titles are the training-package titles as printed on the record. Every
     unit here is assessed on practical performance as well as knowledge,
     which the platform does not and cannot provide (see
     docs/CURRICULUM_MAPPING.md).

     `status`:
       "core"      — on the record AND named as core in the sources checked
       "listed"    — on the record; core/elective placement not confirmed
       "elective"  — an elective of the training package not on the record
                     checked, kept because a module maps to it               */
  const UNITS = {
    /* ---- First aid and rescue --------------------------------------------- */
    HLTAID009:  { title: "Provide cardiopulmonary resuscitation", status: "listed" },
    UETDRMP007: { title: "Perform rescue from a live low voltage panel", status: "listed" },

    /* ---- Common (UEECD / UEECO / UEERE) ---------------------------------- */
    UEECD0007: { title: "Apply work health and safety regulations, codes and practices in the workplace", status: "core" },
    UEECD0016: { title: "Document and apply measures to control WHS risks associated with electrotechnology work", status: "listed" },
    UEECD0019: { title: "Fabricate, assemble and dismantle utilities industry components", status: "listed" },
    UEECD0020: { title: "Fix and secure electrotechnology equipment", status: "listed" },
    UEECD0042: { title: "Solve problems in ELV single path circuits", status: "listed" },
    UEECD0051: { title: "Use drawings, diagrams, schedules, standards, codes and specifications", status: "listed" },
    UEECO0010: { title: "Participate in refrigeration and air conditioning work and competency development activities", status: "core" },
    UEECO0015: { title: "Provide quotations for installation or service jobs", status: "listed" },
    UEERE0001: { title: "Apply environmentally and sustainable procedures in the energy sector", status: "listed" },

    /* ---- Electrical equipment (UEERL) ----------------------------------- */
    UEERL0001: { title: "Attach cords and plugs to electrical equipment for connection to a single phase 230 Volt supply", status: "listed" },
    UEERL0002: { title: "Attach cords, cables and plugs to electrical equipment for connection to 1000 V a.c. or 1500 V d.c.", status: "listed" },
    UEERL0004: { title: "Disconnect - reconnect electrical equipment connected to low voltage (LV) installation wiring", status: "listed" },
    UEERL0005: { title: "Locate and rectify faults in low voltage (LV) electrical equipment using set procedures", status: "listed" },

    /* ---- Refrigeration and air conditioning (UEERA) ---------------------- */
    UEERA0005: { title: "Apply safety awareness and legal requirements for ammonia refrigerant", status: "listed" },
    UEERA0006: { title: "Apply safety awareness and legal requirements for carbon dioxide refrigerant", status: "listed" },
    UEERA0007: { title: "Apply safety awareness and legal requirements for flammable refrigerants", status: "listed" },
    UEERA0031: { title: "Diagnose and rectify faults in air conditioning and refrigeration control systems", status: "core" },
    UEERA0035: { title: "Establish the basic operating conditions of air conditioning systems", status: "core" },
    UEERA0036: { title: "Establish the basic operating conditions of vapour compression systems", status: "core" },
    UEERA0044: { title: "Find and rectify faults in single phase motors and associated controls", status: "core" },
    UEERA0045: { title: "Find and rectify faults in three phase motors and associated controls", status: "core" },
    UEERA0050: { title: "Install refrigerant pipe work, flow controls and accessories", status: "core" },
    UEERA0052: { title: "Install, commission, service and maintain low temperature systems", status: "core" },
    UEERA0053: { title: "Install, commission, service and maintain medium temperature systems", status: "core" },
    UEERA0059: { title: "Prepare and connect refrigerant tubing and fittings", status: "core" },
    UEERA0062: { title: "Recover and charge refrigerants", status: "listed" },
    UEERA0070: { title: "Resolve problems in central plant air conditioning systems", status: "listed" },
    UEERA0079: { title: "Safely handle refrigerants and lubricants", status: "listed" },
    UEERA0081: { title: "Select refrigerant piping, accessories and associated controls", status: "listed" },
    UEERA0084: { title: "Service and repair self-contained flammable refrigerants air conditioning and refrigeration systems", status: "listed" },
    UEERA0092: { title: "Solve problems in low voltage refrigeration and air conditioning circuits", status: "listed" },
    UEERA0094: { title: "Verify functionality and compliance of refrigeration and air conditioning installations", status: "listed" },
    UEERA0099: { title: "Install, commission, service and maintain air conditioning systems", status: "listed" },

    /* ---- Electives of the training package not on the record checked ---- */
    UEERA0032: { title: "Diagnose and rectify faults in complex air conditioning/refrigeration systems", status: "elective" },
    UEERA0034: { title: "Establish heat loads for commercial refrigeration and/or air conditioning applications", status: "elective" },
    UEERA0038: { title: "Establish the thermodynamic parameters of refrigeration and air conditioning systems", status: "elective" },
    UEERA0054: { title: "Maintain microbial control of refrigeration and air conditioning systems", status: "elective" },
  };

  /* What the five interactive tools contribute, by unit. These are
     practice and evidence-style activity, not assessment — see the
     curriculum mapping for the caveats. */
  const TOOLS = {
    simulator:  { label: "Simulator and Technician Quiz", units: ["UEERA0036", "UEERA0035", "UEERA0038"] },
    servicebay: { label: "Service Bay", units: ["UEERA0062", "UEERA0079", "UEERA0007", "UEECO0010"] },
    builder:    { label: "System Builder", units: ["UEERA0050", "UEERA0081", "UEECD0051"] },
    diagnose:   { label: "Diagnosis Workshop", units: ["UEERA0036", "UEERA0031", "UEERA0032", "UEERA0007"] },
    pt:         { label: "PT trainer", units: ["UEERA0036"] },
    control:    { label: "Control Circuit Workshop", units: ["UEERA0031", "UEERA0044", "UEERA0092", "UEERL0005", "UEECD0042"] },
    procedures: { label: "Procedure trainers", units: ["UEERA0062", "UEERA0079", "UEERA0059", "UEERA0094", "UEERA0007", "UEECO0010"] },
    capstone:   { label: "Capstone job", units: ["UEERA0050", "UEERA0094", "UEERA0062", "UEERA0036", "UEERA0053", "UEERA0031", "UEECO0010"] },
    quiz:       { label: "Technician Quiz", units: ["UEERA0036"] },
  };

  const api = {
    QUALIFICATION, UNITS, TOOLS,
    isUnit(code) { return Object.prototype.hasOwnProperty.call(UNITS, code); },
    title(code) { return UNITS[code] ? UNITS[code].title : null; },
    /* The modules of `course` tagged with `code`. */
    modulesFor(course, code) { return (course || []).filter(m => Array.isArray(m.units) && m.units.includes(code)); },
    /* A learner's standing per unit: knowledge from lesson progress across
       the modules tagged with the unit, and evidence from the tools. Pure:
       `progress` is the course's progress map, `evidence` the evidence list. */
    mastery(course, progress, evidence) {
      const prog = progress || {};
      const ev = evidence || [];
      return Object.keys(UNITS).map(code => {
        const mods = api.modulesFor(course, code);
        let lessons = 0, done = 0;
        mods.forEach(m => m.lessons.forEach(l => { lessons += 1; if ((prog[m.id + "/" + l.id] || {}).done) done += 1; }));
        const mine = ev.filter(e => {
          const units = (Array.isArray(e.units) && e.units.length) ? e.units : ((TOOLS[e.tool] || {}).units || []);
          return units.includes(code);
        });
        const mean = mine.length ? mine.reduce((n, e) => n + (Number(e.score) || 0), 0) / mine.length : 0;
        return { code, title: UNITS[code].title, status: UNITS[code].status,
          modules: mods.length, lessons, done, knowledge: lessons ? done / lessons : 0,
          attempts: mine.length, mean, best: mine.reduce((b, e) => Math.max(b, Number(e.score) || 0), 0) };
      });
    },
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
