/* =========================================================================
   Course content, module 211 — Technical communication.
   Source: Australian Refrigeration and Air-conditioning, Volume 2
   (Graham Boyle, 5th edition, pub. AIRAH), Chapter 11 — Technical
   communication.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle, 5th edn — pub. AIRAH — Ch 11, Technical communication",
  ];

  const REFS_PHONE = REFS.concat([
    "Radiocommunications Act 1992 (Cwlth), administered by the Australian Communications and Media Authority (ACMA) — licensing and use of two-way radio",
  ]);

  const REFS_LAW = REFS.concat([
    "Australian Consumer Law (Competition and Consumer Act 2010, Schedule 2) — consumer guarantees, misleading conduct and fair trading",
  ]);

  const REFS_PAPER = REFS.concat([
    "Australia and New Zealand Refrigerant Handling Code of Practice (AIRAH) — record keeping for refrigerant charged, recovered and leak repairs",
  ]);

  const MODULES = [

  /* ======================================================================
     Module R2.11 — Technical communication
     ====================================================================== */
  {
    id: "v2-technical-communication",
    stream: "v2",
    title: "R2.11 · Technical communication",
    blurb: "How a technician deals with people and paperwork: appearance and attitude, running a service call, telephone technique, reports and quotations, and the contract and consumer-law rules behind the work.",
    lessons: [

      /* --------------------------------------------------------------- */
      {
        id: "communication-as-a-trade-skill",
        title: "Why communication is a technical skill",
        minutes: 10,
        simple: "When you turn up to a job, you are the company as far as the customer is concerned. They cannot tell whether you brazed a joint well, so they judge you on how you look, how you speak and how you treat their place. Think of a restaurant: you cannot see the kitchen, so you decide whether the place is any good from the waiter and the tablecloth. Same thing here.",
        refs: REFS,
        content: `
Most of the trade training you have done so far is about machinery. This module
is about the other half of the job, and it is the half that decides whether the
customer calls your company again. A technician who diagnoses a flooded
compressor perfectly, then explains it badly, writes it up badly and leaves the
plantroom looking like a bomb site, has produced very little value for anybody.

Refrigeration and air-conditioning work is nearly always **service work with a
client attached**. Someone owns the plant, someone is paying for your time, and
in most cases you are the only person from your company they will ever meet. To
them, you are not "the tech" — you *are* Cool-It Refrigeration. Every phone
call, every conversation on site, every line you write on a report reflects on
the business.

## You are selling a service, not just fixing a machine

It is easy to think that selling is the sales department's problem. It is not.
Every service call is a small audition for the next one, for the maintenance
contract, and for the tender your company puts in next year. The more reliably
you turn a call-out into a satisfied client, the more work your employer wins —
and the more secure your own job and reputation become. That is not a slogan;
it is simple arithmetic about where the wages come from.

## The client cannot judge your technical work — so they judge proxies

Here is the uncomfortable truth. A client watching you fit a compressor has no
way of knowing whether you purged with nitrogen while brazing, whether you
pulled a proper vacuum, or whether you just slapped it in. They are not
technically competent to judge — that is precisely why they called you. So they
judge the things they *can* assess, and they use those as a stand-in for the
quality of the work.

| What the client sees | What they conclude |
|---|---|
| Clean-ish clothes, tidy vehicle, presentable manner | This person is organised, so the work is probably organised |
| Tools laid out on a mat, wiped and put away | The tools matter to them, so my plant probably matters too |
| Drop sheets down, mess cleaned up, doors closed | They respect my property |
| Work planned so parts and gear are on the van | They knew what they were doing before they started |
| Complaining about the boss, the traffic, the last job | Low morale, sloppy company, maybe sloppy work |
| Bad language, arguing, opinions about politics | I do not want this person in my building again |

None of that changes the thermodynamics. All of it changes whether you get paid
promptly and called back next time.

## Clients are anxious, and anxiety makes people difficult

When plant fails, the owner is not calm. A publican with a warm cellar, a
butcher with a coolroom at 8 °C, a hospital engineer with a failed chiller —
each of them has three questions running in their head before you even open
your toolbox:

1. How long will this take?
2. How much is it going to cost?
3. Is it dangerous — to people, or to my stock?

Your attitude, appearance and actions will either settle those fears or
magnify them. A technician who answers those three questions early, honestly
and in plain language has already done most of the customer-relations work for
the day, even if the answer to question one is "I will not know until I have
tested it, but I will tell you within the hour".

## Speak so the client can actually understand you

Technical language is precision between tradespeople and fog to everybody else.
"The TX valve is hunting and you have got flood-back to the crankcase" means
nothing to a shop owner. "The valve that feeds the cold gas is not controlling
properly, so liquid is washing back into the compressor and it will destroy it
if we leave it" means the same thing and lets them make a decision.

Some working rules for talking to clients:

- Keep slang and swearing out of it. It impresses nobody and it costs contracts.
- Use plain terms, then check that you have been understood — ask them to tell
  you back what they think is happening.
- The client is entitled to their opinions, including wrong ones. Do not argue.
- Keep your personal opinions on politics, religion, sport, other trades and
  other people's businesses to yourself. Getting "involved" ends in an argument
  you cannot win.
- You will work in kitchens, hotel rooms, private offices and people's homes.
  Do not pass judgement on how they run the place — unless what they are doing
  is damaging the equipment, in which case say so, politely, and show them how
  to fix it.

## Complaints about someone else's work

Clients will often use you as a sounding board about the last contractor, or
about how the equipment "has never been right". Be sympathetic, but be careful.
Do not accept blame on behalf of your company for work you know nothing about,
and do not run down another contractor — you have not seen what they were asked
to do or what they were paid to do. Redirect the conversation to what you are
doing now to fix the problem, and refer historical disputes to your service
supervisor, who has the file and the authority.

>! Never reassure a client that something is safe when you have not established
>! that it is. If you find a serious refrigerant leak, a live exposed conductor,
>! an unguarded drive or a failed pressure-relief device, say so plainly, make
>! the plant safe or isolate it, and report it in writing on the service report.
>! "I did not want to worry them" is not a defence.

## What to remember

- The client cannot judge the brazing, so they judge you; appearance, tidiness
  and manner are read as evidence about the work.
- You represent the company in every call, message and report.
- Answer the three anxious questions — time, cost, danger — early and honestly.
- Translate technical findings into plain language and confirm understanding.
- Stay out of arguments and opinions; refer disputes about past work upward.
- Good advice honestly given builds trust that outlasts any single job.
`,
        quiz: [
          {
            q: "Why do clients so often judge a service company by the technician's appearance and manner?",
            options: [
              "Because appearance is a reliable indicator of brazing quality",
              "Because they are not technically able to judge the work itself, so they use what they can assess as a substitute",
              "Because consumer law requires a dress standard for licensed technicians",
              "Because insurers require technicians to be presentable on site",
            ],
            answer: 1,
            explain: "The client called you precisely because they cannot do or judge the work. Lacking any way to assess the technical result, they read the signals they can see — tidiness, planning, manner — as evidence about everything else. Appearance does not actually predict brazing quality (option A), which is why it is a proxy rather than a measurement.",
          },
          {
            q: "A cafe owner spends ten minutes telling you the previous contractor was hopeless and that the last repair caused this breakdown. What is the sound response?",
            options: [
              "Agree that the other contractor was probably at fault, to build rapport",
              "Tell them it is not your problem and keep working in silence",
              "Be sympathetic about the disruption, focus on what you are doing now, and refer the historical claim to your service supervisor",
              "Write on the report that the previous contractor caused the failure",
            ],
            answer: 2,
            explain: "You were not there and you do not know what the other contractor was asked to do, so agreeing (A) or writing it down as fact (D) can drag your company into someone else's dispute and can amount to admitting or assigning liability. Stonewalling (B) damages the relationship. Sympathy plus forward focus plus referral upward keeps you useful and out of trouble.",
          },
          {
            q: "Which explanation is best suited to a shop owner who is deciding whether to authorise a repair?",
            options: [
              "The TX valve is hunting and there is flood-back to the crankcase",
              "It has got a refrigerant issue, mate, hard to say",
              "The valve controlling refrigerant into the cold coil is not holding steady, so liquid is washing back to the compressor and will wreck it if it keeps running",
              "The evaporator superheat is oscillating between 2 K and 14 K at part load",
            ],
            answer: 2,
            explain: "The client has to make a commercial decision, so they need the consequence in plain words: what is happening, and what it will cost them if nothing is done. Options A and D are correct but opaque to a non-technical listener, and B tells them nothing at all — vagueness makes clients less confident, not more.",
          },
          {
            q: "Why does the way a technician communicates matter to their own job security?",
            options: [
              "It does not; only technical competence affects employment",
              "Because repeat work and contract wins depend on client confidence, and that confidence is largely built by the technician on site",
              "Because ARCtick licences are cancelled for poor customer service",
              "Because service reports are graded by the client",
            ],
            answer: 1,
            explain: "The wages come from work the company wins and retains, and the technician on site is usually the only company representative the client meets — so client confidence is largely in the technician's hands. Refrigerant handling licences (C) relate to refrigerant handling obligations, not manners.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "the-service-call",
        title: "The service call, from first contact to sign-off",
        minutes: 12,
        simple: "A service call has a shape: find the right person, find out what they know, work with as little disruption as you can, give them real choices about the money, then write it up and get it signed. Like a doctor's appointment - history first, treatment second, and the patient decides. Skipping the first and last steps is what turns a good repair into an argument about the bill.",
        refs: REFS,
        content: `
Every service call runs the same sequence whether it is a bar fridge in a
suburban kitchen or a 400 kW chiller in a hospital. Learn the sequence and you
will look competent on plant you have never seen before.

## Step 1 — Report to the right person

The first thing you do on arrival is report to the person who requested the
service. In a house that is easy: the person who opens the door. On a
commercial or industrial site it is rarely the person at reception. You need to
find whoever actually holds the fault information — the site or facility
manager, the head chef, the duty manager, the store person, the maintenance
supervisor. Announcing yourself also gets you site induction, keys, permits,
lift access and a park, all of which cost you an hour if you skip them.

## Step 2 — Take the fault history before you take the covers off

Get as much information about the fault as you can before you start testing.
This does two things: it points your diagnosis in the right direction, and it
shows the client you are working methodically rather than poking about.

Useful questions:

- What exactly is wrong — warm product, noise, water on the floor, tripping?
- When did it start, and had anything changed just before (delivery, cleaning,
  power outage, new stock, hot weather, building works)?
- Is it constant or intermittent? What time of day is it worst?
- What are the product or space temperatures now, and what should they be?
- Has anyone else worked on it, adjusted a controller or reset a switch?
- Are there alarm logs, controller history or a BMS trend you can look at?

An intermittent fault that only happens at 4 pm on a hot day is a very
different investigation from one that started the morning after a power
failure. That information is free, and only the client has it.

## Step 3 — Work with minimum disruption

The client has a business to run. Consult them **before** shutting anything
down for an extended period, and look for ways of isolating only the section
you must work on. In a supermarket you might shut one case rather than a whole
rack; in an office you might work out of hours on a common-area air handling
unit; in a coolroom you may need product moved or covered before you start.
Agree the outage window, then keep to it or tell them early if you cannot.

## Step 4 — Give the client real options, and let them decide

The client must be the one who decides how much money is spent. If you make
that decision for them you will be arguing about it when the invoice arrives.
Think how you would feel if you left a car in for a noisy motor and collected
it with a whole new engine and a five-figure bill.

Your job is to identify all the reasonable options and put them up with the
facts attached — cost, downtime and product risk. Take a display freezer with a
failed evaporator fan motor that is no longer made:

| Option | Downtime | Cost | Risk to consider |
|---|---|---|---|
| Air-freight the genuine part from overseas | 5–10 days | Part cost plus freight | Product must be relocated or lost for the whole period |
| Fit a non-original motor with bracket modifications | 1–2 days | Moderate; extra labour to modify | May affect airflow, warranty and future spares |
| Hire or borrow an alternative cabinet | Same day | Hire cost per week | Display and layout compromised |
| Replace the cabinet | Per lead time | Highest capital cost | Best long-term result; your company can quote |

Present the options, give an honest opinion when asked, and let the client
choose. Note the choice on the report.

## Step 5 — Know when repair is bad value

You also have to weigh time and labour. Plenty of components *can* be repaired,
but if four hours of labour costs more than a new part, repair is the wrong
answer. Equipment that is old, corroded and running an obsolete refrigerant is
often better replaced outright than nursed along with repeated call-outs. If
you give sound advice and lose a small repair job, you will usually gain a
customer who trusts what you tell them — and that is worth more over a few
years than the job you gave up.

## Step 6 — Complete the call properly

When the work is done, fill out the service report **on site**, then walk the
client through it:

1. Explain in plain terms what you found and what you did.
2. Note any further work required — worn V-belts, corroded cabinet, blocked
   drain, filters at the end of their life, a controller running on defaults.
3. Note anything unsatisfactory that is outside your scope: no isolator, no
   safe access, water in the plantroom, product loaded over the return air.
4. Raise warranty then and there if it is relevant, so there is no confusion
   about what a future call-out will cost.
5. Ask the client to sign, and use that moment to clear up any questions.
6. Sign and date it yourself, leave the client their copy, keep the original
   for invoicing.

The client's signature matters more than most apprentices realise. It is the
evidence that the listed work was carried out and that the client accepted it.
Without it, a disputed invoice becomes your word against theirs.

>! Do not restart plant you know to be unsafe just to avoid inconveniencing the
>! client. If a safety control has failed, a relief device has lifted, guarding
>! is missing or an electrical fault is present, leave it isolated, tell the
>! client verbally, and write it on the report before you leave site. Note the
>! isolation point and who you told.

## On the job

- Announce yourself to the person who requested the work, not to whoever is
  nearest the door.
- Take the fault history first; the client owns information you cannot measure.
- Agree any shutdown before you cause it, and isolate as little as possible.
- Options plus consequences to the client, decision by the client.
- Advise honestly on repair versus replace, even when it loses you the job.
- Write it up on site, note future work, get the signature, leave a copy.
`,
        quiz: [
          {
            q: "Why does the textbook insist that the client, not the technician, makes the decision on how a costly repair proceeds?",
            options: [
              "Because technicians are not allowed to form an opinion on repair options",
              "Because it is the client's money and equipment, and unilateral decisions become disputes when the invoice arrives",
              "Because the Australian Consumer Law forbids technicians from recommending a repair",
              "Because the client always knows which option is technically best",
            ],
            answer: 1,
            explain: "The point is authority over spending, not competence. You are expected to give an opinion and lay out the consequences of each option, but the person paying must choose — otherwise the account is contested. Clients frequently do not know which option is technically best (D), which is exactly why you present the facts alongside each choice.",
          },
          {
            q: "On a commercial call-out, what is the first task on arrival?",
            options: [
              "Open the plantroom and start taking pressures so no time is wasted",
              "Find the person who requested the service or holds the fault information, and get as much detail as possible",
              "Complete the service report header so it is ready later",
              "Isolate the plant so it is safe to work on",
            ],
            answer: 1,
            explain: "The fault history is information only the site can give you, and it steers the whole diagnosis — when it started, what changed, whether it is intermittent. Going straight to gauges (A) risks chasing symptoms, and isolating plant (D) before consulting anyone can shut down a business without warning.",
          },
          {
            q: "The client's signature on a completed service report is important mainly because:",
            options: [
              "It is required before refrigerant can be recovered",
              "It transfers warranty responsibility to the client",
              "It is the evidence that the listed work was carried out and accepted by the client",
              "It allows the technician to leave site without contacting the office",
            ],
            answer: 2,
            explain: "The signature is the proof of performance and acceptance, which is what protects the invoice if the account is later queried. It does not shift warranty obligations (B) — warranty is governed by the contract and consumer law regardless of who signed the docket.",
          },
          {
            q: "You find worn V-belts and heavy corrosion on a condenser while attending an unrelated fault. What should you do?",
            options: [
              "Say nothing; you were not called for that",
              "Replace them without asking, since you are already on site",
              "Note them on the report as items requiring attention, mention them to the client, and let the client decide",
              "Report them only to your supervisor, not to the client",
            ],
            answer: 2,
            explain: "Recording future work protects everyone: the client can make an informed decision, and if the belt later fails there is no argument that the new call-out is somehow a warranty comeback from your visit. Doing unauthorised work (B) means unapproved charges, and staying silent (A) creates exactly the callback dispute this practice is designed to prevent.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "communicating-by-telephone",
        title: "Communicating by telephone and radio",
        minutes: 9,
        simple: "On the phone nobody can see you, so your voice is the whole impression you make. A caller who is rushed can sound rude without meaning to, and a caller left on hold gets angry because they cannot see what is happening. The trick is to say who you are, write down everything you need, promise nothing you cannot deliver, and think before you dial.",
        refs: REFS_PHONE,
        content: `
A very large share of trade communication still happens by phone: clients
booking work, technicians reporting in, parts being ordered, site contacts
being chased. The phone saves enormous amounts of time — and it generates a
surprising number of complaints, because it strips away everything except your
words and your tone.

## Why the phone goes wrong

The person on the other end cannot see you. They cannot see that you are
holding a torch in your teeth, or that the store person is three aisles away
looking for their part. All they experience is silence, or a voice that sounds
abrupt. People tolerate delays far less on the phone than face to face, and
somebody in a hurry very easily sounds rude. That is how an ordinary call turns
into a conflict, and occasionally into a lost client.

## Answering a call

State the company and your name — for example, "Cool-It Refrigeration
Services, Janelle Jones speaking". The caller then knows they have the right
company and who they are dealing with. If a receptionist has already announced
the company and put the call through, use the same format with the department
instead: "Service department, Jim Fields speaking".

## Taking a service call — the information you must capture

Being sent to the wrong address, or being unable to find out who even placed
the call, wastes a technician's day. Collect every item below, and repeat the
contact details back to the caller to confirm you have them right.

| Information to obtain | Why it matters |
|---|---|
| Caller's name and contact number | Someone must be reachable when the technician is at the door or needs access |
| Site address and exactly where the equipment is | "The coolroom out the back of the shopping centre" is not an address |
| Type, make and model of equipment | Determines the right technician, tools, gauges and likely spares to load |
| Reported fault and when it started | Steers diagnosis and lets the office triage urgency |
| Order number, if applicable, and the invoicing address | Commercial clients will not pay an invoice without their order number |

Add site access details wherever you can — after-hours contact, keys, induction
requirements, gate codes, whether the plant is on a roof and whether an access
permit is needed.

## Tone and commitments

Be friendly and polite, and do not commit yourself or the company to something
you cannot control. Clients always want service immediately. Service work is
full of variables, so promising "between two and three this afternoon" invites
a broken promise. It is better to be honest and slightly vague — "as soon as
possible", or "as soon as our next technician is free, and I will call you when
they are on the way" — than to commit to a time and disappoint. A promise kept
loosely beats a precise promise broken.

## Making a call

Before you dial, know what you are going to say.

- Ordering parts: have a written list with sizes, part numbers where you have
  them, and the equipment make, model and serial number. Reading the compressor
  nameplate to the wholesaler is much faster than three return calls.
- Reporting in: jot down the important points first — what you found, what you
  have done, what you need, what it will cost the client in downtime.
- Asking for technical help: have your measured values in front of you
  (suction and discharge pressures, superheat, subcooling, ambient, currents),
  not vague impressions.

## Two-way radio

Mobile phones and tablets have taken over most base-to-technician
communication, but two-way radio is still used, particularly in remote areas
and on large sites where mobile coverage is poor. Channels are normally
**shared between several users**, and the Australian Communications and Media
Authority (ACMA) regulates how they are used under the Commonwealth
Radiocommunications Act 1992; ACMA can suspend or cancel a licence. If your company runs
two-way radio, learn the rules and follow them.

Practical radio manners follow from the shared channel:

- Listen before you transmit; you may be talking over someone else's call.
- Keep transmissions short and factual — arrange to phone for anything long.
- Never use abusive or offensive language; strangers are listening.
- Do not broadcast a client's private business, prices, alarm codes or access
  arrangements over an open channel.

>! Do not take or make calls while driving unless the phone is properly mounted
>! and hands-free, and never while you are on a ladder, on a roof, or working on
>! live plant. Stop, park, or step back from the equipment first. A call is
>! never worth the fall or the arc flash.

## What to remember

- Identify company (or department) and yourself when you answer.
- Capture caller, address, equipment, fault and order number; read contact
  details back.
- Tone is your entire presence on the phone; hurry sounds like rudeness.
- Promise availability, not exact times.
- Prepare lists and readings before you dial.
- Radio is a shared, licensed, regulated channel — keep it short and clean.
`,
        quiz: [
          {
            q: "A client rings and demands to know exactly when a technician will arrive. What is the better answer?",
            options: [
              "Commit to a firm time to reassure them, and apologise later if it slips",
              "Say you cannot help and transfer them to the supervisor",
              "Say the technician will attend as soon as one is free, and offer to phone when they are on the way",
              "Tell them all technicians are busy and they should try another company",
            ],
            answer: 2,
            explain: "Service work has too many variables to guarantee arrival times, and a specific promise that is broken damages trust more than an honest 'as soon as possible' plus a courtesy call. Committing then failing (A) is precisely the trap the chapter warns about.",
          },
          {
            q: "Which item is most likely to stop a commercial client's invoice being paid promptly if it is not captured when the call is booked?",
            options: [
              "The caller's mobile number",
              "The purchase order number and invoicing address",
              "The refrigerant type in the system",
              "The colour of the cabinet",
            ],
            answer: 1,
            explain: "Commercial accounts payable systems match an invoice to a purchase order; without the order number the invoice sits unpaid regardless of how good the repair was. The mobile number (A) matters for access, but it is the order number that unlocks payment.",
          },
          {
            q: "Two-way radio use by service companies in Australia is regulated under:",
            options: [
              "AS/NZS 3000 by the electrical regulator",
              "the Radiocommunications Act 1992, administered by ACMA, which can suspend or cancel licences",
              "the Australian Consumer Law",
              "state fair trading legislation only",
            ],
            answer: 1,
            explain: "Radio spectrum is Commonwealth-regulated: the Radiocommunications Act 1992 is administered by the Australian Communications and Media Authority, which licenses use and can suspend or cancel licences. AS/NZS 3000 (A) is the wiring rules and has nothing to do with spectrum.",
          },
          {
            q: "Why should you write out a parts list with sizes and part numbers before phoning the wholesaler?",
            options: [
              "Because wholesalers will not talk to technicians without a written list",
              "Because it avoids repeated return calls and wrong parts, saving time for both parties",
              "Because part numbers must legally be quoted in writing",
              "Because it is required on the material requisition",
            ],
            answer: 1,
            explain: "Preparation is what makes a phone call efficient: model, serial and part numbers in front of you turn a five-minute exchange into one call instead of three, and greatly reduce the chance of the wrong part arriving. There is no legal requirement involved (C).",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "service-reports-and-job-sheets",
        title: "Service reports and job sheets",
        minutes: 12,
        simple: "The service report is how your company gets paid and how you prove what you did. If a part is not written down it is given away free, and if the description just says 'changed dome' the customer has no idea why the bill is what it is. Write it as if a stranger will read it in two years - because in a dispute, one will.",
        refs: REFS_PAPER,
        content: `
Writing service reports is one of the most frequent duties a service technician
performs, and one of the most frequently done badly. It is worth understanding
what the document actually is, because it is doing three jobs at once.

| The report is... | For whom | Consequence of doing it badly |
|---|---|---|
| A statement of work performed | The client | They dispute the bill or lose confidence |
| The source document for invoicing | Your company | Parts and hours are never charged; the job runs at a loss |
| The permanent record of the equipment | Whoever attends next | The next technician repeats your diagnosis at the client's expense |

Most companies design their own report or job sheet to suit their accounting
system, and many now use a tablet app where the date, site and technician are
filled in automatically. The medium does not change the content requirements.

## The standard fields, and why each one exists

1. **Report number.** Reports are usually pre-numbered so that every document
   can be accounted for. A missing docket is potentially an uninvoiced job.
2. **Client name and address**, filled in completely — not "the bakery".
3. **Date** of attendance, which fixes when the work was done. This becomes
   critical when warranty periods are counted.
4. **Order number** for commercial clients. It identifies the invoice in their
   system and is what gets the account paid quickly.
5. **Equipment type, make, model and serial number.** This identifies the exact
   machine for ordering parts and for the company's own history records.
6. **Materials list** — every item used. Anything used but not listed is a
   straight loss to your employer. Note also that the wholesale price you paid
   is not the price the client is charged; do not disclose parts costs or offer
   quotes unless you are authorised to.
7. **Time on the job**, recorded as company policy requires. Two truths pull
   against each other here: your time is what the company sells, so as much of
   it as possible should be chargeable, and the client is paying for effort and
   efficiency and will query hours that look padded. You must be able to
   justify every hour you write.
8. **Description of work carried out**, in language the client can follow.
9. **Items requiring future attention**, and anything unsatisfactory you found.
10. **Signatures** — the client's acceptance, and yours, with the date.

## Writing the description: the "changed dome" problem

Suppose you replaced a hermetic compressor in a package air conditioner. A
tempting description is "changed dome". Every tradesperson knows what that
means. The client has no idea, sees two words against six hours of labour, and
reaches for the phone.

Compare:

| Poor description | Description the client can act on |
|---|---|
| Changed dome | Tested system and confirmed compressor motor had failed to earth. Recovered refrigerant, removed failed compressor, fitted new compressor and replacement drier, pressure- and leak-tested, evacuated and recharged to nameplate charge, checked and tested overload and control circuit, test run and final performance check. |
| Gassed up | Located and repaired leak at the liquid line flare at the outdoor unit, pressure-tested, evacuated, recharged 1.35 kg R410A, checked superheat and subcooling, unit running to specification. |
| Cleaned unit | Cleaned condenser coil and fan guard, washed and refitted return-air filters, cleared blocked condensate drain and flushed tray, checked operating pressures and current draw against nameplate. |

The second column justifies the labour and materials, gives the client
something to file, and tells the next technician what was already done.

Guidelines for writing it up:

- No jargon, no acronyms the client will not know.
- Keep the report clean. Wash your hands before you fill it in; greasy
  fingermarks on a document you are asking someone to sign do not inspire
  confidence.
- Spelling and grammar correct, handwriting legible. If your handwriting is
  genuinely bad, print.
- Not too long-winded, but never so brief that the work is invisible.
- Record the measurements you took — pressures, superheat, subcooling,
  temperatures, current draw. They are evidence, and they are the baseline for
  the next visit.

## Noting future work protects you

Check the unit over while you are there and write down what will need attention
soon: V-belts showing wear, corrosion in a cabinet, a worn air filter, a drain
that is nearly blocked, a controller with no low-pressure safety. This shows
you are thorough, and it also inoculates the company against a common argument.
If you say nothing and the belt snaps three weeks later, the client will
reasonably assume the new call-out is somehow connected to your repair and
should be covered by warranty. If it is on the report and they chose not to act
on it, that argument disappears — the decision was theirs, in writing.

## Signing off

Get the client's signature as acceptance of the service they received, sign and
date the report yourself, leave them a copy, and keep the original for
invoicing. On an electronic job sheet, the digital signature, the time stamps
and the photographs do the same job, and photographs of a nameplate, a failed
part or a poor installation are worth pages of description.

>! Never write up work you did not do, never sign a report on someone else's
>! behalf, and never estimate a refrigerant quantity you did not measure.
>! Charged and recovered refrigerant quantities are a licensing and environmental
>! record, not a guess, and a false entry is a serious matter for you personally
>! as well as for your employer.

## On the job

- Fill the report out on site, while the detail is fresh and the client is there.
- Every part used goes on the materials list, or the company wears the cost.
- Describe the process, not the slang — the client is buying the process.
- Record your measured values; they are the next technician's starting point.
- Write down future work and unsatisfactory conditions, every time.
- Signature, date, copy to client, original back to the office.
`,
        quiz: [
          {
            q: "A technician replaces a hermetic compressor and writes 'changed dome' as the description of work. What is the main problem?",
            options: [
              "It is technically inaccurate",
              "It gives the client no basis to understand or accept the labour and materials charged",
              "It is too long for the space provided",
              "It reveals the wholesale cost of the compressor",
            ],
            answer: 1,
            explain: "The phrase is accurate trade slang, so the problem is not accuracy but audience: the client sees two words against hours of labour and queries the account. Listing the actual processes — recovery, removal, fitting, drier, leak test, evacuation, recharge, control checks, test run — is what justifies the charge.",
          },
          {
            q: "Why must every part used on a job appear on the materials list?",
            options: [
              "Because the client is entitled to know the wholesale price",
              "Because unlisted parts are never invoiced and become a direct loss to the company",
              "Because the report number depends on the parts count",
              "Because parts cannot be requisitioned from the store afterwards",
            ],
            answer: 1,
            explain: "The report is the source document for invoicing, so anything not written on it is effectively given away. Note that recording the part is separate from disclosing its cost — technicians should not disclose parts costs or quote unless authorised, so option A is actually the opposite of the rule.",
          },
          {
            q: "What is the practical benefit of noting worn V-belts on the report when the client declines to have them replaced?",
            options: [
              "It allows the company to charge for the inspection",
              "It obliges the client to replace them within 30 days",
              "It records that the client was informed and chose not to act, so a later failure is not treated as a warranty comeback",
              "It transfers liability for the failure to the equipment manufacturer",
            ],
            answer: 2,
            explain: "The written note converts an unspoken risk into the client's documented decision. Without it, a failure a few weeks after your visit is easily read as a fault in your work and argued as warranty. It creates no obligation on the client (B) and does not touch the manufacturer (D).",
          },
          {
            q: "Which set of entries best serves the technician who attends the same unit next year?",
            options: [
              "A tidy description of the work only",
              "The client's signature and the order number",
              "The description of work plus the measured pressures, superheat, subcooling, temperatures and current draw",
              "The report number and the date",
            ],
            answer: 2,
            explain: "Measured values are the baseline that lets the next technician tell whether the machine has drifted. Signatures, order numbers and dates (B, D) serve accounting and proof of acceptance, and the description alone (A) says what was done but not what the machine was doing.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "written-communication-beyond-the-report",
        title: "Technical reports, quotations, letters and email",
        minutes: 12,
        simple: "Not everything you write is a service docket. Sometimes you have to write a report advising a client whether to replace a chiller, price a job, send a letter about a defect, or fire off an email that will still be readable in a court case three years later. The rules are the same each time: know who is reading, say enough for them to decide, and never send anything written in anger.",
        refs: REFS,
        content: `
Beyond the daily service report, a technician is regularly asked to produce
other documents: an equipment status report for a client thinking about an
upgrade, a job progress report on an installation, a quotation, a letter about
a defect, and email by the hundred. Each has its own conventions, but they all
rest on the same idea — a document exists to let a particular reader make a
particular decision.

## Technical reports

A technical report conveys specific information to a specific audience. Two
things shape its style and structure: what has to be conveyed, and what the
reader already knows. A report to a consulting engineer can use industry terms
freely; the same findings written for a shop owner or a body-corporate
committee must have the technical language explained.

Principles worth following:

1. Be economical with words — the reader's time is the scarce resource — but
   include enough for them to make the decision the report exists to support.
2. Organise it logically, with plenty of headings and sub-headings so a reader
   can find the part that concerns them.
3. Use illustrations, photographs, sketches and tables wherever they explain
   faster than prose.
4. Lay it out so it can be read: white space between sections, nothing crammed.
5. Spelling and grammar correct, as with any document that carries your
   company's name.

A workable structure for an equipment status or condition report:

| Section | What goes in it |
|---|---|
| Purpose | Why the report was commissioned, and what question it answers |
| Equipment and site | Make, model, serial, refrigerant, capacity, age, duty, location |
| Findings | What you measured and observed, with values and dates |
| Assessment | What those findings mean for reliability, efficiency and compliance |
| Options | Two or three realistic courses of action with cost and downtime |
| Recommendation | Your professional opinion, and the reasoning behind it |
| Attachments | Photographs, trend data, test results, manufacturer literature |

## Quotations

A quotation is not a friendly guess. Once a client accepts it, it is generally
an offer that forms a binding contract at that price, so a technician should
never quote unless authorised to do so. When you contribute to one, make sure
it states:

- the scope of works — exactly what will be supplied and done;
- the exclusions — what is deliberately not included (electrical supply,
  builder's work, crane or scaffold hire, after-hours access, making good);
- the price, whether GST is included, and any provisional sums;
- how long the price stands (validity period) and the expected lead time;
- assumptions about access, power, isolations and site conditions;
- payment terms, and the warranty or defects liability offered.

Be clear about the difference between a **quotation** (a firm price) and an
**estimate** (an informed indication that may change). Using the words loosely
is one of the easiest ways to end up in a dispute you cannot win.

## Business letters

Letters have not disappeared. They are still the right form for anything formal
enough that the paper trail matters: a warranty claim, a notice of defect, a
response to a complaint, a variation to a contract, a termination. Keep letters
dated, referenced to the job and site, factual, unemotional, and confined to
what you can substantiate. Never write a letter that speculates about blame.

## Email

Email is now the main written channel in most organisations, formal and
informal alike. It is also, in a dispute, evidence. Use it well:

- Keep it to the point, while still including everything the reader needs.
- Use proper spelling, grammar and punctuation. Those rules exist to make
  meaning unambiguous, and ambiguity in this trade costs money.
- Deal with it and clear it — answer promptly rather than letting it age.
- Do not attach unnecessary files; large attachments clog systems and mailboxes.
- Do not write in capitals. It reads as shouting.
- Reply to the existing email so the thread stays intact, rather than starting a
  fresh message that arrives with no history.
- Read it before you send it. The great advantage of email over a phone call is
  that you can take your time and adjust what you have written.
- Never send email in haste or in anger. You will regret it, and unlike a
  remark on site it is permanent and forwardable.
- No texting abbreviations in business email.
- Do not copy in people who do not need to know, and think before using
  "reply all" — annoying twenty people is a poor way to build goodwill.
- Save "urgent" and "important" for when something really is.

Every organisation has its own email policy and user agreement, and you are
expected to follow it.

## Material requisitions

Where parts and equipment are held in a central store, they must be
requisitioned. A requisition typically needs the item description, the
catalogue number if the store runs a catalogue, the quantity, the date, and the
signature of an authorised person such as the service supervisor. Make sure
every field is right — and remember that a part drawn from the store still has
to appear on the materials list of the service report, or it will never be
charged.

## Records

Many companies keep maintenance and service history for the equipment they
look after. It may be a database, a card index, or simply filed copies of
service and maintenance reports. Whatever the method, it is the technician's
responsibility to make sure records relating to their own work are complete and
current. Refrigerant records in particular are a licensing obligation, not an
optional extra.

## Time sheets and cost centres

Nearly every employer records the hours you are to be paid, the rate, and what
you spent the time doing. Hours are usually allocated to cost centres such as:

| Cost centre | What management learns from it |
|---|---|
| Service | Whether reactive work is profitable and adequately staffed |
| Installation | Whether jobs are being won at prices that match real labour |
| Warranty | The true cost of defects — work done for no revenue |
| Call back | How often the company has to return to fix its own work |
| Maintenance | Whether contract pricing covers the labour it consumes |
| Vehicles | Fleet running and downtime costs |
| Administration | Non-productive time and where it goes |

Your allocations roll up into weekly and monthly reports on how the business is
performing. Guessing, or dumping everything into "service" because it is
easiest, quietly hides the two numbers management most needs to see — warranty
and call-back cost.

## What to remember

- Write for the reader you actually have, not the reader you wish you had.
- Reports: headings, illustrations, white space, options, recommendation.
- Quotes bind the company; do not issue one unless you are authorised.
- Email is permanent, forwardable evidence — never send it angry.
- Requisitioned parts still have to reach the service report.
- Honest time-sheet allocation is what makes warranty and callback costs visible.
`,
        quiz: [
          {
            q: "What two factors should determine the style and structure of a technical report?",
            options: [
              "The length of the job and the technician's writing speed",
              "The information to be conveyed and the knowledge and needs of the reader",
              "Company letterhead requirements and the file format",
              "The refrigerant type and the plant capacity",
            ],
            answer: 1,
            explain: "A report exists to move specific information to a specific audience, so what you must convey and what the reader already understands together determine wording, depth and structure. The same findings would be written very differently for a consulting engineer and for a shop owner.",
          },
          {
            q: "Why should a technician not issue a quotation unless authorised?",
            options: [
              "Quotations must be typed rather than handwritten",
              "An accepted quotation generally forms a binding contract at that price, committing the company",
              "Only licensed technicians may calculate labour hours",
              "Quotations must always include GST at the technician's discretion",
            ],
            answer: 1,
            explain: "A quotation is a firm offer; acceptance turns it into a contract the company must honour, including any work the technician forgot to allow for. That is also why the distinction between a quotation and an estimate matters so much in disputes.",
          },
          {
            q: "Which email habit is specifically discouraged because of how it is read by the recipient?",
            options: [
              "Replying within the existing thread",
              "Writing the message in capital letters",
              "Checking spelling before sending",
              "Keeping attachments small",
            ],
            answer: 1,
            explain: "Capitals read as shouting, which turns a neutral message into an aggressive one without you intending it. The other three options are all recommended practice — replying in-thread in particular preserves the history the reader needs.",
          },
          {
            q: "A technician allocates all hours to the 'service' cost centre because it is quicker than splitting them. What is the real cost of this?",
            options: [
              "Nothing, provided total hours are correct",
              "The payroll rate will be wrong",
              "Warranty and call-back time becomes invisible, so management cannot see the cost of defects or return visits",
              "The service report cannot be invoiced",
            ],
            answer: 2,
            explain: "Total hours may be right, but cost centres exist to show where time actually goes. Burying warranty and call-back hours in chargeable service work hides the two figures that reveal quality problems, so nobody acts on them.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "contracts-warranties-consumer-law",
        title: "Contracts, warranties and consumer protection",
        minutes: 12,
        simple: "When your company sells a repair, a service contract or a new system, the law treats that as a promise. Australian Consumer Law says the promise has to be true and the work has to be done with care. Maintenance contracts come in two flavours - one where the client pays for repairs on top, and one where everything is included - and knowing which one you are on tells you what you are allowed to do before you touch the plant.",
        refs: REFS_LAW,
        content: `
The refrigeration industry sells services and products: a repair, a maintenance
visit, expert advice, or the supply and installation of plant. Everything sold
is covered by consumer protection law, and much of it is also covered by a
written contract. A technician who understands both makes far fewer expensive
mistakes.

## Australian Consumer Law

Every state and territory has fair trading legislation, and since 2011 that
legislation has incorporated the **Australian Consumer Law (ACL)** — a single,
uniform set of consumer protections applying to all Australian businesses.
Broadly, the ACL prohibits:

- misleading or deceptive conduct;
- false or misleading representations about goods or services;
- unconscionable conduct;
- unfair contract terms and a range of other unscrupulous trading practices.

It also provides **consumer guarantees** that apply automatically, whatever a
warranty document says. Services must be provided with due care and skill, be
fit for any purpose the customer made known, and be delivered within a
reasonable time. Goods must be of acceptable quality, match their description
and be fit for their normal purpose.

For a technician, the practical translation is short: do not say things that
are not true, do not talk a client into work they do not need, do the work
properly, and honour what your company promised. If you and your employer are
truthful, fair and meet your contractual obligations — as the great majority of
trades do — consumer law is nothing to be frightened of.

## Maintenance contracts

Many service companies sell maintenance contracts: the company agrees to carry
out specified work over a defined period. Before you service anything on a
contract site, find out what your company has actually undertaken to do,
because both over-servicing and under-servicing cause problems.

Two common types:

| Feature | Contract type A — scheduled maintenance | Contract type B — full cover |
|---|---|---|
| Typical scope | Check and adjust all operating equipment; clean air filters; maintain and supply water treatment; advise the client when repair or replacement is needed | All of type A, plus all parts and labour to repair the equipment if it breaks down |
| Frequency | Periodic, commonly quarterly | Periodic, plus breakdown attendance |
| Repairs | Charged separately — the contract sum covers neither parts nor repair labour | Included in the annual sum |
| Annual price | Lower | Substantially higher |
| Client's position | Pays as faults arise; budget uncertain | Knows the year's cost up front; no further charges |
| Built-in incentive | An unscrupulous contractor could be tempted to "find" faults and create chargeable work | The contractor profits by keeping the plant reliable, so maintenance standards tend to be high |

That last row is worth dwelling on. The contract type changes where the
commercial incentive points. On type A, reporting a fault creates revenue; on
type B, every breakdown costs the contractor money. An honest technician
behaves identically on both, and reports exactly what they find — but you
should understand why type B clients often receive noticeably better preventive
maintenance.

If the contractor fails to do what the contract requires, the client may simply
go elsewhere at renewal, or may sue for breach of contract. Both outcomes start
with a technician skipping items on a maintenance schedule, so the checklist is
not paperwork for its own sake.

## Sales contracts

When a company sells equipment or wins a tender, a contract is in force there
too. The technician is usually not involved in the sale, but is very much
involved in delivering it: the installation must comply with the specification.
Where there is no specification, the work must be to an "acceptable industry
standard". That is a vague phrase, and in a dispute it is given meaning by
other contractors or independent experts brought in to judge the work — people
who will look at your pipe supports, your insulation, your electrical
terminations and your labelling. Assume your work will be examined by a
competitor with a torch.

## Defects liability period (warranty)

The warranty or **defects liability period** is a major term in sales contracts
and tender documents. It varies with the contract, but on larger installations
the norm is a **12-month guarantee against component failure and against
improper installation or commissioning**.

The period begins at **practical completion** — the date the client's
representative accepts the installation as complete and ready for use. That
date matters: it is not the date the last pipe was brazed, and not the date the
invoice was issued. Note it, and know it on any site you attend.

Not every repair during the warranty period is a warranty repair. Common
examples:

| Situation found on a call during the warranty period | Usually chargeable or warranty? |
|---|---|
| Compressor motor failed with no external cause found | Warranty — component failure |
| Condenser blocked solid with lint because filters were never cleaned | Chargeable — lack of client maintenance |
| Unit damaged by a forklift | Chargeable — misuse or damage |
| Controller settings altered by site staff, plant now short-cycling | Chargeable — client interference |
| Repeated tripping caused by supply voltage problems on site | Chargeable — external power supply fault |
| Liquid line leaking at a flare the installer made | Warranty — improper installation |

The decision on whether to charge is a commercial one that depends on the
particular contract and the relationship, so when you suspect a fault is not
covered, check with your supervisor before you say anything to the client.

>! Never tell a client on the spot that a repair "will be covered under
>! warranty". You may be wrong about the cause, wrong about the contract dates,
>! or wrong about the terms — and the client will hold your company to what you
>! said. Report the facts, and let the person who holds the contract decide.

## On the job

- The ACL applies to every business, everywhere in Australia; the consumer
  guarantees apply whether or not anyone signed anything.
- Read the maintenance contract before you service a contract site, so you know
  what is included and what is extra.
- Do every item on the maintenance schedule; skipped items are breaches.
- With no specification, the standard is "acceptable industry standard" — and
  experts will be the ones judging it.
- Warranty on larger installations is typically 12 months from practical
  completion, covering component failure and faulty installation or
  commissioning.
- Suspect a non-warranty cause? Gather evidence, photograph it, and refer the
  charging decision upward.
`,
        quiz: [
          {
            q: "Since 2011, consumer protection for Australian trade businesses is governed principally by:",
            options: [
              "Separate and differing fair trading Acts in each state, with no national law",
              "the Australian Consumer Law, a uniform national scheme incorporated into state and territory fair trading legislation",
              "the Radiocommunications Act 1992",
              "AS 1100 and related Australian Standards",
            ],
            answer: 1,
            explain: "The ACL was adopted in 2011 as a single national consumer law carried into each state and territory's fair trading legislation, replacing the previously varied state rules. AS 1100 (D) is a technical drawing standard, and the Radiocommunications Act (C) covers radio spectrum.",
          },
          {
            q: "Under a type A quarterly maintenance contract, you find a failed contactor. What is the position?",
            options: [
              "The contactor and the labour to fit it are included in the contract sum",
              "The contract covers scheduled maintenance only, so the repair parts and labour are charged separately after advising the client",
              "The repair must be done free because the plant is under contract",
              "The client must engage a different contractor for repairs",
            ],
            answer: 1,
            explain: "A type A contract buys periodic checking, adjustment, filter cleaning and water treatment, plus advice when repair or replacement is needed — repairs themselves are extra. That is the essential difference from a type B contract, which bundles parts and labour into one annual price.",
          },
          {
            q: "When does the 12-month defects liability period on a large installation normally start?",
            options: [
              "When the last joint is brazed",
              "When the final invoice is paid",
              "At practical completion — when the client's representative accepts the installation as complete and ready for use",
              "On the first anniversary of the contract signing",
            ],
            answer: 2,
            explain: "Practical completion is the formal milestone at which the client accepts the plant as finished and usable, and it is the date the defects liability clock runs from. Completion of physical work (A) or payment (B) can fall weeks either side of it and do not set the date.",
          },
          {
            q: "During the warranty period you attend a unit that is tripping because the site's supply voltage is unstable. What should you do?",
            options: [
              "Tell the client it is covered by warranty and repair it free",
              "Tell the client it is definitely not covered and issue an invoice on the spot",
              "Record the evidence, advise your supervisor that the cause appears to be external, and let the charging decision be made against the contract",
              "Refuse to attend further until the client rewires the building",
            ],
            answer: 2,
            explain: "Supply-side faults are a classic non-warranty cause, but whether to charge depends on the contract terms and the client relationship, which is a commercial decision above the technician's pay grade. Committing either way on site (A or B) risks binding the company to a position that turns out to be wrong.",
          },
          {
            q: "Where an installation contract contains no detailed specification, what standard does the work have to meet?",
            options: [
              "Whatever the installing technician considers reasonable",
              "An 'acceptable industry standard', which in a dispute is judged by other contractors or independent experts",
              "The minimum needed for the plant to start",
              "The manufacturer's warranty conditions only",
            ],
            answer: 1,
            explain: "The contract falls back on acceptable industry standard, a deliberately general phrase that gets its content from what competent contractors in the industry would do — assessed, if it comes to a dispute, by independent experts inspecting your work. It is not the technician's private opinion (A).",
          },
        ],
      },

    ],
  },

  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
