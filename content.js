// All exercise and reminder content.
// A step is a string, or { t, secs } (timed), { t, open:true } (count-up, move on when ready),
// or { t, breath: { phases:[[label,secs]...], reps } }.

export const CATS = {
  energy: 'Basic meditations',
  balance: 'Counterbalance',
  observe: 'Observation',
  concentrate: 'Concentration',
  meditate: 'Meditation',
  emotion: 'Emotional control',
  bedtime: 'Bedtime',
  journey: 'Inner journeys',
  living: 'Living practices',
  centers: 'Psychic centers',
  chakra: 'Chakra alignment',
  attention: 'Attention',
  spatial: 'Spatial awareness',
  project: 'Projection',
};

// Progression gates from the Psychic Development guide: Heart -> Pituitary -> Pineal -> Throat -> Attunement.
export const MILESTONES = [
  { id: 'heart', label: 'Heart center is showing signs of activity' },
  { id: 'pituitary', label: 'Pituitary work is showing results (sharper observation, faster thinking, better memory)' },
  { id: 'pineal', label: 'Pineal series practiced for several weeks' },
  { id: 'throat', label: 'Throat + pineal practiced together; the centers are responding' },
];

const BODY = 'Sit in a straight-back chair, feet touching but not crossed, hands resting in your lap, back straight, head erect, breathe naturally, eyes closed. Quiet spot, free of interruption.';

export const EXERCISES = [
  // ---------- Energy & healing ----------
  {
    id: 'energy-breath', cat: 'energy', title: 'Energy-Building Breath', mins: 3,
    freq: 'At least once a day; up to 4–5× is fine',
    summary: 'Pull in a surge of energy and store it. Noticeable stimulation soon after; the lift lasts several hours.',
    steps: [
      'Sit erect (not tense) or stand with weight balanced on both feet.',
      { t: 'Jaw clenched firmly, both hands in fists, rest of body relaxed. Think of each breath as pulling in a surge of energy and storing it.', breath: { phases: [['Breathe in', 3], ['Hold', 5], ['Exhale slowly', 10]], reps: 10 } },
    ],
  },
  {
    id: 'child-sun', cat: 'energy', title: '"Child of the Sun"', mins: 1,
    freq: 'After the energy breath, or on its own',
    summary: 'Immediate refreshment; the bigger payoff (more work, less fatigue) shows up hours later.',
    steps: [
      'Sit erect, relaxed, feet touching, hands clasped in lap.',
      'Visualize the sun — a great white flaming orb of energy.',
      'Mentally lift your consciousness "in spirit" to the sun, enter its aura, go to its body. No fear — you belong there. Let its energy flow through and invigorate every part of you.',
      { t: 'Stay in the sun.', secs: 60 },
      'Return to your body, rise, resume your day.',
    ],
  },
  {
    id: 'white-light', cat: 'energy', title: 'Light Scan Energy Transfer', mins: 5,
    freq: 'As soon as trouble starts, or a few times a day',
    summary: 'Scan the body, then bring light to where it is needed. Several ways in; use the one that works for you.',
    steps: [
      'Sit in a comfortable chair, head erect, spine straight, feet apart, hands unclasped in lap. Or lie down. Breathe slowly.',
      'Scan from head to feet. Where is there tension, ache, heaviness, or ease? What does the body crave, and what does it turn away from? Ask the part that speaks up: "What do you need?"',
      'WAY ONE, the white cloud: visualize yourself surrounded by a bright white cloud, scintillating like sunlight on new snow. See that white light concentrating into the painful or affected area. For heart or lungs, concentrate it at the 5th-7th thoracic vertebrae (between and slightly below the shoulder blades). For a nervous disorder (not mental illness), concentrate it at the 5th cervical vertebra.',
      'WAY TWO, the wash: picture a place you genuinely enjoy and let it bring back the feeling you get there. Imagine a ball of light glowing above you, vivid and unhurried. Let it slowly enter your head and work down to your feet, as slow as a freshly washed car creeping through a drying tunnel. It can also show you where the problem areas are.',
      { t: 'Hold the light on the area, or let it wash through you. Pick your length.', pick: [180, 300], secs: 180 },
      'Do one small thing your body asked for, and notice how it responds.',
    ],
  },
  {
    id: 'heal-others', cat: 'energy', info: true, title: 'Sending Energy to Other Beings', mins: 15,
    freq: 'When asked',
    summary: 'Prime yourself, calm the being you are sending to, accumulate energy, then use the contact or radiation method.',
    steps: [
      { t: 'Prime yourself: bring first two fingers + thumb of each hand together (each hand separate). Visualize psychic energy pouring into you and accumulating at your heart, held there by will.', breath: { phases: [['Breathe in', 3], ['Hold', 7], ['Release slowly', 5]], reps: 3 } },
      'Calm the being you are sending to: have them relax and picture a quiet, unrippled forest pool mirroring white clouds in a blue sky. Narrate what you are doing as you go.',
      'Accumulate energy again: breath/visualization, energy pooling at your heart.',
      'Contact method: touch index + middle finger + thumb together on the left side of the being\'s spine between the shoulder blades (heart center). Release energy through — an open valve to an unlimited supply. Hold a clear visualization 30–40 sec; if it clouds, remove your hand, wait ~5 min, repeat from the breathing step.',
      'Radiation method: same, but no touch — stand where you can see the being and visually direct the energy to the spot. Works at a distance too.',
      'Rhythm: 3 treatments per session, sessions every 2–3 hrs → results in ~12 hrs, often a cure in 24. Unknown ailment: direct energy to the heart center (back, left of spine, between shoulder blades).',
      'The handoff: you use will while gathering energy, but the moment your attention turns to the being, let the will go quiet and let love take over. Feel a generous, open-hearted love for them. As taught, this also keeps out fear and doubt.',
      'Check yourself afterward. As taught, you should not end up drained or carrying their symptoms. If you do, take it as a sign that a step went wrong, most often the handoff to love, and go back over what you did.',
    ],
  },

  {
    id: 'heal-headache', cat: 'energy', info: true, title: 'Quick Headache Relief', mins: 4,
    freq: 'When asked', summary: 'Energy in through the right hand, out through the left.',
    steps: [
      "Tips of the first two right-hand fingers on the being's left temple; index + middle of the left hand lightly on the right temple.",
      { t: 'Visualize energy flowing in through the right hand and out through the left.', secs: 180 },
    ],
  },
  {
    id: 'heal-aches', cat: 'energy', info: true, title: 'Easing Aches, Cuts and Scrapes', mins: 5,
    freq: 'When asked, or for yourself',
    summary: 'Deliver energy straight to the sore or injured spot. As taught, minor aches ease and small cuts and scrapes recover faster when energy is plentiful there.',
    steps: [
      'Prime yourself as in Sending Energy to Other Beings: first two fingers and thumb of each hand together, energy visualized pouring into you and gathering at your heart.',
      'Turn your attention to the sore spot, or to the area just behind it on the spine if you are working through the back. Picture the energy flowing straight into it, bright and steady.',
      'Keep the picture clear. When it clouds, stop and rest about five minutes, then start again from the first step.',
      { t: 'Hold the flow.', secs: 180 },
      'As the teaching puts it, you are giving the body extra energy for its own repair work. Let love do the sending, and leave the result to the body.',
    ],
  },
  {
    id: 'energy-habits', cat: 'energy', title: 'Healthy Supporting Habits', mins: 0,
    caution: 'Check with a doctor before fasting or big diet changes, especially if you have a medical condition or take medicine.',
    freq: 'Daily', summary: 'Everyday habits for a clean body and mind, with the do\'s and don\'ts to live by.',
    steps: [
      'Daily mild exercise to keep the blood circulating.',
      'Daily bathing / cleanliness.',
      'Drink pure water through the day.',
      'Choose vegetables and fruit, and notice how your body responds to what you eat.',
      'Go easy on alcohol, drugs, sugar, and heavily processed food.',
      'Cleanse or rest from food only when your body is clearly asking for it, and safely.',
      'Clean the inputs too: toxic media, fear-driven news, and endless drama. Choose what you let in.',
      'Stop the leaks. As taught, worry, fear, resentment and hurry use up large amounts of energy, and everything you give your attention to takes some of it. Catch one of them each day and put it down. Appreciating a flower or a sunset gives energy back, and so does caring for someone without wanting anything in return.',
      'DO (from teachings associated with Dolores Cannon, in our own words)\n1. Meditate daily and seek quiet. Go within and listen.\n2. Watch your thoughts and words. Speak what you want as present tense, "I am", not "I want".\n3. Release fear. It is the biggest block.\n4. Eat high-vibration food: vegetables, fruit, pure water.\n5. Follow your passion. It is what you came to do.\n6. Practice love, compassion, and non-judgment, especially toward yourself.\n7. Trust your intuition and your body.\n8. Surround yourself with uplifting people and media, and get out in nature often.\n9. Let go of the past and live now.\n10. Be of service. Help others wake up by being an example.',
      "DON'T (from teachings associated with Dolores Cannon, in our own words)\n1. Don't soak in fear-based news or negativity.\n2. Don't speak lack. Skip \"I want\".\n3. Don't let the critical mind override what you sense.\n4. Don't judge or condemn others. Different paths, same destination.\n5. Don't dwell on drama, grudges, or the past.\n6. Don't poison the body: excess alcohol, drugs, sugar, processed food.\n7. Don't hand your choices to anyone, not gurus, governments, or doctors. Take their advice, then decide for yourself, and keep seeing your doctor.\n8. Don't resist change. Flow with it.\n9. Don't ignore your body or its messages.\n10. Don't take \"I don't belong here\" as the truth. You came here on purpose, and you are exactly where you chose to be.",
    ],
  },

  // ---------- Counterbalance ----------
  {
    id: 'counter-neg', cat: 'balance', title: 'Counterbalance — Negative', mins: 10,
    freq: 'Chronic conditions: repeat, at least 2 hrs apart',
    summary: "Use when you're out of balance toward the negative.",
    steps: [
      'Straight-backed chair, quiet spot, undisturbed. Feet apart, flat on the floor (not touching).',
      'Hands rest loosely in lap or on knees, not touching each other. On each hand: index + middle finger + thumb touching (a small triangle).',
      { t: 'Relax. Deep breath, hold for 7, release easily. Rest briefly and repeat — 7 times total.', breath: { phases: [['Deep breath in', 3], ['Hold', 7], ['Release easily', 3], ['Rest', 5]], reps: 7 } },
      'Change position, put it out of your mind.',
    ],
  },
  {
    id: 'counter-pos', cat: 'balance', title: 'Counterbalance — Over-Positive', mins: 10,
    freq: 'Early cold/infection: 3 treatments, an hour or two apart',
    summary: 'The version that helps early colds; usually clears hostile germs in 6–8 hrs.',
    steps: [
      'Sit comfortably, feet touching each other, flat on the floor. Quiet spot.',
      'Hands touching: thumb-to-thumb, each fingertip to its matching fingertip, held at chest level. Eyes closed.',
      { t: 'Deep breath in, exhale slowly, hold the breath OUT for 5. Breathe normally 5–6 breaths. Repeat 5 times.', breath: { phases: [['Deep breath in', 3], ['Exhale slowly', 4], ['Hold breath OUT', 5], ['Breathe normally', 15]], reps: 5 } },
      'Stop, breathe normally, forget about it.',
    ],
  },

  // ---------- Observation ----------
  {
    id: 'obs-room', cat: 'observe', noTraining: true, title: 'New-Room Recall', mins: 0,
    freq: 'Whenever you step into a different room or space — even at home, where things move and change',
    summary: 'Name what you recall in depth and accuracy, until you cannot think of any more. Give it 2–3 weeks before it fully clicks.',
    steps: [
      'Walk into a different room or space (even in your own home — things are always moving and changing). Look around for a moment.',
      { t: 'Close your eyes and name every object you can recall: where it is, its color, its size, what is near it. Ramble on in as much depth and accuracy as you can, until you cannot think of any more. Speed does not matter.', open: true },
      'Open your eyes and check: what did you miss, and what did you get wrong?',
    ],
  },

  {
    id: 'obs-stairs', cat: 'observe', noTraining: true, title: 'Stair Count', mins: 1,
    freq: 'Every flight of stairs',
    summary: 'Give it 2–3 weeks before it fully clicks.',
    steps: ['After going up or down stairs: recall how many steps there were.'],
  },
  {
    id: 'obs-recall', cat: 'bedtime', title: 'Evening Recall — Your Morning', mins: 4, kind: 'recall',
    freq: 'Once, in the evening. Pick a different 3-min window each day',
    summary: 'Recall what you did first thing that morning (or after breakfast) — what you saw, what you did.',
    steps: [
      'Pick a different 3-minute window from this morning than yesterday (first thing up, or just after breakfast).',
      { t: 'Close your eyes and recall as much as you can: what you saw, what you did, in order. Count the details.', secs: 210 },
      'Now write it down in the Recall log — the detail count is how you track progress.',
    ],
  },

  // ---------- Concentration ----------
  {
    id: 'conc-multiply', cat: 'concentrate', noTraining: true, title: 'Mental Multiplication', mins: 5,
    freq: 'Once a day, different numbers each time',
    summary: 'Multiply two 2-digit numbers in your head until sure of the answer; then two 3-digit numbers.',
    steps: ['Multiply two 2-digit numbers in your head (e.g. 26 × 39) until sure of the answer.', 'Then two 3-digit numbers (e.g. 413 × 765).'],
  },
  {
    id: 'conc-poem', cat: 'concentrate', noTraining: true, title: 'Memorize Four Lines', mins: 5,
    freq: 'Once a day',
    summary: 'Memorize 4 lines of any poem.',
    steps: ['Memorize 4 lines of any poem. Recite them from memory.'],
  },
  {
    id: 'conc-stranger', cat: 'concentrate', noTraining: true, title: 'The Stranger\'s Face', mins: 2,
    freq: 'As opportunities arise — the advanced one, builds toward attunement',
    summary: 'Passing a stranger, hold their face in your mind\'s eye.',
    steps: ["Passing a stranger: look closely at their face a moment, look away, hold that face in your mind's eye for 1+ minute, study its expression.", 'Ask what they seem to be feeling. As taught, with practice you may sense the dominant feeling behind the face. Note it lightly and let it go; it is a sense, not a fact about them.'],
  },

  // ---------- Meditation ----------
  // Attention practices: they stay hidden until "I've learned this" is switched on in the Attention lesson (Info). Single-Object Hold and Single-Task Moment are Concentration practices and are always open.
  {
    id: 'attn-hold', cat: 'concentrate', noTraining: true, title: 'Single-Object Hold', mins: 3,
    freq: 'Daily, a little longer as it gets easier',
    summary: 'Hold your attention on one small thing. Every return from a wander is one rep.',
    steps: [
      'Pick one small detail: a mark on the wall, the tip of a pen, a leaf, a candle flame. Settle your eyes on it.',
      { t: 'Keep your attention on it. Blink normally. When the mind wanders, notice it and bring it back. That return is the training.', pick: [120, 300, 600], secs: 180, max: 600 },
      'Look away, take a deep breath, relax.',
    ],
  },
  {
    id: 'attn-obstacle', cat: 'attention', noTraining: true, gate: 'attn', title: 'Obstacle Path', mins: 3,
    freq: 'A few times a week',
    summary: 'Move through a cluttered space, or walk a trail or through woods, while keeping track of several things at once.',
    caution: 'Move slowly and keep your footing. Clear anything you could trip on, and take care on uneven ground.',
    steps: [
      'Choose a room or yard with several things in it (furniture, plants, people), or better, a trail or a stretch of woods with roots, rocks, branches and changing ground.',
      { t: 'Walk slowly through it. Keep track of where each thing is, which are close, which move, and what you can hear around you. Stay relaxed, and let your attention stay wide.', secs: 60 },
      'Stop and close your eyes. Recall where each one was, then open your eyes and check.',
    ],
  },
  {
    id: 'attn-zoom', cat: 'attention', noTraining: true, gate: 'attn', title: 'Zoom Lens 1', mins: 3,
    freq: 'Daily',
    summary: 'Lock onto one object, open out to the whole scene while still knowing it is there, then pull back in.',
    steps: [
      'Pick an object a few steps away and look at it. Sit or stand comfortably.',
      { t: 'Narrow: lock on the object. Let everything else blur. Notice its edges, color and texture.', secs: 20 },
      { t: 'Widen: keep the object in view, and let your attention open to the whole scene around it, including the edges of your vision. Hold both.', secs: 20 },
      { t: 'Narrow again, tight on the object.', secs: 20 },
      { t: 'Widen again. Notice how smoothly you can move between the two.', secs: 20 },
      'Rest your gaze, take a deep breath.',
    ],
  },
  {
    id: 'attn-scene', cat: 'attention', noTraining: true, gate: 'attn', title: 'Zoom Lens 2', mins: 3,
    freq: 'Daily, in any room or outdoors',
    summary: 'Take the big picture, zoom into one detail, then widen again while holding both.',
    steps: [
      { t: 'Take in the whole scene: the layout, where things are, how far apart, what is moving. Do not pick anything out.', secs: 30 },
      { t: 'Choose one detail and zoom into it fully.', secs: 30 },
      { t: 'Widen again, holding the detail and the larger scene together.', secs: 30 },
      'Close your eyes and name what you can recall of both the detail and the layout. Open your eyes and check.',
    ],
  },
  {
    id: 'attn-switch', cat: 'attention', noTraining: true, gate: 'attn', title: 'Narrow and Open Switch', mins: 4,
    freq: 'Daily',
    summary: 'Alternate narrow focus on one thing with open awareness of whatever arises.',
    steps: [
      'Sit comfortably, eyes closed or softly open.',
      { t: 'Narrow: follow one breath sensation, only that.', secs: 60 },
      { t: 'Open: let attention rest on whatever arises (sounds, sensations, thoughts) without selecting anything.', secs: 60 },
      { t: 'Narrow again: back to the single breath sensation.', secs: 60 },
      { t: 'Open again, as wide as it goes.', secs: 60 },
      'Take a deep breath and relax.',
    ],
  },
  {
    id: 'attn-space', cat: 'spatial', hidden: true, title: 'Space Sense', mins: 3,
    freq: 'Daily, short is fine',
    summary: 'Train your sense of where things and your body are in space.',
    steps: [
      'Look around the room and note where three objects are, and how far they are from you.',
      { t: 'Close your eyes. Point toward each one, one at a time, and say its distance. Then turn slowly and point again.', open: true },
      'Open your eyes and check how close you were.',
      { t: 'Optional: stand on one leg and feel your body in the space around you.', secs: 30 },
    ],
  },

  {
    id: 'attn-route', cat: 'spatial', hidden: true, title: 'Landmark Route', mins: 5,
    freq: 'A few times a week, on any familiar route',
    summary: 'Walk a route you know without GPS, noting landmarks, distances and turns.',
    steps: [
      'Pick a short route you know well, on foot, and leave the navigation off.',
      { t: 'As you go, name the landmarks, roughly how far apart they are, and each turn. Keep track of where you are in relation to where you started.', open: true },
      'At the end, point toward where you began, then check against a map if you like.',
    ],
  },
  {
    id: 'attn-rotate', cat: 'attention', noTraining: true, gate: 'attn', title: 'Mental Rotation', mins: 2,
    freq: 'Daily or every few days',
    summary: 'Look at an object, close your eyes, and turn it in your mind.',
    steps: [
      'Pick a small object with a distinct shape and a few features you can tell apart.',
      { t: 'Study it from where you sit.', secs: 20 },
      { t: 'Close your eyes and see it. Turn it slowly: a quarter turn, upside down, from behind.', secs: 60 },
      'Open your eyes and compare. What did you get right, and what did you miss?',
    ],
  },
  {
    id: 'attn-body', cat: 'spatial', hidden: true, title: 'Body in Space', mins: 3,
    freq: 'Daily, short is fine',
    summary: 'Slow balance and movement to feel where your body is in the space around you.',
    steps: [
      'Stand with room around you and something to catch if you wobble.',
      { t: 'Stand on one leg. Feel your foot and ankle working, and where your body is in the room.', secs: 30 },
      { t: 'Switch legs.', secs: 30 },
      { t: 'Move slowly: raise an arm, turn, shift your weight. Feel every position without looking.', secs: 60 },
    ],
  },
  {
    id: 'attn-views', cat: 'attention', noTraining: true, gate: 'attn', title: 'Two Viewpoints', mins: 6,
    freq: 'Once or twice a week',
    summary: 'Draw a scene from where you are, then work out and draw it from somewhere else.',
    steps: [
      'Sketch a simple scene or object from where you sit. It does not have to look good.',
      { t: 'Sketch it again from a different viewpoint: from the side, from above or from behind. Work out what you would see.', open: true },
      'If you can, move to the new viewpoint and check.',
    ],
  },
  {
    id: 'attn-cue', cat: 'spatial', hidden: true, title: 'Cue Then Widen', mins: 2,
    freq: 'During any ordinary action',
    summary: 'Start on one exact cue while moving, then open to the whole environment, then back.',
    steps: [
      'Pick an action you are doing anyway: walking, washing up, drinking tea.',
      { t: 'Narrow: put your whole attention on one cue, like your foot touching the ground or your hand on the cup.', secs: 30 },
      { t: 'Widen: keep the cue, and let the rest of the room and your body come in.', secs: 30 },
      { t: 'Narrow back to the cue.', secs: 30 },
    ],
  },
  {
    id: 'conc-grid', cat: 'concentrate', noTraining: true, title: 'Grid Hold', mins: 3,
    freq: 'Daily or every few days',
    summary: 'Hold your attention on a grid of numbers without letting it drift.',
    steps: [
      'Print or draw a grid of random numbers or letters, 10 by 10 works.',
      { t: 'Find 1, 2, 3 and so on in order, or hold on one cell at a time. When your attention slips off the grid, bring it back.', pick: [120, 300], secs: 120, max: 300 },
      'Note how far you got.',
    ],
  },
  {
    id: 'conc-block', cat: 'concentrate', noTraining: true, title: 'Focus Block', mins: 10,
    freq: 'Daily, a little longer as it gets easier',
    summary: 'One task, nothing else, for a set block. Build from 10 toward 25 minutes.',
    steps: [
      'Choose one task and put your phone in another room. Close everything else.',
      { t: 'Work on only that task. Start with 10 minutes and lengthen toward 25 as it gets easier.', pick: [600, 900, 1500], secs: 600, max: 1500 },
      'Take a short break. Stand, stretch, breathe.',
    ],
  },
  {
    id: 'med-sit', cat: 'meditate', title: 'Daily Sit — your choice', mins: 5,
    freq: 'At least once a day',
    summary: 'Your baseline: sit and meditate in any way you like, even if only briefly.',
    steps: [
      'Find a quiet spot. Sit in a straight-back chair, back straight, head erect, eyes closed — or sit however is comfortable for you.',
      { t: 'Meditate in whatever way you choose: breath, a mantra, stillness, or one of the practices. Pick your length, then start.', pick: [300], secs: 300, max: 600, step: 60 },
      'Rise, deep breath, relax.',
    ],
  },
  {
    id: 'med-color', cat: 'meditate', title: 'Meditation 1 — Color', mins: 3,
    freq: 'Daily', summary: 'Blue, pink, white — one minute each, one sitting.',
    steps: [
      BODY,
      { t: 'Picture one shade of blue, filling the whole room around you.', secs: 60 },
      { t: 'Switch to pink.', secs: 60 },
      { t: 'Switch to pure white (fresh-snow bright).', secs: 60 },
      'Rise, deep breath, relax.',
    ],
  },
  {
    id: 'med-sound', cat: 'meditate', title: 'Meditation 2 — Sound', mins: 3,
    freq: 'Daily', summary: 'Violin, horn/sax, piano — one minute each, one sitting.',
    steps: [
      BODY,
      { t: 'Hear a violin playing something familiar. If other instruments swell in, filter back to just the violin.', secs: 60 },
      { t: 'Hear a horn or saxophone (one or the other).', secs: 60 },
      { t: 'Hear a piano playing something familiar — hardest: chords, not single notes.', secs: 60 },
      'Rise, deep breath, relax.',
    ],
  },
  {
    id: 'med-cloud', cat: 'meditate', title: 'Meditation 3 — The Pink Cloud', mins: 1,
    freq: 'Daily, separate sitting', summary: 'Wrapped in a pink cloud for one minute.',
    steps: [
      BODY,
      { t: 'See yourself wrapped in a pink cloud extending 6–10 inches out from you in every direction (front, back, sides, above, below). Hold the full image.', secs: 60 },
      'Dismiss it, rise, deep breath, relax.',
    ],
  },

  // ---------- Emotional control ----------
  {
    // The id stays 'emo-matches' (it began as the Matchbox Drill) so saved settings and tallies carry over.
    id: 'emo-matches', cat: 'emotion', info: true, noTraining: true, title: 'Patience: Put a Small Pile in Order', mins: 10,
    freq: 'Once or more daily until mastered',
    summary: 'Put a jumble in order, slowly and calmly, one piece at a time. Patience and a steady mind under a fiddly task.',
    steps: [
      `Choose your pile:
• A deck of cards: shuffle, then put it in order by suit and number.
• Coins: mix a handful, sort into piles, and stack each pile with every head facing the same way.
• Buttons, screws, or beads: sort by type into small dishes.
• The original: dump a box of matches, mix them well, and put them all back with every head pointing the same way. Handle matches carefully and away from any flame. Toothpicks or bobby pins work too.
• Untangle a necklace, earbud cord, or string of lights. Pulling harder only tightens it, so ease it out.
• Pair up a pile of mismatched socks.`,
      'Dump it out and mix it thoroughly. You can scramble it again and repeat.',
      'Put it in order slowly. Handle one item at a time, with a calm face. When you feel the urge to hurry, or irritation, or boredom, notice it, take a breath, and carry on gently. That is the exercise. Take as long as you need.',
      'Finish where you can. Look at what you put in order, and notice how it feels to see it clear.',
    ],
  },
  {
    id: 'emo-order', cat: 'emotion', info: true, noTraining: true, title: 'Patience: Put a Space in Order', mins: 15,
    freq: 'Once or more daily until mastered',
    summary: 'Bigger jobs, done in pieces, for a calm mind and a clean, livable home.',
    steps: [
      `Choose a space:
• Pantry or canned goods: group by type, labels facing out.
• Spice rack: alphabetical, or by how you use them.
• Bookshelf: by author, subject, or size.
• Movies, music, or games: alphabetical.
• A junk drawer, a closet shelf, or a toolbox.`,
      'Start with one shelf or one section and take everything out of just that part.',
      'Put it back in order slowly, one item at a time, with a calm face. When you feel the urge to hurry, or irritation, or boredom, notice it, take a breath, and carry on gently. That is the exercise.',
      'A big space can be done in pieces, and you can come back to it later. There is no need to feel bad about leaving it half done. Look at what you put in order, and notice how it feels to see it clear.',
    ],
  },
  {
    id: 'emo-tv', cat: 'emotion', noTraining: true, title: 'Choose What You Attend To', mins: 10,
    freq: 'Once or more daily until mastered', summary: 'Train what you attend to.',
    steps: [
      'Sit with the TV on at normal volume and do not look at the picture at all.',
      'Once mastered, also try to tune out understanding the audio.',
      'No TV? Radio: warm up by tuning OUT everything except the radio, then narrow to just one instrument (violin/clarinet) through a 3-minute stretch.',
    ],
  },
  {
    id: 'funk-reset', cat: 'emotion', hidden: true, title: 'Funk Reset', mins: 1,
    freq: 'Any time you are stuck in a negative loop',
    summary: 'A short sequence to step out of a funk: breath, attention, thinking, then music. Do all of it before you judge it.',
    steps: [
      { t: 'Slow your body first with a square breath: in 4, hold 4, out 4, hold 4, all four sides the same length. Start at 3 if 4 is a stretch. It may feel like nothing at first. Do all four rounds anyway.', breath: { phases: [['Breathe in', 4], ['Hold', 4], ['Out slowly', 4], ['Hold', 4]], reps: 4 } },
      'Look around. Name 5 things you can see, 4 you can hear, 3 you can feel. Go slowly.',
      'Is this feeling yours, or picked up from someone or something nearby? If it is borrowed, step out of it like stepping out of a room.',
      'Redirect, do not fight it. Choose one small thing to do right now: stand up, drink water, step outside, walk into another room.',
      'Fear check: What is there to fear? I am secure. I have faced this before. Use your mind, not your will.',
      { t: 'Put on one of your songs and let it do its work.', music: true },
      'If it still feels flat, that is normal. Try another tool from the Change your state button, or come back to this one later.',
    ],
  },
  {
    id: 'emo-slow', cat: 'emotion', remindOnly: true, title: 'Deliberate Slowing-Down', mins: 0,
    freq: 'A full month, all day', summary: 'Let others go first — with a genuine smile.',
    steps: ['For a full month: let others go first — walking, driving (yield right of way, drive under the limit), entering/leaving rooms, planes, trains. Do it all with a genuine smile and a cheerful attitude.'],
  },
  {
    id: 'emo-fast', cat: 'emotion', remindOnly: true, title: 'Frequency Fast', mins: 0,
    freq: 'Any stretch you choose, a day or a week', summary: 'Stay off fear-based input. Notice the pull, and give the freed-up energy somewhere to go.',
    steps: [
      'Fast from news, fear-based feeds, doom-scrolling, gossip and complaint conversations. Spoken fear feeds the same thought-forms as watched fear.',
      'When you feel the pull (the hand reaching for the phone, the mouth starting "did you hear about..."), pause and ask: "Is this mine? Do I choose to give my energy to this?"',
      'Put the freed-up time into anything creative, even trivially. The fast is complete only when the energy has somewhere to go. An empty fast gets refilled by the same fear.',
    ],
  },

  // ---------- Psychic centers ----------
  {
    id: 'c-heart', cat: 'centers', title: '1. Heart Center', mins: 15,
    freq: 'Once a week, never more than twice a week at first',
    summary: 'The first and most important exercise. Start here and give it sustained effort.',
    steps: [
      'Sit erect in a straight-backed chair in a dimly lit room. Shut out sound; prevent interruption.',
      'Close your eyes and turn your attention inward toward your heart.',
      "In imagination, enter your heart. You're on a plain before a hill; on top is a temple — the temple of the heart. Hold this.",
      'Climb the hill, mount the steps, enter the center doorway. Observe the temple — well kept and swept, or covered with dust?',
      'Walk into the dim interior toward the central adytum. A flickering light grows brighter as you approach, swelling and receding rhythmically in a bowl-like depression.',
      'Gaze on the flame. Send it your energies. See it grow bright and strong, reaching up to touch the ceiling forty feet above. Breathe deeply and realize your heart center is coming alive.',
      { t: 'Open your eyes and sit in quiet meditation before rising.', secs: 300 },
    ],
  },
  {
    id: 'c-pituitary', cat: 'centers', title: '2. Pituitary (Lower Head Center)', mins: 8, needs: ['heart'],
    freq: 'Can run alongside continued heart work',
    summary: 'First noticeable effect: sharper observation, faster thinking, better memory.',
    steps: [
      'Mantram: sit erect. Sound RA-MA seven times, pause, seven times, pause, nine times. Inhale quick and deep; carry the sound on the prolonged exhalation. Spine erect, muscular "corset" taut.',
      'Color + mantram: visualize a bright yellow slightly tinged with green — like sunlight through leaves — while sounding RA-RA-RA, MA-MA-MA. RA-A-A — MA-A-A.',
      'Energy flow: visualize the same sunlight-yellow, directing it to the pituitary (front of the head, between your eyes). Silently intone three times: RA-A-A, MA-A-A.',
    ],
  },
  {
    id: 'c-pineal', cat: 'centers', title: '3. Pineal (Higher Head Center)', mins: 6, needs: ['heart', 'pituitary'],
    freq: 'Twice a day (morning and before bed) for several weeks',
    summary: 'Audible / silent / audible AUM with a violet-pink haze around the gland.',
    steps: [
      'Sit erect. Focus on the pineal gland — center of the head at ear level, just behind and slightly below the pituitary. Visualize violet shading toward pink, enveloping it in a haze.',
      'Sound AUM seven times, audibly, in full voice (soft but audible is fine). End each in a sustained hum; locate the vibration in the pineal gland.',
      'Pause. Repeat AUM seven times — silently. The silent series is actually more effective, so give it real attention.',
      'Pause. Repeat AUM seven times, audibly.',
      'Feel the hum massage the gland until it responds with a similar vibration, as if glowing violet-pink.',
    ],
  },
  {
    id: 'c-throat', cat: 'centers', title: '4. Throat Center', mins: 5, needs: ['heart', 'pituitary', 'pineal'],
    freq: 'Once a day, starting ~2 weeks after beginning the pineal exercise; then do the two together',
    summary: 'Orange light at the thyroid with the chant THO-THO-RAMA-THO.',
    steps: [
      'Sit erect. The throat center is just forward of the spine, behind the Adam\'s apple (thyroid).',
      'Visualize the thyroid surrounded by bright orange light.',
      'Intone in full voice: THO-THO-RAMA-THO. THO on F-sharp above middle C, RAMA on A-natural above middle C. Repeat the full chant five times.',
    ],
  },
  {
    id: 'c-attune', cat: 'centers', title: '5. Combined Attunement', mins: 10, needs: ['heart', 'pituitary', 'pineal', 'throat'],
    freq: 'Only once the individual centers show results',
    summary: 'Heart → Throat → Head. Powerful; build up to it gradually.',
    steps: [
      'Part One — Heart, then higher head. Head erect, back straight. Focus on the heart center bathed in a pink cloud.',
      { t: 'Inhale 7 · hold 10 (move attention to the higher head center, taking the pink cloud) · exhale 7 · hold out 10 (cloud expands to embrace your whole body).', breath: { phases: [['Inhale', 7], ['Hold in', 10], ['Exhale', 7], ['Hold out', 10]], reps: 1 } },
      'Part Two — Throat. Focus on the throat center bathed in blue light, like clear blue sky.',
      { t: 'Inhale 7 · count 10 as the blue cloud envelops the higher head center · exhale 7 · hold out 10 as the blue cloud enlarges to your whole body.', breath: { phases: [['Inhale', 7], ['Hold in', 10], ['Exhale', 7], ['Hold out', 10]], reps: 1 } },
      'Part Three — Pituitary + pineal. Focus in the lower head center; see a brilliant white light surround the pituitary as you inhale.',
      { t: 'Hold 10: white cloud embraces pituitary and pineal, aligning them. Exhale 7, keeping the head center in the light. Hold out 10: the light expands around your whole body, 2–3 feet out.', breath: { phases: [['Inhale', 7], ['Hold in', 10], ['Exhale', 7], ['Hold out', 10]], reps: 1 } },
      'Sound AUM three times, then arise and put all thought of the exercise out of your mind immediately.',
    ],
  },

  // ---------- Projection ----------
  {
    id: 'p-mental', cat: 'project', info: true, title: 'Mental Projection', mins: 15, kind: 'review',
    freq: 'Build up gradually',
    summary: 'Your mind travels to a familiar place while awareness stays anchored. Stay a spectator, never drift into dream.',
    steps: [
      'Prepare: bathe (shower is better), including mouth and teeth. Light garment. Quiet place. Comfortable chair with head support, or lie flat (armchair is better — lying makes sleep easy).',
      { t: 'Seven deep breaths, rhythmic: in 4, hold 11, out 7. Even and unhurried.', breath: { phases: [['Inhale', 4], ['Hold', 11], ['Exhale', 7]], reps: 7 } },
      'Close your eyes and visualize a place you know well in detail — shut out your real surroundings and build every detail: colors, lighting, arrangement, sounds, smells. See yourself there.',
      'Look around: furniture, any people and how they are dressed, what is said. Stay awake — do not slide into dream.',
      { t: 'Observe.', secs: 600 },
      'Bring your attention back to your body. Open your eyes — then write down the exact hour and everything you observed. Try, then test; try again.',
    ],
  },
  {
    id: 'p-etheric', cat: 'project', info: true, title: 'Etheric Projection', mins: 20, kind: 'review',
    freq: 'Serious experiment, not a game',
    summary: 'Resonance of OM lifted toward the ceiling while lying down.',
    steps: [
      'Prepare: calm and serene. Bathe, holding the thought that fears and worries wash away. Clean garment; lie on a bed.',
      'Support habits: live peacefully day to day; meditate daily, raising your vibratory level; sincere silent intention to purify your nature.',
      'Close your eyes and raise consciousness to a point at the top of your head. Awareness of bed, coverlet, sounds, odors, air currents fades; concentrate at or above the crown.',
      'Intone softly and rhythmically "OM" seven times on D natural above middle C.',
      'Repeat the intonation silently seven times. You should become aware of a resonance inside your head.',
      'Concentrate on the core of the resonance and let it lift slowly toward the ceiling — the resonance ascends, not your body.',
      "Open your eyes. Don't be alarmed to find yourself above the bed. Don't feel shock seeing your body. Having shown you can, return immediately — by wishing to, or visualizing lying back into your body.",
    ],
  },
];

export const CHAKRAS = [
  { n: 1, name: 'Earth', sk: 'Muladhara (Root)', seed: 'LAM', loc: 'Base of the spine', block: 'Fear', gland: 'Adrenal glands', note: 'Reproductive/root center — activating, creative energy; comfort, food, feeling safe.' },
  { n: 2, name: 'Water', sk: 'Svadhisthana (Sacral)', seed: 'VAM', loc: 'Sacrum / lower abdomen', block: 'Guilt', gland: 'Gonads', note: 'Consumption, metabolism, homeostasis. If you feel unsafe, energy moves up and out rather than settling here.' },
  { n: 3, name: 'Fire', sk: 'Manipura (Solar Plexus)', seed: 'RAM', loc: 'Stomach / solar plexus', block: 'Shame', gland: 'Pancreas', note: 'The center you overcome with willpower — energy moves up through here rather than staying stuck.' },
  { n: 4, name: 'Air', sk: 'Anahata (Heart)', seed: 'YAM', loc: 'Center of chest', block: 'Grief', gland: 'Thymus', note: 'Where you express your greatest love or truth.' },
  { n: 5, name: 'Sound', sk: 'Vishuddha (Throat)', seed: 'HAM', loc: 'Throat', block: 'Lies', gland: 'Thyroid', note: 'Where you express your greatest understanding.' },
  { n: 6, name: 'Light', sk: 'Ajna (Third Eye)', seed: 'OM (sometimes SHAM)', loc: 'Forehead, between the brows', block: 'Illusion', gland: 'Pineal', note: 'Once energy is moved here it naturally continues upward on its own.' },
  { n: 7, name: 'Thought', sk: 'Sahasrara (Crown)', seed: 'Silence (sometimes OM)', loc: 'Top of the head', block: 'Earthly attachment', gland: 'Pituitary', note: 'If you are worthy enough to receive, this is where energy transcends into gratitude.' },
];

export const CHAKRA_INTRO = 'Chakras ("wheels") are energy transformers: raw life energy takes on the quality of whichever chakra converts it. In the average person the solar plexus is most open, which is why most people are emotionally focused — and why emotional control comes first. These ideas come from a long, shared tradition.';

export const CYCLES = {
  note: 'Work in progress — only the end of the Second Period and the Third Period have come through. Dates are filled in personally.',
  periods: [
    {
      name: 'End of Second Period (partial)',
      intro: 'A very good period for businesses catering to transients — hotels, restaurants, car rentals.',
      good: [],
      bad: ['Planning a change of business or starting a new career', 'Making any permanent change', 'Entering long-lasting contracts or arrangements', 'Borrowing or lending money', 'Starting construction on a building', 'Entering a project requiring substantial investment', 'Speculating in the stock market or gambling'],
    },
    {
      name: 'Third Period',
      intro: 'Calls for discrimination and good judgment. Usually a great inflow of energy — the best time to improve health, build a business, or do anything requiring real energy. Catch: you will be tempted by projects with no real chance, or that take so long you abandon them.',
      good: ['Overcoming obstacles that have blocked progress', 'A strong second effort on problems abandoned for lack of energy', 'Things requiring great energy — iron and steel, electrical machinery, cutlery, sharp instruments, fire', 'Opposing competitors or dealing with people who have been obstacles', 'Women appealing to men for favors, preferment, or aid (especially good)', 'Selling — if it can be put across in one forceful interview, this is the best period'],
      bad: ['Men or women trying to deal with women', 'Arguments and strife in general — the outcome is apt to be bad'],
    },
  ],
};

// Chakra alignment walkthrough. Deliberately ends on its own — it never chains into the Combined Attunement.
EXERCISES.push({
  id: 'c-chakra', cat: 'chakra', title: 'Chakra Alignment Walkthrough', mins: 20,
  freq: 'In a calm theta/alpha state', summary: "Attention in each chakra's area, root to crown, until it feels coherent. Works on its own; it is not part of the attunement.",
  steps: [
    'Focus on the outer body and the space around the body. Let the sense organs become aware of the space around them.',
    'Narrow the focus outward, then move inward — feel the outer body, then the breath. Take all thoughts and let them go, returning to focus.',
    'Precision is not required: get your attention into the general area of each chakra. Attention is the mechanism. Hold it there until that center feels settled, aligned, coherent with the rest of your body — then move up.',
    ...CHAKRAS.map((c) => ({
      t: `${c.n}. ${c.name} — ${c.sk}\nLocation: ${c.loc}.  Seed sound: ${c.seed}.\nBring your attention into this area and hold it until it feels coherent with the rest of your body.${c.n > 1 ? ' Each one takes less effort than the last.' : ''}`,
      open: true,
    })),
    'Focus on the vastness of the quantum realm. Hold the feeling of wholeness. Then let it go — you are finished.',
  ],
});


// Practices drawn from Dolores Cannon's teachings, rewritten in this app's own words.
EXERCISES.push(
  {
    id: 'med-quiet', cat: 'meditate', title: 'Quiet Listening', mins: 5,
    freq: 'Daily if you can',
    summary: 'Be alone in quiet and go within. You are not trying to do anything, only to listen.',
    steps: [
      'Find somewhere quiet where you will not be interrupted. Silence the phone. Sit or lie comfortably and close your eyes.',
      'Let your attention turn inward. When thoughts come, do not argue with them or analyze them. Let them pass, and go back to listening.',
      { t: 'Simply listen. Intuition, pictures, feelings, or a quiet knowing may come, or nothing at all. Both are fine. Pick your length, then start.', pick: [300], secs: 300, max: 600, step: 60 },
      'Come back slowly. Take a deep breath. If anything came up, you can note it in your log.',
    ],
  },
  {
    id: 'energy-direct', cat: 'energy', info: true, title: 'Call the Energy In', mins: 8,
    freq: 'Whenever the body needs it', summary: 'Focus on a part of the body, call energy to it, and let it flow wherever it is needed. Intention and belief direct it.',
    steps: [
      'Lie down or sit comfortably and let your body settle. Breathe slowly and deeply.',
      'Bring your attention to the area that needs help. Rest your hands there if you like.',
      'Call the energy in: picture warm light gathering around you and flowing toward that area. Believe it is happening.',
      { t: 'Let it flow wherever it is needed. The body knows what to repair, so do not direct the details. Keep your attention gently on the area.', pick: [300, 480, 720], secs: 480 },
      'Thank your body. Take a deep breath and come back.',
    ],
  },
  {
    id: 'j-stair', cat: 'journey', info: true, title: 'The Staircase Journey', mins: 30,
    freq: 'When you have quiet time to spare',
    summary: 'Relax deeply, go down a staircase, and let a scene appear. Then ask what you want to know. The only rule is: allow it.',
    steps: [
      'Lie down, close your eyes, and let your breathing slow. Do not worry about doing it right.',
      { t: 'Relax from the top of your head to your toes. Tell each part to let go: face, jaw, neck, shoulders, arms, chest, belly, hips, legs, feet. Take your time. Pick your length.', pick: [120, 240, 360], secs: 240 },
      'Picture the top of a staircase. Count down from 10 to 1, one step per number, and feel yourself going deeper and more relaxed with every step.',
      'At the bottom, step into "the most appropriate time and place" for you right now. It may be a scene, a memory, a feeling, or only a color. Whatever it is, accept it.',
      { t: 'Allow it. Do not analyze, judge, or fix what comes. Just notice what you see, hear, and feel, and let it unfold. Pick your length.', pick: [300, 600, 900], secs: 600 },
      'When you are ready, ask a question you want answered, or ask for what you need to know. Answers may come as pictures, feelings, or a sudden knowing. Wait quietly.',
      'Thank whatever you met. Climb the staircase, counting from 1 to 10. At 10, take a deep breath and open your eyes. Write down what you remember before it fades.',
    ],
  },
  {
    id: 'j-library', cat: 'journey', info: true, title: 'The Library — Book of Your Life', mins: 20,
    freq: 'When you want memories, knowledge, or guidance', summary: 'Walk into a vast library, find the book of your life, and read what you are shown.',
    steps: [
      'Lie down, close your eyes, breathe slowly, and relax your body from head to toe.',
      'Picture a path leading to a door. Walk to it and open it.',
      'Step into a vast library. Look around: the shelves, the light, the quiet.',
      'Find the book of your life. It may call to you. Take it down and open it.',
      { t: 'Read, or let the pages show you. Allow whatever comes: memories, pictures, words, a feeling of knowing. Do not judge it. Pick your length.', pick: [300, 600], secs: 300 },
      'Ask the book a question, and turn to the page that answers it.',
      'Close the book, return it, thank the library, and walk back out the door. Take a deep breath, open your eyes, and write down what you were shown.',
    ],
  },
  {
    id: 'j-guide', cat: 'journey', info: true, title: 'Meet Your Guide or Higher Self', mins: 20,
    freq: 'When you want direct guidance', summary: 'In deep relaxation, meet your guide or Higher Self in a beautiful place and ask questions.',
    steps: [
      'Lie down, close your eyes, breathe slowly, and relax from head to toe.',
      'Picture a beautiful, peaceful place: a garden, a meadow, a shore. Feel the air, hear the sounds, take your time arriving.',
      'Ask to meet your guide or your Higher Self. Wait. They may appear as a person, a light, or only a presence.',
      { t: 'Ask your questions, one at a time, and wait after each. Answers may come as pictures, feelings, or knowing. Accept them without judging. Pick your length.', pick: [300, 600], secs: 300 },
      'Thank them, and ask how to reach them again. Then walk back out of the place, take a deep breath, and open your eyes. Write down what you were told.',
    ],
  },
  {
    id: 'live-vibe', cat: 'emotion', noTraining: true, title: 'Raise Your Vibration', mins: 3,
    freq: 'Every day, a few times', summary: 'Vibration rises through what you think, feel, and do. Love and gratitude raise it. Fear lowers it.',
    steps: [
      'Think of three things you are grateful for. Feel each one, not only name it.',
      'Is there a fear running in the background? Name it, and then choose not to stay in it.',
      'Do one thing now that comes from love or kindness: a message, a thank-you, a small favor.',
      'Picture yourself filling with light, then the room, then the whole world. Hold it for a few breaths.',
    ],
  },
);

// Color and Sound as ONE practice (the two originals stay available but hidden). The Pink Cloud stays its own exercise.
{
  const [color, sound, cloud] = ['med-color', 'med-sound', 'med-cloud'].map((id) => EXERCISES.find((e) => e.id === id));
  [color, sound].forEach((e) => { e.hidden = true; });
  cloud.title = 'The Pink Cloud'; cloud.freq = 'Daily'; cloud.summary = 'Wrapped in a pink cloud, held steady.';
  cloud.mins = 3; cloud.freq = 'Daily, separate sitting';
  cloud.summary = 'Wrapped in a pink cloud of good will, held steady. When you are ready, send a portion of it to someone else.';
  cloud.caution = "When you send the cloud to someone, don't desire or foresee a specific result. Leave the manifestation to the intelligence of the soul force behind the energy.";
  cloud.steps = [
    BODY,
    { t: 'Create a feeling of love, warmth, and good will in your breast, near your heart. See yourself wrapped in a pink cloud extending 6–10 inches out from you in every direction (front, back, sides, above, below). Hold the full image. Pick your length, 1 to 5 minutes, then start.', pick: [180], secs: 180, max: 300, step: 60 },
    'Optional: the Meditation of Love. Picture clearly a person, group, or entity you wish to help. By an act of will, send a portion of your pink cloud to them. Feel love for them and see the cloud wrap them in a pink aura of protection. Then immediately dismiss all thought of it and regard it as "mission accomplished." Done daily, the sender gains too: a closer rapport with the people they send to, a clearer view of their own blind spots, and a sense of inner strength.',
    'Dismiss it, rise, deep breath, relax.',
  ];
  EXERCISES.push({
    id: 'med-practice', cat: 'meditate', title: 'Color and Sound', mins: 0,
    freq: 'Daily', summary: 'Blue, pink, white, then violin, horn, piano, in one sitting. Your phone vibrates each minute so you can keep your eyes closed.',
    steps: [
      BODY,
      { t: 'COLOR. Start the timer, then picture one shade of blue, filling the whole room around you. Your phone vibrates at one minute: switch to pink. It vibrates again at two minutes: switch to pure white (fresh-snow bright). A third vibration says the three minutes are up.', secs: 180, buzz: 60 },
      { t: 'SOUND. Start the timer, then hear a violin playing something familiar. If other instruments swell in, filter back to just the violin. At the first vibration switch to a horn or saxophone (one or the other). At the second, a piano playing something familiar, the hardest of all: chords, not single notes. The third vibration says the three minutes are up.', secs: 180, buzz: 60 },
      'Rise, deep breath, relax.',
    ],
  });
}

// Practices inspired by Barbara Marciniak, Neville Goddard, Bashar and Esther & Abraham Hicks, written in this app's own words.
EXERCISES.push(
  {
    id: 'emo-whim', cat: 'emotion', remindOnly: true, title: 'Follow the Whim', mins: 0,
    freq: 'All day, a few times', summary: 'Act on small, safe impulses the instant they come. The point is obeying the inner signal, not the result.',
    steps: [
      'Morning setup (30 seconds, eyes open): Today your mind will offer small, irrational impulses: take the longer route, talk to the stranger, open the door with your other hand. Agree now that you will act on at least three of them the moment they arise.',
      'The rule: the impulse must be safe, small, and reversible. If it fails any of those, it is fear or adrenaline, not a whim. It waits.',
      'Act within five seconds. An impulse followed at once strengthens your link to your intuition. One you reason about for ten minutes is already gone. Speed is the whole exercise.',
      'Do not keep score on results. It does not matter whether the whim paid off. The reward is trusting the signal. You are practicing surrender, not control.',
      'Evening check-in: What did it feel like in your body the instant before you obeyed, and the instant after? Write it in your log.',
    ],
  },
  {
    id: 'emo-rampage', cat: 'emotion', remindOnly: true, title: 'Rampage of Appreciation', mins: 4,
    freq: 'Any time, especially when the mood is low', summary: 'Look around and appreciate everything in view, one thing after another, fast and unedited. The point is momentum.',
    steps: [
      'Look around you. You are going to appreciate whatever your eyes land on, out loud or silently, one item after another, without stopping to edit.',
      { t: 'Go: "I love this cup... this light is beautiful... my hands work... this chair holds me..." Keep it moving. The objects do not matter. The momentum of appreciation does. Pick your length.', pick: [180, 300], secs: 180 },
      'Stop and notice how you feel compared with when you started.',
    ],
  },
  {
    id: 'emo-nice', cat: 'emotion', remindOnly: true, title: "Wouldn't It Be Nice If...", mins: 5,
    freq: 'Low days, or when affirmations feel false', summary: 'A gentle game that gets past resistance. List "wouldn\'t it be nice if..." statements. It is too soft for your doubt to argue with.',
    steps: [
      'Get something to write on, or just say them out loud. This is for days when "I am abundant" feels like a lie. "Wouldn\'t it be nice" is too gentle to trigger an argument.',
      { t: 'Finish the sentence again and again: "Wouldn\'t it be nice if... I woke up rested? ...if the call went well? ...if I felt lighter?" Big or small. Do not judge them. Pick your length.', pick: [180, 300, 600], secs: 300 },
      'Read back the ones that gave you a little lift. Notice which way they point.',
    ],
  },
  {
    id: 'med-nowpoint', cat: 'meditate', title: 'The Now-Point Meditation', mins: 10,
    freq: 'Daily or whenever you want to anchor', summary: 'Rest as the point of awareness behind your eyes, and find that the past and future are only thoughts appearing here.',
    steps: [
      { t: 'Sit with your eyes closed and take three slow breaths.', breath: { phases: [['Breathe in', 4], ['Out slowly', 6]], reps: 3 } },
      'Bring your attention to the very center of your head, a point of pure awareness that is the same distance from everything.',
      'From this point you are watching the world. Not through your eyes but from behind them.',
      'Now find the past. Notice it is only a thought appearing in this point. Find the future. That is also only a thought, appearing here.',
      'Say silently: "Only this moment is real. Only from here can anything be changed."',
      { t: 'Rest as the point. When you feel the urge to leave and plan or replay, return to the center. Do not fight the thoughts, just refuse to follow them. You are not the thought, you are the place the thought appears. Pick your length.', pick: [300], secs: 300, max: 600, step: 60 },
      'Take one deep breath and open your eyes. Right away name five physical things you can see. Ground it.',
    ],
  },
  {
    id: 'med-transform', cat: 'meditate', hidden: true, title: 'Breath of Transformation', mins: 8,
    freq: 'Daily or when you want a reset', summary: 'A slow 4-4-8 breath. The intention you hold during the pause is what turns it.',
    steps: [
      'Sit with a straight spine and eyes closed.',
      { t: 'Breathe in through the nose, smooth and full, for 4. Picture drawing in a finer, brighter kind of energy than air. Hold for 4 and feel your whole body lit from inside. Breathe out through the nose for 8, releasing tension, heaviness and yesterday.', breath: { phases: [['Breathe in', 4], ['Hold', 4], ['Out slowly', 8]], reps: 5 } },
      { t: 'Three more rounds. This time, on each out-breath, say silently: "I change my frequency now."', breath: { phases: [['Breathe in', 4], ['Hold', 4], ['Out slowly', 8]], reps: 3 } },
      'Rest in the afterglow with no agenda.',
    ],
  },
  {
    id: 'law-hold', cat: 'concentrate', remindOnly: true, timer: true, title: 'The 17-34-68 Hold', mins: 0,
    freq: 'Any time', summary: 'Hold your attention on one thing: 17 seconds, then 34, then 68. Choose a physical item to stare at, or one pure thought.',
    steps: [
      'Choose what to hold. A physical item is the easier choice because there is a tangible target to look at and come back to: a cup, a candle flame, a leaf, a mark on the wall. Or pick one thought you genuinely like thinking, with no "but": a person, a place, a feeling of thanks.',
      { t: 'Hold it for 17 consistent seconds. When your mind wanders, or a contradicting thought shows up, gently come back. Then go for 34, and then 68.', secs: 17 },
      'Did you hold it the whole time? If not, that is only information. Try again.',
    ],
  },
  {
    id: 'bed-belief', cat: 'bedtime', title: 'The Belief Audit', mins: 15,
    freq: 'Nightly journaling', summary: 'Trace one strong reaction from today back to the belief underneath it, hand the belief back, and choose a new one.',
    steps: [
      'Recall one moment today when you had a strong negative reaction: irritation, dread, offense, worry. One moment only.',
      { t: 'Write the reaction down raw: "I got angry when..." Use the notes box on the last screen, or a notebook.', pick: [180, 300], secs: 180 },
      'Trace downward: "What would someone have to believe to react that way?" Keep answering until you hit a sentence that sounds inherited, something a parent, a teacher, a culture, or an old version of you would say. (Example: anger at a slow driver, then "people who don\'t follow rules endanger everyone", then "I am only safe when the world is predictable.")',
      'Write that belief as one sentence. Read it out loud.',
      'Say: "I release ownership of this belief. It is not mine. I return it to its sender." Then, without forcing, ask: "What would I like to believe instead?" and write the replacement.',
      'Do not try to believe the replacement yet. Awareness is the practice. The belief shifts on its own once you stop feeding it.',
      { t: 'Free journaling: whatever else wants to come out. Take the time you want. Pick your length.', pick: [300, 600, 900], secs: 600 },
    ],
  },
  {
    id: 'bed-revision', cat: 'bedtime', title: 'Revision — Rewrite the Day', mins: 10,
    freq: 'Nightly, in bed, before SATS', summary: 'Run the day backward, find the scenes that went wrong, and replay each the way you wish it had gone.',
    steps: [
      'Lie down. Run the day backward lightly, from last night to this morning, like scanning film. Going backward loosens the day\'s hold on you.',
      'Find the scenes that went wrong: the argument, the embarrassment, the rejection, the clumsy moment.',
      { t: 'Take each one in turn and replay it the way you wish it had gone: same people, same setting, but the version where you said the thing, where it went well, where you felt proud or at peace. First person, with feeling, every time. An argument becomes a warm reconciliation. A rejection becomes a gracious yes. Loop each until it feels like what happened. Pick your length.', pick: [300, 600], secs: 600 },
      'Close with: "I have revised the day, and the day is revised."',
      'If you are doing SATS too, roll straight into it now.',
    ],
  },
  {
    id: 'bed-sats', cat: 'bedtime', title: 'SATS — The Scene That Proves It', mins: 20,
    freq: 'Nightly, in bed', summary: 'Drift toward sleep inside one short scene that could only be happening if your wish were already real.',
    steps: [
      'Before lying down, choose ONE desire. Then invent ONE short scene, under 10 seconds, that could only happen if it were already real: handing over the signed contract, a friend hugging you and saying "I\'m so happy for you", the keys to the new place in your pocket. It must imply the end, not show the process.',
      'Lie down and let your body go heavy. Drift toward the drowsy border, the half-awake state just before sleep. The technique works there.',
      'In the drowse, bring up the scene. Not as a spectator: first person. Your hands, your voice, your friend\'s arms around you.',
      { t: 'Loop it slowly, over and over. Each pass add one sense: warmth, sound, texture, the smell of the room. At some point the scene stops feeling like a plan and starts feeling like a memory. That shift is the whole technique. Do not chase it. Loop until it happens or until sleep takes you mid-scene. Pick your length.', pick: [600, 900, 1200], secs: 900 },
      'Fall asleep inside the scene. Do not break it open to check progress. Once you have taken on the feeling of the wish fulfilled, do nothing to disturb it.',
    ],
  },
);

// Neville Goddard-inspired practice, in this app's own words.
EXERCISES.push({
  id: 'med-iam', cat: 'meditate', hidden: true, title: 'The "I AM" Meditation', mins: 0,
  freq: 'Whenever you want to reset who you are being', summary: 'Notice that "stressed, broke, shy" are states you are wearing, not the wearer. Then put on the state you choose.',
  steps: [
    'Sit or lie down, eyes closed, and let your breathing slow.',
    'Notice every "I am" you carry: I am stressed, I am broke, I am shy. Each is a state being worn, not the one wearing it. Let each one go, one at a time.',
    'Rest as the wearer, the plain awareness underneath. Just "I am", with nothing attached.',
    'Choose the state you want, and put it on: "I am calm." "I am secure." "I am loved." Say it silently with feeling, as if it is simply true.',
    { t: 'Stay in it. Let the feeling fill you. When doubt speaks, do not argue, just stay. Pick your length.', pick: [180, 300, 600], secs: 300 },
    'Open your eyes. Carry the state into the next thing you do.',
  ],
});

// A specific log form for each practice, so the notes at the end have direction.
const LOGS = {
  'emo-whim': [{ label: 'Whims I acted on today', ph: 'I took the longer route...' }, { label: 'In my body, just before I obeyed', ph: '' }, { label: 'In my body, just after', ph: '' }],
  'emo-rampage': [{ label: 'What I appreciated', ph: 'This cup, this light...' }, { label: 'How I feel now compared with before', ph: '' }],
  'emo-nice': [{ label: "The \"wouldn't it be nice if...\" ones that lifted me", ph: '' }],
  'med-nowpoint': [{ label: 'What I noticed resting as the point', ph: '' }, { label: 'What pulled me away', ph: '' }],
  'med-transform': [{ label: 'The intention I held in the pause', ph: '' }, { label: 'How I feel in the afterglow', ph: '' }],
  'med-iam': [{ label: 'The "I am" states I took off', ph: 'I am stressed...' }, { label: 'The state I put on, and how it felt', ph: 'I am calm...' }],
  'law-hold': [{ label: 'The thought I held', ph: '' }, { label: 'Did a contradicting thought show up?', ph: '' }],
  'j-stair': [{ label: 'What I saw or felt', ph: '' }, { label: 'The answer or message I received', ph: '' }],
  'j-library': [{ label: 'What the book showed me', ph: '' }, { label: 'My question, and the answer', ph: '' }],
  'j-guide': [{ label: 'Who or what I met', ph: '' }, { label: 'What I asked, and what I was told', ph: '' }],
  'bed-belief': [{ label: 'The reaction', ph: 'I got angry when...' }, { label: 'What someone would have to believe to react that way', ph: '' }, { label: 'The inherited belief, in one sentence', ph: '' }, { label: 'What I would like to believe instead', ph: '' }, { label: 'Anything else on my mind', ph: '' }],
  'bed-revision': [{ label: 'The scene I revised', ph: '' }, { label: 'How I replayed it', ph: '' }, { label: 'How it felt', ph: '' }],
  'bed-sats': [{ label: 'My one desire', ph: '' }, { label: 'My scene (under 10 seconds)', ph: 'My friend hugs me and says...' }, { label: 'What I added this time (a sound, a texture, a smell)', ph: '' }],
};
EXERCISES.forEach((e) => { if (LOGS[e.id]) e.log = LOGS[e.id]; });


// The advanced teachings a store build sells. Each package is one $1 purchase in Google Play; EVERYTHING_ID ($4.99) opens all of them,
// including any package added later. To add a teaching: put it in a package (or add a package,
// then create its product in Play Console). Basic teachings are simply left out of every package and stay free.
export const EVERYTHING_ID = 'advanced_unlock';
export const PACKAGES = [
  { pid: 'pkg_chakra', name: 'Chakra treatment', desc: 'The chakra alignment walkthrough. The chakra reference and its teaching stay free.', cats: ['chakra'], learn: [] },
  { pid: 'pkg_assessment', name: 'The CIA assessment of the Gateway Experience (GWE)', desc: 'The 1983 US Army assessment of the Gateway Process, released through the CIA: how a session runs, the focus levels and tools, the model of consciousness and energy, and the phased path it recommends. Sold separately and not part of Everything.', learn: ['assessment'], price: '$4.99', extra: true },
  { pid: 'pkg_attention', name: 'Attention', desc: 'The attention lesson and its six practices: obstacle path, zoom lens 1 and 2, narrow and open switch, mental rotation, two viewpoints.', cats: ['attention'], info: ['attn'] },
  { pid: 'pkg_centers', name: 'Psychic centers', desc: 'The five center meditations: heart, pituitary, pineal, throat, and the combined attunement.', cats: ['centers'] },
  { pid: 'pkg_journeys', name: 'Inner journeys', desc: 'The staircase, the library of your life, and meeting your guide or higher self.', cats: ['journey'] },
  { pid: 'pkg_projection', name: 'Projection', desc: 'Mental and etheric projection.', cats: ['project'] },
  { pid: 'pkg_laws', name: 'Universal laws', desc: 'The universal laws of manifestation: how a steady thought shapes your state.', info: ['laws'] },
  { pid: 'pkg_cycles', name: 'Life cycles', desc: 'Favorable and unfavorable activities by period.', info: ['cycles'] },
];
// The package a lock key belongs to: an exercise id, or 'info:laws' style keys for the reading pages. Unlisted keys are free.
export const pkgFor = (key) => {
  if (String(key).startsWith('cat:')) return PACKAGES.find((k) => (k.learn || []).includes(key.slice(4))); // the teaching blocks are free unless a package lists one in learn
  if (String(key).startsWith('info:')) return PACKAGES.find((k) => (k.info || []).includes(key.slice(5)));
  const e = EXERCISES.find((x) => x.id === key);
  return e ? PACKAGES.find((k) => (k.cats || []).includes(e.cat) || (k.ex || []).includes(e.id)) : undefined;
};

export const exById = Object.fromEntries(EXERCISES.map((e) => [e.id, e]));

// ---------- Reminders ----------
// Every exercise below has its own on/off and times-per-day. The three "out in the world" exercises
// (SPOT) can also fire at random times or when you leave home.
export const REMIND_GROUPS = [
  // pool = exercises a timed reminder can ask for; leave = optional exercises that only fire when you leave home; ids = everything in the category
  { id: 'obs', cat: 'observe', label: 'Observation', pool: ['obs-room'], leave: ['obs-stairs'], both: ['obs-room'], ids: ['obs-room', 'obs-stairs'] },
  { id: 'conc', cat: 'concentrate', label: 'Concentration', pool: ['conc-multiply', 'conc-poem', 'attn-hold', 'conc-grid', 'conc-block', 'law-hold'], leave: ['conc-stranger'], ids: ['conc-multiply', 'conc-poem', 'conc-stranger', 'attn-hold', 'conc-grid', 'conc-block', 'law-hold'] },
  { id: 'attn', cat: 'attention', label: 'Attention', gate: 'attn', pool: ['attn-obstacle', 'attn-zoom', 'attn-scene', 'attn-switch', 'attn-rotate', 'attn-views'], leave: [], ids: ['attn-obstacle', 'attn-zoom', 'attn-scene', 'attn-switch', 'attn-rotate', 'attn-views'] },
  { id: 'med', cat: 'meditate', label: 'Routine meditation', simple: true, pool: ['med-sit', 'med-quiet', 'med-nowpoint', 'energy-direct', 'j-stair', 'j-library', 'j-guide'], leave: [], ids: ['med-sit', 'med-quiet', 'med-nowpoint', 'energy-direct', 'j-stair', 'j-library', 'j-guide'] },
  { id: 'medp', cat: 'meditate', label: 'Meditation practice', pool: ['med-practice', 'med-cloud'], leave: [], ids: ['med-practice', 'med-color', 'med-sound', 'med-cloud'] },
  { id: 'emo', cat: 'emotion', label: 'Emotional control', pool: ['emo-matches', 'emo-order', 'emo-tv', 'live-vibe', 'emo-whim', 'emo-rampage', 'emo-nice', 'emo-slow', 'emo-fast'], leave: [], ids: ['emo-matches', 'emo-order', 'emo-tv', 'live-vibe', 'emo-whim', 'emo-rampage', 'emo-nice', 'emo-slow', 'emo-fast'] },
  { id: 'bed', cat: 'bedtime', label: 'Bedtime', pool: ['obs-recall', 'bed-belief', 'bed-revision', 'bed-sats', 'med-sit', 'med-quiet', 'med-cloud'], leave: [], ids: ['obs-recall', 'bed-belief', 'bed-revision', 'bed-sats'] },
];
export const CAT_LABEL = Object.fromEntries(REMIND_GROUPS.flatMap((g) => g.ids.map((id) => [id, g.label])));
// goal = how many times you want to do it each day. n = reminders per day (they keep coming until the goal is met). timing: 'set' (times you pick) | 'even' (spread through the day) | 'random'.
// choose: when a reminder rings and several exercises are selected, let you pick (otherwise it picks one for you).
export const REMIND_DEFAULTS = {
  day: { s: 7, e: 22 }, // hours random/even reminders and sayings may appear
  leave: { s: 6, e: 24, n: 2 }, // hours "when I leave home" reminders may appear
  cat: {
    obs: { on: true, ex: ['obs-room', 'obs-stairs'], goal: 1, n: 1, timing: 'random', times: [720], choose: true },
    conc: { on: true, ex: ['conc-multiply', 'conc-poem', 'conc-stranger'], goal: 1, n: 1, timing: 'even', times: [780], choose: true },
    attn: { on: false, ex: ['attn-zoom'], goal: 1, n: 1, timing: 'even', times: [600], choose: true },
    med: { on: true, ex: ['med-sit', 'med-quiet', 'energy-direct', 'j-stair', 'j-library', 'j-guide'], goal: 1, n: 1, timing: 'even', times: [480], choose: true },
    medp: { on: true, ex: ['med-practice', 'med-cloud'], goal: 1, n: 1, timing: 'even', times: [1020], choose: true },
    bed: { on: true, ex: ['obs-recall'], goal: 1, n: 1, timing: 'set', times: [1230], choose: true },
    emo: { on: true, ex: ['emo-matches', 'emo-tv'], goal: 1, n: 1, timing: 'random', times: [900], choose: true },
  },
  leaveItems: { 'obs-stairs': true, 'conc-stranger': true }, // fire only when you leave home
  mind: { on: true, n: 5 },
  recall: { on: true, h: 20, m: 30 }, // evening recall (part of Observation): once a night at its own time
  home: null, // { latitude, longitude, r } for "when I leave home"
  playlist: '', // link to the funk playlist
};

// Mindfulness sayings: habit notes, emotional-mastery techniques, supporting habits, and energy do's/don'ts.
export const NUDGES = [
  // mental habit notes
  'Think in an orderly, logical, precise way. Push out a negative thought as soon as you notice it.',
  'Watch for distorted thinking and prejudice. Notice what it does to you.',
  'Adopt a positive attitude. Send a quiet blessing outward — your own projects grow through it.',
  // emotional mastery
  'Feeling a craving? Do not fight it — redirect it. Take the better thing instead of nothing.',
  'Every emotion has a higher and a lower side. Which one is this? Shift toward the higher.',
  'Fear: what is there to fear? You are secure, and you have faced this before. Confidence is stronger than hope: hope waits for something to happen, confidence knows you can handle it. Use your mind, not your will.',
  'Whose emotion is this — yours, or picked up from someone nearby?',
  'A borrowed feeling: step out of it, like stepping out of a room. Keep it only if you want it.',
  'Do not just block a feeling down. Suppression ends in an explosion; redirection does not.',
  // emotions: kept short and separate so each one stands alone
  'You cannot destroy a feeling by fighting it. The more you avoid it, the longer it stays.',
  'A feeling and its thought feed each other. Focus on a thought with the opposite emotion and your body will change to feel what you are thinking about.',
  'Every negative feeling has an opposite. Fear: trust. Anger: relief. Sadness: appreciation.',
  'Think of someone you appreciate. Do not just picture them. Let yourself feel it.',
  'Do not push the bad feeling out. Sink into a good thought until it becomes a daydream and you are there.',
  'Feelings live in the body, thoughts in the mind. Sink fully into a thought and the body\'s feeling fades into the background.',
  'Thoughts bring feelings, and feelings bring more thoughts that feel the same. Which loop are you feeding?',
  'Closer bodies share more emotion. Give yourself some distance if you need it.',
  // supporting habits and do/don't
  'Eat and drink what actually agrees with YOU, not what is habit or custom.',
  'A little mild exercise keeps the blood circulating. Stand up and move.',
  'Clean and refreshed: a bath or shower washes away worries too.',
  'Jealousy, suspicion, fear: lower emotions lower your energy. Notice, and let them go.',
  'Take a breath in, hold, and let it go slowly. Store a little energy.',
  'Picture the sun for a moment. Let its energy flow through you.',
  'Is your motive worthwhile and unselfish? Check it before you begin anything important.',
  // everyday mindfulness
  'Put on one of your songs. Let it do its work.',
  'Feel the ground or surface under you. Look around: where are you? Name 5 things you can see, or small things happening around you.',
  'Take one deep breath. Let your shoulders drop.',
  'Slow down. Let someone go first, and smile about it.',
  'Check your posture: back straight, head erect, jaw loose.',
  'Notice the next thing you do automatically. Do it deliberately.',
  'What is the quality of your breath right now — shallow or deep?',
  'Listen: pick out one single sound and follow it for ten seconds.',
  'Notice something you usually miss about this place.',
  'Put the phone down for one minute. Just be here.',
  'Notice your first activity today — tonight you will recall it.',
  'Rest your attention on your heart for three breaths.',
  'Unclench your jaw and hands. Notice what they were doing.',
  'Whatever you are doing, give it your full attention for one minute.',
  'Notice the space around your body. How far does it feel like it extends?',
  "Act on your highest excitement, as best you can, with no insistence on how it turns out. When you can't act on it any more, take the next highest.",
  "Circumstances do not matter. Your state of being does.",
  "Your state of being shapes your circumstances, not the other way around.",
  "What you believe is what you experience. Change the definition and the experience changes. Which belief is running the day right now?",
  "Excitement is the feeling of your true self. What is the most exciting thing you could do in the next five minutes?",
  "Fear is excitement without breath. Take a breath.",
  "You can't be harmed by what you don't believe in. Is there a belief hurting you today?",
  "Don't wait for permission to be who you are. What would you do today if you didn't need anyone's yes?",
  "Whatever comes to you is the opportunity. What is in front of you right now?",
  "Don't ask the universe. Assume the state of the one who already has it.",
  "Feeling is the secret. It is not the words but a steady feeling of the wish fulfilled that sinks in.",
  "Your free will is real for one thing: choosing which state to occupy. Which one are you choosing right now?",
  "You can't feel lack and create abundance. Which are you feeling?",
  "No emotion lives longer than 90 seconds unless you put more thought behind it. Narrow your focus to what it feels like in your body and watch it until it fades.",
  "You are not stressed, broke, or shy. Those are states you are wearing. You are the one wearing them.",
  "You are a frequency, a halo of consciousness, having a physical experience. Thought is creative. Choose your thoughts the way you choose your words.",
  "Fear is a currency. Notice where you are spending your energy on it.",
  "Your body is a library of light, being rewritten all the time. Treat it as something precious.",
  "Much of what runs your life is inherited belief. Whose script are you reading from today?",
  "Stop the merry-go-round. You can step out of the role your family, culture, or media handed you.",
  "Time is not a line. This moment is the only point of power, and from here the past and the future can both be changed.",
  "Follow the whim: one small, safe, instant impulse today.",
  "Notice one thought pulling you. You are not the thought, you are where it appears.",
  'Allow it. Do not analyze or judge what comes up. Just let it be there.',
  'Make some quiet for yourself today. Go within and simply listen.',
  'Fear lowers your frequency and love raises it. Which one are you feeding?',
  'Say it as already true: "I am…", not "I want…".',
  'Catch one "I want" today and turn it into "I am".',
  'Your body is talking: a craving, an ache, an aversion. Listen instead of overriding it.',
  'Let the past go and stop rehearsing the future. This moment is where you act.',
  'Pure water, fruit, vegetables. What does your body actually ask for today?',
  'Judgment, especially of yourself, poisons the well. Put it down for one minute.',
  'Different paths, same destination. Let someone else walk theirs.',
  'Get outside. A few minutes in nature resets the day.',
  'Your intuition has answers. Ask, then be quiet and listen.',
  'Do what lights you up. It is part of what you came here to do.',
  'Do one kind thing for someone today, however small. You will be the one who benefits.',
  'Pay attention to what you allow yourself to say. Careless words can attract negativity.',
  'You chose to be here, on purpose.',
  'Be willing to learn from every source, even ones you do not trust. Everyone has something useful to teach you.',
  'Picture light filling you, the room, and the whole world, for one breath.',
  'A thought is pulling you away. Return to what you are doing.',
  'Are you rushing? There is nothing here to rush for.',
  'Walk or drive a little slower today. Let someone go ahead of you, and smile as you do.',
  'Soften your eyes. Take in the whole view at once.',
  // concentration and emotional control, moved from Training
  'Stay with what you are doing a little past the point where you want to switch.',
  'Do this one thing with your whole attention. Nothing else, just for a moment.',
  'Read one thing in one stream today, without stopping to check anything else.',
  'Let go of what is behind you. Stop rehearsing what is ahead. Be fully here.',
];

// Sayings that belong to one lesson. They stay out of the reminder pool until the person opens that lesson and presses
// "Add these sayings to my reminders" (or switches the set on in Settings). To add a set: give it an id, the lesson's route, and its sayings;
// put the button on the lesson page with setCard(id). A new category of exercises can use the same switch.
export const SAYING_SETS = [
  { id: 'laws', name: 'Universal laws', route: '#laws', sayings: [
    "Think from the wish fulfilled, not of it. Thinking of it keeps it far away. Thinking from it closes the gap.",
    "Still assuming? Remain in the end.",
  ] },
  { id: 'scale', name: 'The emotional scale', route: '#learn/scale', sayings: [
    "Where are you on the scale right now? Aim one rung up, no more.",
    "Any upward step counts. Anger is progress from rage.",
  ] },
];

// Short text for reminder notifications.
export const PING = {
  'med-quiet': 'Quiet time: be alone in silence. Go within and simply listen.',
  'med-sit': 'Sit and meditate in whatever way you choose. Your daily baseline.',
  'obs-room': 'Walk into a different room. Close your eyes and name everything you recall — depth and accuracy, until you run out.',
  'obs-stairs': 'Next time you take any steps, count them, then recall the number.',
  'conc-multiply': 'Multiply two 2-digit numbers in your head. Then two 3-digit ones.',
  'conc-poem': 'Memorize 4 lines of a poem and recite them.',
  'conc-stranger': 'Next stranger you pass: study the face, look away, hold it in your mind for a minute.',
  'med-practice': 'Meditation practice: color, then sound, three minutes each. Your phone vibrates each minute.',
  'med-color': 'Blue, then pink, then white, one minute each.',
  'med-sound': 'Violin, then horn or sax, then piano, one minute each.',
  'med-cloud': 'Wrapped in a pink cloud, held steady.',
  'emo-matches': 'Patience: pick a small pile (cards, coins, matches) and put it in order slowly and calmly.',
  'emo-order': 'Patience: pick one shelf or drawer and put it in order slowly and calmly.',
  'emo-tv': 'Attention training: TV on, picture off. Tune out the picture.',
  'emo-whim': 'Follow a whim: a small, safe impulse. Act within five seconds.',
  'emo-rampage': 'Rampage of appreciation: look around and appreciate everything in view, quickly.',
  'emo-nice': "Wouldn't it be nice if... Finish the sentence a few times.",
  'med-nowpoint': 'Rest as the point of awareness behind your eyes.',
  'med-transform': 'Slow 4-4-8 breath. Hold the intention during the pause.',
  'law-hold': 'Hold your attention on one item or one pure thought: 17 seconds, then 34, then 68. Tap to open the timer.',
  'obs-recall': 'Evening recall: your first activity this morning, in as much detail as you can, then log it.',
  'med-iam': 'Take off every "I am stressed / broke / shy" and put on the "I AM" of the state you choose.',
  'bed-belief': 'Belief audit: trace one strong reaction from today to the belief under it.',
  'bed-revision': 'Rewrite the day: replay the scenes that went wrong the way you wish.',
  'bed-sats': 'Bedtime: loop your one short scene until it feels like a memory.',
  'emo-slow': 'Slowing-down practice: let others go first, with a genuine smile.',
  'emo-fast': 'Frequency fast: is this fear-based input mine to take in? Pause, then choose.',
};

// Abraham's emotional scale, top to bottom, with the soft prompt for stepping up from each rung.
export const SCALE = [
  { n: 1, name: 'Joy · Appreciation · Empowerment · Freedom · Love' },
  { n: 2, name: 'Passion' },
  { n: 3, name: 'Enthusiasm · Eagerness · Happiness' },
  { n: 4, name: 'Positive expectation · Belief' },
  { n: 5, name: 'Optimism' },
  { n: 6, name: 'Hopefulness' },
  { n: 7, name: 'Contentment' },
  { n: 8, name: 'Boredom' },
  { n: 9, name: 'Pessimism' },
  { n: 10, name: 'Frustration · Irritation · Impatience' },
  { n: 11, name: 'Overwhelm' },
  { n: 12, name: 'Disappointment · Doubt' },
  { n: 13, name: 'Worry' },
  { n: 14, name: 'Blame' },
  { n: 15, name: 'Discouragement' },
  { n: 16, name: 'Anger' },
  { n: 17, name: 'Revenge' },
  { n: 18, name: 'Hatred · Rage' },
  { n: 19, name: 'Jealousy' },
  { n: 20, name: 'Insecurity · Unworthiness' },
  { n: 21, name: 'Guilt' },
  { n: 22, name: 'Fear · Grief · Powerlessness · Depression' },
];
// key = the rung you are on; value = the prompt for reaching the rung above it
export const SCALE_UP = {
  22: 'Is there even one small thing about this that feels yours to own? Ownership, even painful ownership, is more powerful than helplessness.',
  21: 'Who has what you want? Let yourself notice that you want it. Wanting is movement.',
  20: 'Who has what you want? Let yourself notice that you want it. Wanting is movement.',
  19: 'Only step here if it feels like relief, a stronger feeling than helpless hurt. Do not force an emotion you do not have. If it is not true yet, stay where you are.',
  18: 'Put the target down. You do not have to fight it. Just feel the tiredness of carrying it.',
  17: 'Put the target down. You do not have to fight it. Just feel the tiredness of carrying it.',
  16: 'Put the target down. You do not have to fight it. Just feel the tiredness of carrying it.',
  15: 'Where do you wish things had gone differently? Notice the wish. The wish is your guidance, pointing toward what you want.',
  14: 'Worry means you are imagining a future. Good, that means you know you have one.',
  13: 'You expected better. So you believe better exists.',
  12: 'There is too much to fix, which means there is a lot you want.',
  11: 'There is too much to fix, which means there is a lot you want.',
  10: 'It probably won\'t work out... and yet, hasn\'t something worked out before?',
  9: 'So nothing is happening. Rest here. Boredom is the doorway of hope, quieted.',
  8: 'Right here, right now, is anything actually wrong? Just this breath, this room. Isn\'t it... okay?',
  7: 'Since right now is okay, couldn\'t the next hour be? Couldn\'t tomorrow?',
  6: 'You have climbed from the bottom of this before. You know the way now.',
  5: 'Something good is coming. It always, eventually, was.',
  4: 'What would you do first, if it were already arriving?',
  3: 'This is what being alive feels like.',
  2: 'Look at what you climbed through to get here. Appreciate the one who climbed.',
};

// Words people use for how they feel, each with the rung it sits nearest. The Scale exercise uses them to find where you are.
export const FEELINGS = [
  ['joyful', 1], ['loved', 1], ['grateful', 1], ['free', 1], ['appreciative', 1], ['empowered', 1],
  ['passionate', 2], ['fired up', 2], ['excited', 3], ['happy', 3], ['eager', 3], ['enthusiastic', 3],
  ['confident', 4], ['sure it will work', 4], ['optimistic', 5], ['hopeful', 6], ['looking forward', 6],
  ['okay', 7], ['fine', 7], ['calm', 7], ['content', 7], ['peaceful', 7],
  ['bored', 8], ['flat', 8], ['meh', 8], ['restless', 8],
  ['pessimistic', 9], ['cynical', 9], ['it will not work', 9],
  ['annoyed', 10], ['irritated', 10], ['impatient', 10], ['frustrated', 10],
  ['overwhelmed', 11], ['swamped', 11], ['stressed', 11], ['too much', 11],
  ['disappointed', 12], ['doubtful', 12], ['let down', 12], ['unsure', 12],
  ['worried', 13], ['anxious', 13], ['nervous', 13], ['uneasy', 13],
  ['blaming someone', 14], ['resentful', 14], ['their fault', 14],
  ['discouraged', 15], ['defeated', 15], ['sad', 15], ['exhausted', 15], ['stuck', 15], ['what is the point', 15],
  ['angry', 16], ['mad', 16], ['furious', 16],
  ['vengeful', 17], ['spiteful', 17], ['want them to pay', 17],
  ['hateful', 18], ['enraged', 18], ['full of rage', 18],
  ['jealous', 19], ['envious', 19],
  ['insecure', 20], ['unworthy', 20], ['inadequate', 20], ['lonely', 20], ['not good enough', 20],
  ['guilty', 21], ['ashamed', 21], ['regretful', 21],
  ['afraid', 22], ['scared', 22], ['terrified', 22], ['grieving', 22], ['heartbroken', 22], ['depressed', 22], ['powerless', 22], ['trapped', 22], ['numb', 22], ['panicked', 22],
];

// How the step up from a rung can sound in three different parts of life. key = the rung you are on; each moves you to the rung above it.
export const SCALE_STEPS = {
  22: [
    { h: 'At work', t: 'You were let go and everything feels pointless. A step up sounds like: "I should have asked more questions when things changed." That is guilt, and it hurts, but it means some of this was in your hands.' },
    { h: 'With someone', t: 'A friend stopped speaking to you and you feel crushed. A step up: "I should have called back when they reached out." It stings, but it puts a small piece of this back in your control.' },
    { h: 'About yourself', t: 'You feel flat and stuck, with no energy for anything. A step up: "I have not been looking after myself, and I feel bad about that." Guilt sits above helplessness because it admits you could act.' } ],
  21: [
    { h: 'At work', t: 'Guilt says, "I let the team down." A step up: "Other people at my level seem to handle this better than me." Comparing is not pleasant, but it shows you want to do well.' },
    { h: 'With someone', t: '"I was unkind to her" becomes "I am not as good at being close to people as my sister is." You have stopped punishing yourself and started noticing what you want: ease with people.' },
    { h: 'About yourself', t: '"I wasted my savings" becomes "People who save well seem to have it figured out and I do not." That is a more painful-sounding thought, but it points at what you want instead of at what you did wrong.' } ],
  20: [
    { h: 'At work', t: '"I am not good enough for this job" becomes "That colleague gets the recognition I want." It is a sharper feeling, and the sharpness is energy. You have found something you want.' },
    { h: 'With someone', t: '"Nobody would choose me" becomes "Everyone else seems to have someone." The ache is still there, but now it has a direction: you want closeness.' },
    { h: 'About yourself', t: '"I will never look or feel the way I want to" becomes "Other people have the body and the ease I want." Jealousy is a clue to what you want, and that clue is what you needed.' } ],
  19: [
    { h: 'At work', t: 'Envy of a rival becomes "They should not have been picked over me. It was unfair." Anger is a stronger feeling than envy, and it feels like relief because it stops comparing and starts pushing back.' },
    { h: 'With someone', t: '"She has what I want" becomes "She does not deserve it." That is harsher, but it gets you out of feeling small. Only step here if it brings relief, and do not act on it.' },
    { h: 'About yourself', t: 'Jealousy of how easy life looks for others becomes "This whole situation is unfair and I am sick of it." Rage is a stronger feeling than helpless hurt. Let it be a feeling, not a plan.' } ],
  18: [
    { h: 'At work', t: '"I hate this place" becomes "I will make sure they regret how they treated me." Revenge is more organized than rage. Notice you have gone from a flood to a direction.' },
    { h: 'With someone', t: '"I cannot stand them" becomes "I am going to make them see what they did." You have a target now, and that steadies you. Say it only in your head.' },
    { h: 'About yourself', t: '"I hate how I handled that" becomes "I will prove them all wrong." Pointing the force outward gives you something to stand on. Keep it as a feeling and decide about action later.' } ],
  17: [
    { h: 'At work', t: '"They will pay for this" becomes "I am angry that this happened to me." Anger is lighter than revenge because you no longer need to arrange anything. You only have to feel it.' },
    { h: 'With someone', t: 'Planning how to get back at them becomes "I am furious that they did that." Drop the plan and keep the feeling. The plan was costing you more than the anger.' },
    { h: 'About yourself', t: '"I will show everyone" becomes "I am angry that nobody backed me." Stop scheming and name what you are angry about. That is a step down in pressure and a step up the scale.' } ],
  16: [
    { h: 'At work', t: '"This is outrageous" becomes "I am tired of fighting about this." Notice how heavy the anger is to carry. Tiredness is not weakness. It means the force is spent.' },
    { h: 'With someone', t: 'Anger at someone becomes "I am worn out by going over it again and again." Put the target down for a moment. You do not have to win right now.' },
    { h: 'About yourself', t: '"I am furious that I am still here" becomes "I am so tired of being angry at myself." That sigh is the step. You are no longer pushing, only resting.' } ],
  15: [
    { h: 'At work', t: '"Nothing I do here matters" becomes "They should have told me what they wanted." Blame can sound ugly, but it carries more energy than giving up, and it shows you believe things could have gone differently.' },
    { h: 'With someone', t: '"What is the point of trying with them" becomes "If they had listened, this would not have happened." The wish inside it, to be heard, is your guidance.' },
    { h: 'About yourself', t: '"I cannot do this" becomes "If I had been given a better start, I would not be here." Blame says things could have gone differently, and that belief is already hope.' } ],
  14: [
    { h: 'At work', t: '"It was all their fault" becomes "What if they do it again and I lose this job?" Worry is blame turned toward the future, and it means you are imagining one.' },
    { h: 'With someone', t: '"They ruined everything" becomes "What if this never gets better between us?" You have stopped looking backward at who is to blame and started looking ahead, which is where you can act.' },
    { h: 'About yourself', t: '"I am to blame" becomes "What if I do the same thing next time?" That question is about a future where you can choose differently.' } ],
  13: [
    { h: 'At work', t: '"What if it goes badly?" becomes "I expected the presentation to go better than this." Worry is picturing the worst. Disappointment admits you expected better, so you believe better exists.' },
    { h: 'With someone', t: '"What if they leave?" becomes "I hoped this would be easier by now." The worry is still there, but it is quieter and it points at something you want.' },
    { h: 'About yourself', t: '"What if I never get ahead?" becomes "I thought I would be further along." Doubt is calmer than worry, and it holds a picture of where you want to be.' } ],
  12: [
    { h: 'At work', t: '"It did not go the way I wanted" becomes "There is so much to fix now." Overwhelm sounds worse, but it is a list of everything you care about, which is a lot of wanting.' },
    { h: 'With someone', t: '"They let me down" becomes "I have so many things to sort out with everyone." You moved from one hurt to a whole pile of things that matter to you. That is more energy, even though it feels heavier.' },
    { h: 'About yourself', t: '"Why did I think this would work?" becomes "I have a dozen things to turn around." The size of the pile shows how much you want. Pick the smallest piece next.' } ],
  11: [
    { h: 'At work', t: '"There is too much to do" becomes "I am annoyed that nobody is helping with this." Irritation is a clearer feeling than overwhelm. You have found something to be annoyed about, which means you are sorting.' },
    { h: 'With someone', t: '"I cannot handle all of this" becomes "I am fed up with how much falls on me." It is still unpleasant, but it has edges, and a feeling with edges can be worked with.' },
    { h: 'About yourself', t: '"It is all too much" becomes "I wish I could just get one thing finished." Pick that one thing. Frustration is a rung above overwhelm because it knows what it wants.' } ],
  10: [
    { h: 'At work', t: '"This is so frustrating" becomes "It probably will not work out. And yet the last project did." Hold both. The second half is the step up.' },
    { h: 'With someone', t: '"They never listen" becomes "They probably will not change. And yet we got through that other rough patch." Pessimism with one small exception in it is already easier to carry.' },
    { h: 'About yourself', t: '"I am sick of being stuck" becomes "Nothing may change. And yet something has changed before, hasn\'t it?" You just need one example from your own life.' } ],
  9: [
    { h: 'At work', t: '"It will not get better here" becomes "Nothing is happening at the moment, and that is all right." Boredom is quieter than pessimism. It is a rest between things.' },
    { h: 'With someone', t: '"We are never going to fix this" becomes "Right now we are just not talking, and nobody is fighting." That is a pause. Let it be a pause.' },
    { h: 'About yourself', t: '"Nothing I try works" becomes "I do not feel like trying anything right now." That is flat, but flat is calmer than defeat. Rest here and let the doorway of hope open on its own.' } ],
  8: [
    { h: 'At work', t: 'The afternoon drags. Ask: "Is anything wrong right now?" No deadline is burning and the chair is comfortable. This moment is okay, and that is contentment.' },
    { h: 'With someone', t: 'You are sitting with someone and nothing is happening. Ask: "Is anything wrong right now?" No. The silence is fine. You have just stepped from boredom to contentment.' },
    { h: 'About yourself', t: 'You are lying around with nothing to do. Ask: "Just this breath, this room, isn\'t it okay?" If the answer is yes, even slightly, you are on the next rung.' } ],
  7: [
    { h: 'At work', t: 'This hour is fine. Ask: "Couldn\'t the next hour be fine too? Could tomorrow\'s meeting go well?" Stretching okay a little further ahead is hope.' },
    { h: 'With someone', t: 'Things between you are calm. "If today is okay, couldn\'t the rest of the week be?" You have moved from content to hopeful by carrying the okay forward.' },
    { h: 'About yourself', t: 'You are settled right now. "If this is all right, maybe the next few months can be too." You do not have to believe it fully. You only have to let it be possible.' } ],
  6: [
    { h: 'At work', t: '"Maybe this will work out" becomes "I have come back from worse at work before. I know the way." Remembering past climbs is what turns hope into optimism.' },
    { h: 'With someone', t: 'Hope about a relationship becomes "We repaired things before. We can do it again." A real memory beats a wish.' },
    { h: 'About yourself', t: '"Perhaps things will get better" becomes "I have climbed out from the bottom before." Let one memory of getting through something do the work.' } ],
  5: [
    { h: 'At work', t: '"This will probably go well" becomes "Something good is coming from this project." Optimism leans forward. Say it as plain fact, the way you would about tomorrow\'s sunrise.' },
    { h: 'With someone', t: '"I think we will be fine" becomes "Something good is coming for us." You are no longer weighing odds. You are noticing a direction.' },
    { h: 'About yourself', t: '"Things may improve" becomes "Something good is on its way. It always eventually was." Let that feel true for a breath, no longer.' } ],
  4: [
    { h: 'At work', t: '"I think this will go well" becomes "What would I do first if the promotion were already arriving?" Pick the first move and picture doing it.' },
    { h: 'With someone', t: '"We will be okay" becomes "What would I say first if we had already made up?" Picture the first sentence. It brings enthusiasm closer.' },
    { h: 'About yourself', t: '"I believe things are improving" becomes "What would I do tomorrow if the change had already come?" Imagine the first small action and feel yourself starting it.' } ],
  3: [
    { h: 'At work', t: 'Eagerness about a project becomes "This is what being alive feels like." Notice how your whole body wants to get started. That is passion.' },
    { h: 'With someone', t: 'Looking forward to seeing someone becomes "This is exactly why I love being alive." Let the wanting be as big as it is.' },
    { h: 'About yourself', t: 'Happiness about where things are going becomes "I am right where I want to be, and I am on fire about it." Stay with the feeling for a breath.' } ],
  2: [
    { h: 'At work', t: 'Passion for the work becomes "Look at what I climbed through to get here. I appreciate the one who climbed." Turn the appreciation on yourself.' },
    { h: 'With someone', t: 'Passion for someone becomes gratitude for the whole road that led to them, including the hard parts. That is love and appreciation.' },
    { h: 'About yourself', t: 'Feeling alive and driven becomes "Thank you to every version of me that kept going." Appreciating the climber is the top of the scale.' } ],
};

// The Attention lesson (Info). Locked with the Attention practices.
export const ATTN_LESSON = {
  intro: 'A common way to picture attention is as a zoom lens. You can narrow it onto one small thing, or widen it to take in a whole scene. Both are skills, and you can learn to move between them.',
  parts: [
    { h: 'Attention and concentration are two different jobs', t: 'Attention is the control: choosing what you notice, widening or narrowing the beam, and moving it from one thing to another. Concentration is the staying power: holding narrow attention steady on one thing, for longer, against every pull to leave. Attention is the steering and concentration is the endurance. You need both, and each is trained differently. The Attention practices train the control. Single-Object Hold, Grid Hold, Focus Block, Endurance Push, Long Read and the other Concentration practices train the staying power.' },
    { h: 'How attention helps meditation', t: 'Control lets you shape the sit: narrow onto the breath, open wide to everything that arises, move from one to the other, and notice early that you have drifted. It keeps the inner work clear, because you can aim and adjust your awareness instead of being carried by it. Training it in the ordinary world first, where there is something to check yourself against, is how you prepare to work in the mind\'s inner space.' },
    { h: 'How you train it', t: 'Every time your mind wanders and you bring it back, that is one successful rep, not a failure. Short, daily practice counts more than long, rare sessions.' },
    { h: 'Protect your practice', t: 'Sleep, regular exercise and enough rest set the ceiling for how well you can direct and hold attention. Protect your practice windows: put the phone in another room, turn off notifications, and do one thing at a time.' },
    { h: 'Narrow (convergent) focus', t: 'You contract the beam onto one object, detail or sensation. Detail and precision go up in that spot, and you take in less of the rest. Good for reading, examining, and sinking into one thing.' },
    { h: 'Broad (wide) focus', t: 'You open the beam to take in more of the scene at once: the layout, movement, the edges of your vision. You get the big picture and notice more, with less detail at any one point. The wider it is, the less intense it is at any single spot.' },
    { h: 'Spatial awareness', t: 'Spatial awareness is your sense of where things are, how far, and how they relate, including your own body. Wide focus supports it: you hold the whole layout and notice what changes around you. Narrow focus sharpens one spot but can shrink the rest into tunnel vision. Reading a gauge is narrow. Scanning a road is wide.' },
    { h: 'Absorption', t: 'Narrowing attention is also the way into absorption: being so locked onto one thing that the rest drops away, like getting lost in a book. It is central to how hypnosis works (see the Hypnosis lesson). A wide, open attention is a different flavor of presence: expansive, grounded in the space around you. Both are present. The skill is moving between them.' },
    { h: 'Narrow first', t: 'The ability to widen cleanly rests on being able to narrow and hold. Without a steady zoom, widening feels scattered. Learn to lock the lens, then open it while keeping the option to snap back.' },
    { h: 'Optional: spatial hobbies', t: 'Anything that makes you think about positions, shapes and space is extra practice for what Two Viewpoints and Mental Rotation work on: building with blocks or wood, origami, 3D puzzles, drawing from life, and spatial video games. None are required.' },
  ],
};

// One short teaching per group of practices (Info). Plain wording for now; the Rosicrucian wording can replace any block later.
export const CAT_TEACH = {
  observe: { t: 'Observation', one: 'See what is actually there', p: [
    'Observation is noticing what is really in front of you (details, positions, sounds) without adding commentary. Most of the day we run on autopilot and see our expectations instead of the scene.',
    'The Rosicrucian teaching treats these exercises as the first step in learning to "take hold of a thought". They take seconds, they are meant to become nearly automatic, and they are easy to underrate. The simplicity is the point.',
    'Everything else rests on accurate input. New-Room Recall, Stair Count and Evening Recall train you to look carefully and then check what you took in against reality. Deliberate noticing tends to improve memory for detail and keeps you in the present moment.',
    'Short and often works best. Missing details is not failure; it shows you what to notice next time.',
    'The method is old. It is told of the Buddha that he would stop mid-lesson and ask his students where he had been standing when he said a certain word, or what his right hand had been doing when he spoke of beauty. The questions were simple on purpose. They trained students to be present enough to answer them.' ] },
  concentrate: { t: 'Concentration', one: 'Hold one thing steady', p: [
    'Concentration is keeping your attention on one thing and bringing it back when it slips. It is the muscle underneath every other practice.',
    'The exercises are deliberately demanding (mental multiplication, memorizing lines, holding a stranger\'s face, a focus block) so that there is something firm to hold. The Attention lesson explains how concentration differs from attention.',
    'Every time you notice a wander and return, that is one rep. The returning is the training.',
    'Three concentration practices come to you as mindfulness sayings instead of sit-down exercises, so you meet them in the middle of your day. Endurance Push: stay with a task a little past the point where you want to switch. Single-Task Moment: give one ordinary thing your whole attention. Long Read: read one thing in one stream without stopping to check anything. Each one trains the same staying power as the practices above.',
    'The 17-34-68 Hold, an optional reminder in the Concentration settings. Choose what to hold: a physical item, such as a cup, a candle flame or a leaf, or one pure thought. An item is the easier choice, because there is a tangible target to look at and come back to, and a thought has nothing to look at. For a thought, pick one you genuinely like thinking, such as a person, a place or a feeling of thanks, and hold it with no "but". Seventeen steady seconds is where change begins, thirty-four multiplies it, and sixty-eight is the target, where the vibration becomes self-sustaining. Appreciation works best. When your mind wanders or a contradicting thought shows up, do not follow it. Come back. The practice is the coming back, and if you did not hold it the whole time, that is only information. The reminder opens a timer that marks each stage.',
    'Concentration is also what lets you meditate. Meditation asks you to rest on one thing, such as the breath, a color, a sound or a feeling, and stay. Each time you slip and return, the hold grows longer and the mind settles instead of wandering. Without it, a sit is a string of drifts.',
    'If you already concentrate well at work, these still apply. The difference is that here it is a deliberate act of will, not something a pressing need forces out of you. The aim is to find the handle on your own attention, so that you can pick it up whenever you choose.',
    'The Stranger\'s Face is a reminder that fires when you leave home, so it lives in Settings and not in Training. When you pass a stranger, look closely at their face for a moment, look away, and hold that face in your mind\'s eye for a minute or more, studying its expression. It is a step beyond the others. As taught, after some practice you start to sense the dominant feeling behind the face you are holding, often fear, sometimes compassion, joy or anger. Treat that as something to notice, not as a fact about the person.' ] },
  meditate: { t: 'Meditation', one: 'Concentration turned inward', p: [
    'Meditation is concentration turned inward and kept up until the mind settles. The forms differ (breath, a color, a sound, stillness, a feeling like love) but the move is the same: rest your attention on one thing, notice when it leaves, and come back.',
    'Regular practice is linked in research to calmer stress responses and steadier attention, and it builds gradually. An empty mind is not the goal. It is what you get when the practice works: with attention resting on one thing, the chatter settles and quiet is what is left. That quiet is something you can use, for rest, for clearer thinking, and as the starting point for the deeper practices. A short sit every day does more than a long one now and then.',
    'Routine meditation is your daily sit. The meditation practices are the structured ones.' ],
    sections: [{ h: 'Breath of Transformation', p: [
      'A slow 4-4-8 breath. Sit with a straight spine and eyes closed. Breathe in through the nose, smooth and full, for 4, picturing yourself drawing in a finer, brighter kind of energy than air. Hold for 4 and feel your whole body lit from inside. Breathe out through the nose for 8, releasing tension, heaviness and yesterday. After five rounds, do three more, saying silently on each out-breath: "I change my frequency now." Then rest in the afterglow with no agenda.',
      'The intention you hold during the pause is what turns it. Dolores Cannon also agreed that a breath like this is a valuable tool.' ] }, { h: 'Brainwaves and the earth\'s rhythm', p: [
      'A paper on qi and the body\'s electromagnetic fields reports that the earth and the sky around it resonate at about 7 to 10 Hz on average, close to the range of brainwave frequencies. At night it falls toward 1 to 7 Hz, matching the delta and theta stages of sleep. The authors propose that outside fields can influence brainwaves during brief free-running moments. These are the authors\' proposals, not settled science.',
      'The same paper cites Becker\'s account of a second, direct-current system alongside the nerves, whose oscillations are the brainwaves and which connects to the pineal gland and thalamus. That is one reason the pineal gets so much attention in the psychic-center meditations. The full summary is under Energy transfer.' ] }],
    more: ['states', 'fields'] },
  emotion: { t: 'Emotional control', one: 'Notice, name, choose', p: [
    'Emotional control does not mean pushing feelings down. It means noticing a feeling early, naming it, and choosing your response instead of being run by it. Research finds that simply putting a name to a feeling tends to soften it.',
    'The practices here are small, repeatable ways to build that gap: patience training with a pile or a shelf to put in order, climbing the emotional scale one rung at a time, choosing what you attend to, and the Funk Reset when you are stuck. Letting go comes to you as a mindfulness saying.',
    'Patience training is not one exercise. It is the habit of staying calm under a fiddly task, and you can build it on whichever job you pick.',
    'Four practices work by being hinted at all through the day, so they are not in Training. They are optional reminders in the Emotional control settings: tick the ones you want, and leave the rest off. Each is explained below.' ] },
  bedtime: { t: 'Bedtime', one: 'Close the day on purpose', p: [
    'The last minutes before sleep are a good time to review the day calmly, learn from it, and put it down. Sleep itself is when the brain consolidates memory and resets mood, so how you end the day matters.',
    'Evening Recall is observation turned backward. The Belief Audit, Revision and the Scene That Proves It use that quiet, drifting state to look at what drove your reactions and to rehearse what you want.',
    'Do them lying down and keep them short. If you fall asleep partway, that is a good outcome.' ] },
  energy: { t: 'Energy transfer', one: 'Breath, light and intention', p: [
    'These practices use breath, visualized light and intention to build, store and direct energy, as taught in the traditions named in Credits.',
    'They are written here as they were taught: draw the energy in, hold it, and send it where it is needed, with the intention doing the directing. In practice they bring calm, focus and a feeling of renewed energy, much as slow breathing and guided imagery do.',
    '{{prep|Healthy supporting habits}}, in Mental preparation, covers the everyday habits that keep the reserve up.' ], more: ['fields', 'gwenergy'] },
  fields: { t: "Energy and the body's fields", one: 'What a published study and the research it draws on describe', p: [
    'Every electric current makes a magnetic field, and the body\'s electrical activity is no exception. The paper below reports that the heart\'s magnetic field was first picked up in 1963 with a pair of large coils placed on the chest (Baule and McFee), and that sensitive magnetometers have since measured it up to about fifteen feet in front of the body. It also describes Harold Saxton Burr, an anatomist at Yale, who proposed in 1972 that living things are ordered by electromagnetic "fields of life" that he measured and mapped.',
    'Traditional Chinese medicine and philosophy call the life energy qi. It circulates through the body and beyond it, health is a balance of neither too much nor too little, and it comes from food, air and an original portion received at conception. The paper notes that Western science has no precise definition of qi, and its authors suggest that qi may correspond to the body\'s bioelectromagnetic energy.',
    'The paper also cites Oschman\'s description of a "living matrix" linking every tissue, in which acupuncture meridians act as low-resistance pathways for electromagnetic information. It cites Becker\'s account of a second, direct-current system alongside the nerves, in which oscillations are the brainwaves and which connects to the pineal gland and thalamus.',
    'It describes how the earth and the sky between it and the ionosphere resonate at about 7 to 10 Hz on average (Schumann resonance), close to the range of brainwave frequencies. It reports that at night this falls toward 1 to 7 Hz, matching the delta and theta stages of sleep, and proposes that brainwaves can be influenced by outside fields during brief free-running moments.',
    'The experiment tested whether qi projected from the hands changes the field around them. Three men with years of qi practice projected toward three small copper coils, set at right angles and wired to amplifiers. Each trial had 20 seconds of control, 20 seconds of projection and 20 seconds of control, and each man tried a different technique each time.',
    'The authors report significant changes in power (p < 0.05) at specific frequencies during projection compared with the control periods. Power rose in some frequency ranges and fell in others. The changes usually appeared in one coil rather than all three, so they were directional, and they were a subtle pattern across many frequencies rather than a spike at one. There was no consistent pattern across the three men.',
    'The authors conclude that people can change the electromagnetic environment around their hands at will, which they say supports a link between qi and bioelectromagnetic energy. They suggest that a qi practitioner might affect another organism by shifting its equilibrium. They call the study preliminary and exploratory, and list what they would change: using one technique across all trials, and recording muscle tone and hand movement. They also ask whether a person who has never heard of qi would produce the same changes.' ],
    src: ['Waechter, R. L., & Sergio, L. Manipulation of the Electromagnetic Spectrum via Fields Projected from Human Hands: A Qi Energy Connection? Subtle Energies & Energy Medicine, 13(3), 233-250.', 'Cited in it: Burr, The Fields of Life (1972); Baule & McFee, American Heart Journal 66 (1963); Schumann, Zeitschrift fur Naturforschung 7a (1952); Oschman, Energy Medicine: The Scientific Basis (2000); Becker & Seldon, The Body Electric (1985); Eisenberg, Encounters with Qi (1995).'] },
  states: { t: "Biofeedback", noPractice: true, one: "Meditation, hypnosis and biofeedback compared", p: [
    "Transcendental meditation, as the assessment describes it, relies on long, intense, single-minded concentration on drawing energy up the spine. Bentov's kundalini model of what that does is on the Chakra alignment page, under Kundalini, resonance and sound.",
    "Biofeedback works through the left hemisphere, the reasoning side. You picture the result you want, watch a device that shows when you succeed (a skin thermometer, for example), and then learn to recall the feeling of success and repeat it. McDonnell says it can speed beginners into deep meditative states, and that watching your own brainwave pattern helps you learn quickly to relax into focused quiet.",
    "He presents all three as entry points. Hypnosis and biofeedback can help a person move faster into the states the Gateway method aims for. Hypnosis has its own page.",
    "Single-mindedness and absorption are close cousins but not the same. Single-mindedness is effort: you choose one object and keep holding it against every pull to leave, which is how transcendental meditation is described. Absorption is what happens when that holding stops being effort and the object simply takes you, so the rest drops away. Concentration tends to be the road in and absorption the arrival, which is why the same trait helps with meditation, hypnosis and deep focus alike." ],
    more: ['hypnosis'],
  },
  hypnosis: { t: "Hypnosis", noPractice: true, one: "Focused absorption, suggestion, and how it differs from meditation", p: [
    "Hypnosis is a state of narrowed, absorbed attention in which you become more responsive to suggestion. You are not asleep and not controlled. Most people have been in a light version of it: getting lost in a book, a film or a long drive so that the rest of the world fades.",
    "Absorption is the trait that matters. People who absorb easily tend to be more hypnotizable, and also tend to find deep meditation easier. The shared machinery is the ability to narrow attention and hold it." ],
    sections: [
    { h: 'How it works', p: [
      "Classic inductions all narrow attention on purpose: fixing the eyes on a point, following a voice, or resting attention on the breath or a bodily sensation. Narrowing cuts down peripheral awareness, and the more absorbed you become, the more a suggestion lands as your own experience.",
      "Researchers such as David Spiegel describe hypnosis as absorbed, narrowed attention combined with a drop in self-monitoring. Brain studies report changes in attention and executive networks and in the self-referential default mode areas. This is an active research area, so read the details as current thinking, not settled fact." ] },
    { h: 'Narrow and broad attention', p: [
      "Narrowing is the usual doorway. Once inside, suggestions can also shift the scope of attention, for example making peripheral things fade or opening awareness in a particular way. Open-monitoring styles of meditation use a wider, more distributed attention, which is a different flavor of presence.",
      "The skill is moving between the two. Being able to lock the lens tight first is what makes it safe and stable to open it again." ] },
    { h: 'Hypnosis and meditation', p: [
      "Both can bring strong focus, absorption, an altered sense of time, body or self, and deep calm. From the outside, or even at first from the inside, a very absorbed meditative state can feel like a trance.",
      "The difference is what you do once you are there. In most meditation you observe and stabilize: you rest as awareness and let things be as they are. In hypnosis you direct and install: you use the absorbed state to deliver a suggestion or an image for a specific outcome such as calm, confidence, a changed habit or less pain. One researcher put it this way: hypnosis can involve a strategic drop in awareness of your own intentions, while mindfulness builds clearer awareness of your mental states.",
      "The same depth can go either way. If you rest there, it stays meditation. If, while deeply absorbed, you begin giving yourself purposeful suggestions, you have moved into self-hypnosis. If your aim is presence and insight, keep the observing stance. If your aim is a specific change, the same depth is good raw material for self-hypnosis." ] },
    { h: 'Why it appears in the Gateway material', p: [
      "The 1983 Army assessment of the Gateway method lists hypnosis among the related techniques that can help a person enter the target states faster, and proposes self-hypnotic suggestion as a step in its recommended path. The assessment does not describe Gateway itself as hypnosis." ] } ],
    more: ['states', 'meditate', 'assessment'] },
  assessment: { t: "The CIA assessment of the Gateway Experience (GWE)", noPractice: true, one: "A 1983 US Army evaluation, released through the CIA reading room: how it works and the model behind it", p: [
    "The Gateway Experience is the Monroe Institute's training program, built around Hemi-Sync sound: a series of recorded sessions, each taking you to a different level of awareness. In June 1983 Lt. Col. Wayne McDonnell assessed it for US Army Intelligence and Security Command. To explain how it works, he built a model from Itzhak Bentov's biomedical work, research on consciousness, and theoretical physics, and put out-of-body states into the language of physical science to take away the stigma of their occult associations. He says it is not meant to be the last word.",
    "His conclusion is that there is a sound, rational basis in terms of physical science for considering Gateway plausible in its essential objectives, and that intuitive insights of a practical and professional kind seem within reasonable expectations. He adds that a phased approach would be needed to bring the time to advanced states within manageable limits. The related techniques he compares first (hypnosis, transcendental meditation and biofeedback) are on the Meditation, hypnosis and biofeedback page, and the Hemi-Sync sound mechanism is on its own page.",
    "A session runs in a set order. It begins with the energy conversion box, a visualization for setting aside distractions. Next is resonant tuning, humming one steady tone with the tape (see Kundalini, resonance and sound). Then comes the affirmation, repeated along with the tape, and then the Hemi-Sync tones (see Sound, brainwaves and Hemi-Sync). Progressive relaxation follows, with pink and white noise that brings the body to the edge of sleep while the right hemisphere is kept alert. It ends with the energy balloon: a flow of energy from the top of the head out and down around the body and back up through it.",
    "The assessment does not describe Gateway as hypnosis. It shares features with it, since both quiet the left, screening hemisphere and the tapes carry suggestions, and it lists hypnosis among the related techniques that can speed entry. His own proposal to add hypnotic suggestion is in his recommended path further down. It is not part of the course as described.",
    "McDonnell describes four stages, and the tools used at Focus 12, where awareness is expanded, are covered on their own page: {{focus12|Focus 12 and its tools}}.",
    "Only one tape in the program is devoted to out-of-body movement. The Monroe Institute stresses that the program was not set up only for that and does not promise it. The assessment describes the methods, and its account of them is on the Projection page.",
    "He judges that progress comes much faster with Gateway than with transcendental meditation or other mental disciplines. It is a step-by-step procedure in which each insight lets you go further in the next session. The speed depends less on hours spent than on how quickly you release anxieties and stresses, because those energy blockages are the main barrier. The more compulsive and uptight a person is at the start, the more barriers they meet, until the insights begin to come.",
    "The model starts from the idea that everything, the brain and consciousness included, is a system of oscillating energy. Following Bentov, it describes the universe as a hologram, a pattern made when moving energy meets energy at rest, in which every part carries the whole. The mind is described as a hologram too, tuning in to the larger one by matching its frequency, and perceiving by comparing what arrives with its own stored patterns. Karl Pribram and David Bohm are cited for the holographic view.",
    "In expanded states, the right hemisphere acts as the receiver of the holographic input, and the left hemisphere, working in step with it, reduces it to words and concepts. Bentov is quoted: whenever we perceive something, we always perceive differences only. The assessment adds that Gateway succeeds to the extent that it refines the mind's energy pattern so that it can perceive without the physical senses, and it quotes Marilyn Ferguson that Pribram and Bohm's theories appear to account for transcendental experience, paranormal events and even normal perceptual oddities.",
    "Metacognition is the part of the model that explains how humans do not only know, but know that they know. The mind duplicates aspects of its own hologram, projects them out, and compares them with the memory part of the hologram, where its standards are stored. The differences it senses are what produce verbal awareness of the self.",
    "To move beyond time and space, the model says the mind's frequency must become so coherent that, at the point of rest in each oscillation, part of it 'clicks out' of time-space into in-between dimensions. These lie between ordinary time-space and what the assessment calls the Absolute: energy at rest in infinity, which is conscious but creates nothing by itself. In them, time and space may stop lining up as usual, and the past and future may become reachable.",
    "Bentov's account of the universe is an egg-shaped torus. Matter streams out of a nucleus of compressed energy through a 'white hole' and returns through a 'black hole', and time is the measure of change as energy evolves along the shell. Our place is near the top of the egg, where galaxies to the north recede faster. Because the torus holds every phase at once, past, present and future all exist in the universal hologram together, and a sufficiently focused consciousness could in principle read them.",
    "Consciousness, in this view, is the organizing principle that keeps energy in motion in a pattern, and the more complex the system, the more of it there is. When a person's reality ends, the energy returns to the Absolute with all its memories, merging with the whole without losing its identity, though it gives up the power to choose. An out-of-body experience is then described as projecting that eternal spark of consciousness and memory to learn in dimensions both inside and outside time-space.",
    "His recommended phased path is: Hemi-Sync tapes for focus and hemisphere synchronization; then REM-sleep frequencies for quiet and deep relaxation; then hypnotic suggestion so that a person can enter a self-hypnotic state at will; then autohypnotic suggestion to speed the Focus 12 work; then repeated sessions with the suggestion that an out-of-body movement will occur and be remembered, and later that it can be controlled; and only then the Focus 15 and 21 objectives. For information gathering he proposes a multi-focus approach: three people go out of the body together, one viewing the target in the present, one at Focus 15 as it slips into the immediate past, and one at Focus 21 as it moves into the immediate future, then all three are debriefed and compared.",
    "He also advises pursuing full self-knowledge to remove personal blocks, and being prepared for possible encounters with intelligent non-corporal forms when the boundaries of time-space are passed. The energy balloon is described as protection for a first out-of-body experience, and he suggests groups in Focus 12 building holographic patterns around sensitive areas to repel unwanted presences.",
    "In the closing sections he notes that the ideas do not conflict with the main Eastern or Western traditions, citing Tibetan teachings of reality as movement, a Hindu image of a net of pearls each reflecting all the others, and parallels in Judeo-Christian thought." ],
    sections: [{ h: 'Who and what is mentioned', p: [
      "The Army's Intelligence and Security Command (INSCOM), at Fort Meade, commissioned the assessment. The author, Lt. Col. Wayne McDonnell, wrote it in June 1983. The Monroe Institute, in Virginia, was founded by Robert Monroe, who described his own out-of-body experiences in the 1971 book Journeys Out of the Body and developed Hemi-Sync sound to make such states easier to reach. The Gateway Experience is its home-study program.",
      "Itzhak Bentov was a biomedical inventor whose book Stalking the Wild Pendulum (1977) supplies the physical model, including the idea of a body resonating at about seven cycles per second. Lee Sannella, a physician, described the same model in his book on kundalini. Karl Pribram, a brain scientist, and David Bohm, a physicist, are cited for the holographic view of the brain and the universe. Charles Tart, a psychologist, edited a widely read collection on altered states of consciousness, and Marilyn Ferguson wrote about the new science of consciousness.",
      "The Monroe Institute's trainer Melissa Jager supplied the lamp-and-laser picture, and Dr. Stuart Twemlow, a psychiatrist who studied the tapes, is cited on the focusing of brain energy. The 1995 review of the remote viewing program, which came twelve years later and tested a different practice, is on its own page: The CIA review of remote viewing." ] }], more: ['focus12', 'states', 'kundalini', 'gwenergy', 'project'],
    src: ["McDonnell, W. M. (Lt. Col., MI). Analysis and Assessment of Gateway Process. US Army Intelligence and Security Command, Fort Meade, 9 June 1983 (declassified copy released through the CIA reading room, CIA-RDP96-00788R001700210016-5).", "It cites: Bentov, Stalking the Wild Pendulum (1977); Sannella, Kundalini-Psychosis or Transcendence (1976); Monroe, Journeys Out of the Body (1971); Jager, The Lamp Turn Laser (Monroe Institute monograph); Ferguson, Human Behavior (1978); Gliedman, Science Digest (1983); Purce, The Mystic Spiral (1980); Stone, The Mother Earth News (1983); Tart, Altered States of Consciousness (1969)."] },
  focus12: { t: "Focus 12 and its tools", noPractice: true, one: "Expanded awareness, and the six tools used there", p: [
    "McDonnell describes the stages as Focus 10 (body asleep, mind awake), Focus 12 (expanded awareness, where the tools are used), Focus 15 (travel into the past, which he says fewer than five percent reach in the seven-day course) and Focus 21 (the future, thought to need months or years of practice).",
    "Focus 12 is the working level. It is the state in which awareness is expanded beyond the body and the room, and the Gateway assessment lists the tools that are used there.",
    "At Focus 12 he lists these tools. Problem solving: put the problem into your expanded awareness and project it outward; answers come as sudden knowing, often within two to three days, or as symbols. Patterning: concentrate on a wanted outcome as if it were already established, and do not force the pace, because the more it departs from your current reality, the longer it takes. Remote viewing: turn the energy bar into a whirling vortex and send your imagination through it in search of insight. The color breathing, energy bar and living body map tools are in {{gwenergy|Color, light and the energy bar}}." ],
    sections: [{ h: 'Using it in daily life', p: [
      "Patterning is the same idea that runs through this app's lessons on thought: a wanted outcome held clearly, as though it were already in place, with no forcing. The Gateway assessment adds the practical point that the further the outcome departs from your current reality, the longer it takes, so patience is part of the method.",
      "Problem solving fits ordinary life too. You put the question into your quiet awareness and then let it go, and the answer tends to arrive later, as a sudden knowing or an image, rather than as a chain of reasoning." ] }],
    more: ['gwenergy', 'assessment', 'thoughts', 'rv'] },
  gwenergy: { t: "Color, light and the energy bar", one: "Three energy tools from the Gateway assessment", p: [
    "The Army assessment of the Gateway Process describes color breathing as an energy-transfer technique: at Focus 12, you imagine colors very vividly so that they resonate with the body's energies and activate them. It is built on the principle that the body's electromagnetic field can change its resonance pattern and take in energy from the earth's field, and the colors cue which frequencies are wanted. In the Hemi-Sync version no outside light is used. The mind is the only agent.",
    "The energy bar tool: imagine a small point of light and charge it in your imagination until it pulses, then extend it into a sparkling, vibrating cylinder, which you use to channel energy from the universe to chosen parts of your body. The assessment notes that wands and sceptors recur across cultures and may reflect an archetypal symbol the mind responds to.",
    "The living body map amplifies the energy bar. You imagine the outline of your body, fill the main systems (nervous, circulatory) with color within that outline, and apply the energy bar to energize, balance and revitalize whichever area you choose. It rests on the assumption that a body made of energy can be vitalized by adding energy in the right form." ],
  },
  kundalini: { t: "Kundalini, resonance and sound", noPractice: true, one: "Bentov's model and the Gateway humming, from the Army assessment", p: [
    "According to Bentov, prolonged meditation alters the rhythm of the heart sounds, which sets up standing sound waves in the fluid-filled cavities of the brain and stimulates the cortex on the right side. He describes the bliss reported by people who have completed the full kundalini loop as self-stimulation of the brain's pleasure centers by a current circulating along the sensory cortex, and he notes that most of the symptoms start on the left side of the body, which means the process is mostly a development in the right hemisphere.",
    "Bentov says about five years of intense concentration and practice is normally needed to bring up the kundalini, but that long exposure to mechanical vibrations of 4 to 7 cycles per second, such as a car's suspension or an air-conditioning duct, can have the same effect. He suggests the cumulative effect may trigger a spontaneous sequence in susceptible people with a particularly sensitive nervous system." ],
  },
  balance: { t: 'Counterbalance', one: 'Answer a swing with its opposite', p: [
    'Counterbalance pairs a swing in one direction with a deliberate move in the other: out of balance toward the negative, you steer toward a steadier, positive state, and the reverse when you are over-positive.',
    'It is a way of coming back to the middle instead of staying at either extreme. It is close to what psychologists call reframing, which has good support for improving mood and calm.',
    'Use the Negative version when you are low, and the Over-Positive version when you are running too high.' ] },
  living: { t: 'Living practices', one: 'Carry it into the day', p: [
    'These are not sit-down exercises. They are ways of living the five building blocks in ordinary hours: watching your words, listening to your body, being here now, keeping body and mind clean.',
    'They are the point of the rest. A few minutes of practice matters most when it changes how you speak, eat, react and rest for the other twenty-three hours.',
    'Take one at a time and notice what shifts. The Do\'s and Don\'ts is a short reminder list to come back to.' ] },
  funk: { t: 'Change your state', one: 'The Funk Reset, the "I AM" meditation and more', p: [
    'The Change your state button on Today is for the moment you notice you are stuck in a mood and want out. It offers a few tools, because different moods respond to different doors. Pick one, give it a real try, and if it is not landing, try another.' ],
    sections: [
    { h: 'The Funk Reset', g: 'Tools', p: [
      'It is a short sequence, not willpower. It goes through the body first, then your attention, then your thinking, then music.',
      'Slow your body with a square breath: in for 4, hold for 4, out for 4, hold for 4, all four sides the same length. If 4 is a stretch, start at 3. Then look around and name 5 things you can see, 4 you can hear and 3 you can feel, slowly, which pulls your attention out of the loop and into the room. Next ask whether the feeling is yours or picked up from someone or something nearby. If it is borrowed, step out of it like stepping out of a room.',
      'Redirect instead of fighting it: stand up, drink water, step outside, walk into another room. Ask what there is to fear. You are secure, you have faced this before, and you can use your mind, not your will. Finish with one of your songs and let it do its work.' ],
      folds: [{ h: 'Why it starts with the breath', p: [
      'In biohacking circles, breath is the favorite handle on your state, because you cannot order a mood to change but you can change how you breathe on purpose, and the body follows. In the study below, the drop in breathing rate went along with better mood, though only modestly.',
      'Square breathing, also called box breathing, is the version popularized by Mark Divine, a former Navy SEAL officer and founder of SEALFIT. He says he learned breath control through martial arts during SEAL training and uses it to stay calm and alert under pressure. It is a technique with a military reputation, not a secret weapon, and the evidence for it is modest.',
      'In a 2023 randomized trial, 108 adults did one of four 5-minute daily practices for 28 days: mindfulness meditation, cyclic sighing, box breathing, or a fast-breathing technique. Everyone improved. The breathing exercises as a group lifted mood more than mindfulness did, and cyclic sighing (two inhales, then one long slow exhale) did best. Box breathing improved mood and anxiety but was not significantly better than mindfulness. The authors call the study exploratory: it ran remotely and for four weeks only.' ] }] },
    { h: 'Keep going when it does not feel like it is working', g: 'Tools', p: [
      'In a funk, the first round of anything often feels like nothing. That is normal and it does not mean the tool failed. In the study the gains were measured over weeks of daily five-minute practice, and they grew with how consistently people did it. So treat the first rounds as practice, not a test. Do all four rounds before you judge it, and expect a funk to shift in steps, not in one click.',
      'If it still feels flat after the full sequence, change tools instead of quitting: try the "I AM" meditation, the Rampage of Appreciation or Climbing the Scale from the same button, or try the Funk Reset again later. Using a tool on an ordinary day is the practice that makes it easier to reach for when you need it.' ] },
    { h: 'The "I AM" meditation', g: 'Tools', p: [
      'Where the Funk Reset moves you out of a mood, this one lets you choose the state you want to be in. Your words shape the state you are in. "I want" announces lack, because you only want what you do not have. Saying it as already true, "I am" or "I have", points you at the state you are choosing.',
      'The sitting meditation notices every "I am" you carry (I am stressed, I am broke, I am shy) and treats each as a state you are wearing, not the one wearing it. It rests as the plain awareness underneath, then puts on the state you choose: "I am calm." Say it silently with feeling, as if it is simply true, and stay in it for a few minutes. When doubt speaks, do not argue, just stay.',
      'Outside the sit, listen to your own speech for a day. Each time you hear yourself say "I want…", say it again in the present tense: "I am healthy" instead of "I want to be healthy". Keep it truthful and kind. This is not for denying a real problem you need to deal with, and do not say things about yourself you would not want to be true.' ] },
    { h: 'Rampage of Appreciation', g: 'Tools', p: [], exSolo: 'emo-rampage' } ],
    src: ['Yilmaz Balban, M., et al. Brief structured respiration practices enhance mood and reduce physiological arousal. Cell Reports Medicine, January 2023 (open access, PMC9873947).', 'Time magazine feature on box breathing and Mark Divine (time.com/4316151/breathing-technique-navy-seal-calm-focused).'] },
  slow: { t: 'Deliberate slowing down', one: 'Let others go first, and mean the smile', p: [
    'For a full month, let others go first: walking, driving (yield the right of way and drive under the limit), entering and leaving rooms, planes and trains. Do it all with a genuine smile and a cheerful attitude, because rushing is a mood you can step out of. This is not a timed exercise. It is a way of moving through the day, and slowing on purpose shows you how much of the hurry was only habit. The mindfulness sayings will remind you to walk or drive a little slower.' ] },
  chakra: { t: 'Chakra alignment', one: 'The seven centers, the psychic centers, and attention through them', p: [
    'In the yogic tradition the chakras are seven centers along the body, from the base of the spine to the crown. Each has its own element, seed sound and quality.',
    'The walkthrough puts steady attention in each area in turn, root to crown, until it feels coherent.',
    'Focused body attention with a sound or rhythm settles the nervous system and builds concentration.' ],
    sections: [
    { h: 'The seven centers', p: [CHAKRA_INTRO, ...CHAKRAS.map((k) => `${k.n}. ${k.name}, ${k.sk}. Seed sound ${k.seed}. Location: ${k.loc.toLowerCase()}. Blocked by ${k.block.toLowerCase()}. Gland: ${k.gland.toLowerCase()}. ${k.note}`)] },
    { h: 'The psychic centers', p: [
    'This series works with centers in the heart, head and throat in a set order: Heart first, then Pituitary, Pineal, Throat, and only then the combined attunement.',
    'The order is taught because each stage builds what the next one leans on. As taught, the early stages bring sharper observation and a steadier mind, and the later ones build on that.',
    'Take it in order and give each stage steady effort before the next.',
    'The head center is described as two halves. The lower half, the pituitary, takes in the energies of the physical and emotional world. The upper half, the pineal, is said to be where your higher self and deeper knowing reach you. As both develop, they grow and form a link between them, called the bridge. At first the link is narrow, and you may get occasional intuitive flashes. As the work continues it widens, and intuition and understanding grow with it.',
    'The teaching is careful to say this bridge is in the psychic sense, not a physical structure, and nothing is cut or changed in the body. It also says to build up gradually. Rushing the later steps does no harm, but it does no good either.',
    'It describes what students may notice along the way, and says to treat these as signs of progress and not as goals: a sharper memory and quicker thinking from the early work, and later a sense of picking up other people\'s thoughts, which at first feel like your own. See the Telepathy lesson for more.' ] } ] },
  project: { t: 'Projection', noPractice: true, one: 'The most advanced practices', p: [
    'Mental projection keeps your awareness anchored while the mind travels to a familiar place. Etheric projection uses a resonant OM and lying still.',
    'As taught, they come after the earlier stages are steady.',
    'Stay a spectator and do not drift into sleep.' ,
    "The 1983 Army assessment of the Gateway Process lists three conditions for going out of the body at will: a state of deep quiet with resonance at about seven cycles per second, synchronized brainwaves in both hemispheres, and then raising the alertness of the right hemisphere. The simple methods it names are rolling out, lifting out headfirst and rigid like a telephone pole, and sliding out through either end of the body.",
    "It reports Monroe's remark that an ex-trainer could guarantee the experience by bringing people into REM sleep first, and suggests why: the body is completely still and the right hemisphere is free to respond." ],
    sections: [{ h: 'The heart has to be in step too', p: [
      "The assessment says the two brain hemispheres are not the only thing that needs to come into step. The heart does too. Following Bentov, each heartbeat sends a pressure pulse down the main artery, and when it reaches the fork in the lower abdomen part of it bounces back up. If the next beat has already started, the two pulses meet and make an interference pattern. This returning wave is the bifurcation echo.",
      "When you calm the body down, the heart lessens the force and rate with which it pushes blood into the artery, and the echo slowly fades. What is left is a regular, rhythmic wave that moves up and down the body about seven times a second and rises into the head. Measured with a sensitive instrument, its strength is about three times the normal sound of the heart. That rhythm is said to move the fluid around the brain gently, and the body then behaves as one tuned system, which the assessment links to the earth's own resonance at about the same rate.",
      "In practice that is why every route into the projection state begins with calming the body first. Slowing the breath and relaxing deeply brings the heart rate down, which clears the echo, and it is this steadiness, together with both hemispheres working in step, that the assessment treats as the ground for going further." ] }],
  },
};

// Teaching blocks folded into one page: the four mental basics become one block, and Counterbalance lives inside Energy healing.
CAT_TEACH.prep = { t: 'Mental preparation', noPractice: true, one: 'Observe, hold, and steady your emotions', p: [],
  sections: [
    { h: 'Observation', p: CAT_TEACH.observe.p },
    { h: 'Concentration', p: CAT_TEACH.concentrate.p },
    { h: 'Attention', p: [ATTN_LESSON.intro] },
    { h: 'Emotional control', p: CAT_TEACH.emotion.p },
    { h: 'Optional reminders', p: [
      'These are for building a mental training program that is truly yours. Each one works best as a nudge in the middle of your day, not a session. They are off until you switch them on in Settings, and you can tick only the ones you want. Too many important reminders and they all stop meaning anything.',
      'Follow the Whim. Your mind will offer small, odd impulses through the day: take the longer route, talk to the stranger, open the door with your other hand. When one comes, act on it within five seconds. It must be safe, small and reversible; if it is not, it is fear or adrenaline, not a whim, and it waits. Do not keep score on whether it paid off. An impulse followed at once strengthens your link to your intuition, and one you reason about for ten minutes is already gone. Notice how your body feels the instant before you obey and the instant after.',
      'Rampage of Appreciation. Look around and appreciate whatever your eyes land on, out loud or silently, one thing after another, without stopping to edit: this cup, this light, my hands work, this chair holds me. Keep it moving. The objects do not matter. The momentum of appreciation does. It is especially good when your mood is low. Afterward, notice how you feel compared with when you started.',
      'Wouldn\'t It Be Nice If. A gentle game for low days, or when affirmations feel false. Finish the sentence again and again: wouldn\'t it be nice if I woke up rested, if the call went well, if I felt lighter? Big or small, without judging them. It is too soft for your doubt to argue with. Read back the ones that gave you a lift and notice which way they point.',
      'Frequency Fast. A reminder to stay aware of fear-based input and not be consumed by it. Fast from the news, fear-based feeds, doom-scrolling, gossip and complaint conversations for as long as you choose, whether that is a day or a week, because spoken fear feeds the same thoughts as watched fear. When you feel the pull, such as the hand reaching for the phone, pause and ask: "Is this mine? Do I choose to give my energy to this?" Then put the freed-up time into anything creative, even trivially. The fast is complete only when the energy has somewhere to go, and an empty fast gets refilled by the same fear.',
      CAT_TEACH.slow.p[0].replace('The mindfulness sayings will remind you to walk or drive a little slower.', 'The reminder will nudge you to walk or drive a little slower.') ] },
    { h: 'Whose feeling is this?', p: [
      'Most of what you feel is not self-generated. Emotion moves between people the way weather moves over water, and we are like fish in that sea. Sometimes it is rough and we get tossed about, and sometimes it is calm. It travels most strongly when people are close together.',
      'The example given is a man on a train who noticed he felt indignant for no reason. He looked around, saw everyone reading about a riot, and realized the feeling belonged to the carriage. When a friend arrives with a long face and a grievance, you can listen without taking on the mood. You do not need to be cold. You just do not go in with them.',
      'Once you see a feeling is not yours, you can step out of it, like stepping out of a shower or a cloak. The book adds a fair warning: you have to want to. Some borrowed feelings are exciting or pleasant, and you may not want to let them go. Borrowed calm and love work the same way, and you can benefit from them.',
      'It also says popular opinion is emotionally charged, and you can step out of that too.' ] },
    { h: 'Use the mind, not the will', p: [
      'The mind is stronger than the emotions and should be used to cut away unwanted feeling and to examine your own unwelcome emotions. The example is fear. Ask: what is there to fear? I am secure. I have faced this, or something like it, before without disaster. So why fear?',
      'It stresses that this uses the mind and not the will. Forcing a feeling down with will leads to suppression and sometimes to an unexpected outburst. Redirecting it, as with the craving for dessert that you meet with fruit, does not.',
      'Every emotion has a higher and a lower side. Love of self and love of others is one pair, and fear and trust is another. The practice is to examine each emotion and, if you find the lower side, move it toward the higher.' ] },
    { h: 'The quiet ones: pride, self-righteousness, vanity', p: [
      'The obvious feelings are the easy ones to clear. Pride, self-righteousness and vanity are harder, because they can steer your decisions for years without being noticed. As you clear the more obvious feelings, these reveal themselves a little at a time.',
      'They are deeply ingrained, and the way through is the unglamorous one: decide, keep going, and each time you slip, pick yourself up and begin again.' ] },
    { h: 'Emotional and etheric energy', p: [
      'The teaching describes several kinds of life energy. Etheric energy is the slowest and closest to physical. It works the body and is used mostly automatically, and with training it can be directed, as in energy transfer. Emotional energy is made by the solar plexus, the most open center in most people, which is why most people act on emotional impulse.',
      'Because of this, there is a block to using the full power of the mind until the emotions are brought under the mind\'s direction. That is why emotional control comes first in this path.',
      'Two modern sources describe something close to etheric energy, and they point the same way. A paper on qi suggests that qi may correspond to the body\'s bioelectromagnetic energy, with the heart\'s field measured several feet from the body. It is summarized, with its small experiment, in {{fields|Energy and the body\'s fields}}.',
  'The 1983 Army assessment of the Gateway Process agrees, and describes the physical side of the induction. The Hemi-Sync tones coax the brain from its waking rhythm toward the theta range (4 to 7 cycles per second) and bring both hemispheres into step. As the body settles, the heart has its own rhythm, which slows, and its beat loses the bifurcation echo, a pulse that bounces back from the fork of the main artery. The body is then said to settle into a regular rhythm of about seven cycles per second, matching the frequency the brain has been brought to. The qi paper reaches a similar picture, with the earth and the body\'s fields resonating at roughly seven to ten cycles per second. What the course does once you are inside that state, such as color breathing and the energy bar, is a separate matter, covered in {{gwenergy|Color, light and the energy bar}}. These are comparisons, not proof that etheric energy is what any of them measure.' ] },
  ],
  more: ['scale', 'fields', 'gwenergy'] };

// The whole emotional scale as a teaching: the map lives here, and the Climbing the Scale exercise in Training is where you practice it.
CAT_TEACH.scale = { t: 'The emotional scale', one: 'All 22 rungs, and how to climb them', noPractice: true, sayset: 'scale', p: [
  'The emotional scale is a ladder of 22 feelings, from joy and appreciation at the top to fear, grief and powerlessness at the bottom. It is a way of telling where you are and which way is up. It is not a judgment.',
  'Your emotion is guidance, not a verdict: it reads out the gap between you and what you want. The lower the feeling, the bigger that gap seems, but it is the same signal.',
  'The rule is to climb one to three rungs at a time. Jumping from despair straight to joy does not work, because the mind pushes back on what it does not believe. So reach for the thought that feels a little better, then the next. Any upward step is success, and you cannot fall. You can only climb again.',
  'Note the number where you stop. That is tomorrow\'s starting point, not today\'s failure.' ],
  sections: [
  { h: 'The map', p: SCALE.map((r) => `${r.n}. ${r.name}. ${SCALE_UP[r.n] ? 'To reach the rung above: ' + SCALE_UP[r.n] : 'The top of the scale. Appreciate the one who climbed.'}`) },
  { h: 'The red line and the feelings meter', p: [
    'Near the top of Today there is a How are you feeling? meter, with 1 at one end and 22 at the other. Set it whenever you open the app. A red line sits between Overwhelm and Disappointment, on the meter and in the scale list. If you set the meter below the red line, a small bubble offers help and takes you straight to Climbing the Scale, starting from the rung you set.',
    'The red line is also for advanced users, for this exercise: pinpoint the emotion you are having, identify the opposite emotion, identify a scenario where the outcome relates to that opposite emotion, and play that scenario over and over in your head until it feels real.' ] },
  { h: 'How to use it', p: [
    'Open Climbing the Scale in Training. Pick the rung closest to what you feel (type a word to narrow the 22), and it shows the step up with one way it can sound. If it does not land, press Still stuck for another angle. When it eases a little, climb to the next rung and repeat, and rest whenever you want to.' ] } ],
  links: [{ href: '#scale', t: 'Climbing the Scale', one: 'Practice moving your feelings up, with a guide' }],
  src: ['The 22-step emotional scale comes from Esther and Abraham Hicks (Ask and It Is Given). The prompts and examples here are written in the app\'s own words.'] };
CAT_TEACH.energy.sections = [
  { h: CAT_TEACH.balance.t, p: CAT_TEACH.balance.p },
  { h: 'Three routes, and where energy transfer fits', p: [
    'The Rosicrucian teaching names three routes. The first is treatment by a doctor, in any of its schools. It values them highly, says to consult them whenever there is need, and notes that you place yourself in their hands and are largely passive.',
    'The second is work with a trained practitioner on the mental and emotional causes of illness, where you take an active part. The third is psychic energy, which is described as the energy that creates and supports life, and what an energy transfer passes on, so it works best when it is present in good supply. All three have their place.',
    'Here the energy practices are treated as a supplement to the first two, never a replacement. If you are unwell, start with a doctor.' ] },
  { h: 'Where energy work stops', p: [
    'The teaching is clear about limits. If physical damage has gone too far, energy work will not undo it. A decayed tooth with an abscess is better removed or treated. Broken bones should be set by a competent specialist, and torn ligaments are better repaired by surgery than left to grow back together.',
    'Energy treatments can and should go alongside that care, and recovery is often reported to be fast. Take that as support for treatment, not an alternative to it.' ] },
  { h: 'Aches, cuts and scrapes', p: [
    'As taught, psychic energy is the energy of life. A person with plenty of it resists infection and illness, and small cuts, wounds and scrapes recover faster where it is plentiful. Giving someone extra energy helps them free themselves.',
    'For an ache or pain, the method is to deliver energy straight to the sore spot. The book also says a pain that keeps returning usually has an emotional cause worth looking for. It tells of a student who treated an injured dog this way. That is one person\'s report, so read it as a story and not as evidence. For a real injury, an animal needs a vet.' ] },
  { h: 'The giver\'s side', p: [
    'The teaching gives the giver a short list. Be in good health. Have purity of motive, meaning your only aim is to help the other person and not to show off. You do not have to be perfect, only sincere.',
    'It adds that will gathers the energy but love must do the giving. If you feel drained afterward, or you pick up the other person\'s symptoms, a step went wrong and you should go back over it.',
    'It also says never to diagnose aloud, and that most places forbid anyone but a licensed doctor to diagnose or prescribe. Treatment here is applied "in a super-physical way, somewhat like prayer", so the energy work does not break those laws, provided you stay out of diagnosis.' ] },
  { h: 'Do not withhold help over karma', p: [
    'Students often ask whether passing energy to someone disturbs their karma. The answer given is no. Karma is more complex than a simple eye-for-an-eye penalty. Who are you to judge, and how would you know when the moment for mercy has come? Learn how to help and give where you can.' ] },
  { h: 'Quiet energy transfer, anywhere', p: [
    'The book describes small acts of this kind. On a bumpy flight, someone calmed a frightened baby by sending it a feeling of warmth and security. On a late train, a student sent a feeling of love toward a drunk man who was provoking a stranger, and the man soon calmed down. These are reported experiences, offered as examples of the same idea: you can send calm to someone close by.' ] },
  { h: 'Do not waste your energy', p: [
    'After teaching how to build energy, the book says to conserve it. Worry, fear, resentment and hurry are the big drains. Whatever you turn your attention to receives some of your energy. You get some back when you take in beauty or care for someone unselfishly, and you give much of it away through unnecessary looking and reacting. Laughter, beauty and clear thought are called sources of renewal too.' ] },
];
CAT_TEACH.mind = { t: 'Brain and mind', noPractice: true, one: 'Thought as an activity of the mind, and who is in charge', p: [
  'The Rosicrucian teaching separates the brain from the mind. Thought is an activity of the mind, and the mind can work apart from the brain. Most of us are trained from birth to notice only what arrives through the senses and is recorded in the brain, so all our reasoning and almost all our remembering goes through brain tissue.',
  'Even abstractions like love, fear, patriotism and ideas like "dog" or "house" are not physical. Yet each one calls up a picture on the inner screen of the brain, which is also called the phantasm: the brain\'s picture of the idea, not the idea itself. We lean on the brain so heavily that we seldom reach for what the mind itself holds.',
  'The brain is a wonderful and useful tool. For creative work of the highest order, though, it can act like a straitjacket on the mind. That is why the practices move from observation and concentration, which put the brain to work where you can watch it, on to meditation, where you learn to think consciously without leaning on it.' ],
  sections: [
    { h: 'The mind is meant to rule', p: [
      'The mind is the kingly part of a person, meant to guide our lives, yet most of us use it as a servant to our appetites and emotions. It puts up with this reluctantly and protests, and we usually miss the protests, which can show up as illness and trouble.',
      'A person is three parts that are really one: physical, emotional and mental. The aim is not to switch off the body or the feelings. It is to put the mind back in the lead. The simple exercises at the start of the path are a gentle way of doing that.' ] },
    { h: 'Appetite: guide it, do not crush it', p: [
      'Appetites and emotions are not to be blocked, denied or destroyed, because suppression ends in an explosion and you would be only half human without them. They are to be guided and redirected. That is how the old advice to "kill out desire" is read. If you want a rich dessert you know is not good for you, take fruit rather than nothing.' ] },
  ] };
CAT_TEACH.thoughts = { t: 'Guiding your thoughts', noPractice: true, one: 'Practical rules for thinking clearly, and why clarity matters', p: [
  'The most important factor in bringing a thought into physical effect is the clarity of the visualization that goes with it. The Rosicrucian teaching treats this at length in its chapter on prayer.',
  'It then passes on a few practical suggestions from an advanced student, for anyone who has practiced the training exercises for a few weeks and has begun to see how to use their mind.' ],
  sections: [
    { h: 'Think in an orderly way', p: [
      'People who think chaotically are like people waving their hands in the dark, unaware of what they hit. We cannot avoid thinking, so it is better to think in order. As soon as you notice a negative thought, push it out. Replace aimless thoughts with precise ones, which are actually less tiring. Each person should work out their own path of logical thought.' ] },
    { h: 'Avoid distorted thinking', p: [
      'Many pieces of "bad luck" can be traced to untruthful or distorted thinking, including prejudice. Dark thoughts come back like a boomerang, so stop sending them out. This is hard, since most people are so shaped by unconscious thoughts and prejudices that they cannot tell whether they are thinking clearly, and so they never see the link when things go wrong.' ] },
    { h: 'Holding an outcome', p: [
      "One method for holding a wanted outcome clearly comes from the Gateway course, where it is called patterning. At the expanded-awareness level known as Focus 12, you concentrate on the outcome as if it were already established and do not force the pace. The further it departs from your present reality, the longer it takes. See {{focus12|the Focus 12 tools}}." ] },
    { h: 'Add a positive attitude', p: [
      'Beyond correcting and balancing, it advises adding good will. A benediction sent into the world is called the purest and finest form of thought energy, and your own projects grow by it.',
      'It also says that wanting advancement, better standing and approval is normal and hard to get rid of. The better course is to steer those wants toward higher aims, because the same action aimed higher is a step in the right direction. No one is perfect overnight. The promise is that as you handle the tools of thought better, you grow happier, better adjusted and more at peace.' ] },
  ] };
CAT_TEACH.telepathy = { t: 'Telepathy', noPractice: true, one: 'Sending, receiving, and telling your thoughts from other people\'s', p: [
  'It will matter more and more to know when you are responding to telepathic suggestions, and eventually to use telepathy on purpose. The Rosicrucian view is that if you are reading this, you already have the ability to send and receive mental messages.',
  'It describes three broad kinds of telepathy. The first it stresses most: telepathy within the individual, a communication between the higher self and the brain, which the Rosicrucians call Cosmic Contact. The pages that describe the other two are not included in what has been brought into this app yet.' ],
  sections: [
    { h: 'Telling your thoughts from theirs', p: [
      'As the psychic centers develop you may begin to become aware of other people\'s thoughts. At first you take them for your own and do not realize you are picking up a signal from outside. With repetition you learn to tell which thoughts started with you and which came from another mind.',
      'It also says that a student may one day hear a voice speak their name when alone, and that this is read as a sign of progress. Treat anything of this kind as an experience to observe with a calm head, not as proof or as an instruction.' ] },
    { h: 'It begins with ordinary feelings', p: [
      'Telepathy here starts with something everyone knows: feelings pass between people. See "Whose feeling is this?" in the Mental preparation teaching, and the Stranger\'s Face practice, which is described as the first step toward attuning with someone else.' ] },
  ], more: ['mind', 'thoughts'] };
CAT_TEACH.rv = { t: 'The CIA review of remote viewing', noPractice: true, one: 'What a 1995 government evaluation found: all ten experiments, and both the supporting and the sceptical view', origin: "From a declassified document. This comes from a 1995 draft report that the American Institutes for Research prepared for the CIA on the Star Gate remote viewing program, released through the CIA reading room. It reports what the program's researchers, two expert reviewers and intelligence users found, including the parts that go against remote viewing. Read it and judge for yourself.", p: [
  "Remote viewing is the claimed ability to describe a place or object you have not seen. US intelligence agencies funded research on it for over twenty years. The CIA's program ran from 1972 to 1977, the Defense Intelligence Agency became directly involved from about 1985, and in the early 1990s the work was gathered under the name Star Gate. In 1995 the CIA asked the American Institutes for Research (AIR), a nonprofit research organization, to review the program so a decision could be made about taking it over.",
  "The review had two parts. A research panel studied the laboratory work, and AIR also interviewed the intelligence users and the viewers. The panel was led by two experts chosen to stand on opposite sides: Dr. Jessica Utts, a statistician who has written favorably about the evidence, and Dr. Raymond Hyman, a psychologist known as a fair-minded sceptic. This page follows their work. The tool the Gateway course teaches for the same purpose is described under {{focus12|Focus 12 and its tools}}." ],
  sections: [
    { h: 'Who is who', p: [
      "SRI. The Stanford Research Institute (now SRI International) ran the laboratory program from 1973 to 1989. Its physicists Harold Puthoff and Russell Targ reported the first experiments in 1975. Interest in the work grew from three apparent early successes, in which viewers given only map coordinates described a hidden facility in West Virginia, a similar site in the Urals, and a large gantry crane at a site in the Soviet Union. The report notes that real-world cases are hard to score, because there is no chance baseline to compare with.",
      "The early SRI experiments were criticized: targets were picked without replacement, so knowing one answer ruled out another, and some transcripts contained cues about earlier targets. Those flaws were fixed in later work. In 1988 an analysis of all 154 SRI experiments, over 26,000 trials and 227 subjects, found results far beyond chance, and the same level held in the later experiments that no longer had those flaws.",
      "SAIC. Science Applications International Corporation took the program over and ran it from 1992 to 1994, with Dr. Edwin May as principal investigator. It carried out the ten experiments below. Because the SRI work had weaknesses, the two reviewers concentrated on these ten, the most recent and the only ones with adequate documentation.",
      "AIR, DIA and CIA. The CIA declassified its past parapsychology programs in 1995 and contracted AIR in June of that year. The CIA asked for two separate answers: whether the science is valid, and whether the work was useful to the government." ] },
    { h: 'How to read the numbers', p: [
      "Each experiment reports an effect size. Zero is chance, and a positive number means the viewers did better than chance. The p-value is the probability of getting a result that good by luck alone, so a small p-value (such as .006) means luck is unlikely. In most of these trials a viewer made a free description or drawing of a target, usually a National Geographic photograph, and a judge who did not know the target ranked the true target against four decoys." ] },
    { h: 'Experiments 1 to 5', p: [
      "Experiment 1, target and sender dependencies. Five experienced viewers worked from home and faxed their descriptions to the investigator. The study asked two questions: does the viewer need a sender looking at the target, and are short video clips easier than photographs? Each viewer did 40 trials, 200 in all. The sender made no difference. The photographs did well (effect size .248, p = .0073) and the video clips did not (zero). Overall the effect size was .124 (p = .04). The team guessed that the pool of possible video clips was too broad.",
      "Experiment 2, binary targets. A computer secretly chose 0 or 1 and the subject tried to guess it, with a statistical method that kept collecting guesses until a decision was clear. Three subjects took part. One, who had done well at SRI, got 76 of 100 decisions right (effect size .52), though it took over 21,000 individual guesses, only 51.6 percent of them correct. The other two scored at chance. Combined, 56 percent of 301 decisions were correct (p = .017).",
      "Experiment 3, the magnetoencephalograph. The aim was to detect a brain signal when a remote target appeared. The researchers realized too late that they could not have detected a signal even if one existed, so it produced no result.",
      "Experiment 4, binary coding. Five viewers each made 8 attempts to sense whether five specific features were present or absent in a target, as a way to send a message. There was no sign of an effect (effect size -.067, p = .66).",
      "Experiment 5, lucid dreams baseline. Despite its name it did not involve dreaming. It tested three newcomers at ordinary remote viewing, 8 trials each, before the next experiment. One scored a promising .265 but too few trials were run to be significant. The overall effect size was .088." ] },
    { h: 'Experiments 6 to 10', p: [
      "Experiment 6, lucid dream pilot. Dr. Stephen LaBerge of the Lucidity Institute led an attempt to remote view during a lucid dream, which is a dream in which you know you are dreaming. Seven viewers took part: four experienced remote viewers trained in lucid dreaming and three experienced lucid dreamers. They took sealed targets home, put them by the bed, and tried to open the envelope in the dream. The envelopes had covert threads to show tampering, and there was none. Across 21 trials the effect size was .368 (p = .046). The looser conditions mean it counts only as a pilot.",
      "Experiment 7, remote observation. This asked whether people sense being watched. One person sat before a camera with skin conductance (a measure of arousal) recorded. In a distant room another person watched their image on a monitor during 16 random 30-second periods, with 16 control periods when the image was not shown. Skin response was higher while being watched, in two runs (p = .036 and p = .014, combined effect size .39, p = .005). The effect was stronger for pairs of opposite sexes. The report says this raises more questions than it answers: the watched person might have sensed the image being shown, or the watcher might really have influenced them.",
      "Experiment 8, the EEG. This looked for a break in alpha brainwaves in the visual area of the brain when a target was briefly shown in another room. No significant change was seen.",
      "Experiment 9, EEG and remote viewing. Three experienced viewers did remote viewing while brainwaves were recorded, 18, 24 and 28 trials each. Their effect sizes were .432 (p = .033), .354 (p = .042) and .177 (p = .175), and .303 overall (p = .006).",
      "Experiment 10, Entropy II. This improved on Experiment 1. The team had a theory that a target pool is best if it is neither so broad that the viewer drowns in possibilities nor so small that the viewer can see every choice at once. They built a set of video clips with a similar spread to the photographs. Four of the five viewers from Experiment 1 took part, this time at the SAIC lab, with no sender. Both photographs and clips succeeded equally well, with a combined effect size of .55, the strongest of the series (z = 5.22)." ] },
    { h: 'What the lab work showed', p: [
      "Across the SRI and SAIC work the researchers noted several patterns. Free description of a target worked much better than forced choices. About one in a hundred volunteers screened was consistently good at it, and a group of six selected people did far better than the rest, so the ability seems to vary between people like athletic or musical talent. Practice and training did not reliably improve it, and it appeared easier to find good viewers than to train them. Distance did not seem to matter, and electromagnetic shielding did not seem to block it. Utts also reports compelling results when the target was chosen after the description was given.",
      "Some researchers have proposed that everyone has the ability to some degree. The data in this report do not settle that, and what they show is wide differences between people." ] },
    { h: 'What the two reviewers agreed on', p: [
      "Both agreed that the SAIC experiments avoided the main flaws of the earlier SRI work, such as trials that were not independent, and that they were better than previous parapsychology studies. Both agreed that the effects were too large and consistent to be statistical flukes. Hyman said he could not point to any obvious flaw and tended to agree with Utts that real effects were occurring: something other than chance had happened.",
      "AIR summed up the point of agreement the same way. Viewers' descriptions matched their targets more often than chance would predict." ] },
    { h: "Utts's conclusion", p: [
      "Utts concluded that psychic functioning has been well established by the standards applied to any other area of science. She pointed out that effects of similar size have turned up at other laboratories, including the ganzfeld experiments (in which a person in a calm, sensory-reduced state tries to receive an image), and said such consistency cannot easily be put down to error or fraud. In her view research should now turn to how it works." ] },
    { h: "Hyman's argument", p: [
      "Hyman does not dispute the data or the science in the experiments. His objection is about the next step: whether a significant result proves its cause is paranormal. A significant departure from chance can come from several causes, he argues, and without a positive theory that predicts when and how the effect should appear, nobody can say it has a single cause. Effect size by itself says nothing about where an effect comes from.",
      "He also notes how the work was done. It ran in secrecy, so other laboratories could not check it or try to repeat it, and in twenty years it produced only ten adequate experiments from one lab, which he considers too few to settle even one question. The same experienced viewers, targets and judge were used again and again, so if a subtle bias existed it could have compounded. Dr. May judged all the free-response trials himself, because he knew each viewer's style. Hyman acknowledges the reasoning but says the wider scientific community will be slow to accept evidence that depends on one person.",
      "Notice what he does not say. He does not say the results are an error or a trick. He says that the effect is real in the statistical sense, that its cause has not been identified, and that it should be tested further by other laboratories. A cause that turns out not to be paranormal would not be a loss. It would mean the effect can be measured and tested here in the ordinary world, which is exactly what both reviewers wanted done next.",
      "One more detail points the same way. Four of the five viewers in Experiment 1 returned for Experiment 10, and with a better-designed target pool and a controlled lab their results were far stronger, with an effect size of .55 against .12. The same people doing much better after the conditions were tightened suggests the protocol was improving. Hyman does count the reuse of experienced viewers as a possible weakness, so he reads it more cautiously."] },
    { h: "AIR's conclusion", p: [
      "AIR put the answers to its four questions this way. Statistically significant effects were obtained. The experiments did not convincingly show that a paranormal ability was the source, because the same viewers, judge, targets and scoring were used repeatedly, which makes the source hard to pin down. The research did not identify how the effect works. And the size and consistency of the effects, plus the need for subjective interpretation, argued against using it as an intelligence tool.",
      "The first of those findings is the one that matters most here: something measurable happened in the lab." ] },
    { h: 'The three viewers', p: [
      "At the time the program was suspended, three viewers were employed full time, each with at least five years in it. All had worked in the intelligence community and were chosen mainly for their interest in parapsychology. Only one was picked through formal testing, scoring high in a large pool of candidates. Training took six to eighteen months and moved from simple to complex targets, beginning with a beacon at a known location.",
      "Each used a different method. One used coordinate viewing together with meditation. One relied on relaxation and meditation. The third used channelling and automatic writing. They noted that the methods were not incompatible, and that all were physically and emotionally draining and gave results that were somewhat vague. For that reason they said a skilled user who accepted the phenomenon and could interpret the product was essential.",
      "They reported that quality dropped when they were given many repetitive tasks in a short time, when a target held no interest for them, and when outside evaluation put too much pressure on them. Their opinions on background information about a target differed. Some wanted a lot and some wanted little, and they noted that background information could distort a viewing because they sometimes bent their report to fit what they knew. Different viewers often produced quite different reports of the same target." ] },
    { h: 'How to read it', p: [
      "This is a draft, written for people deciding whether a program was worth funding, not for people deciding whether the ability is real. It shows two serious scientists agreeing that something statistically unusual happened in the lab, and disagreeing about whether to call it paranormal. That is a reason to stay curious. It is not proof that anyone can do this, and the document does not claim that." ] },
  ], more: ['focus12', 'assessment'] };
// Where the "Why this?" link of a practice category should go.
const BODY_SRC = ['Timbre Tamer original work: the door-behind-stillness model, the wrench story and the way these ideas are tied together were developed by the app\'s creator, along with the drills. The description of proprioception and the brain areas follows standard physiology. The door itself is a practice model, not an established scientific finding.'];
CAT_TEACH.door = { t: 'The Door Behind Stillness', one: 'Using your body sense to find the quiet place behind thought', p: [],
  sections: [
    { h: 'Proprioception, a little deeper', p: [
      'Proprioception is the body\'s sense of itself: where each part is, how it is oriented, and how much force it is using. It is not a muscle in the brain. It is a sense, fed by receptors in your muscles (length), tendons (tension), joints (angle) and skin (stretch), and read by the brain, mainly the cerebellum and the parietal cortex.',
      'Three things matter here. First, it mostly reports change. Like smell or the feel of your clothes, a steady signal fades from awareness. Hold completely still and the signal weakens, and the body\'s edges get harder to find. Second, movement restarts it. Any motion, even a twitch, sends a fresh burst and brings the body back into focus, which is why movement resets the clock. Third, it is half of how you know where you end. Your sense of a body boundary is built from proprioception, touch, balance and vision. Quiet enough of those and the boundary blurs. This is reported in deep meditation, hypnosis and flotation tanks.' ] },
    { h: 'The sequence', p: [
      '1. Widen. Take in the room, the sounds, the smells.\n2. Settle. Relax the body and narrow to the body itself.\n3. Dismiss thoughts. They spawn like browser tabs. Close them again and again, and each round runs shorter.\n4. Stay still. No movement, because movement resets the clock.\n5. Check in. Probe your body sense, then probe again, to see what is still reporting.\n6. The door. No thoughts, and nothing at all from the body. This is Focus 12.' ] },
    { h: 'What the check-in is for', p: [
      'The check is not what matters. What matters is that every signal from the body has to be completely off before you can go through. Any movement, even a slight one, fires up different parts of the brain and restarts your time. You are not trying to relax a little. You are waiting for nothing to report.',
      'If something itches, do not move to scratch it. Put your attention on it with your proprioception and feel it out, the edges, the pull, the heat, until it is gone. Then go back to clearing the mind. Moving would restart the clock, and feeling it through usually finishes the itch anyway.',
      'The mind does not have to be completely still. When it is still enough, the body follows. When you can no longer feel anything from your body at all, you have reached Focus 12.' ] },
    { h: 'Why some people never reach it', p: [
      'Some people look for the door and nothing else. They treat meditation as a hunt for "the other place," do not find it, and quit. The ones who stay often came for ordinary reasons, like peace or help with daily life, and keep the practice going long enough to reach the missing step.',
      'Common inductions run on broad awareness of sounds, smells and the room, then converge on the body. The step this model adds is to make sure, with your body sense, that the body has gone completely quiet. A guiding voice, such as a therapist\'s or a recording, helps because it gives attention an outside anchor, and following it pulls focus off body sensation, so the body sense drops out faster.' ] },
    { h: 'The body sense as a system', p: [
      '1. Receptors (the raw signal). Muscle spindles report length, tendon organs report tension, joint receptors report angle and skin receptors report stretch. They only send pulses, mostly when something changes.',
      '2. Spinal cord, brainstem and thalamus (the relay). The signals travel up, get sorted, and are passed to the cortex.',
      '3. Somatosensory cortex (the body map). A strip of cortex lays the signals out as a map of the body, with hands and lips taking far more space than the back.',
      '4. Superior parietal lobule (the body schema). The running 3D model of your body: limb positions, lengths and how they connect. When you know where your hand is with your eyes closed, you are reading this model.',
      '5. Cerebellum (the error checker). When you send a movement command, it predicts what your body sense should report, then compares that with what arrives. A mismatch triggers a correction.',
      '6. Vestibular cortex and insula (up and down, and inner state). The inner ear tells the brain which way gravity points. The insula adds heartbeat, breath and tension, and contributes to the feeling that the body is yours.',
      '7. Temporoparietal junction (the "me in here" stage). It combines body signals, balance and vision into one answer to "where am I, and is this body mine?" When its input is disrupted, people report floating or out-of-body experiences.',
      '8. Hippocampus and entorhinal cortex (the body in the room). Place cells and grid cells map where your whole body is in the surrounding space.' ] },
    { h: 'How the system fits the sequence', p: [
      'Widening to the room engages the vestibular system and the room map (stage 8). Narrowing to the body engages the body map and schema (stages 3 and 4). Stillness starves the receptors and the relay (stages 1 and 2), because they mostly report change and the map stops getting fresh input. Checking in points attention at the schema and the "me in here" stage (4 and 7) to see whether they still have anything to report. "Zero" is where those stages stop receiving updates and the boundary blurs. This matches the quieting of parietal regions reported in deep meditators.' ] },
  ], more: ['rule', 'bodysense'], src: BODY_SRC };
CAT_TEACH.rule = { t: 'Knowing the Rule vs. Understanding the Thing', one: 'Why a memorized rule fails, and the inner eye that checks it', p: [
  'You are bent over a bike, working a wrench from the opposite side. You turn it "righty tighty, lefty loosey," and it does not work. You flip it, and that does not work either. Only when you stop reciting and watch what your hand is doing does it make sense.' ],
  sections: [
    { h: 'Why it failed', p: [
      'The rule is a compressed description, not the thing itself. "Righty tighty" assumes you are looking at the bolt head from the front. From the other side that assumption silently flips, and the rule never warns you.',
      'You were shuffling symbols, not the situation. You tried the rule, then its inverse, and both fail because neither is connected to the bolt. The real fact is simpler: a thread is a ramp. Tightening means the bolt advances into the hole, and which way your hand turns depends on the thread and your viewpoint, not on the words "right" or "left." (Left-side bike pedals are reverse-threaded, so the rule can also be wrong for a legitimate reason.) You fixed it the right way by dropping the symbols and checking your hand against reality.' ] },
    { h: 'The two pieces', p: [
      'Knowing the rule means holding a phrase. It breaks at a new angle, and when it fails you guess or invert.',
      'Competence means holding the model the phrase came from. It rebuilds the rule on the spot, and when something fails you check the model against the physical situation.' ] },
    { h: 'The inner eye', p: [
      'The inner eye is attention pointed at proprioception, your body\'s constant background signal of where each part is and what it is doing. It is always running, but you only perceive it when you aim attention at it, like a flashlight.',
      'Contorted under a bike with a wrench in your hand, your brain is mentally rotating a picture while your sense of your own orientation is scrambled. That load is why things stop making sense. When the inner eye works, a body part feels present and lit from within: you sense its edges, weight and warmth without looking. Looking at what your hand was doing was the inner eye at work. You swapped a rotated mental picture for direct feedback, and that feedback corrected the model.' ] },
    { h: 'Train it: 5 minutes a day', p: [
      '1. Eyes closed, pick one hand and notice where it touches the chair or your leg.\n2. Move attention slowly: the outline, the gaps between fingers, each finger, then knuckles and tendons.\n3. Move one finger and track it from the inside only.\n4. Test it: place the hand somewhere, name each joint\'s position, then open your eyes and check.\n5. Apply it: eyes closed, mime turning the wrench and feel which way your wrist rotates and which way the bolt would travel.',
      'You are not alone in this. Athletes, dancers, musicians and tradespeople develop it, and philosophers call the broader idea tacit or embodied knowledge.' ] },
  ], more: ['door', 'bodysense'], src: BODY_SRC };
CAT_TEACH.bodysense = { t: 'Body Sense, Space and Observation', one: 'Drills for proprioception, spatial awareness and powers of observation', p: [
  'The same attention can be pointed three ways. The inner eye points it at your body, spatial awareness points it at the space around you, and observation points it at the details. All of them train deliberate attention. A short daily session beats an occasional long one.' ],
  sections: [
    { h: 'Proprioception skills', p: [
      'Ordered roughly from simplest to most demanding.',
      '1. Eyes-closed joint matching. Have someone place one arm in a position with your eyes closed, then copy it with the other arm. Open your eyes and compare. This shows which side or joint is dull.\n2. Reach and touch. Eyes closed, touch your nose, ear or opposite elbow with a fingertip, then a target on a wall or desk you have just memorized. Start from odd arm positions to make it harder.\n3. Slow-motion movement. Do ordinary motions (standing up, reaching, turning a wrench) at about a quarter of normal speed. It forces the brain to read every stage of the movement.\n4. Balance work. Single-leg stands are the baseline. Progress to eyes closed, then a cushion, folded towel or balance board.\n5. Barefoot time. Feet are packed with receptors, and shoes dull them. Walk barefoot on varied surfaces when it is safe to do so.\n6. Load awareness. Hold objects of different weights with eyes closed and estimate how heavy each is, or pick up an unfamiliar tool and sense its balance point before you look.\n7. Unfamiliar movement. Learn something your body has not done: juggling, tai chi, a new dance, writing with your off hand. Novel movement grows the sense, because routine movement stops demanding it.\n8. Awkward positions. Work in odd orientations at low stakes (reaching under a table, working from the opposite side of a project) and narrate what each hand is doing.\n9. Full range of motion. Slow squats, bodyweight rows or similar controlled movements keep the receptors in muscles and joints sharp. Stiff, underused joints send weaker signals.\n10. Check for dullness after injury. Old sprains, especially ankles, often leave reduced position sense even after the pain is gone. If one side keeps scoring worse on matching and balance, a physical therapist can test it properly.',
      'A simple routine: about five minutes of matching or reach-and-touch, a minute or two of single-leg balance per side, and one slow-motion task. Then add one novel-movement activity a few times a week. For sharper hand precision, lean on 1, 2, 3 and 8. For whole-body control and balance, lean on 4, 5, 7 and 9.' ] },
    { h: 'Spatial awareness drills', p: [
      '1. View-flip. Look at any object and predict what it looks like from behind, below and the opposite side. Then walk around and check. Misses show where your mental model is weak.\n2. Wrench rehearsal. Before any fastener job from an awkward position, say out loud which way the bolt needs to travel and which way your hand must rotate to do it from where you are. Then test.\n3. Draw a room from memory. Sketch a familiar room from above, then check it. Redo it from a corner\'s point of view.\n4. Track your heading. Walk or drive somewhere without GPS and keep a running sense of which way you face and where you started. Point to the start at random moments, then verify.\n5. Mental rotation. Rotate shapes in your head with Tetris, a Rubik\'s cube or 3D puzzles.\n6. Take apart and rebuild. Taking apart electronics or small engines is one of the best trainers, because you must hold how parts sit in three dimensions and then reverse the process.' ] },
    { h: 'Powers of observation', p: [
      'Observation is the checking step that rescued you at the bike: dropping the rule and looking at what is actually happening.',
      '1. Separate seeing from interpreting. Describe what is in front of you using only facts ("the bolt head is rusted on one side"), not conclusions ("it is seized"). Most missed details are lost because the brain jumps to a label.\n2. One-object study. Spend five minutes on a single ordinary thing and keep finding new details. The discipline is continuing past the point where you feel done.\n3. Memory test (Kim\'s game). Look at a tray of items for 30 seconds, cover it, and list everything you can. Add items over time.\n4. What changed? Glance at a room, shelf or workbench, look away, then spot what is different after something is moved.\n5. Soft focus. Relax your gaze and take in the whole scene, including the edges. This catches movement and context that tunnel vision misses.\n6. Photograph or note before you touch. Before taking anything apart, record its starting state. It builds the habit of noticing orientation and order.\n7. Sketch to see. Drawing something forces you to notice proportions and details you would otherwise skip, even if the drawing is bad.\n8. Observe with other senses. Close your eyes and list every sound around you, or the layers of smell in a space.' ] },
  ], more: ['door', 'rule'], src: BODY_SRC };

// Mental preparation is long, so it is filed under categories, each section a dropdown. Built here, once every lesson it draws on exists.
{
  const prep = CAT_TEACH.prep, find = (h) => prep.sections.find((x) => x.h === h), body = CAT_TEACH.bodysense.sections, bs = (h) => body.find((x) => x.h === h);
  const optional = find('Optional reminders').p.slice(1);
  const notes = {};
  ['emo-whim', 'emo-rampage', 'emo-nice', 'emo-fast', 'emo-slow'].forEach((id, k) => { notes[id] = optional[k].replace(/^(Follow the Whim|Rampage of Appreciation|Wouldn't It Be Nice If|Wouldn\'t It Be Nice If|Frequency Fast)[.:]\s*/, ''); });
  const parts = ATTN_LESSON.parts, part = (h) => parts.find((x) => x.h === h);
  const sub = (h, p) => ({ h, p });
  const BASIC = 'The three basics';
  const en = find('Emotional and etheric energy'), habits = EXERCISES.find((e) => e.id === 'energy-habits'), rule = CAT_TEACH.rule;
  prep.sections = [
    { h: 'Observation', g: BASIC, p: CAT_TEACH.observe.p, exCat: 'observe', drills: [sub('Powers of observation', bs('Powers of observation').p)] },
    { h: 'Concentration', g: BASIC, p: CAT_TEACH.concentrate.p, exCat: 'concentrate' },
    { h: 'Emotional control', g: BASIC, p: CAT_TEACH.emotion.p.slice(0, 3), exCat: 'emotion', exNotes: notes,
      subs: ['Whose feeling is this?', 'Use the mind, not the will', 'The quiet ones: pride, self-righteousness, vanity'].map((h) => sub(h, find(h).p)) },
    { h: 'Guiding your thoughts', g: BASIC, p: CAT_TEACH.thoughts.p, folds: CAT_TEACH.thoughts.sections.map((x) => sub(x.h, x.p)) },
    { h: 'Healthy supporting habits', g: BASIC, p: [habits.summary, habits.caution], subs: [sub('Everyday habits', [habits.steps.slice(0, 8).map((s) => '• ' + s).join('\n')]), sub('Do', [habits.steps[8].replace(/^DO[^\n]*\n/, '')]), sub("Don't", [habits.steps[9].replace(/^DON'T[^\n]*\n/, '')])] },
  ];
  const XG = 'Extra mental features';
  CAT_TEACH.extras = { t: XG, noPractice: true, one: 'Attention, spatial awareness and proprioception', p: [],
    sections: [
      { h: 'Attention', g: XG, p: [ATTN_LESSON.intro], attn: true, exCat: 'attention', exSkip: ['attn-rotate', 'attn-views'],
        subs: ['Attention and concentration are two different jobs', 'How attention helps meditation', 'How you train it', 'Protect your practice', 'Narrow (convergent) focus', 'Broad (wide) focus', 'Absorption', 'Narrow first'].map((h) => sub(h, [part(h).t])) },
      { h: 'Spatial awareness', g: XG, p: [part('Spatial awareness').t], exIds: ['attn-rotate', 'attn-views'],
        subs: [sub('Optional: spatial hobbies', [part('Optional: spatial hobbies').t])], drills: [sub('Spatial awareness drills', bs('Spatial awareness drills').p)] },
      { h: 'Proprioception', g: XG, p: ["Proprioception is the body's sense of itself: where each part is, how it is oriented, and how much force it is using. It stays sharp with use and dulls without it."],
        subs: [rule.sections.find((x) => x.h === 'The inner eye')].map((x) => sub(x.h, x.p)),
        drills: [rule.sections.find((x) => x.h.startsWith('Train it')), bs('Proprioception skills')].map((x, i) => sub(i ? 'Proprioception skills' : 'The inner eye: 5 minutes a day', x.p)) },
    ] };
  CAT_TEACH.etheric = { t: en.h, noPractice: true, one: 'Why emotion blocks the mind, and what two modern sources say about etheric energy', p: en.p, more: ['fields', 'gwenergy'] };
  delete prep.more;
  delete CAT_TEACH.bodysense; // its drills now live in Mental preparation
  { const dr = CAT_TEACH.door, dget = (h) => dr.sections.find((x) => x.h === h), story = ['Under a bike, working a wrench from the far side, "righty tighty" fails, and so does its opposite. A rule is a compressed description. It assumes a viewpoint, and from a new angle it silently flips. What fixed it was dropping the words and checking your hand against the bolt.', 'Knowing the rule means holding a phrase. Competence means holding the model the phrase came from, so you can rebuild it on the spot. The check that rescues you is the inner eye: attention pointed at the body sense.'];
    dr.sections = [dget('The sequence'), { h: 'Proprioception and the check-in', p: [], subs: [sub('Proprioception, a little deeper', dget('Proprioception, a little deeper').p), sub('Knowing the rule vs. understanding the thing', story), sub('What the check-in is for', dget('What the check-in is for').p)] }, ...dr.sections.filter((x) => ![ 'The sequence', 'Proprioception, a little deeper', 'What the check-in is for' ].includes(x.h))]; }
  delete CAT_TEACH.rule; // its inner eye and drill now sit inside Proprioception, a short version of its story in The Door Behind Stillness
  ['thoughts', 'mind', 'door'].forEach((c) => CAT_TEACH[c].sections.forEach((x) => { x.g = x.g || CAT_TEACH[c].t; })); // long lessons open as dropdowns like the rest
  CAT_TEACH.meditate.t = 'What it is';
  CAT_TEACH.door.more = CAT_TEACH.door.more.filter((x) => x !== 'bodysense' && x !== 'rule').concat('extras');
}

CAT_TEACH.process = { t: 'The whole path', noPractice: true, one: 'From a quiet mind to the right hemisphere waking, and why each step is there', p: [
  'This lesson follows the whole path in order and says why each step is there. {{door|The Door Behind Stillness}} goes deep on the body-sense side. Where the 1983 Gateway assessment says something, it is named as the assessment. Where the idea is the reading behind this app, it is marked as that.' ],
  sections: [
    { h: 'The path in one view', g: 'The path', p: [
      '1. Calm the mind. Thoughts are the loudest signal, so they go first.\n2. Settle the body. A body at deep rest stops interrupting.\n3. Reach the door. Still, with the body asleep to you and the mind awake.\n4. Bring both halves of the brain into step.\n5. Wake the right hemisphere on purpose.\n6. Use the state for what you came to do.',
      'Each step makes the next one possible. Most people stall at 1 or 2, which is why the earlier training and the sitting practice come before anything else here.' ] },
    { h: 'Step 1: calm the mind. Why', g: 'The path', p: [
      'The verbal, reasoning half of the brain is the one that chatters, checks and screens what comes in. The assessment sets three approaches side by side: hypnosis suppresses the left hemisphere, meditation largely bypasses it, and biofeedback trains it to point at the right. The Gateway tapes work on calming it.',
      'Observation, concentration and the sitting practices are how you build this. Nothing later works while the chatter is in charge.' ] },
    { h: 'Step 2: settle the body. Why', g: 'The path', p: [
      'The assessment, following Bentov, says each heartbeat sends a pressure pulse down the aorta, and the echo from where the aorta splits (the bifurcation echo) makes an interference pattern. In a deeply relaxed, sleeplike body the echo fades as the heart eases its force and rate. What is left is a regular sine wave that resonates through the body and up into the head, at about 7 cycles a second, matching the brain.',
      'This is where proprioception comes in. It is the sense you use to check on the body, and it is the only gauge you have for whether the body has gone quiet. Put attention on your hands, your weight, your skin, and ask what is still reporting. The goal is not a good check. The goal is that every signal from the body is off, because any movement, even a slight one, sends a fresh burst and fires up other parts of the brain, which restarts your time. See {{door|The Door Behind Stillness}} for what to do with an itch.',
      'Which side of the brain does the reading? Both. Each hemisphere has a sensory strip and a motor strip, and each serves the opposite side of the body. But the picture of the whole body, where it is and whether it is yours, is built mostly on the right (damage to the right parietal lobe can make people ignore or disown the left side of their body). The assessment, following Stone and Bentov, says the same from the other direction: the sensory-motor areas it describes are on the right, and hypnosis reaches them by taking the left hemisphere out of the way. That is why step 1 comes first. The talkative left half has to settle before the right half can be read or woken.' ] },
    { h: 'Step 3: the door. Why', g: 'The path', p: [
      'The door is the point where the body has gone quiet enough that you lose its edges, while you stay awake. {{door|The Door Behind Stillness}} sets out the order for reaching it (widen, settle, dismiss thoughts, stay still) and why the body-sense check is the step many people skip.',
      'In the assessment this is the territory of Focus 12: the body at rest and awareness expanded, with the mind free to work.' ] },
    { h: 'Hypnosis and sleep: both', g: 'The path', p: [
      'The assessment does not call Gateway hypnosis, but says it shares features with it. Both quiet the left hemisphere and reduce what comes in from the senses. It also says that in REM sleep the body is switched off from the neck down and the left hemisphere is nearly shut down, which leaves the right free to respond. It adds that most people are said to go out of the body during REM.',
      'Its accelerated route uses both: the tapes to synchronize the halves, then strong REM-sleep frequencies for left-brain quiet and deep relaxation, then hypnotic suggestion so you can drop into the state at will.',
      'The reading behind this app is that both are right. Hypnosis is how you get to the door, and sleep shows what the body is doing when you are there.' ] },
    { h: 'Step 4 and 5: what the program used', g: 'The path', p: [
      'The assessment lists what the Monroe course did, and the list is what a lone person has to replace.',
      '• Paired tones (Hemi-Sync) to bring both halves of the brain into step and focus it.\n• Pink and white noise added to the sound for Focus 12, and further layers of sound for Focus 15 and 21. The assessment guesses these are intensified Hemi-Sync frequencies plus near-subliminal suggestion.\n• Strong REM-sleep frequencies, to quiet the left brain and relax the body deeply.\n• Hypnotic suggestion, so you can drop into the state at will, then the same steps again with the suggestion that an out-of-body movement will happen and be remembered.',
      'Its third condition for leaving the body on purpose is stimulating the right hemisphere to heightened alertness. It notes that this works against synchronization, but only once enough of the lower rhythm has been set up to carry you across. It does not say how to stimulate the right hemisphere beyond the sound and suggestion on its tapes.' ] },
    { h: 'Step 5 for one person alone', g: 'The path', p: [
      'The reading behind this app starts from the REM detail. In REM the body is still and shut off from the neck down, while the brain runs fast and looks almost awake on a recording, which is why REM is also called paradoxical sleep. The assessment ties REM to out-of-body movement. A faster rhythm after Focus 12 would put the brain where REM does, with the body already still. That is the reasoning for it. The assessment does not mention gamma, a timer, or this step.',
      'Alone, you have no tape, so you need something to do the job of the sound. One way is a timer you set beforehand to play a faster rhythm after you have been at Focus 12 for a while, so you are not watching the clock. The version closest to the assessment is binaural: headphones, a slightly different steady tone in each ear, so the brain hears the gap between them as the beat. Evidence that binaural beats at gamma speed change the brain is thin and mixed, so treat it as something to try, kept quiet, and set so nothing sounds until you are already in. The other is your own attention. The assessment says biofeedback is one of the quickest ways to get a person using their mind to influence something: the left hemisphere is taught to picture the result and recognize the feelings that go with it, and that reaches areas of the right brain. So in Focus 12, with the body silent, you are still conscious with a still brain, and can aim attention anywhere, including the brain itself. Use the left half, the part that can aim and name, to place attention on the right half, and think activity there. It will take a lot of practice and a lot of energy alone. Attention puts activity where it goes. That is measured for body parts and senses, and in theory it should hold for a hemisphere. It has not been tested for one.',
      'The brain gives you no feeling of itself to aim at, so use the wiring. The right hemisphere serves the left side of the body, the left ear and the left half of what you see. Picturing the left hand lit and humming, without moving it, points attention at the right side by the route that is open. This is a suggestion for how to aim, not part of the assessment or of the reading above.' ] },
    { h: 'Why it might work (a reading, not a finding)', g: 'The path', p: [
      'The idea runs like this. The body is still, so the brain gets almost no signal from it. When the right hemisphere then lights up, the activity is the only strong thing arriving. The mind takes it for the world it is in, much as a hypnotist redirects attention so that the body stops reporting and a suggestion feels real. Believing it is in a dreamlike world, it can let go of the physical one.',
      'Where the REM-frequency idea came from is not in the assessment. It says only that a former Monroe trainer found he could reliably produce out-of-body movement by taking people down into REM sleep first. One guess is that it came from research showing how active the brain becomes again as sleep deepens. That is a guess too.' ] },
    { h: 'What the Gateway tools are for', g: 'The path', p: [
      'Once the state is reached, the assessment describes the tools used inside it: color breathing, the energy bar, the resonant tuning, and the further expansions called Focus 15 (the past) and Focus 21 (the future), which it says few reach quickly. They are covered in {{assessment|The CIA assessment of the Gateway Experience}} and {{gwenergy|Color, light and the energy bar}}.' ] },
    { h: 'A note on care', g: 'The path', p: [
      'None of this is proven. Go no faster than your calm allows, do not force a state, and stop if you feel dizzy or unwell. This is a practice, not medical care.' ] },
  ] };
CAT_TEACH.door.more = ['process', 'extras'];
CAT_TEACH.process.links = [{ href: '#wake', t: 'Wake-up tones', one: 'A timed tone in each ear that starts only after you are in Focus 12' }];

// The five psychic-center exercises run as one sitting, with a buzz after each stage; the singles stay as the source text.
{
  const ids = ['c-heart', 'c-pituitary', 'c-pineal', 'c-throat', 'c-attune'], five = ids.map((id) => EXERCISES.find((e) => e.id === id));
  const steps = [{ t: 'Choose how long each stage lasts. A buzz marks the end of every stage, then the next one begins. As taught, these are built up in order over weeks, so stop after any stage you are not ready to go past.', gapPick: true }];
  five.forEach((e) => {
    const body = e.steps.filter((s) => !(s && s.secs));
    body.forEach((s, i) => { const o = typeof s === 'string' ? { t: s } : { ...s }; if (!i) o.t = `${e.title}\n${o.t}`; steps.push(o); });
    steps.push({ t: 'Stay with it quietly until the buzz.', gap: true });
  });
  five.forEach((e) => { e.hidden = true; });
  const series = { id: 'c-series', cat: 'centers', title: 'Psychic Centers 1–5', mins: 30, freq: 'Once or twice a week at first, building up in order',
    summary: 'Heart, pituitary, pineal, throat, then the combined attunement in one sitting, with a buzz after each stage.', steps };
  EXERCISES.splice(EXERCISES.indexOf(five[0]), 0, series); exById['c-series'] = series;
}

export const TEACH_BLOCK = { centers: 'chakra', observe: 'prep', concentrate: 'prep', attention: 'extras', emotion: 'prep', balance: 'energy' };
