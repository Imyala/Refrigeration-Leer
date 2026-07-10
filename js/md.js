/* =========================================================================
   Tiny markdown-subset renderer for lesson content.

   Supported: ## / ### headings, paragraphs, - and 1. lists, | tables,
   > callouts (>! for warning callouts), **bold**, *italic*, [links](url),
   and a custom !SIM[label](params) directive that renders a button opening
   the simulator pre-configured via URL params.

   Loaded as a plain script in the browser (exposes `RefrigMd`) and
   require()-able in Node for the test suite. Content is trusted (authored
   in-repo), but text is still HTML-escaped before span markup is applied.
   ========================================================================= */
(function (root) {
  "use strict";

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function inline(s) {
    let out = esc(s);
    out = out.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
    out = out.replace(/\*([^*]+)\*/g, "<i>$1</i>");
    out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    return out;
  }

  function render(md) {
    const lines = md.split(/\r?\n/);
    const out = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];
      if (!line.trim()) { i++; continue; }

      if (/^### /.test(line)) { out.push("<h4>" + inline(line.slice(4)) + "</h4>"); i++; continue; }
      if (/^## /.test(line))  { out.push("<h3>" + inline(line.slice(3)) + "</h3>"); i++; continue; }

      const sim = line.match(/^!SIM\[([^\]]*)\]\(([^)]*)\)\s*$/);
      if (sim) {
        out.push(`<a class="sim-link" href="index.html?${esc(sim[2])}" target="_blank" rel="noopener">▶ ${inline(sim[1])}</a>`);
        i++; continue;
      }

      const fig = line.match(/^!FIG\[([a-z0-9-]+)\]\s*$/);
      if (fig) {
        const F = (typeof module !== "undefined" && typeof require !== "undefined")
          ? require("./figures.js")
          : root.RefrigFigures;
        const f = F && F.FIGURES[fig[1]];
        out.push(f
          ? `<figure class="fig">${f.svg}<figcaption>${esc(f.caption)}</figcaption></figure>`
          : `<!-- missing figure: ${esc(fig[1])} -->`);
        i++; continue;
      }

      if (/^>/.test(line)) {
        const warn = /^>!/.test(line);
        const buf = [];
        while (i < lines.length && /^>/.test(lines[i])) {
          buf.push(lines[i].replace(/^>!? ?/, ""));
          i++;
        }
        out.push(`<div class="callout${warn ? " warn" : ""}">${render(buf.join("\n"))}</div>`);
        continue;
      }

      if (/^- /.test(line)) {
        const items = [];
        while (i < lines.length && /^- /.test(lines[i])) { items.push("<li>" + inline(lines[i].slice(2)) + "</li>"); i++; }
        out.push("<ul>" + items.join("") + "</ul>");
        continue;
      }

      if (/^\d+\. /.test(line)) {
        const items = [];
        while (i < lines.length && /^\d+\. /.test(lines[i])) { items.push("<li>" + inline(lines[i].replace(/^\d+\. /, "")) + "</li>"); i++; }
        out.push("<ol>" + items.join("") + "</ol>");
        continue;
      }

      if (/^\|/.test(line)) {
        const rows = [];
        while (i < lines.length && /^\|/.test(lines[i])) { rows.push(lines[i]); i++; }
        const cells = (r) => r.replace(/^\|/, "").replace(/\|\s*$/, "").split("|").map(c => inline(c.trim()));
        let html = "<table>";
        rows.forEach((r, idx) => {
          if (idx === 1 && /^[\s|:\-]+$/.test(r)) return;   // separator row
          const tag = idx === 0 ? "th" : "td";
          html += "<tr>" + cells(r).map(c => `<${tag}>${c}</${tag}>`).join("") + "</tr>";
        });
        html += "</table>";
        out.push('<div class="table-wrap">' + html + "</div>");
        continue;
      }

      // paragraph: gather continuation lines until a blank or structural line
      const buf = [line];
      i++;
      while (i < lines.length && lines[i].trim() && !/^(##|###|- |\d+\. |\||>|!SIM|!FIG)/.test(lines[i])) {
        buf.push(lines[i]);
        i++;
      }
      out.push("<p>" + inline(buf.join(" ")) + "</p>");
    }
    return out.join("\n");
  }

  const api = { render, esc, inline };
  root.RefrigMd = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
