/* =========================================================================
   Reference library — the authoritative documents this course teaches to.

   Each document lists its structure and a clause index. Clause entries carry
   a short plain-language summary (not the standard's text) and the lesson
   that teaches them, so:
     - !CITE[doc:part:clause] in lesson content renders a linked citation
     - the #reference view can list a document's structure for study
     - adding a new document later means adding an entry here, nothing else

   Summaries paraphrase publicly stated requirements for teaching purposes.
   The current edition of each document remains the authority.
   Loaded as a plain script and require()-able in Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const COP2025 = {
    id: "cop",
    short: "COP 2025",
    title: "Australia and New Zealand Refrigerant Handling Code of Practice",
    edition: "2025 edition",
    publisher: "AIRAH",
    isbn: "978-0-949436-58-0",
    module: "code-of-practice",
    blurb:
      "The handling rulebook Australian and New Zealand refrigerant work is done to. " +
      "In Australia it is referenced in a Determination under the Ozone Protection and " +
      "Synthetic Greenhouse Gas Management Regulations 1995, which is what gives its " +
      "mandatory requirements legal force.",
    acknowledgement:
      "© AIRAH 2025. The Code states that its contents may be reproduced for study, " +
      "research, information or educational purposes where the source is acknowledged. " +
      "This course paraphrases requirements for teaching and cites them at clause level; " +
      "it does not reproduce the Code. Always work to the current edition.",
    parts: [
      {
        id: "1",
        title: "Self-contained low charge systems",
        scope:
          "Self-contained equipment with a charge of 2 kg or less where no work on the " +
          "refrigerating system is needed at installation — fridges and freezers, ice and " +
          "ice-cream makers, window/wall and portable room air conditioners, dehumidifiers, " +
          "vending machines, and some heat-pump appliances.",
        chapters: [
          "General", "Design considerations", "Manufacture and assembly",
          "Installation procedures", "Labelling", "Evacuation procedures",
          "Refrigerant charging procedure", "Maintenance, repair and servicing",
          "Advice to equipment owners and operators", "Change of refrigerant/lubricant",
          "Refrigerant recovery, recycling, reclamation and disposal",
          "Handling and storage of refrigerants",
        ],
      },
      {
        id: "2",
        title: "Systems other than self-contained low charge systems",
        scope:
          "All other equipment using scheduled refrigerants — heat pumps and air " +
          "conditioning, commercial and industrial refrigeration, and transport " +
          "refrigeration. Motor vehicle air conditioning is covered by a separate " +
          "automotive code.",
        chapters: [
          "General", "Design considerations", "Manufacture and assembly",
          "System installation procedures", "Evacuation procedures",
          "Refrigerant charging procedure", "Labelling and documentation",
          "Commissioning", "Maintenance, repair and servicing",
          "Advice to equipment owners", "Change of refrigerant/lubricant",
          "Refrigerant recovery, recycling, reclamation and disposal",
          "Handling and storage of refrigerants",
        ],
      },
    ],
    appendices: [
      { id: "A", title: "Scheduled refrigerants", note: "GWP (AR4) and safety classification for common refrigerants." },
      { id: "B", title: "Safety classifications", note: "Toxicity A/B and flammability 1, 2L, 2, 3; ADG transport divisions." },
      { id: "C", title: "Definitions and acronyms" },
      { id: "D", title: "Referenced documents and resources" },
    ],

    /* Clause index. Key is "part:clause"; "both" where Parts 1 and 2 align. */
    clauses: {
      "both:1.1.1": {
        title: "Australian licensing",
        lesson: "cop-licensing",
        summary:
          "Anyone handling a scheduled refrigerant — or a component with a risk of emitting " +
          "one — must hold the appropriate licence under the Regulations. Apprentices and " +
          "trainees need a trainee licence and must work under a fully qualified licence holder. " +
          "Acquiring, possessing or disposing of bulk refrigerant needs an authorisation as well.",
      },
      "both:1.1.2": {
        title: "New Zealand certification",
        lesson: "cop-licensing",
        summary:
          "In New Zealand anyone charging or recovering refrigerant needs refrigerant filler " +
          "and handler certification, and filling any gas container under pressure — including " +
          "air — legally requires a current filler compliance certificate.",
      },
      "both:1.1.3": {
        title: "Standard of work",
        lesson: "cop-licensing",
        summary:
          "Employers must give staff who handle scheduled refrigerant a copy of the Code, and " +
          "work must be done to the standards it sets.",
      },
      "both:1.2.1": {
        title: "Refrigerant discharge",
        lesson: "cop-discharge",
        summary:
          "The Australian Act prohibits conduct that discharges (or is likely to discharge) a " +
          "scheduled substance. Named examples include venting, charging equipment with known " +
          "or suspected leaks, flushing pipework with refrigerant, using refrigerant as the " +
          "pressure medium for leak testing, and using it to clean coils.",
      },
      "both:1.2.2": {
        title: "Prohibited refrigerant charging",
        lesson: "cop-discharge",
        summary:
          "A system must not be charged with a higher-GWP refrigerant than the one it was " +
          "designed for, unless the design refrigerant was an ozone-depleting HCFC. Systems " +
          "not designed for scheduled refrigerants must not be charged with one.",
      },
      "both:1.2.3": {
        title: "Refrigerant classification",
        lesson: "cop-flammable",
        summary: "All refrigerants used in RAC equipment must be classified to AS/NZS ISO 817.",
      },
      "both:1.2.4": {
        title: "Flammable scheduled refrigerant",
        lesson: "cop-flammable",
        summary:
          "Flammable refrigerants are classes A2L, A2, A3 and B2L. Scheduled flammable " +
          "refrigerants are currently A2L (common) or A2 (uncommon). Lubricant/refrigerant " +
          "mixtures can be flammable even where the refrigerant is classed non-flammable.",
      },
      "2:4.9": {
        title: "Leak tightness testing",
        lesson: "cop-leak-testing",
        summary:
          "Site-assembled sections must be leak tightness tested before being charged. " +
          "Refrigerant must never be used as the test pressure medium — the test is done with " +
          "oxygen-free nitrogen, optionally with a hydrogen or helium tracer.",
      },
      "2:4.9.2": {
        title: "When to test",
        lesson: "cop-leak-testing",
        summary:
          "Test at initial commissioning; after the system is moved, altered or changes use; " +
          "after repair; after a change of refrigerant type; when a leak or low charge is known " +
          "or suspected; and after standstill longer than two years.",
      },
      "2:4.9.4": {
        title: "Test pressure",
        lesson: "cop-leak-testing",
        summary:
          "At commissioning, test at maximum system operating pressure — below any pressure " +
          "limiting or relief device setting, and never above the maximum allowable pressure " +
          "(PS). For a repair or component replacement, test above 25% and below 90% of PS.",
      },
      "2:4.9.6": {
        title: "Test duration",
        lesson: "cop-leak-testing",
        summary:
          "Hold the test pressure 24 hours for an initial commissioning test, and 1 hour when " +
          "testing a repair or component replacement.",
      },
      "2:4.9.7": {
        title: "Acceptance criteria",
        lesson: "cop-leak-testing",
        summary:
          "No pressure drop once temperature variation is accounted for. Site-assembled joints " +
          "must be checked with detection equipment capable of 5 g/year or better.",
      },
      "2:4.9.3": {
        title: "Test equipment",
        lesson: "cop-leak-testing",
        summary:
          "Oxygen-free nitrogen of high purity (under 10 ppm moisture); standard-grade nitrogen " +
          "is unsafe because it can carry enough oxygen to explode at high pressure. Tracer gas " +
          "is OFN with under 5% hydrogen or 10-30% helium. Flammable refrigerants need a detector " +
          "designed for combustible gases; halide detectors can spark and must not be used.",
      },
      "2:4.9.5": {
        title: "Test procedure",
        lesson: "cop-leak-testing",
        summary:
          "Evacuate, connect OFN, pressurise in stages checking at every increment, then isolate " +
          "and record pressure and ambient temperature. Any temperature-adjusted pressure drop " +
          "means leaks must be found. Test every potential leakage point — the first leak found " +
          "may not be the only one — and repeat the whole test after any repair.",
      },
      "2:4.9.8": {
        title: "Leak repairs",
        lesson: "cop-leak-testing",
        summary:
          "Repairs must be carried out and verified before charging, and must never be made with " +
          "the system pressurised. The system or affected part is leak tightness tested again afterwards.",
      },
      "2:5.3": {
        title: "Evacuation equipment",
        lesson: "cop-evacuation",
        summary:
          "Use dedicated evacuation hoses — large diameter, as short as practical — not service " +
          "manifold hoses, and measure the vacuum on a dedicated vacuum gauge rather than a " +
          "standard manifold pressure gauge.",
      },
      "2:6.1": {
        title: "Charging — general",
        lesson: "cop-charging",
        summary:
          "All refrigerant pipework, components and systems must be evacuated before charging, " +
          "and the system charge limits must not be exceeded.",
      },
      "2:6.2": {
        title: "Charging procedure",
        lesson: "cop-charging",
        summary:
          "Charging follows AS/NZS 5149.4 Section C.2. Pure refrigerants may be charged as vapour " +
          "or liquid, but blends can only be charged as a liquid.",
      },
      "2:6.6": {
        title: "Charging flammable refrigerant",
        lesson: "cop-charging",
        summary:
          "The immediate area becomes a temporary flammable zone and must be assessed for " +
          "ventilation, ignition sources, fire hazards, fire equipment, detection and PPE. The " +
          "system must be earthed before charging with a flammable refrigerant.",
      },
      "2:6.7": {
        title: "Charging records",
        lesson: "cop-charging",
        summary: "All refrigerant added to the system must be recorded in the logbook per AS/NZS 5149.4.",
      },
      "2:9.5.1": {
        title: "Visual inspection",
        lesson: "cop-leak-inspection",
        summary:
          "Review maintenance records for previous leaks, then look for oil or dust stains on " +
          "joints, components and insulation; movement or stress from vibration or thermal " +
          "expansion; corrosion, thermal stress, wear or metal-to-metal contact; and unusual " +
          "noise or vibration.",
      },
      "2:9.5.2": {
        title: "Diagnostic analysis",
        lesson: "cop-leak-inspection",
        summary:
          "Compare operating temperatures and pressures against manufacturer data to judge " +
          "whether the charge is low. Where the analysis indicates a low charge, a leak tightness " +
          "test must be performed.",
      },
      "2:9.5.3": {
        title: "Leak inspection",
        lesson: "cop-leak-inspection",
        summary:
          "Sweep all joints and components with a detector specific to the refrigerant type. If a " +
          "leak is detected, remove all refrigerant and repair it; if a leak is suspected but not " +
          "detected, remove all refrigerant and leak tightness test the system or affected section.",
      },
      "2:9.5.5": {
        title: "Testing the low-pressure side",
        lesson: "cop-leak-inspection",
        summary:
          "The low side must be put under positive pressure before leak testing the evaporator, " +
          "heat exchanger, expansion valve or solenoid valve, without exceeding maximum design " +
          "conditions during the test.",
      },
      "2:12.2.2": {
        title: "Flammable refrigerant tools and equipment",
        lesson: "cop-flammable",
        summary:
          "A2L and A2 refrigerants are generally not compatible with A1 servicing tools — vacuum " +
          "pumps, recovery units and refrigerant cylinders. Tools must be assessed individually " +
          "against the relevant standards and the manufacturer's stated design.",
      },
      "2:12.2.5": {
        title: "Refrigerant mixtures",
        lesson: "cop-recovery",
        summary:
          "Scheduled and non-scheduled refrigerants must not be cross-contaminated. Mixtures must " +
          "be recovered by a competent technician, never vented, and reclaimed. Where a refrigerant " +
          "cannot be positively identified, treat the system as flammable and toxic.",
      },
      "2:12.4": {
        title: "Disposal",
        lesson: "cop-recovery",
        summary:
          "Unwanted scheduled refrigerant must not be discharged and must go back to a supplier or " +
          "collection agent. In Australia it must be recycled, or sent to an appropriately licensed " +
          "facility for reclamation or disposal.",
      },
      "2:12.5": {
        title: "Disposable refrigerant containers",
        lesson: "cop-recovery",
        summary:
          "Residual refrigerant must be recovered. A disposable container must not be refilled, " +
          "used as a temporary receiver, or repaired or modified, and empties go to a recycling centre.",
      },
      "2:13.1": {
        title: "Chemical hazards",
        lesson: "cop-cylinders",
        summary:
          "Refrigerants are hazardous chemicals classified under the GHS, separately from the " +
          "AS/NZS ISO 817 safety classification. Each has a Safety Data Sheet that should be " +
          "consulted before handling. Asphyxiation and freeze burns are also risks.",
      },
      "2:13.5": {
        title: "Refrigerant transfer between cylinders",
        lesson: "cop-cylinders",
        summary:
          "Transfer needs a pressure or height difference. Cylinders should not be manifolded " +
          "together where temperatures may differ, because refrigerant migrates to the cold " +
          "cylinder and can overfill it; keep them level and fit check valves.",
      },
      "2:5.4": {
        title: "Evacuation procedures",
        lesson: "cop-evacuation",
        summary:
          "Recover refrigerant and fully depressurise first. Evacuation must use either the deep " +
          "evacuation method or the triple evacuation method with oxygen-free nitrogen. Depth of " +
          "vacuum must be read on a dedicated vacuum gauge, not a manifold gauge.",
      },
      "2:5.4.1": {
        title: "Deep evacuation method",
        lesson: "cop-evacuation",
        summary:
          "Pull to at least 500 microns (67 Pa absolute), isolate the pump, and stand 60 minutes " +
          "holding below 600 microns (80 Pa). A rise of 100 microns or more means a leak or moisture.",
      },
      "2:5.4.2": {
        title: "Triple evacuation method",
        lesson: "cop-evacuation",
        summary:
          "Two evacuations to at least 4,500 microns (600 Pa) each broken and purged with " +
          "oxygen-free nitrogen, then a third to 500 microns, isolated and held 60 minutes below " +
          "600 microns. Suits all systems, and especially large, complex or contaminated ones.",
      },
      "2:6.3": {
        title: "Verify hose connections",
        lesson: "cop-charging",
        summary:
          "Leak-test the hoses between cylinder and system before opening the cylinder valve " +
          "fully — crack the valve to pressurise the hoses, close it, and check.",
      },
      "2:6.4": {
        title: "Refrigerant mass",
        lesson: "cop-charging",
        summary:
          "Refrigerant must be weighed into and weighed out of the system, and the system must " +
          "not be overfilled. Charging to a known mass is the most accurate method.",
      },
      "2:6.5": {
        title: "Charging precautions",
        lesson: "cop-charging",
        summary:
          "Keep charging lines short. Avoid trapping liquid between closed valves. Never connect " +
          "a cylinder to a system or another cylinder at higher pressure or temperature — back " +
          "flow can contaminate or overfill the cylinder to bursting.",
      },
      "2:9.5": {
        title: "In-service leakage inspection",
        lesson: "cop-leak-inspection",
        summary:
          "Done with refrigerant in place and the system running: a visual inspection, a " +
          "diagnostic analysis of operating parameters, then a leak inspection of common " +
          "leakage points. Where analysis suggests a low charge, a leak tightness test must follow.",
      },
      "2:9.5.4": {
        title: "Common leakage points",
        lesson: "cop-leak-inspection",
        summary:
          "Joints (flare, mechanical, flanged, brazed), valves (Schrader, service, relief, " +
          "expansion, line tap), corroded areas and return bends on coils, shaft and cap seals, " +
          "and capillary tubes, bellows, O-rings and pressure switches. Refit access valve caps.",
      },
      "2:9.6.2": {
        title: "Recommended leak inspection frequency",
        lesson: "cop-leak-inspection",
        summary:
          "Where the manual is silent, follow AS/NZS 5149.4: hermetic systems up to 6 kg yearly; " +
          "other systems over 3 kg and up to 30 kg yearly; over 30 kg up to 300 kg every 6 months; " +
          "over 300 kg every 3 months; stored cylinders every 3 months.",
      },
      "2:12.2": {
        title: "Refrigerant recovery",
        lesson: "cop-recovery",
        summary:
          "All scheduled refrigerant removed from equipment must be recovered and then recycled, " +
          "reclaimed or disposed of. Recover into a correctly labelled cylinder of suitable " +
          "pressure rating — never a flexible bag — and recover the entire charge, liquid and vapour.",
      },
      "2:12.2.3": {
        title: "Recovery cylinders",
        lesson: "cop-recovery",
        summary:
          "Cylinders must be in date against their most recent test stamp, rated for the " +
          "refrigerant, and never filled past their safe working pressure. A2L/A2 refrigerant " +
          "needs A2L/A2-specific cylinders.",
      },
      "2:12.3": {
        title: "Recycling and reclamation",
        lesson: "cop-recovery",
        summary:
          "Recycled refrigerant is re-used with or without cleaning; reclaimed refrigerant has " +
          "been reprocessed to the AHRI 700 specification at a specialist facility. Recovered " +
          "refrigerant should be reclaimed before use in a different system.",
      },
      "2:13.4.3": {
        title: "General cylinder filling",
        lesson: "cop-cylinders",
        summary:
          "Never exceed the marked maximum gross weight, and do not use a cylinder that is not " +
          "marked with one. Safe fill capacity is the fill ratio times the cylinder's water " +
          "capacity; for recovered refrigerant a 20% ullage applies. Never heat a cylinder by flame.",
      },
      "2:13.6.2": {
        title: "Cylinder storage",
        lesson: "cop-cylinders",
        summary:
          "Store cylinders to AS/NZS 4332, securely and with signage so emergency crews can " +
          "identify them. Storage quantity limits come from local legislation.",
      },
      "2:13.7.3": {
        title: "Transporting flammable refrigerants",
        lesson: "cop-cylinders",
        summary:
          "Flammable scheduled refrigerants transport as Dangerous Goods Division 2.1 flammable " +
          "gas under the ADG Code, and cylinders should carry the red flammable-gas diamond.",
      },
    },
  };

  const DOCS = [COP2025];

  const api = {
    docs: DOCS,
    byId(id) { return DOCS.find((d) => d.id === id) || null; },
    /* "cop:2:4.9" -> the clause entry, falling back to a "both:" key */
    clause(ref) {
      const [docId, part, num] = String(ref).split(":");
      const doc = api.byId(docId);
      if (!doc || !num) return null;
      const entry = doc.clauses[part + ":" + num] || doc.clauses["both:" + num];
      if (!entry) return null;
      return Object.assign({ doc, part, num }, entry);
    },
    /* "COP 2025 · Pt 2 §4.9" */
    label(ref) {
      const c = api.clause(ref);
      if (!c) return null;
      return `${c.doc.short} · Pt ${c.part} §${c.num}`;
    },
  };

  root.REFDOCS = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
