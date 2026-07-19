#!/usr/bin/env node
// Generates static case-card HTML from cases.js and injects it into index.html
// between the <!-- CASES:START --> / <!-- CASES:END --> markers.
// Run this before every deploy: `node build.js`

const fs = require("fs");
const path = require("path");

const { COMPANIES, CASES } = require("./cases.js");

const companyOrder = ["visotsky", "appcake", "heartcore", "rosneft"];

function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function cardHTML(c) {
  return `
      <div class="card" data-id="${c.id}" tabindex="0" role="button" aria-expanded="false">
        <div class="card-tag">${esc(c.tag)}</div>
        <div class="card-title">${esc(c.title)}</div>
        <div class="card-hook">${esc(c.hook)}</div>
        <div class="card-foot">
          <span class="card-scale">${esc(c.scale)}</span>
          <span class="card-expand">Read brief →</span>
        </div>
      </div>`;
}

function galleryHTML(c) {
  if (!c.images || !c.images.length) return "";
  const shots = c.images
    .map(
      (img) => `
        <figure class="shot">
          <img src="${esc(img.src)}" alt="${esc(img.caption)}" loading="lazy">
          <figcaption>${esc(img.caption)}</figcaption>
        </figure>`
    )
    .join("");
  return `<div class="detail-gallery">${shots}</div>`;
}

function detailHTML(c) {
  return `
      <div class="detail" data-detail-for="${c.id}">
        <div class="detail-grid">
          <div class="detail-block"><h4>Context</h4><p>${esc(c.context)}</p></div>
          <div class="detail-block"><h4>Role</h4><p>${esc(c.role)}</p></div>
          <div class="detail-block"><h4>Impact</h4><p>${esc(c.impact)}</p></div>
        </div>
        ${galleryHTML(c)}
        <div class="detail-close" data-close="${c.id}">← Close</div>
      </div>`;
}

function companyGroupHTML(key) {
  const items = CASES.filter((c) => c.company === key);
  if (!items.length) return "";
  const meta = COMPANIES[key];
  const cards = items.map((c) => cardHTML(c) + detailHTML(c)).join("");
  return `
    <div class="company-group" data-company="${key}">
      <div class="company-head">
        <div class="company-name">${esc(meta.name)}</div>
        <div class="company-role">${esc(meta.role)}</div>
        <div class="company-dates">${esc(meta.dates)}</div>
      </div>
      <div class="grid" data-group="${key}">${cards}
      </div>
    </div>`;
}

function renderAll() {
  return companyOrder.map(companyGroupHTML).join("\n");
}

const indexPath = path.join(__dirname, "index.html");
const html = fs.readFileSync(indexPath, "utf8");

const START = "<!-- CASES:START -->";
const END = "<!-- CASES:END -->";
const startIdx = html.indexOf(START);
const endIdx = html.indexOf(END);

if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
  console.error("build.js: CASES:START/CASES:END markers not found in index.html");
  process.exit(1);
}

const before = html.slice(0, startIdx + START.length);
const after = html.slice(endIdx);
const output = `${before}\n${renderAll()}\n    ${after}`;

fs.writeFileSync(indexPath, output);
console.log(`build.js: injected ${CASES.length} cases (${companyOrder.length} groups) into index.html`);
