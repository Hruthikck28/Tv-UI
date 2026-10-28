import "./style.css";

const icons = {
  flower:
    '<g fill="currentColor" stroke="none">' +
    Array.from(
      { length: 8 },
      (_, i) =>
        `<ellipse cx="12" cy="6.5" rx="1.5" ry="4.9" transform="rotate(${i * 45} 12 12)"/>`,
    ).join("") +
    "</g>",
  sunburst:
    '<g stroke="currentColor" stroke-width="1.2">' +
    Array.from(
      { length: 18 },
      (_, i) => `<path d="M12 3v7" transform="rotate(${i * 20} 12 12)"/>`,
    ).join("") +
    "</g>",
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.8 4.8"/>',
  settings:
    '<path d="m10 3-1 3-3 1-3 3 2 2-1 4 4 1 2 4 3-1 2-3 4-1-1-4 2-2-3-3-3-1-1-3Z"/><circle cx="12" cy="12" r="3"/>',
  wifi: '<path d="M2 8a16 16 0 0 1 20 0M5.5 12a10 10 0 0 1 13 0M9 16a5 5 0 0 1 6 0"/><circle cx="12" cy="20" r=".7" fill="currentColor"/>',
  play: '<path d="m8 5 11 7-11 7Z" fill="currentColor" stroke="none"/>',
  back: '<path d="m13 6-6 6 6 6M7 12h13"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  users:
    '<circle cx="9" cy="9" r="3.5"/><path d="M2 21v-2a7 7 0 0 1 14 0v2M16 6a3.5 3.5 0 0 1 0 7M18 16a5 5 0 0 1 4 5"/>',
  check: '<path d="m5 12 4 4L20 5"/>',
  game: '<path d="M7 7h10c3 0 5 10 3 12-2 1-5-3-5-3H9s-3 4-5 3C2 17 4 7 7 7Z"/><path d="M6 11h5M8.5 8.5v5M16 11h.1M18 13h.1"/>',
  moon: '<path d="M20 15A9 9 0 0 1 9 4 9 9 0 1 0 20 15Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3M4 4l2 2M18 18l2 2M4 20l2-2M18 6l2-2"/>',
  arrow: '<path d="m9 5 7 7-7 7"/>',
  heart:
    '<path d="M12 21S1 14 2 7c1-5 8-5 10 0 2-5 9-5 10 0 1 7-10 14-10 14Z"/>',
  sound:
    '<path d="M3 9h4l5-4v14l-5-4H3ZM16 8a6 6 0 0 1 0 8M19 5a10 10 0 0 1 0 14"/>',
};
const icon = (name, cls = "") =>
  `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.play}</svg>`;
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const art = (n) => `/art/${n}.jpg`;
const profiles = [
  { name: "Sreshta", art: "mountain", color: "peach", symbol: "flower" },
  { name: "Laasya", art: "ocean", color: "lavender", symbol: "sunburst" },
  { name: "Everyone", art: "city", color: "sage", symbol: "users" },
];
const content = [
  {
    id: "wild",
    title: "The wild, within.",
    short: "Wild North",
    provider: "Apple TV+",
    art: "mountain",
    genre: "Nature · Documentary",
    rating: "U",
    year: "2026",
    episode: "S1 · E3 — Into the silence",
    progress: 72,
    left: "18 min left",
    desc: "Beyond the familiar, a quieter world awaits. Journey through untamed landscapes, where nature tells its own story.",
    tag: "A LITTLE FURTHER FROM THE EVERYDAY",
  },
  {
    id: "blue",
    title: "A world beneath.",
    short: "The Blue Hours",
    provider: "Disney+",
    art: "ocean",
    genre: "Nature · Adventure",
    rating: "U",
    year: "2025",
    episode: "S1 · E5 — Open water",
    progress: 41,
    left: "32 min left",
    desc: "Drift into the extraordinary. Discover the hidden rhythms and remarkable life of our blue planet.",
    tag: "LET THE WORLD SLOW DOWN",
  },
  {
    id: "orbit",
    title: "Closer to infinity.",
    short: "Beyond Earth",
    provider: "Prime Video",
    art: "city",
    genre: "Science · Documentary",
    rating: "7+",
    year: "2026",
    episode: "S1 · E2 — A new perspective",
    progress: 64,
    left: "24 min left",
    desc: "An intimate journey beyond our atmosphere, through the eyes of the explorers who call space home.",
    tag: "SOME STORIES CHANGE YOUR PERSPECTIVE",
  },
  {
    id: "quiet",
    title: "Find your nowhere.",
    short: "Stillness",
    provider: "YouTube",
    art: "forest",
    genre: "Travel · Short film",
    rating: "U",
    year: "2026",
    episode: "A film by North Studio",
    progress: 28,
    left: "12 min left",
    desc: "A small escape to somewhere remarkable. Wander through mountain light and the beautiful spaces in between.",
    tag: "LESS NOISE. MORE WONDER.",
  },
];
const apps = [
  { name: "Netflix", logo: "NETFLIX", class: "netflix", art: "forest" },
  { name: "Prime Video", logo: "prime video", class: "prime", art: "city" },
  { name: "Disney+", logo: "Disney+", class: "disney", art: "ocean" },
  { name: "YouTube", logo: "YouTube", class: "youtube", art: "forest" },
  { name: "Apple TV+", logo: "tv+", class: "apple", art: "mountain" },
  { name: "JioHotstar", logo: "JioHotstar", class: "hotstar", art: "ocean" },
  { name: "Sony LIV", logo: "SONY LIV", class: "sony", art: "city" },
];
const games = [
  {
    id: "summit",
    title: "A different kind of climb.",
    short: "Summit",
    art: "forest",
    genre: "Adventure · Exploration",
    desc: "Take the long way up. A peaceful adventure through endless mountain landscapes.",
    provider: "Games",
    tag: "YOUR NEXT LITTLE ESCAPE",
  },
  {
    id: "tides",
    title: "Follow the current.",
    short: "Tides",
    art: "ocean",
    genre: "Puzzle · Relaxation",
    desc: "Find your flow in a world shaped by water. An unhurried puzzle adventure.",
    provider: "Games",
    tag: "MAKE A LITTLE ROOM FOR PLAY",
  },
  {
    id: "lunar",
    title: "Adventure in orbit.",
    short: "Lunar",
    art: "city",
    genre: "Adventure · Space",
    desc: "A little explorer. An infinite universe. Find your way among the stars.",
    provider: "Games",
    tag: "A WORLD WAITING TO BE DISCOVERED",
  },
  {
    id: "drift",
    title: "Leave the map behind.",
    short: "Drift",
    art: "mountain",
    genre: "Exploration · Casual",
    desc: "Find hidden trails in an atmospheric mountain world, one gentle turn at a time.",
    provider: "Games",
    tag: "PLAY AT YOUR OWN PACE",
  },
];
const sections = ["Continue Watching", "Your Apps", "For You", "Games"];
let saved = {};
try {
  saved = JSON.parse(localStorage.getItem("aether-prefs") || "{}");
} catch {}
const state = {
  screen: "profiles",
  profile: 0,
  profileFocus: 0,
  section: 0,
  index: 0,
  zone: "rail",
  control: 0,
  modal: null,
  modalIndex: 0,
  query: "",
  addName: "",
  searchIndex: 0,
  searchRow: 0,
  setting: 0,
  reduced:
    saved.reduced ?? matchMedia("(prefers-reduced-motion: reduce)").matches,
  clock24: saved.clock24 || false,
  wifi: true,
  entering: false,
};
let bg = "",
  toastTimer,
  transitionTimer,
  backgroundTimer,
  modalReturn = null,
  detailOrigin = null;
const app = document.querySelector("#app");
function resize() {
  const s = Math.min(innerWidth / 1920, innerHeight / 1080);
  document.querySelector("#stage").style.transform = `scale(${s})`;
  document.querySelector("#viewport").style.width = 1920 * s + "px";
  document.querySelector("#viewport").style.height = 1080 * s + "px";
}
addEventListener("resize", resize);
resize();
function backdrop(name) {
  if (name === bg) return;
  bg = name;
  const box = document.querySelector("#backdrops");
  const next = document.createElement("div");
  next.className = "backdrop";
  next.style.backgroundImage = `url("${art(name)}")`;
  box.append(next);
  requestAnimationFrame(() =>
    requestAnimationFrame(() => next.classList.add("visible")),
  );
  clearTimeout(backgroundTimer);
  backgroundTimer = setTimeout(() => {
    while (box.children.length > 1) box.firstElementChild.remove();
  }, 950);
}
function save() {
  try {
    localStorage.setItem(
      "aether-prefs",
      JSON.stringify({ reduced: state.reduced, clock24: state.clock24 }),
    );
  } catch {}
}
function toast(message) {
  const el = document.querySelector("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 3200);
}
function clock() {
  const now = new Date();
  return {
    time: now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: !state.clock24,
    }),
    date: now.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    }),
    greeting:
      now.getHours() < 5
        ? "Good night"
        : now.getHours() < 12
          ? "Good morning"
          : now.getHours() < 17
            ? "Good afternoon"
            : now.getHours() < 21
              ? "Good evening"
              : "Good night",
  };
}
const brand = `<div class="brand"><span class="brand-mark">a</span>aether<span class="brand-dot">TV</span></div>`;
function remoteHint(extra = "") {
  return `<footer class="remote-hint"><span><kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd> Navigate</span><span><kbd>↵</kbd> Select</span><span><kbd>esc</kbd> Back</span>${extra}<span class="prototype-label">INTERACTIVE DESIGN PROTOTYPE</span></footer>`;
}
function profileButton(p, i) {
  return `<button class="profile ${state.profileFocus === i ? "focused" : ""} ${state.entering && state.profileFocus === i ? "selected" : ""}" data-profile="${i}" aria-label="${esc(p.name)}" ${state.profileFocus === i ? 'data-active="true"' : ""}><span class="orb ${p.color}"><span class="orb-art"></span><span class="avatar-symbol">${icons[p.symbol] ? icon(p.symbol) : esc(p.symbol)}</span><span class="orb-reflection"></span><span class="orbit-shine"></span></span><span class="profile-name">${esc(p.name)}</span><span class="profile-caption">${i === profiles.length ? "Make it yours" : i === 2 ? "A little of everything" : "Your own little universe"}</span></button>`;
}
function renderProfiles() {
  const c = clock();
  backdrop((profiles[state.profileFocus] || { art: "mountain" }).art);
  return `<section class="profile-screen ${state.entering ? "entering" : ""}"><header class="profile-header">${brand}<span class="quiet-clock">${c.time}</span></header><div class="profile-intro"><p class="eyebrow">A SPACE FOR EVERY STORY</p><h1>Who's watching?</h1><p>Settle in. Make yourself at home.</p></div><div class="profiles">${[...profiles, { name: "Add Profile", color: "empty", symbol: "plus" }].map(profileButton).join("")}</div><div class="profile-bottom"><span class="tiny-spark">✧</span> One TV. A world for everyone.<p>Your favorites, your progress, your next great story.</p></div>${remoteHint()}</section>`;
}
function profileContent() {
  if (state.profile === 1)
    return [content[1], content[3], content[0], content[2]].map((x, i) => ({
      ...x,
      progress: [35, 82, 12, 56][i],
      left: ["35 min left", "3 min left", "48 min left", "29 min left"][i],
    }));
  if (state.profile === 2)
    return [content[2], content[0], content[3], content[1]].map((x, i) => ({
      ...x,
      progress: [20, 51, 10, 65][i],
      left: ["42 min left", "31 min left", "16 min left", "19 min left"][i],
    }));
  return content;
}
function items() {
  const personal = profileContent();
  return state.section === 1
    ? apps
    : state.section === 3
      ? games
      : state.section === 2
        ? [personal[2], personal[0], personal[1], personal[3]]
        : personal;
}
function selected() {
  return items()[state.index];
}
function header() {
  const c = clock();
  return `<header class="home-header"><div class="time-block"><div class="clock" id="clock">${c.time}</div><div class="date" id="date">${c.date}</div></div><div class="greeting"><span id="greeting">${c.greeting}, ${esc(profiles[state.profile].name)}</span><span>Your world. A little closer.</span></div><div class="home-brand">${brand}</div><div class="controls">${["wifi", "search", "settings"].map((name, i) => `<button class="control ${state.zone === "controls" && state.control === i ? "focused" : ""}" data-control="${i}" aria-label="${name === "wifi" ? "Wi-Fi: " + (state.wifi ? "Connected" : "Offline") : name === "search" ? "Search" : "Settings"}" ${state.zone === "controls" && state.control === i ? 'data-active="true"' : ""}>${icon(name)}${name === "wifi" ? `<span class="status-dot ${!state.wifi ? "offline" : ""}"></span>` : ""}</button>`).join("")}<button class="mini-profile ${state.zone === "controls" && state.control === 3 ? "focused" : ""}" data-control="3" aria-label="Switch profile" ${state.zone === "controls" && state.control === 3 ? 'data-active="true"' : ""}>${esc(profiles[state.profile].name[0])}</button></div></header>`;
}
function hero() {
  const x = selected();
  const isApp = state.section === 1,
    isGame = state.section === 3;
  return `<div class="hero" key="${x.id || x.name}"><div class="hero-eyebrow"><span class="line"></span>${isApp ? "ALL YOUR FAVORITES. ONE PLACE." : x.tag}</div><h1>${isApp ? `A little more<br>of what you love.` : x.title.replace(", ", ",<br>")}</h1><div class="hero-meta"><span class="provider">${isApp ? x.name : x.provider}</span><span class="meta-dot">·</span><span>${isApp ? "Shared on every profile" : x.genre}</span>${!isApp && !isGame ? `<span class="rating">${x.rating}</span><span>4K</span>` : ""}</div><p class="hero-description">${isApp ? `Your ${x.name} favorites are right here. Pick up a story, discover something new, and make an evening of it.` : x.desc}</p><div class="hero-action">${icon(isGame ? "game" : "play")}<span>${isApp ? "Open " + x.name : isGame ? "Play " + x.short : state.section === 0 ? "Resume " + x.short : "Discover " + x.short}</span><kbd>↵</kbd><span class="action-note">${state.section === 0 ? x.left : isGame ? "Sample game preview" : isApp ? "Same apps. Every profile." : "Picked for " + esc(profiles[state.profile].name)}</span></div></div><div class="ambient-caption"><span>${isApp ? "YOUR PINNED COLLECTION" : isGame ? "A MOMENT TO PLAY" : "AETHER EDITORIAL"}</span><i></i>${isApp ? "A world of entertainment" : isGame ? "Adventure is calling" : "Extraordinary, in every direction"}</div>`;
}
function card(x, i) {
  const active = state.zone === "rail" && state.index === i;
  if (state.section === 1)
    return `<button class="app-card ${x.class} ${active ? "focused" : ""}" data-card="${i}" aria-label="Open ${x.name}" ${active ? 'data-active="true"' : ""}><span class="app-logo">${x.class === "youtube" ? '<span class="youtube-play">▶</span>' : x.class === "apple" ? '<span class="apple-dot">●</span>' : ""}${x.logo}</span><span class="tile-shine"></span><span class="app-caption">${x.name}</span></button>`;
  return `<button class="content-card ${active ? "focused" : ""}" data-card="${i}" aria-label="${esc(x.short)}${x.progress ? ", " + x.progress + "% watched" : ""}" ${active ? 'data-active="true"' : ""}><div class="card-image" style="background-image:url('${art(x.art)}')"><span class="card-provider">${x.provider === "Games" ? icon("game") : x.provider}</span><div class="card-art-title ${x.id === "orbit" || x.id === "lunar" ? "spaced" : ""}">${x.short}</div><span class="tile-shine"></span>${state.section === 0 ? `<div class="progress-track"><span style="width:${x.progress}%"></span></div>` : ""}<span class="card-play">${icon(state.section === 3 ? "game" : "play")}</span></div><div class="card-info"><span>${x.short}</span><span>${state.section === 0 ? x.left : state.section === 3 ? "Play now" : x.provider}</span></div><div class="card-subtitle">${state.section === 0 ? x.episode : x.genre}</div></button>`;
}
function renderHome() {
  backdrop(selected().art);
  return `<section class="home-screen">${header()}${hero()}<section class="shelf"><nav class="section-nav" aria-label="Content sections">${sections.map((name, i) => `<button data-section="${i}" class="section-tab ${state.section === i ? "active" : ""}" aria-current="${state.section === i ? "page" : "false"}">${i === 0 ? '<span class="section-dot"></span>' : ""}${name}${i === 0 ? '<span class="count">4</span>' : ""}</button>`).join("")}<span class="shelf-context">${state.section === 0 ? "Pick up where you left off" : state.section === 1 ? "Pinned for everyone" : state.section === 2 ? "Picked for " + esc(profiles[state.profile].name) : "A little adventure awaits"} ${icon("arrow")}</span></nav><div class="rail-viewport"><div class="rail ${state.section === 1 ? "apps-rail" : ""}" style="transform:translateX(-${state.section === 1 ? Math.max(0, state.index - 5) * 250 : Math.max(0, state.index - 2) * 445}px)">${items().map(card).join("")}</div></div></section><div class="home-bottom"><span class="section-counter">0${state.section + 1}<span> / 04</span></span><span class="browse-hint">↑ ↓ <span>Explore your world</span></span><span class="sample-badge">SAMPLE COLLECTION</span></div>${remoteHint()}</section>`;
}
const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").concat(["SPACE", "⌫"]);
function keyboard(value, mode) {
  return `<div class="search-input"><span>${icon("search")}</span><span>${esc(value) || `<span class="placeholder">${mode === "add" ? "Your profile name" : "Movies, shows, apps & games"}</span>`}</span><span class="cursor"></span>${value ? `<button data-clear="${mode}" aria-label="Clear text">Clear</button>` : ""}</div><div class="keyboard" role="group" aria-label="On-screen keyboard">${keys.map((key, i) => `<button data-key="${i}" class="key ${state.searchRow === 0 && state.searchIndex === i ? "focused" : ""}" ${state.searchRow === 0 && state.searchIndex === i ? 'data-active="true"' : ""} aria-label="${key === "⌫" ? "Delete letter" : key === "SPACE" ? "Space" : key}">${key}</button>`).join("")}</div>`;
}
function results() {
  const q = state.query.toLowerCase().trim();
  return [
    ...content,
    ...apps.map((a) => ({
      ...a,
      short: a.name,
      provider: "App",
      desc: "Your shared " + a.name + " account.",
      genre: "Pinned app",
    })),
    ...games,
  ]
    .filter((x) =>
      `${x.short} ${x.provider} ${x.genre}`.toLowerCase().includes(q),
    )
    .slice(0, 6);
}
function modal() {
  if (!state.modal) return "";
  let body = "";
  const heading =
    state.modal === "add"
      ? "A space of your own."
      : state.modal === "search"
        ? "Find your next favorite."
        : state.modal === "settings"
          ? "Make yourself at home."
          : state.modal === "wifi"
            ? "Your connection."
            : "";
  if (state.modal === "search")
    body = `<p class="eyebrow">SEARCH ACROSS YOUR WORLD</p><h2>${heading}</h2>${keyboard(state.query, "search")}<div class="results-heading">${state.query ? "Search results" : "A little inspiration"}<span>${results().length} titles</span></div><div class="search-results">${
      results().length
        ? results()
            .map(
              (x, i) =>
                `<button class="result ${state.searchRow === 1 && state.searchIndex === i ? "focused" : ""}" data-result="${i}" ${state.searchRow === 1 && state.searchIndex === i ? 'data-active="true"' : ""}><img src="${art(x.art)}" alt=""/><span>${esc(x.short)}<small>${x.provider} · ${x.genre || "Entertainment"}</small></span>${icon("arrow")}</button>`,
            )
            .join("")
        : '<div class="empty-results">No stories found. Try “nature”, “space”, or an app name.</div>'
    }</div><p class="modal-note">Type with your keyboard, or navigate the letters with your remote.</p>`;
  if (state.modal === "add")
    body = `<p class="eyebrow">SAME APPS. YOUR OWN EXPERIENCE.</p><h2>${heading}</h2><p class="modal-lead">A name is all you need. Your stories will find you.</p>${keyboard(state.addName, "add")}<button class="primary add-submit ${state.searchRow === 1 ? "focused" : ""}" data-create ${state.searchRow === 1 ? 'data-active="true"' : ""}>${icon("plus")} Create profile</button><p class="modal-note">Profiles share installed apps and accounts. New profiles last for this session.</p>`;
  if (state.modal === "settings")
    body = `<p class="eyebrow">THE LITTLE THINGS</p><h2>${heading}</h2><div class="settings-user"><span class="settings-avatar">${esc(profiles[state.profile].name[0])}</span><div>${esc(profiles[state.profile].name)}<small>Personalized for you. Shared apps for everyone.</small></div></div><div class="settings-list">${[
      {
        title: "Reduce motion",
        sub: "Gentler transitions. The same sense of space.",
        icon: "moon",
        value: state.reduced ? "On" : "Off",
      },
      {
        title: "24-hour clock",
        sub: "Time, just the way you like it.",
        icon: "sun",
        value: state.clock24 ? "On" : "Off",
      },
      {
        title: "Switch profile",
        sub: "Someone else’s turn to choose.",
        icon: "users",
        value: "arrow",
      },
    ]
      .map(
        (x, i) =>
          `<button class="setting ${state.setting === i ? "focused" : ""}" data-setting="${i}" ${state.setting === i ? 'data-active="true"' : ""}>${icon(x.icon)}<span>${x.title}<small>${x.sub}</small></span>${x.value === "arrow" ? icon("arrow") : `<span class="toggle ${x.value === "On" ? "on" : ""}" aria-label="${x.value}"><i></i></span>`}</button>`,
      )
      .join(
        "",
      )}</div><div class="shared-note">${icon("check")} All profiles use the same installed apps and accounts.<br><span>Viewing progress and recommendations belong to each profile.</span></div><p class="modal-note">Appearance preferences are saved on this browser.</p>`;
  if (state.modal === "wifi")
    body = `<div class="connection-symbol">${icon("wifi")}</div><p class="eyebrow">CONNECTION PREVIEW</p><h2>${heading}</h2><p class="modal-lead">${state.wifi ? "Connected to Home Wi-Fi" : "You’re currently offline"}</p><div class="network-detail"><span>Signal strength</span><strong>${state.wifi ? "Excellent" : "Unavailable"}</strong></div><button class="primary focused" data-network data-active="true">Preview ${state.wifi ? "offline" : "connected"} state</button><p class="modal-note">Design simulation only. Your actual network is unchanged.</p>`;
  if (state.modal === "detail") {
    const x = state.detail;
    body = `<div class="detail-art" style="background-image:url('${art(x.art)}')"></div><div class="detail-body"><p class="eyebrow">${x.provider === "Games" ? "READY WHEN YOU ARE" : x.provider === "App" ? "YOUR PINNED APP" : "YOUR NEXT CHAPTER"}</p><h2>${esc(x.short)}</h2><div class="detail-meta">${x.provider} <span>·</span> ${x.genre || "Entertainment"} ${x.rating ? `<span class="rating">${x.rating}</span>` : ""}</div><p class="modal-lead">${x.desc || "Discover your next favorite story."}</p>${x.progress ? `<div class="detail-progress"><div class="progress-track"><span style="width:${x.progress}%"></span></div><span>${x.episode} · ${x.progress}% watched</span></div>` : ""}<button class="primary ${state.modalIndex === 0 ? "focused" : ""}" data-launch ${state.modalIndex === 0 ? 'data-active="true"' : ""}>${icon(x.provider === "Games" ? "game" : "play")} ${x.provider === "Games" ? "Play preview" : x.provider === "App" ? "Open app preview" : x.progress ? "Resume preview" : "Watch preview"}</button><button class="secondary ${state.modalIndex === 1 ? "focused" : ""}" data-close ${state.modalIndex === 1 ? 'data-active="true"' : ""}>Back to browsing</button><p class="modal-note">Sample content · No streaming accounts are connected.</p></div>`;
  }
  if (state.modal === "player") {
    const x = state.detail;
    body = `<div class="player-art" style="background-image:url('${art(x.art)}')"></div><div class="player-vignette"></div><div class="player-top"><span>${x.provider === "Games" ? "GAME" : x.provider === "App" ? "APP" : "CINEMATIC"} PREVIEW</span><span>${x.provider}</span></div><div class="player-center"><div class="preview-orbit">${icon(x.provider === "Games" ? "game" : "play")}</div><h2>${esc(x.short)}</h2><p>${x.provider === "Games" ? "Your game would launch here." : x.provider === "App" ? "Your shared app account would open here." : "Your story would continue here."}</p><p class="modal-note">This is an animated artwork preview, not live playback.</p><button class="primary focused" data-close data-active="true">${icon("back")} Back to ${x.provider === "Games" ? "game" : "details"}</button></div>`;
  }
  return `<div class="modal-backdrop"><section class="modal ${state.modal}-modal" role="dialog" aria-modal="true" aria-label="${state.modal === "detail" || state.modal === "player" ? esc(state.detail.short) : heading}" tabindex="-1"><button class="modal-back" data-close aria-label="Back">${icon("back")}<span>Back</span><kbd>esc</kbd></button>${body}</section></div>`;
}
function render() {
  document
    .querySelector("#stage")
    .classList.toggle("reduced-motion", state.reduced);
  app.innerHTML =
    (state.screen === "profiles" ? renderProfiles() : renderHome()) + modal();
  const scope = state.modal ? app.querySelector(".modal") : app;
  const active = scope.querySelector("[data-active]");
  if (active) active.focus({ preventScroll: true });
}
function openModal(name) {
  detailOrigin = null;
  modalReturn = {
    zone: state.zone,
    index: state.index,
    section: state.section,
    control: state.control,
  };
  state.modal = name;
  state.modalIndex = 0;
  state.searchIndex = 0;
  state.searchRow = 0;
  state.setting = 0;
  if (name === "search") state.query = "";
  if (name === "add") state.addName = "";
  render();
}
function closeModal() {
  if (state.modal === "player") {
    state.modal = "detail";
    render();
    return;
  }
  if (state.modal === "detail" && detailOrigin === "search") {
    state.modal = "search";
    detailOrigin = null;
    render();
    return;
  }
  state.modal = null;
  if (modalReturn) Object.assign(state, modalReturn);
  render();
}
function enterProfile() {
  if (state.profileFocus === profiles.length) {
    openModal("add");
    return;
  }
  state.profile = state.profileFocus;
  state.entering = true;
  render();
  clearTimeout(transitionTimer);
  transitionTimer = setTimeout(
    () => {
      state.entering = false;
      state.screen = "home";
      state.section = 0;
      state.index = 0;
      state.zone = "rail";
      state.modal = null;
      render();
    },
    state.reduced ? 30 : 850,
  );
}
function selectCard() {
  const x = selected();
  state.detail =
    state.section === 1
      ? {
          ...x,
          short: x.name,
          provider: "App",
          genre: "Shared account",
          desc: `Your ${x.name} account is available to every profile. This prototype previews the app handoff.`,
        }
      : x;
  openModal("detail");
}
function selectControl() {
  if (state.control === 3) {
    state.screen = "profiles";
    state.profileFocus = state.profile;
    render();
  } else openModal(["wifi", "search", "settings"][state.control]);
}
function setSection(index) {
  state.section = index;
  state.index = 0;
  state.zone = "rail";
  render();
}
function typeKey(key) {
  const field = state.modal === "add" ? "addName" : "query";
  if (key === "⌫") state[field] = state[field].slice(0, -1);
  else if (state[field].length < 30)
    state[field] += key === "SPACE" ? " " : key;
  render();
}
function createProfile() {
  const name = state.addName.trim();
  if (!name) {
    toast("Give your profile a name first.");
    return;
  }
  if (profiles.length >= 5) {
    toast("This prototype supports up to five profiles.");
    return;
  }
  profiles.push({
    name,
    art: "ocean",
    color: "lavender",
    symbol: name[0].toUpperCase(),
  });
  state.modal = null;
  state.profileFocus = profiles.length - 1;
  render();
  toast(`Welcome, ${name}. Select your profile to settle in.`);
}
function changeSetting(i) {
  if (i === 0) {
    state.reduced = !state.reduced;
    save();
  } else if (i === 1) {
    state.clock24 = !state.clock24;
    save();
  } else {
    state.modal = null;
    state.screen = "profiles";
    state.profileFocus = state.profile;
  }
  render();
}
function back() {
  if (state.entering) {
    clearTimeout(transitionTimer);
    state.entering = false;
    render();
    return;
  }
  if (state.modal) {
    closeModal();
    return;
  }
  if (state.screen === "home") {
    state.screen = "profiles";
    state.profileFocus = state.profile;
    render();
  } else toast("You’re home. Choose a profile to begin.");
}
app.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b || state.entering) return;
  if (b.dataset.profile !== undefined) {
    state.profileFocus = +b.dataset.profile;
    enterProfile();
  } else if (b.dataset.card !== undefined) {
    state.index = +b.dataset.card;
    state.zone = "rail";
    selectCard();
  } else if (b.dataset.control !== undefined) {
    state.control = +b.dataset.control;
    state.zone = "controls";
    selectControl();
  } else if (b.dataset.section !== undefined) setSection(+b.dataset.section);
  else if (b.hasAttribute("data-close")) closeModal();
  else if (b.dataset.key !== undefined) {
    state.searchIndex = +b.dataset.key;
    state.searchRow = 0;
    typeKey(keys[state.searchIndex]);
  } else if (b.hasAttribute("data-create")) createProfile();
  else if (b.dataset.clear !== undefined) {
    state[b.dataset.clear === "add" ? "addName" : "query"] = "";
    render();
  } else if (b.dataset.result !== undefined) {
    state.searchRow = 1;
    state.searchIndex = +b.dataset.result;
    state.detail = results()[state.searchIndex];
    detailOrigin = "search";
    state.modal = "detail";
    state.modalIndex = 0;
    render();
  } else if (b.dataset.setting !== undefined) {
    state.setting = +b.dataset.setting;
    changeSetting(state.setting);
  } else if (b.hasAttribute("data-network")) {
    state.wifi = !state.wifi;
    render();
  } else if (b.hasAttribute("data-launch")) {
    state.modal = "player";
    render();
  }
});
// Pointer and remote share the same focus state. Delegation survives view changes.
app.addEventListener("pointerover", (e) => {
  if (e.pointerType === "touch" || state.modal || state.entering) return;
  const b = e.target.closest("[data-profile],[data-card],[data-control]");
  if (!b || b.contains(e.relatedTarget)) return;
  let changed = false;
  if (
    b.dataset.profile !== undefined &&
    state.profileFocus !== +b.dataset.profile
  ) {
    state.profileFocus = +b.dataset.profile;
    changed = true;
  } else if (
    b.dataset.card !== undefined &&
    (state.index !== +b.dataset.card || state.zone !== "rail")
  ) {
    state.index = +b.dataset.card;
    state.zone = "rail";
    changed = true;
  } else if (
    b.dataset.control !== undefined &&
    (state.control !== +b.dataset.control || state.zone !== "controls")
  ) {
    state.control = +b.dataset.control;
    state.zone = "controls";
    changed = true;
  }
  if (changed) render();
});
function modalKey(key) {
  if (state.modal === "search" || state.modal === "add") {
    if (key === "Backspace") {
      typeKey("⌫");
      return;
    }
    if (key.length === 1 && /^[a-zA-Z0-9 .'-]$/.test(key)) {
      typeKey(key);
      return;
    }
    const isAdd = state.modal === "add";
    if (key === "ArrowDown") {
      if (state.searchRow === 0) {
        if (state.searchIndex < 21)
          state.searchIndex = Math.min(27, state.searchIndex + 7);
        else {
          state.searchRow = 1;
          state.searchIndex = 0;
        }
      } else if (!isAdd)
        state.searchIndex = Math.min(
          results().length - 1,
          state.searchIndex + 2,
        );
    } else if (key === "ArrowUp") {
      if (state.searchRow === 1) {
        if (!isAdd && state.searchIndex >= 2) state.searchIndex -= 2;
        else {
          state.searchRow = 0;
          state.searchIndex = 21;
        }
      } else state.searchIndex = Math.max(0, state.searchIndex - 7);
    } else if (key === "ArrowRight")
      state.searchIndex = Math.min(
        state.searchRow === 0
          ? 27
          : isAdd
            ? 0
            : Math.max(0, results().length - 1),
        state.searchIndex + 1,
      );
    else if (key === "ArrowLeft")
      state.searchIndex = Math.max(0, state.searchIndex - 1);
    else if (key === "Enter") {
      if (state.searchRow === 0) {
        typeKey(keys[state.searchIndex]);
        return;
      } else if (isAdd) {
        createProfile();
        return;
      } else if (results()[state.searchIndex]) {
        state.detail = results()[state.searchIndex];
        detailOrigin = "search";
        state.modal = "detail";
        state.modalIndex = 0;
      }
    }
    render();
    return;
  }
  if (state.modal === "settings") {
    if (key === "ArrowDown") state.setting = Math.min(2, state.setting + 1);
    if (key === "ArrowUp") state.setting = Math.max(0, state.setting - 1);
    if (key === "Enter") {
      changeSetting(state.setting);
      return;
    }
  } else if (state.modal === "detail") {
    if (["ArrowRight", "ArrowDown"].includes(key)) state.modalIndex = 1;
    if (["ArrowLeft", "ArrowUp"].includes(key)) state.modalIndex = 0;
    if (key === "Enter") {
      if (state.modalIndex === 0) state.modal = "player";
      else {
        closeModal();
        return;
      }
    }
  } else if (state.modal === "player" && key === "Enter") {
    closeModal();
    return;
  } else if (state.modal === "wifi" && key === "Enter")
    state.wifi = !state.wifi;
  render();
}
addEventListener("keydown", (e) => {
  if (e.altKey || e.ctrlKey || e.metaKey) return;
  const key = e.key;
  if (
    key === "Escape" ||
    (key === "Backspace" && !["search", "add"].includes(state.modal)) ||
    key === "BrowserBack"
  ) {
    e.preventDefault();
    back();
    return;
  }
  if (state.entering) return;
  if (
    key === "Enter" &&
    document.activeElement?.tagName === "BUTTON" &&
    app.contains(document.activeElement)
  ) {
    e.preventDefault();
    document.activeElement.click();
    return;
  }
  if (state.modal) {
    if (
      [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "Enter",
        "Backspace",
        " ",
      ].includes(key) ||
      key.length === 1
    ) {
      e.preventDefault();
      modalKey(key);
    }
    if (key === "Tab") {
      e.preventDefault();
      const buttons = [...app.querySelectorAll(".modal button")];
      const i = buttons.indexOf(document.activeElement);
      buttons[
        (i + (e.shiftKey ? -1 : 1) + buttons.length) % buttons.length
      ]?.focus();
    }
    return;
  }
  if (key === "Tab") return;
  if (
    !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter"].includes(key)
  )
    return;
  e.preventDefault();
  if (state.screen === "profiles") {
    if (key === "ArrowRight")
      state.profileFocus = Math.min(profiles.length, state.profileFocus + 1);
    if (key === "ArrowLeft")
      state.profileFocus = Math.max(0, state.profileFocus - 1);
    if (key === "Enter") {
      enterProfile();
      return;
    }
  } else if (state.zone === "controls") {
    if (key === "ArrowRight") state.control = Math.min(3, state.control + 1);
    if (key === "ArrowLeft") state.control = Math.max(0, state.control - 1);
    if (key === "ArrowDown") state.zone = "rail";
    if (key === "Enter") {
      selectControl();
      return;
    }
  } else {
    if (key === "ArrowRight")
      state.index = Math.min(items().length - 1, state.index + 1);
    if (key === "ArrowLeft") state.index = Math.max(0, state.index - 1);
    if (key === "ArrowUp") {
      if (state.section === 0) state.zone = "controls";
      else {
        state.section--;
        state.index = 0;
      }
    }
    if (key === "ArrowDown" && state.section < 3) {
      state.section++;
      state.index = 0;
    }
    if (key === "Enter") {
      selectCard();
      return;
    }
  }
  render();
});
setInterval(() => {
  const c = clock();
  const time = document.querySelector("#clock"),
    date = document.querySelector("#date"),
    greeting = document.querySelector("#greeting");
  if (time) time.textContent = c.time;
  if (date) date.textContent = c.date;
  if (greeting)
    greeting.textContent = `${c.greeting}, ${profiles[state.profile].name}`;
  const q = document.querySelector(".quiet-clock");
  if (q) q.textContent = c.time;
}, 30000);
render();
