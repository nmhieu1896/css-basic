import {
  styled
} from "/build/_shared/chunk-ZQB7JCVI.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive/typo.tsx?browser
init_react();

// app/routes/responsive/typo.tsx
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Text, null, "This is a narrow column of text, with a very long word: antidisestab", /* @__PURE__ */ React.createElement("span", {
    dangerouslySetInnerHTML: { __html: "&nbsp;" }
  }), "lishmentarianism."), /* @__PURE__ */ React.createElement(Text, null, "The same problem happens with URLs: https://spiritlabs.co/blog/why-frontend-developers-prefer-react"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Text, {
    break: "wrap"
  }, "This is a narrow column of text, with a very long word: antidisestab", /* @__PURE__ */ React.createElement("span", {
    dangerouslySetInnerHTML: { __html: "&nbsp;" }
  }), "lishmentarianism."), /* @__PURE__ */ React.createElement(Text, {
    break: "wrap"
  }, "The same problem happens with URLs: https://spiritlabs.co/blog/why-frontend-developers-prefer-react")));
}
var Wrapper = styled("main", {
  border: "1px solid $purple500",
  maxWidth: "50%",
  margin: "auto"
});
var Text = styled("p", {
  variants: {
    break: {
      wrap: {
        overflowWrap: "break-word"
      }
    }
  }
});
export {
  Index as default
};
//# sourceMappingURL=/build/routes/responsive/typo-PSYRNXH5.js.map
