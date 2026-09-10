import { i as createAstro, c as createComponent, d as addAttribute, a as renderScript, b as renderTemplate, m as maybeRenderHead, n as renderTransition, r as renderComponent, o as renderSlot, p as renderHead } from './astro/server_BJ-8nbF1.mjs';
import 'piccolore';
import 'clsx';
/* empty css                           */

const $$Astro$4 = createAstro("https://silara.org");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/masid/OneDrive/Documents/GitHub/silara/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/masid/OneDrive/Documents/GitHub/silara/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$3 = createAstro("https://silara.org");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Logo;
  const { variant = "default", class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a href="/"${addAttribute(["logo", `logo--${variant}`, className], "class:list")} aria-label="Silara Foods — home" data-astro-cid-tvrurpns> <!-- Four-semicircle helix icon --> <div class="logo__icon" aria-hidden="true" data-astro-cid-tvrurpns> <span class="logo__dot logo__dot--tl" data-astro-cid-tvrurpns></span> <span class="logo__dot logo__dot--tr" data-astro-cid-tvrurpns></span> <span class="logo__dot logo__dot--bl" data-astro-cid-tvrurpns></span> <span class="logo__dot logo__dot--br" data-astro-cid-tvrurpns></span> </div> ${variant !== "inactive" && renderTemplate`<div class="logo__wordmark" data-astro-cid-tvrurpns> <span class="logo__brand" data-astro-cid-tvrurpns>Silara</span> <span class="logo__foods" data-astro-cid-tvrurpns>Foods</span> <sup class="logo__tm" data-astro-cid-tvrurpns>TM</sup> </div>`} </a> `;
}, "C:/Users/masid/OneDrive/Documents/GitHub/silara/src/components/Logo.astro", void 0);

const $$Astro$2 = createAstro("https://silara.org");
const $$Line = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Line;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["line", className], "class:list")} data-line role="separator" aria-hidden="true" data-astro-cid-wazrdnaz></div> `;
}, "C:/Users/masid/OneDrive/Documents/GitHub/silara/src/components/Line.astro", void 0);

const $$Astro$1 = createAstro("https://silara.org");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const navLinks = [
    { href: "/", label: "Vision" },
    { href: "/mission", label: "Mission" },
    { href: "/our-product", label: "Our Product" },
    { href: "/the-future", label: "The Future" },
    { href: "/contact", label: "Contact" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="site-header" data-astro-cid-3ef6ksr2${addAttribute(renderTransition($$result, "l7r54iwe", "none", "site-header"), "data-astro-transition-scope")}> <div class="site-header__inner" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Logo", $$Logo, { "variant": "smaller", "data-astro-cid-3ef6ksr2": true })} <!-- Desktop nav --> <nav class="site-header__nav" aria-label="Primary navigation" data-astro-cid-3ef6ksr2> <ul class="site-header__nav-list" role="list" data-astro-cid-3ef6ksr2> ${navLinks.map((link) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(link.href, "href")}${addAttribute([
    "site-header__nav-link",
    { "is-active": currentPath === link.href || link.href !== "/" && currentPath.startsWith(link.href) }
  ], "class:list")} data-astro-cid-3ef6ksr2> ${link.label} </a> </li>`)} </ul> </nav> <!-- Pill button — desktop only --> <button class="site-header__menu-btn" aria-label="Open navigation menu" aria-expanded="false" aria-controls="menu-overlay" id="menu-toggle" data-astro-cid-3ef6ksr2>
Menu
</button> </div> ${renderComponent($$result, "Line", $$Line, { "data-astro-cid-3ef6ksr2": true })} </header> `;
}, "C:/Users/masid/OneDrive/Documents/GitHub/silara/src/components/Header.astro", "self");

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte${addAttribute(renderTransition($$result, "tvayyljk", "none", "site-footer"), "data-astro-transition-scope")}> ${renderComponent($$result, "Logo", $$Logo, { "variant": "inactive", "data-astro-cid-sz7xmlte": true })} <nav class="site-footer__links" aria-label="Footer navigation" data-astro-cid-sz7xmlte> <ul class="site-footer__link-list" role="list" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a href="https://store.silara.org/" class="site-footer__link" target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte>
Shop Now
</a> </li> <li data-astro-cid-sz7xmlte><a href="/terms" class="site-footer__link" data-astro-cid-sz7xmlte>T&amp;C</a></li> <li data-astro-cid-sz7xmlte><a href="/privacy" class="site-footer__link" data-astro-cid-sz7xmlte>Privacy</a></li> <li data-astro-cid-sz7xmlte><span class="site-footer__link" data-astro-cid-sz7xmlte>GSTIN: 19CTHPM0710P1ZC</span></li> <li data-astro-cid-sz7xmlte> <span class="site-footer__link" data-astro-cid-sz7xmlte>Silara Foods is a brand by Silara Enterprises</span> </li> </ul> </nav> <p class="site-footer__legal" data-astro-cid-sz7xmlte>
Looking to import next generation foods? Reach us at
<a href="mailto:contact@silara.org" data-astro-cid-sz7xmlte>contact@silara.org</a>
for any feedback or inquiries.
</p> </footer> `;
}, "C:/Users/masid/OneDrive/Documents/GitHub/silara/src/components/Footer.astro", "self");

const $$MenuOverlay = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/mission", label: "Mission" },
    { href: "/our-product", label: "Our Product" },
    { href: "/the-future", label: "The Future" },
    { href: "/contact", label: "Contact" },
    { href: "/terms", label: "T&C" },
    { href: "/privacy", label: "Privacy" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="menu-overlay" id="menu-overlay" role="dialog" aria-modal="true" aria-label="Navigation menu" aria-hidden="true" data-astro-cid-7qtj4lak> <nav class="menu-overlay__nav" aria-label="Mobile navigation" data-astro-cid-7qtj4lak> <ul class="menu-overlay__list" role="list" data-astro-cid-7qtj4lak> ${navLinks.map((link) => renderTemplate`<li class="menu-overlay__item" data-astro-cid-7qtj4lak> <a${addAttribute(link.href, "href")} class="menu-overlay__link" data-astro-cid-7qtj4lak>${link.label}</a> </li>`)} </ul> </nav> </div>  ${renderScript($$result, "C:/Users/masid/OneDrive/Documents/GitHub/silara/src/components/MenuOverlay.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/masid/OneDrive/Documents/GitHub/silara/src/components/MenuOverlay.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://silara.org");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "Silara Foods \u2014 nutrient-dense foods built for modern life.",
    ogImage = "/images/og-default.webp",
    keywords,
    robots
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const ogImageURL = new URL(ogImage, Astro2.site);
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', ">", "", '<!-- Preload critical fonts --><link rel="preload" href="/fonts/PPNeueMontreal-Regular.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/PPNeueMontreal-Bold.woff2" as="font" type="font/woff2" crossorigin><link rel="canonical"', '><!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:type" content="website"><meta property="og:image"', '><meta property="og:site_name" content="Silara Foods"><!-- Twitter / X Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>', " \u2014 Silara Foods</title><!-- Astro View Transitions: client-side routing + smooth page transitions -->", "<!-- Per-page head additions (JSON-LD, extra meta, etc.) -->", "<!-- Hotjar Tracking Code for Silara Foods --><script>\n      (function(h,o,t,j,a,r){\n        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n        h._hjSettings={hjid:6675116,hjsv:6};\n        a=o.getElementsByTagName('head')[0];\n        r=o.createElement('script');r.async=1;\n        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n        a.appendChild(r);\n      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\n    <\/script>", '</head> <body> <div class="page"> <!-- WordPress: get_header() --> ', ' <!-- WordPress: the_content() / page template --> <main class="page__main" id="main-content"> ', " </main> <!-- WordPress: get_footer() --> ", " </div> <!-- Mobile / tablet slide-in nav overlay --> ", ' <!-- Mobile bottom nav bar: logo icon left, pill button right --> <div class="mobile-bottom-nav"> ', ' <button class="mobile-bottom-nav__btn" aria-label="Open navigation menu" aria-expanded="false" aria-controls="menu-overlay" id="menu-toggle-bottom">\nMenu\n</button> </div> ', " </body> </html>"])), addAttribute(description, "content"), keywords && renderTemplate`<meta name="keywords"${addAttribute(keywords, "content")}>`, robots && renderTemplate`<meta name="robots"${addAttribute(robots, "content")}>`, addAttribute(canonicalURL, "href"), addAttribute(`${title} \u2014 Silara Foods`, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "content"), addAttribute(ogImageURL, "content"), addAttribute(`${title} \u2014 Silara Foods`, "content"), addAttribute(description, "content"), addAttribute(ogImageURL, "content"), title, renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderSlot($$result, $$slots["head"]), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "MenuOverlay", $$MenuOverlay, {}), renderComponent($$result, "Logo", $$Logo, { "variant": "inactive" }), renderScript($$result, "C:/Users/masid/OneDrive/Documents/GitHub/silara/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/masid/OneDrive/Documents/GitHub/silara/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$Line as a };
