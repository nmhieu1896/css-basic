import {
  styled
} from "/build/_shared/chunk-ZQB7JCVI.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive/css-variable.tsx?browser
init_react();

// app/routes/responsive/css-variable.tsx
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Article, null, "Card 1"), /* @__PURE__ */ React.createElement(Article, null, "Card 2"), /* @__PURE__ */ React.createElement(Article, null, "Card 3"));
}
var Wrapper = styled("main", {
  "--spacing": "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "var(--spacing)",
  padding: "var(--spacing)"
});
var Article = styled("article", {
  borderRadius: "var(--spacing)",
  padding: "var(--spacing)"
});
export {
  Index as default
};
//# sourceMappingURL=/build/routes/responsive/css-variable-SSXBIWE3.js.map
