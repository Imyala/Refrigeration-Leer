const test = require("node:test");
const assert = require("node:assert");
const MD = require("../js/md.js");

test("headings render", () => {
  assert.match(MD.render("## Big"), /<h3>Big<\/h3>/);
  assert.match(MD.render("### Small"), /<h4>Small<\/h4>/);
});

test("paragraphs join continuation lines", () => {
  const html = MD.render("line one\nline two\n\nsecond para");
  assert.match(html, /<p>line one line two<\/p>/);
  assert.match(html, /<p>second para<\/p>/);
});

test("inline bold, italic and links", () => {
  const html = MD.render("**bold** and *italic* and [a link](https://example.com)");
  assert.match(html, /<b>bold<\/b>/);
  assert.match(html, /<i>italic<\/i>/);
  assert.match(html, /<a href="https:\/\/example\.com"[^>]*>a link<\/a>/);
});

test("unordered and ordered lists", () => {
  assert.match(MD.render("- one\n- two"), /<ul><li>one<\/li><li>two<\/li><\/ul>/);
  assert.match(MD.render("1. first\n2. second"), /<ol><li>first<\/li><li>second<\/li><\/ol>/);
});

test("callouts, including warning variant", () => {
  const html = MD.render("> note text");
  assert.match(html, /<div class="callout"><p>note text<\/p><\/div>/);
  const warn = MD.render(">! danger text");
  assert.match(warn, /<div class="callout warn">/);
});

test("tables render with header row and skip the separator", () => {
  const html = MD.render("| A | B |\n|---|---|\n| 1 | 2 |");
  assert.match(html, /<th>A<\/th><th>B<\/th>/);
  assert.match(html, /<td>1<\/td><td>2<\/td>/);
  assert.ok(!/---/.test(html), "separator row dropped");
});

test("!SIM directive renders a simulator link with params", () => {
  const html = MD.render("!SIM[Try it](fault=lowCharge&r=R134a)");
  assert.match(html, /class="sim-link"/);
  assert.match(html, /href="simulator\.html\?fault=lowCharge&amp;r=R134a"/);
  assert.match(html, /Try it/);
});

test("HTML in source text is escaped", () => {
  const html = MD.render("evil <script>alert(1)</script> text");
  assert.ok(!html.includes("<script>"), "script tag escaped");
  assert.match(html, /&lt;script&gt;/);
});
