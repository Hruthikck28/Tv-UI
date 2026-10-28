# Aether TV

A cinematic, keyboard-controlled browser prototype for a shared TV. Designed on a 1920 × 1080 stage that scales to fit the browser while preserving TV safe margins.

## Run

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

Vite uses port 5173. Open the address printed by Vite in your browser. For a production build, run `npm run build`, then `npm run preview`.

In the managed cloud workspace, use `npm ci --cache /tmp/aether-npm` if the default npm cache is not writable.

## Remote controls

| Input | Action |
| --- | --- |
| Left / Right | Move between profiles, content, apps, or top controls |
| Down / Up | Move between the four Home sections; Up from Continue Watching reaches the top controls |
| Enter | Select the focused item |
| Escape / Backspace | Return one level; Backspace deletes letters in search/profile entry |
| Letter keys | Type directly while searching or naming a profile |
| Mouse | Hover to focus; click to select |

Start with **Sreshta**, **Laasya**, **Everyone**, or **Add Profile**. Each profile has a different backdrop. Sreshta, Laasya, and Everyone have distinct sample viewing histories and recommendations, while all profiles share the same seven pinned apps.

Select a profile → browse Continue Watching → inspect content details → open an animated artwork preview → return to the same card. Explore Your Apps, For You, and Games with Up/Down. Search and settings live in the top-right controls; the profile avatar returns to profile selection.

Search supports both a remote-controlled on-screen keyboard and physical typing. Back from search details restores the search query and focused result. Settings persist reduced-motion and clock-format preferences locally. New profiles and the simulated Wi-Fi state last for the current session.

## Prototype boundaries

This is a frontend design prototype. All movie/game titles, progress, recommendations, and account states are sample data. Playback is an animated artwork treatment, not video streaming. App and game actions preview the handoff; they do not launch installed software. The Wi-Fi control simulates connectivity without changing the device's network. No backend, authentication, or third-party accounts are required.

The sample titles are deliberately fictional rather than attaching unrelated artwork to real shows. Artwork is stored locally, so the running application needs no external image or font requests.

## Visual system

- **Canvas:** 1920 × 1080, 90 px horizontal safe margins; proportional scaling and letterboxing.
- **Surfaces:** dark slate, restrained translucent glass, blurred backgrounds, thin specular highlights.
- **Typography:** system sans-serif with editorial serif artwork treatments; 76–86 px hero titles.
- **Focus:** brighter glass, slight scale/depth, a single reflection sweep. Circular profiles receive one orbiting highlight.
- **Motion:** approximately 350–450 ms focus response, 850 ms profile entry, 900 ms image crossfade. Reduced motion removes decorative transitions.
- **Reusable UI:** profile orbs, icon controls, cinematic content cards, app tiles, progress bars, modal panels, keyboard keys, and setting rows.

## Validate

```sh
npm test
npm run build
```

Playwright uses `/usr/bin/chromium` when present. Elsewhere run `npx playwright install chromium`, or set `CHROMIUM_PATH` to an installed browser.

The tests exercise profile transitions, remote traversal through all sections, detail/preview navigation, retained focus, search and empty results, profile creation, settings persistence, connection simulation, smaller displays, local artwork, and browser runtime errors. Screenshots from the latest run are saved under the ignored `test-results/` directory.

## Files

- `src/main.js` — sample content, reusable rendering functions, navigation and interaction state.
- `src/style.css` — TV layout, glass surfaces, focus states, and motion.
- `public/art/` — local sample photography; source references in `SOURCES.md`.
- `tests/prototype.spec.js` — browser interaction tests.

Each cloud task already has an isolated checkout; use this existing repository without creating another Git worktree.

## Share on Vercel (GitHub optional)

Extract the project archive on your computer and open a terminal in the folder containing `package.json`. Install a current Node.js LTS release if needed, then run:

```sh
npm ci
npx vercel login
npx vercel --prod
```

Sign in through the browser when prompted. Choose your personal Vercel account, create a new project, and accept the detected Vite settings. `vercel.json` sets the build command to `npm run build` and the output directory to `dist`. No environment variables are needed. The CLI prints the deployed website URL to share with friends. If Vercel asks visitors to log in, check the project's Deployment Protection settings to allow public access as intended.

This route uploads directly to Vercel and does not require a GitHub push. Codex environment publication is separate from website deployment.
