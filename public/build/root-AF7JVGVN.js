import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-ULYXG37Y.js";
import {
  globalCss
} from "/build/_shared/chunk-ZQB7JCVI.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
var globalStyles = globalCss({
  [`html, body`]: {
    fontFamily: `"Roboto", "Gotham", san-serif`
  },
  body: {
    padding: "0",
    margin: "0",
    background: "hsl(0deg 0% 92%)"
  },
  "*": {
    boxSizing: "border-box"
  }
});
function App() {
  globalStyles();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement("link", {
    href: "http://fonts.cdnfonts.com/css/gotham",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  }), /* @__PURE__ */ React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=optional",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  meta
};
//# sourceMappingURL=/build/root-AF7JVGVN.js.map
