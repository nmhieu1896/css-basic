import {
  styled
} from "/build/_shared/chunk-M72R3G74.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive/typo/text-overflow.tsx?browser
init_react();

// app/routes/responsive/typo/text-overflow.tsx
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Title, null, "No style"), /* @__PURE__ */ React.createElement(Text, null, "This is a narrow column of text, with a very long word: antidisestablishmentarianism."), /* @__PURE__ */ React.createElement(Text, null, "This is a narrow column of text, with a very long word: antidisestab", /* @__PURE__ */ React.createElement("span", {
    dangerouslySetInnerHTML: { __html: "&nbsp;" }
  }), "lishmentarianism."), /* @__PURE__ */ React.createElement(Text, null, "This is a narrow column of text, with a very long word: antidisestab lishmentarianism."), /* @__PURE__ */ React.createElement(Text, null, "This is a narrow column of text, with a very long word: antidisestab-lishmentarianism."), /* @__PURE__ */ React.createElement(Text, null, "The same problem happens with URLs: https://spiritlabs.co/blog/why-frontend-developers-prefer-react"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Title, null, "overflow-wrap: break-word"), /* @__PURE__ */ React.createElement(Text, {
    break: "wrap"
  }, "This is a narrow column of text, with a very long word: antidisestablishmentarianism."), /* @__PURE__ */ React.createElement(Text, {
    break: "wrapWithHyphens"
  }, "The same problem happens with URLs: https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Title, null, "text-overflow: ellipsis"), /* @__PURE__ */ React.createElement(Text, {
    break: "ellipsis"
  }, "This is a narrow column of text, with a very long word: antidisestablishmentarianism."), /* @__PURE__ */ React.createElement(Text, {
    break: "ellipsis"
  }, "TheSameProblemHappensWithURLs:https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Title, null, "Single line ellipsis"), /* @__PURE__ */ React.createElement(Text, {
    break: "ellipsisSingle"
  }, "This is a narrow column of text, with a very long word: antidisestablishmentarianism."), /* @__PURE__ */ React.createElement(Text, {
    break: "ellipsisSingle"
  }, "The same problem happens with URLs: https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Title, null, "multiple line ellipsis"), /* @__PURE__ */ React.createElement(Text, {
    break: "ellipsisMultiple"
  }, "This is a narrow column of text, with a very long word: antidisestablishmentarianism. This is a narrow column of text, with a very long word: antidisestablishmentarianism."), /* @__PURE__ */ React.createElement(Text, {
    break: "ellipsisMultiple"
  }, "The same problem happens with URLs: https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact, The same problem happens with URLs: https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact"));
}
var Title = styled("h3", {
  textAlign: "center",
  color: "$purple500",
  fontSize: "$28",
  margin: 0
});
var Text = styled("p", {
  variants: {
    break: {
      wrap: {
        overflowWrap: "break-word"
      },
      wrapWithHyphens: {
        overflowWrap: "break-word",
        hyphens: "auto"
      },
      ellipsis: {
        overflow: "hidden",
        textOverflow: "ellipsis"
      },
      ellipsisSingle: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      },
      ellipsisMultiple: {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": 3
      }
    }
  }
});
export {
  Index as default
};
//# sourceMappingURL=/build/routes/responsive/typo/text-overflow-G7ICPWBU.js.map
