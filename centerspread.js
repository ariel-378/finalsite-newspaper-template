// ============================================================================
//  CENTERSPREAD CONTENT — the print-edition pieces shown on centerspread.html.
//  Editors manage these from the "Centerspread" tab in the editor dashboard;
//  this file is just the shipped starting content (like articles.js).
//
//  Piece types: "poem" (stanzas), "prose" (paragraphs), "image" (a painting or
//  photo, not tied to an article). Any piece may carry an optional
//  `reveal: { summary, answer }` — a "reveal the answer" toggle.
//  For poem/prose `body`: a blank line separates stanzas/paragraphs; a single
//  newline separates lines within a stanza.
// ============================================================================
window.WL_CENTERSPREAD = {
  pieces: [
    {
      id: "sample-poem",
      type: "poem",
      kicker: "Poem",
      title: "A Sample Spring Poem",
      byline: "By A Student Poet",
      body:
        "Replace this with a poem from your print edition.\n" +
        "Each line sits on its own line here,\n" +
        "and a blank line starts a new stanza.\n" +
        "\n" +
        "Delete this sample from the Centerspread tab,\n" +
        "or edit it into something of your own.",
    },
    {
      id: "sample-guess",
      type: "prose",
      kicker: "Guess Who",
      title: "A Sample Mystery",
      byline: "By The Editors",
      body:
        "Prose pieces read as normal paragraphs. Use this for a “guess the teacher” write-up, a short essay, or any print piece that isn't a poem.\n" +
        "\n" +
        "Turn on the reveal toggle to hide an answer behind a click, like this one.",
      reveal: { summary: "Reveal the answer", answer: "This is what appears when a reader clicks to reveal." },
    },
    {
      id: "sample-image",
      type: "image",
      kicker: "From the Print Edition",
      title: "A Sample Image Piece",
      byline: "By The Photo Staff",
      intro: "Use an image piece for a painting, a photo, or a scanned print puzzle — no article needed.",
      image: "media/riddle-2.png",
      alt: "A sample image from the print edition",
    },
  ],

  // Which interactive puzzles appear below the print pieces. true shows,
  // false hides. Editors toggle these from the Centerspread tab.
  puzzles: {
    crossword: true,
    spellingbee: true,
    connections: false,   // disabled in the original; toggle on from the editor
    wordsearch: true,
  },
};
