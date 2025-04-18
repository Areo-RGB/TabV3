/*!
 * Tabler Demo v1.0.0 (https://tabler.io)
 * Copyright 2018-2025 The Tabler Authors
 * Copyright 2018-2025 codecalm.net Paweł Kuna
 * Licensed under MIT (https://github.com/tabler/tabler/blob/master/LICENSE)
 */
/**
 * demo-theme is specifically loaded right after the body and not deferred
 * to ensure we switch to the chosen dark/light theme as fast as possible.
 * This will prevent any flashes of the light theme (default) before switching.
 */

const themeStorageKey = "tablerTheme";
const defaultTheme = "light";
let selectedTheme;

// https://stackoverflow.com/a/901144
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop)
});
if (!!params.theme) {
  localStorage.setItem(themeStorageKey, params.theme);
  selectedTheme = params.theme;
} else {
  const storedTheme = localStorage.getItem(themeStorageKey);
  selectedTheme = storedTheme ? storedTheme : defaultTheme;
}
if (selectedTheme === 'dark') {
  document.body.setAttribute("data-bs-theme", selectedTheme);
} else {
  document.body.removeAttribute("data-bs-theme");
}
//# sourceMappingURL=demo-theme.js.map
