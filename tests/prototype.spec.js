import { test, expect } from "@playwright/test";
const press = async (page, ...keys) => {
  for (const key of keys) await page.keyboard.press(key);
};
const home = async (page) => {
  await page.goto("/");
  await page.keyboard.press("Enter");
  await expect(page.locator(".home-screen")).toBeVisible();
};

test("profiles have distinct backgrounds, focus states, and a selection transition", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Who's watching?" }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Sreshta", exact: true }),
  ).toBeFocused();
  await press(page, "ArrowRight");
  await expect(
    page.getByRole("button", { name: "Laasya", exact: true }),
  ).toBeFocused();
  await expect(page.locator(".backdrop").last()).toHaveCSS(
    "background-image",
    /ocean/,
  );
  await press(page, "ArrowRight");
  await expect(
    page.getByRole("button", { name: "Everyone", exact: true }),
  ).toBeFocused();
  await press(page, "Enter");
  await expect(page.locator(".profile-screen")).toHaveClass(/entering/);
  await expect(page.locator(".home-screen")).toBeVisible();
  await expect(page.locator("#greeting")).toContainText("Everyone");
  expect(errors).toEqual([]);
});

test("all four rails support remote focus, previews, and selection", async ({
  page,
}) => {
  await home(page);
  await press(page, "ArrowRight");
  await expect(page.locator(".hero h1")).toContainText("A world beneath.");
  await press(page, "ArrowDown");
  await expect(page.locator(".current-row h2")).toHaveText("Your Apps");
  for (let i = 0; i < 6; i++) await press(page, "ArrowRight");
  await expect(
    page.getByRole("button", { name: "Open Sony LIV", exact: true }),
  ).toBeFocused();
  await press(page, "Enter");
  await expect(page.getByRole("dialog")).toContainText("Sony LIV");
  await press(page, "Escape", "ArrowDown");
  await expect(page.locator(".current-row h2")).toHaveText("For You");
  await press(page, "ArrowDown", "ArrowRight", "Enter");
  await expect(page.getByRole("dialog")).toContainText("Tides");
  await press(page, "Enter");
  await expect(page.locator(".player-modal")).toContainText(
    "Your game would launch here.",
  );
  await press(page, "Escape", "Escape");
  await expect(page.locator(".content-card.focused")).toContainText("Tides");
});

test("content preview returns to the exact previous selection", async ({
  page,
}) => {
  await home(page);
  await press(page, "ArrowRight", "ArrowRight", "Enter");
  await expect(page.getByRole("dialog")).toContainText("64% watched");
  await press(page, "Enter");
  await expect(page.locator(".player-modal")).toContainText(
    "not live playback",
  );
  await press(page, "Escape", "Escape");
  await expect(page.locator(".content-card.focused")).toContainText(
    "Beyond Earth",
  );
  await press(page, "Escape");
  await expect(
    page.getByRole("button", { name: "Sreshta", exact: true }),
  ).toBeFocused();
});

test("search works with typed text, remote results, and empty results", async ({
  page,
}) => {
  await home(page);
  await press(page, "ArrowUp", "ArrowRight", "Enter");
  await expect(page.getByRole("dialog")).toContainText(
    "Find your next favorite.",
  );
  await page.keyboard.type("Lunar");
  await expect(page.locator(".result")).toHaveCount(1);
  await press(
    page,
    "ArrowDown",
    "ArrowDown",
    "ArrowDown",
    "ArrowDown",
    "Enter",
  );
  await expect(page.locator(".detail-modal h2")).toHaveText("Lunar");
  await press(page, "Escape");
  await expect(page.locator(".search-modal")).toBeVisible();
  await expect(page.locator(".result.focused")).toContainText("Lunar");
  await press(page, "Escape");
  await expect(
    page.getByRole("button", { name: "Search", exact: true }),
  ).toBeFocused();
  await press(page, "Enter");
  await page.keyboard.type("zzzzz");
  await expect(page.locator(".empty-results")).toBeVisible();
  await press(page, "Backspace");
  await expect(page.locator(".search-input")).toContainText("zzzz");
});

test("add profile is usable entirely with a remote", async ({ page }) => {
  await page.goto("/");
  await press(page, "ArrowRight", "ArrowRight", "ArrowRight", "Enter", "Enter");
  await expect(page.locator(".search-input")).toContainText("A");
  await press(
    page,
    "ArrowDown",
    "ArrowDown",
    "ArrowDown",
    "ArrowDown",
    "Enter",
  );
  await expect(
    page.getByRole("button", { name: "A", exact: true }),
  ).toBeFocused();
  await press(page, "Enter");
  await expect(page.locator("#greeting")).toContainText(", A");
});

test("settings persist motion and clock preferences; apps stay shared", async ({
  page,
}) => {
  await home(page);
  await press(page, "ArrowUp", "ArrowRight", "ArrowRight", "Enter");
  await expect(page.getByRole("dialog")).toContainText(
    "same installed apps and accounts",
  );
  await press(page, "Enter");
  await expect(page.locator("#stage")).toHaveClass(/reduced-motion/);
  await press(page, "ArrowDown", "Enter");
  expect(
    await page.evaluate(() => JSON.parse(localStorage.getItem("aether-prefs"))),
  ).toEqual({ reduced: true, clock24: true });
  await page.reload();
  await expect(page.locator("#stage")).toHaveClass(/reduced-motion/);
});

test("Wi-Fi simulation updates status without blocking browsing", async ({
  page,
}) => {
  await home(page);
  await press(page, "ArrowUp", "Enter", "Enter");
  await expect(page.getByRole("dialog")).toContainText("currently offline");
  await press(page, "Escape");
  await expect(
    page.getByRole("button", { name: "Wi-Fi: Offline" }),
  ).toBeFocused();
  await press(page, "ArrowDown", "Enter");
  await expect(page.locator(".detail-modal")).toBeVisible();
});

test("back cancels a profile transition and scale fits smaller screens", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("/");
  await press(page, "Enter", "Escape");
  await page.waitForTimeout(1000);
  await expect(page.locator(".profile-screen")).toBeVisible();
  expect(
    await page
      .locator("#stage")
      .evaluate((el) => Math.round(el.getBoundingClientRect().width)),
  ).toBe(1280);
  await page.screenshot({ path: "test-results/profiles.png" });
});

test("all artwork resolves locally and home has no runtime errors", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await home(page);
  for (const name of ["mountain", "forest", "ocean", "city"])
    expect((await page.request.get("/art/" + name + ".jpg")).status()).toBe(
      200,
    );
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "test-results/home.png" });
  expect(errors).toEqual([]);
});

test("profiles personalize history while keeping the same seven apps", async ({
  page,
}) => {
  await page.goto("/");
  await press(page, "ArrowRight", "Enter");
  await expect(page.locator("#greeting")).toContainText("Laasya");
  await expect(page.locator(".content-card.focused")).toContainText(
    "The Blue Hours",
  );
  await press(page, "Enter");
  await expect(page.locator(".detail-modal")).toContainText("35% watched");
  await press(page, "Escape", "ArrowDown");
  await expect(page.locator(".app-card")).toHaveCount(7);
});

test("Tab-selected Back control can be activated with Enter", async ({
  page,
}) => {
  await home(page);
  await press(page, "Enter");
  await page.getByRole("button", { name: "Back", exact: true }).focus();
  await press(page, "Enter");
  await expect(page.locator(".modal")).toHaveCount(0);
});

test("Home has four stacked sections and scrolls with wheel and remote", async ({
  page,
}) => {
  await home(page);
  await expect(page.locator(".section-tab")).toHaveCount(0);
  await expect(page.locator(".home-feed .shelf")).toHaveCount(4);
  const headings = await page.locator(".section-heading h2").allTextContents();
  expect(headings).toEqual([
    "Continue Watching",
    "Your Apps",
    "For You",
    "Games",
  ]);
  const feed = page.locator(".home-feed");
  await feed.hover({ position: { x: 1500, y: 400 } });
  await page.mouse.wheel(0, 650);
  await expect
    .poll(() => feed.evaluate((el) => el.scrollTop))
    .toBeGreaterThan(300);
  await press(page, "ArrowDown", "ArrowDown", "ArrowDown");
  await expect(page.locator(".current-row h2")).toHaveText("Games");
  await expect(page.locator(".content-card.focused")).toBeInViewport();
  await page.waitForTimeout(600);
  const before = await feed.evaluate((el) => el.scrollTop);
  await press(page, "Enter", "Escape");
  expect(await feed.evaluate((el) => el.scrollTop)).toBeCloseTo(before, 0);
  await press(page, "ArrowUp", "ArrowUp", "ArrowUp");
  await expect(page.locator(".current-row h2")).toHaveText("Continue Watching");
  await expect.poll(() => feed.evaluate((el) => el.scrollTop)).toBe(0);
});

test("app and content transitions fade without zoom", async ({ page }) => {
  await home(page);
  await expect(page.locator(".content-card.focused")).toHaveCSS(
    "transform",
    "none",
  );
  await press(page, "ArrowDown");
  await expect(page.locator(".app-card.focused")).toHaveCSS(
    "transform",
    "none",
  );
  await expect(page.locator(".backdrop").last()).toHaveCSS("transform", "none");
  await press(page, "Enter");
  await expect(page.locator(".modal")).toHaveCSS("animation-name", "fade-in");
  await press(page, "Enter");
  await expect(page.locator(".player-art")).toHaveCSS("animation-name", "none");
});

test("zoom is reserved for profile selection, not navigation focus", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".profile.focused .orb")).toHaveCSS(
    "transform",
    "none",
  );
  await press(page, "ArrowRight");
  await expect(page.locator(".profile.focused .orb")).toHaveCSS(
    "transform",
    "none",
  );
  await press(page, "Enter");
  await expect(page.locator(".profile-screen")).toHaveClass(/entering/);
  await expect(page.locator(".home-screen")).toBeVisible();
  await press(page, "ArrowUp");
  await expect(page.locator(".control.focused")).toHaveCSS("transform", "none");
});
