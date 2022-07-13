import {
  Link2 as Link,
  Outlet
} from "/build/_shared/chunk-ULYXG37Y.js";
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navigator, null, /* @__PURE__ */ React.createElement(Link, {
    to: "text-overflow"
  }, "text overflow"), /* @__PURE__ */ React.createElement(Link, {
    to: "print-style"
  }, "print-style"), /* @__PURE__ */ React.createElement(Link, {
    to: "masonry"
  }, "masonry")), /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Outlet, null)));
}
var Navigator = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28",
  marginBottom: "30px"
});
var Wrapper = styled("main", {
  border: "1px solid $purple500",
  maxWidth: "50%",
  margin: "auto"
});
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
//# sourceMappingURL=/build/routes/responsive/typo-KJADGUC3.js.map
