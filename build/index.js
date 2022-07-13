var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    __hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source))
      exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop) && (target[prop] = source[prop]);
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react2 = require("@remix-run/react"), import_server = require("react-dom/server");

// src/stitches.config.ts
var import_react = require("@stitches/react"), {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = (0, import_react.createStitches)({
  theme: {
    colors: {
      gray500: "hsl(206,10%,76%)",
      blue500: "hsl(206,100%,50%)",
      purple500: "hsl(252,78%,60%)",
      green500: "hsl(148,60%,60%)",
      red500: "hsl(352,100%,62%)",
      primary: "#993F98",
      primary400: "#AD65AD",
      secondary: "#3ec9c1",
      tertiary: "#757275",
      tertiary300: "#8B898B",
      tertiary100: "#C9C8C9",
      black1: "#000",
      grey1: "#eeedee"
    },
    fontSizes: {
      12: "calc(12rem / 16)",
      14: "calc(14rem / 16)",
      16: "calc(16rem / 16)",
      18: "calc(18rem / 16)",
      20: "calc(20rem / 16)",
      28: "calc(28rem / 16)",
      36: "calc(36rem / 16)"
    }
  },
  media: {
    tablet: "(min-width: 550px)",
    laptop: "(min-width: 1100px)",
    desktop: "(min-width: 1450px)"
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value })
  }
});

// app/entry.server.tsx
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react2.RemixServer, {
    context: remixContext,
    url: request.url
  })).replace(/<\/head>/, `<style>${getCssText()}</style></head>`);
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
}), globalStyles = globalCss({
  ":root": {
    "@font-face": {
      "font-family": "Recursive",
      src: `url('/fonts/recursive-variable.woff2') format('woff2 supports variations'),
        url('/fonts/recursive-variable.woff2') format('woff2-variations')`,
      "font-weight": "300 1000",
      "font-display": "swap"
    }
  },
  ["html, body"]: {
    fontFamily: '"Roboto", "Gotham", "Recursive", san-serif'
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
  return globalStyles(), /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react3.Meta, null), /* @__PURE__ */ React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  }), /* @__PURE__ */ React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=optional",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement(import_react3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react3.Outlet, null), /* @__PURE__ */ React.createElement(import_react3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react3.Scripts, null), /* @__PURE__ */ React.createElement(import_react3.LiveReload, null)));
}

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/positioned-layout.tsx
var positioned_layout_exports = {};
__export(positioned_layout_exports, {
  default: () => Index
});
var import_react4 = require("@remix-run/react");
function Index() {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Navigator, null, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "relative"
  }, "Relative"), /* @__PURE__ */ React.createElement("a", {
    href: "https://codesandbox.io/s/cranky-vaughan-tz96oc?file=/src/stacking.js",
    target: "_blank"
  }, "Absolute"), /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "fixed"
  }, "Fixed"), /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "modal"
  }, "Modal"), /* @__PURE__ */ React.createElement("a", {
    href: "https://codesandbox.io/s/cranky-vaughan-tz96oc?file=/src/stacking.js",
    target: "_blank"
  }, "Stacking context"), /* @__PURE__ */ React.createElement("a", {
    href: "https://codesandbox.io/s/cranky-vaughan-tz96oc?file=/src/overflow.js",
    target: "_blank"
  }, "Overflow")), /* @__PURE__ */ React.createElement(import_react4.Outlet, null));
}
var Wrapper = styled("div", {
  width: "100%",
  minHeight: "150vh",
  border: "1px solid $green500",
  background: "hsl(306deg 60% 76% / 0.15)",
  "& h1": {
    fontSize: "$28",
    textAlign: "center",
    margin: "0"
  },
  "& section": {
    border: "1px solid $purple500",
    padding: "40px",
    marginBottom: "20px"
  }
}), Navigator = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28"
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/positioned-layout/relative.tsx
var relative_exports = {};
__export(relative_exports, {
  default: () => Index2
});
function Index2() {
  return /* @__PURE__ */ React.createElement(Wrapper2, null, /* @__PURE__ */ React.createElement(Section, null, "\u201Cmargin-left\u201D", /* @__PURE__ */ React.createElement("div", {
    className: "pink box with-margin"
  })), /* @__PURE__ */ React.createElement(Section, null, "\u201Cleft\u201D", /* @__PURE__ */ React.createElement("div", {
    className: "pink box with-position"
  })));
}
var Wrapper2 = styled("div", {
  display: "flex",
  margin: "40px",
  gap: "40px"
}), Section = styled("section", {
  padding: "20px 0 !important",
  flex: 1,
  background: "#EEE",
  borderRadius: "4px",
  fontSize: "0.875rem",
  textAlign: "center",
  lineHeight: 3,
  "& .with-position": {
    position: "relative",
    left: "40px"
  },
  "& .with-margin": {},
  "& .box ": {
    height: "48px",
    border: "4px solid"
  },
  "& .pink.box": {
    borderColor: "deeppink"
  }
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/positioned-layout/fixed.tsx
var fixed_exports = {};
__export(fixed_exports, {
  default: () => Index3
});
function Index3() {
  return /* @__PURE__ */ React.createElement(Wrapper3, null, /* @__PURE__ */ React.createElement(Button, null, "Hello"));
}
var Wrapper3 = styled("div", {
  marginTop: "100px",
  marginLeft: "150px",
  height: "900px",
  border: "solid"
}), Button = styled("div", {
  width: "75px",
  height: "75px",
  lineHeight: "44px",
  borderRadius: "50%",
  background: "hsl(345deg 100% 40%)",
  color: "white",
  textAlign: "center",
  fontSize: "20px",
  fontWeight: "500",
  border: "3px solid white",
  boxShadow: "2px 2px 20px hsl(248deg 80% 40% / 0.33)",
  cursor: "pointer",
  position: "fixed",
  right: 0,
  top: 50
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/positioned-layout/modal.tsx
var modal_exports = {};
__export(modal_exports, {
  default: () => Index4
});
function Index4() {
  return /* @__PURE__ */ React.createElement(Wrapper4, null, /* @__PURE__ */ React.createElement(Modal, null, /* @__PURE__ */ React.createElement("div", {
    className: "modal-backdrop"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "modal"
  }, "Hellloooo ")));
}
var Wrapper4 = styled("div", {}), Modal = styled("div", {
  "& .modal-backdrop": {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "black",
    opacity: 0.5
  },
  "& .modal": {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "85%",
    height: "200px",
    margin: "auto",
    background: "white",
    padding: "16px",
    textAlign: "center"
  }
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flex-layout.tsx
var flex_layout_exports = {};
__export(flex_layout_exports, {
  default: () => Index5
});
function Index5() {
  return /* @__PURE__ */ React.createElement(Wrapper5, null, /* @__PURE__ */ React.createElement(Parent, null, /* @__PURE__ */ React.createElement("div", {
    className: "child"
  }, "Child"), /* @__PURE__ */ React.createElement("div", {
    className: "child"
  }, "Thisssssssssssssadasdas dasd asd asd asd asdasdas dasd asd asd sadsass is a child with longgggg text"), /* @__PURE__ */ React.createElement("div", {
    className: "child"
  }, "Child")));
}
var Wrapper5 = styled("div", {
  width: "100%",
  minHeight: "400px",
  background: "hsl(306deg 60% 76% / 0.15)"
}), Parent = styled("div", {
  display: "flex",
  backgroundColor: "$green500",
  "& .child": {
    backgroundColor: "#0074d9",
    padding: "20px",
    color: "white",
    border: "2px solid $red500",
    flexBasis: "100px",
    overflow: "scroll"
  },
  "& .child:nth-of-type(1)": {},
  "& .child:nth-of-type(2)": {},
  "& .child:nth-of-type(3)": {}
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flow-layout.tsx
var flow_layout_exports = {};
__export(flow_layout_exports, {
  default: () => Index6
});
var import_react5 = require("@remix-run/react");
var import_react_router_dom = require("react-router-dom");
function Index6() {
  return /* @__PURE__ */ React.createElement(Wrapper6, null, /* @__PURE__ */ React.createElement(Navigator2, null, /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: "width"
  }, "Width"), /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: "height"
  }, "Height")), /* @__PURE__ */ React.createElement(import_react5.Outlet, null));
}
var Wrapper6 = styled("div", {
  width: "100%",
  minHeight: "400px",
  background: "hsl(306deg 60% 76% / 0.15)",
  "& h1": {
    fontSize: "$28",
    textAlign: "center",
    margin: "0"
  },
  "& section": {
    border: "1px solid $purple500",
    padding: "40px",
    marginBottom: "20px"
  }
}), Navigator2 = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28",
  marginBottom: "30px"
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flow-layout/height.tsx
var height_exports = {};
__export(height_exports, {
  default: () => Index7
});
var import_react6 = require("@remix-run/react");
var import_react_router_dom2 = require("react-router-dom");
function Index7() {
  return /* @__PURE__ */ React.createElement(Wrapper7, null, /* @__PURE__ */ React.createElement("h1", null, "height algorithm"), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(Navigator3, null, /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
    to: "margin"
  }, "Margin Collapsing")), /* @__PURE__ */ React.createElement(import_react6.Outlet, null)));
}
var Wrapper7 = styled("div", {
  height: "100%",
  background: "hsl(148deg 60% 60% / 0.3)"
}), Navigator3 = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28"
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flow-layout/height/margin.tsx
var margin_exports = {};
__export(margin_exports, {
  default: () => Index8
});
function Index8() {
  return /* @__PURE__ */ React.createElement(Wrapper8, null, /* @__PURE__ */ React.createElement("p", null, "Paragraph One"), /* @__PURE__ */ React.createElement("p", null, "Paragraph Too"), /* @__PURE__ */ React.createElement("p", {
    style: { margin: "16px" }
  }, "Paragraph Tree"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    style: { margin: "64px" }
  }, "Paragraph For")), /* @__PURE__ */ React.createElement("div", {
    style: { overflow: "auto" }
  }, /* @__PURE__ */ React.createElement("p", null, "Paragraph Fine")), /* @__PURE__ */ React.createElement("p", {
    style: { margin: "-16px" }
  }, "Paragraph Sick"), /* @__PURE__ */ React.createElement("p", {
    style: { margin: "16px" }
  }, "Paragraph Seven"));
}
var Wrapper8 = styled("div", {
  border: "1px solid $blue500",
  margin: "30px",
  "& p": {
    textAlign: "center",
    margin: "32px"
  }
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flow-layout/width.tsx
var width_exports = {};
__export(width_exports, {
  default: () => Index9
});
var import_react7 = require("@remix-run/react");
var import_react_router_dom3 = require("react-router-dom");
function Index9() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "width algorithm"), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(Navigator4, null, /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    to: "auto-vs-100"
  }, "100% vs auto"), /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    to: "fit"
  }, "Content width")), /* @__PURE__ */ React.createElement(import_react7.Outlet, null)));
}
var Navigator4 = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28"
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flow-layout/width/auto-vs-100.tsx
var auto_vs_100_exports = {};
__export(auto_vs_100_exports, {
  default: () => Index10
});
function Index10() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper9, {
    className: "100%"
  }, "width: 100%"), /* @__PURE__ */ React.createElement(Wrapper9, {
    className: "auto"
  }, "width: auto"));
}
var Wrapper9 = styled("div", {
  width: "100%",
  height: "50px",
  border: "1px solid $blue500",
  margin: "20px 20px",
  textAlign: "center",
  fontSize: "$20",
  lineHeight: "50px",
  textTransform: "uppercase",
  "&.100%": {
    width: "100%"
  },
  "&.auto": {
    width: "auto"
  }
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/flow-layout/width/fit.tsx
var fit_exports = {};
__export(fit_exports, {
  default: () => Index11
});
function Index11() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(H2, null, "Short"), /* @__PURE__ */ React.createElement(H2, null, "A mid-length heading, mid-length heading"), /* @__PURE__ */ React.createElement(H2, null, "The longest heading you've ever seen in your life, will it ever end,The longest heading you've ever seen in your life, will it ever end,"));
}
var H2 = styled("h2", {
  background: "$green500",
  letterSpacing: "1.5px",
  width: "fit-content"
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive.tsx
var responsive_exports = {};
__export(responsive_exports, {
  default: () => Index12
});
var import_react_router_dom4 = require("react-router-dom"), import_react8 = require("@remix-run/react");
function Index12() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Navigator5, null, /* @__PURE__ */ React.createElement(import_react_router_dom4.Link, {
    to: "css-variable"
  }, "CSS Variables"), /* @__PURE__ */ React.createElement(import_react_router_dom4.Link, {
    to: "non-breakpoint"
  }, "Non Breakpoint"), /* @__PURE__ */ React.createElement(import_react_router_dom4.Link, {
    to: "typo"
  }, "typo")), /* @__PURE__ */ React.createElement(import_react8.Outlet, null));
}
var Navigator5 = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28",
  marginBottom: "30px"
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive/non-breakpoint.tsx
var non_breakpoint_exports = {};
__export(non_breakpoint_exports, {
  default: () => non_breakpoint_default
});
function non_breakpoint_default() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper10, null, /* @__PURE__ */ React.createElement("div", {
    className: "column"
  }, /* @__PURE__ */ React.createElement("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."), /* @__PURE__ */ React.createElement("p", null, "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))), /* @__PURE__ */ React.createElement(Form, null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    placeholder: "Name"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "email",
    placeholder: "Email Address"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "submit",
    value: "Subscribe"
  })));
}
var Wrapper10 = styled("main", {
  ".column": {
    width: "clamp(500px, 65%, 800px)",
    background: "white",
    borderRadius: "4px",
    padding: "24px",
    margin: "0 auto"
  }
}), Form = styled("form", {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  background: "white",
  border: "solid 1px $purple500",
  margin: "auto",
  padding: "100px 20px",
  input: {
    border: "none",
    background: "hsl(0 0% 93%)",
    borderRadius: ".25rem",
    padding: ".75rem 1rem"
  },
  'input[type="submit"]': {
    background: "hotpink",
    color: "white",
    boxShadow: "0 .75rem .5rem -.5rem hsl(0 50% 80%)"
  },
  "& > input": {
    flex: "1 1 10ch",
    margin: ".5rem"
  },
  '& > input[type="email"]': {
    flex: "3 1 30ch"
  }
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive/css-variable.tsx
var css_variable_exports = {};
__export(css_variable_exports, {
  default: () => Index13
});
function Index13() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper11, null, /* @__PURE__ */ React.createElement(Article, null, "Card 1"), /* @__PURE__ */ React.createElement(Article, null, "Card 2"), /* @__PURE__ */ React.createElement(Article, null, "Card 3")), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Box, {
    style: { background: "var(--pink)" }
  }), /* @__PURE__ */ React.createElement(Box, {
    style: { background: "var(--pinkred)" }
  }), /* @__PURE__ */ React.createElement(Box, {
    style: { background: "var(--red)" }
  }), /* @__PURE__ */ React.createElement(Box, {
    style: { background: "var(--orange)" }
  }), /* @__PURE__ */ React.createElement(Box, {
    style: { background: "var(--yellow)" }
  }), /* @__PURE__ */ React.createElement(Box, {
    style: {
      background: `linear-gradient(
                            45deg,
                            var(--red),
                            var(--purple)
                        );`
    }
  })));
}
var Wrapper11 = styled("main", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "var(--spacing)",
  padding: "var(--spacing)",
  "--spacing": "8px",
  "@media (min-width: 768px)": {
    "--spacing": "32px"
  },
  "@media (min-width: 1024px)": {
    "--spacing": "64px"
  }
}), Article = styled("article", {
  background: "white",
  height: "200px",
  boxShadow: "0px 2px 16px hsla(0deg 0% 0% / 0.2)",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  maxWidth: "600px",
  borderRadius: "var(--spacing)",
  padding: "var(--spacing)"
}), Row = styled("div", {
  display: "flex",
  padding: "8px",
  gap: "8px",
  justifyContent: "center",
  "--red-hue": "0deg",
  "--intense": "100% 50%",
  "--red": `hsl(
    var(--red-hue) var(--intense)
  )`,
  "--orange": `hsl(
    calc(var(--red-hue) + 20deg)
    var(--intense)
  )`,
  "--yellow": `hsl(
    calc(var(--red-hue) + 40deg)
    var(--intense)
  )`,
  "--pinkred": `hsl(
    calc(var(--red-hue) - 20deg)
    var(--intense)
  )`,
  "--pink": `hsl(
    calc(var(--red-hue) - 40deg)
    var(--intense)
  )`,
  "--purple": `hsl(
    calc(var(--red-hue) - 80deg)
    var(--intense)
  )`
}), Box = styled("div", {
  width: "100px",
  height: "100px",
  borderRadius: "4px"
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive/typo.tsx
var typo_exports = {};
__export(typo_exports, {
  default: () => Index14
});
var import_react9 = require("@remix-run/react");
function Index14() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navigator6, null, /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: "text-overflow"
  }, "text overflow"), /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: "print-style"
  }, "print-style"), /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: "masonry"
  }, "masonry"), /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: "loading"
  }, "loading")), /* @__PURE__ */ React.createElement(Wrapper12, null, /* @__PURE__ */ React.createElement(import_react9.Outlet, null)));
}
var Navigator6 = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28",
  marginBottom: "30px"
}), Wrapper12 = styled("main", {
  border: "1px solid $purple500",
  maxWidth: "50%",
  margin: "auto"
}), Title = styled("h3", {
  textAlign: "center",
  color: "$purple500",
  fontSize: "$28",
  margin: 0
}), Text = styled("p", {
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

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive/typo/text-overflow.tsx
var text_overflow_exports = {};
__export(text_overflow_exports, {
  default: () => Index15
});
function Index15() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Title2, null, "No style"), /* @__PURE__ */ React.createElement(Text2, null, "This is a narrow column of text, with a very long word: antidisestablishmentarianism."), /* @__PURE__ */ React.createElement(Text2, null, "This is a narrow column of text, with a very long word: antidisestab", /* @__PURE__ */ React.createElement("span", {
    dangerouslySetInnerHTML: { __html: "&nbsp;" }
  }), "lishmentarianism."), /* @__PURE__ */ React.createElement(Text2, null, "This is a narrow column of text, with a very long word: antidisestab lishmentarianism."), /* @__PURE__ */ React.createElement(Text2, null, "This is a narrow column of text, with a very long word: antidisestab-lishmentarianism."), /* @__PURE__ */ React.createElement(Text2, null, "The same problem happens with URLs: https://spiritlabs.co/blog/why-frontend-developers-prefer-react"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Title2, null, "overflow-wrap: break-word"), /* @__PURE__ */ React.createElement(Text2, {
    break: "wrap"
  }, "This is a narrow column of text, with a very long word: antidisestablishmentarianism."), /* @__PURE__ */ React.createElement(Text2, {
    break: "wrapWithHyphens"
  }, "The same problem happens with URLs: https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Title2, null, "text-overflow: ellipsis"), /* @__PURE__ */ React.createElement(Text2, {
    break: "ellipsis"
  }, "This is a narrow column of text, with a very long word: antidisestablishmentarianism."), /* @__PURE__ */ React.createElement(Text2, {
    break: "ellipsis"
  }, "TheSameProblemHappensWithURLs:https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Title2, null, "Single line ellipsis"), /* @__PURE__ */ React.createElement(Text2, {
    break: "ellipsisSingle"
  }, "This is a narrow column of text, with a very long word: antidisestablishmentarianism."), /* @__PURE__ */ React.createElement(Text2, {
    break: "ellipsisSingle"
  }, "The same problem happens with URLs: https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Title2, null, "multiple line ellipsis"), /* @__PURE__ */ React.createElement(Text2, {
    break: "ellipsisMultiple"
  }, "This is a narrow column of text, with a very long word: antidisestablishmentarianism. This is a narrow column of text, with a very long word: antidisestablishmentarianism."), /* @__PURE__ */ React.createElement(Text2, {
    break: "ellipsisMultiple"
  }, "The same problem happens with URLs: https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact, The same problem happens with URLs: https://spiritlabs.co/blog/whyFrontendDevelopersPreferReact"));
}
var Title2 = styled("h3", {
  textAlign: "center",
  color: "$purple500",
  fontSize: "$28",
  margin: 0
}), Text2 = styled("p", {
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

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive/typo/print-style.tsx
var print_style_exports = {};
__export(print_style_exports, {
  default: () => Index16
});
function Index16() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper13, null, /* @__PURE__ */ React.createElement(P, {
    borderClr: "blue"
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), /* @__PURE__ */ React.createElement(P, {
    borderClr: "gray"
  }, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."), /* @__PURE__ */ React.createElement(P, {
    borderClr: "red"
  }, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."), /* @__PURE__ */ React.createElement(P, {
    borderClr: "purple"
  }, "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."), /* @__PURE__ */ React.createElement(P, {
    borderClr: "green"
  }, 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.')), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Book, null, /* @__PURE__ */ React.createElement("h2", null, "Chapter 1"), /* @__PURE__ */ React.createElement("p", null, "Outside the space-warp chamber, Rizal's great green sun had already set. Thick olive dusk eddied through the interplanetary transit center. I swore under my breath and slammed shut the warp-hatch switch."), /* @__PURE__ */ React.createElement("p", null, "Locking bars whispered back. The hatch revolved on its axis, slow as an asteroid eroding. I threw another quick glance at my chrono. It still read the same as before: six Earth hours more\u2026 six hours to ferret out the truth or be forever reconditioned."), /* @__PURE__ */ React.createElement("p", null, "\u2014Six hours, that is, if Controller Alfred Kruze didn't cut it shorter."), /* @__PURE__ */ React.createElement("p", null, "And if he did, Rizal might very well change status. Today, it was billed as the FedGov's outermost bastion against the Kel. Tomorrow, it could prove man's fatal flaw, the Achilles heel in our whole system of defenses."), /* @__PURE__ */ React.createElement("p", null, "In which case\u2014"), /* @__PURE__ */ React.createElement("p", null, "Involuntarily, I shivered."), /* @__PURE__ */ React.createElement("p", null, "\u201CAgent Traynor\u2014?\u201D"), /* @__PURE__ */ React.createElement("p", null, "The voice came from the shadows. A dull, phlegmatic, tranquilized, conditioned voice. I stopped short; turned fast. \u201CWho's asking?\u201D"), /* @__PURE__ */ React.createElement("p", null, "The man shrugged stolidly, not even picking up my tension. \u201CI'm a port rep, Agent Traynor. Port rep second, that is\u2014\u201D"), /* @__PURE__ */ React.createElement("p", null, "\u201CSo who told you to come out here? Who said you should meet me?\u201D"), /* @__PURE__ */ React.createElement("p", null, "\u201COh\u2026\u201D A pause. \u201CWell, you see, there's this sigman, Agent Traynor. Up in the Interworld Communications section. He had a regular 7-D clearance report that a FedGov Security investigation agent was warping in\u2014you have to file a 7-D on all warpings, you know, Agent Traynor, on account of restrictives. So\u2014well, the rep first was out to eat, so I just notified Rizal Security, just a routine report, and the unit controller there, an Agent Gaylord, he said for me to meet you, and\u2014\u201D"), /* @__PURE__ */ React.createElement("p", null, "I bit down hard and shifted my weight, both at once, wondering if a broken jaw would interfere with the work of a port rep second."), /* @__PURE__ */ React.createElement("p", null, "Only then, all at once, I caught the unmistakable whish of a grav-car sweeping in."), /* @__PURE__ */ React.createElement("p", null, "The lights hit us almost in the same instant. Two seconds later a man who said he was Agent Gaylord was jumping down and locking wrists with me in Rizal's traditional greeting."), /* @__PURE__ */ React.createElement("p", null, "Even that wrist-lock set my teeth on edge. It was too solid, too stolid, too thorough a job of conditioning."), /* @__PURE__ */ React.createElement("p", null, "Or was it maybe, just a trifle over-done?")));
}
var Wrapper13 = styled("div", {
  columns: "2",
  columnGap: "16px",
  padding: "16px"
}), P = styled("p", {
  border: "3px solid",
  variants: {
    borderClr: {
      purple: { borderColor: "$purple500" },
      red: { borderColor: "$red500" },
      green: { borderColor: "$green500" },
      blue: { borderColor: "$blue500" },
      gray: { borderColor: "$gray500" }
    }
  }
}), Book = styled("main", {
  width: "160%",
  transform: "translateX(-18%)",
  maxWidth: "64rem",
  margin: "32px auto",
  border: "2px solid hsl(35deg 10% 40%)",
  columnCount: 2,
  columnGap: "150px",
  padding: "50px",
  background: `linear-gradient(
    to right,
    hsl(35deg, 30%, 90%),
    hsl(35deg, 30%, 90%) 47%,
    hsl(35deg, 30%, 70%) 49.5%,
    hsl(35deg, 20%, 50%) 50%,
    hsl(35deg, 30%, 70%) 50.5%,
    hsl(35deg, 30%, 90%) 53%,
    hsl(35deg, 30%, 90%)
  )`
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive/typo/loading.tsx
var loading_exports = {};
__export(loading_exports, {
  default: () => Index17
});
function Index17() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Book2, null, /* @__PURE__ */ React.createElement("h2", null, "Chapter 1"), /* @__PURE__ */ React.createElement("p", null, "Outside the space-warp chamber, Rizal's great green sun had already set. Thick olive dusk eddied through the interplanetary transit center. I swore under my breath and slammed shut the warp-hatch switch."), /* @__PURE__ */ React.createElement("p", null, "Locking bars whispered back. The hatch revolved on its axis, slow as an asteroid eroding. I threw another quick glance at my chrono. It still read the same as before: six Earth hours more\u2026 six hours to ferret out the truth or be forever reconditioned."), /* @__PURE__ */ React.createElement("p", null, "\u2014Six hours, that is, if Controller Alfred Kruze didn't cut it shorter."), /* @__PURE__ */ React.createElement("p", null, "And if he did, Rizal might very well change status. Today, it was billed as the FedGov's outermost bastion against the Kel. Tomorrow, it could prove man's fatal flaw, the Achilles heel in our whole system of defenses."), /* @__PURE__ */ React.createElement("p", null, "In which case\u2014"), /* @__PURE__ */ React.createElement("p", null, "Involuntarily, I shivered."), /* @__PURE__ */ React.createElement("p", null, "\u201CAgent Traynor\u2014?\u201D"), /* @__PURE__ */ React.createElement("p", null, "The voice came from the shadows. A dull, phlegmatic, tranquilized, conditioned voice. I stopped short; turned fast. \u201CWho's asking?\u201D"), /* @__PURE__ */ React.createElement("p", null, "The man shrugged stolidly, not even picking up my tension. \u201CI'm a port rep, Agent Traynor. Port rep second, that is\u2014\u201D"), /* @__PURE__ */ React.createElement("p", null, "\u201CSo who told you to come out here? Who said you should meet me?\u201D"), /* @__PURE__ */ React.createElement("p", null, "\u201COh\u2026\u201D A pause. \u201CWell, you see, there's this sigman, Agent Traynor. Up in the Interworld Communications section. He had a regular 7-D clearance report that a FedGov Security investigation agent was warping in\u2014you have to file a 7-D on all warpings, you know, Agent Traynor, on account of restrictives. So\u2014well, the rep first was out to eat, so I just notified Rizal Security, just a routine report, and the unit controller there, an Agent Gaylord, he said for me to meet you, and\u2014\u201D"), /* @__PURE__ */ React.createElement("p", null, "I bit down hard and shifted my weight, both at once, wondering if a broken jaw would interfere with the work of a port rep second."), /* @__PURE__ */ React.createElement("p", null, "Only then, all at once, I caught the unmistakable whish of a grav-car sweeping in."), /* @__PURE__ */ React.createElement("p", null, "The lights hit us almost in the same instant. Two seconds later a man who said he was Agent Gaylord was jumping down and locking wrists with me in Rizal's traditional greeting."), /* @__PURE__ */ React.createElement("p", null, "Even that wrist-lock set my teeth on edge. It was too solid, too stolid, too thorough a job of conditioning."), /* @__PURE__ */ React.createElement("p", null, "Or was it maybe, just a trifle over-done?")), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Wrapper14, null, /* @__PURE__ */ React.createElement("p", {
    className: "f-300"
  }, "Home Page"), /* @__PURE__ */ React.createElement(TextWrapper, null, /* @__PURE__ */ React.createElement("p", {
    className: "f-400"
  }, "Home Page")), /* @__PURE__ */ React.createElement("p", {
    className: "f-500"
  }, "Home Page"), /* @__PURE__ */ React.createElement("p", {
    className: "f-600"
  }, "Home Page"), /* @__PURE__ */ React.createElement("p", {
    className: "f-700"
  }, "Home Page"), /* @__PURE__ */ React.createElement("p", {
    className: "f-800"
  }, "Home Page"), /* @__PURE__ */ React.createElement("i", {
    className: "f-300"
  }, "Home Page"), /* @__PURE__ */ React.createElement("i", {
    className: "f-400"
  }, "Home Page"), /* @__PURE__ */ React.createElement("i", {
    className: "f-500"
  }, "Home Page"), /* @__PURE__ */ React.createElement("i", {
    className: "f-600"
  }, "Home Page"), /* @__PURE__ */ React.createElement("i", {
    className: "f-700"
  }, "Home Page"), /* @__PURE__ */ React.createElement("i", {
    className: "f-800"
  }, "Home Page"), /* @__PURE__ */ React.createElement(BoldText, {
    className: "f-300"
  }, "Home Page"), /* @__PURE__ */ React.createElement(BoldText, {
    className: "f-400"
  }, "Home Page"), /* @__PURE__ */ React.createElement(BoldText, {
    className: "f-500"
  }, "Home Page"), /* @__PURE__ */ React.createElement(TextWrapper, null, /* @__PURE__ */ React.createElement(BoldText, {
    className: "f-600"
  }, "Home Page")), /* @__PURE__ */ React.createElement(BoldText, {
    className: "f-700"
  }, "Home Page"), /* @__PURE__ */ React.createElement(BoldText, {
    className: "f-800"
  }, "Home Page"), /* @__PURE__ */ React.createElement("hr", null)));
}
var Book2 = styled("main", {
  width: "160%",
  transform: "translateX(-18%)",
  maxWidth: "64rem",
  margin: "32px auto",
  border: "2px solid hsl(35deg 10% 40%)",
  columnCount: 2,
  columnGap: "150px",
  padding: "50px",
  background: `linear-gradient(
    to right,
    hsl(35deg, 30%, 90%),
    hsl(35deg, 30%, 90%) 47%,
    hsl(35deg, 30%, 70%) 49.5%,
    hsl(35deg, 20%, 50%) 50%,
    hsl(35deg, 30%, 70%) 50.5%,
    hsl(35deg, 30%, 90%) 53%,
    hsl(35deg, 30%, 90%)
  )`,
  p: {
    fontSize: "$20",
    "font-variation-settings": `"slnt" -10,
      "CASL" 0.8,
      "CRSV" 1;`
  }
}), TextWrapper = styled("div", {}), BoldText = styled("strong", {
  display: "block",
  [`${TextWrapper} &`]: {
    background: "$secondary"
  }
}), Wrapper14 = styled("div", {
  color: "$primary",
  fontSize: "$titleM",
  ".f-400": {
    fontWeight: "400",
    my: "$x4"
  },
  ".f-300": {
    fontWeight: "300"
  },
  ".f-500": {
    fontWeight: "500"
  },
  ".f-600": {
    fontWeight: "600"
  },
  ".f-700": {
    fontWeight: "700"
  },
  ".f-800": {
    fontWeight: "800"
  }
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive/typo/masonry.tsx
var masonry_exports = {};
__export(masonry_exports, {
  default: () => masonry_default
});
function masonry_default() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(List, null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-a.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-c.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-d.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-g.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-h.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-b.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-e.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-d.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-a.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-c.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-f.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-g.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-h.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-b.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-e.jpeg"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ws-d.jpeg"
  })))));
}
var List = styled("ul", {
  "--gap": "16px",
  columnCount: "3",
  columnGap: "var(--gap)",
  padding: "var(--gap)",
  li: {
    boxSizing: "border-box",
    listStyleType: "none",
    "&:nth-child(3n+1)": { order: 1 },
    "&:nth-child(3n+2)": { order: 2 },
    "&:nth-child(3n)  ": { order: 3 }
  },
  img: {
    display: "block",
    width: "100%",
    marginBottom: "var(--gap)"
  },
  variants: {
    layout: {
      flex: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        height: "600px",
        li: {
          width: "30%",
          "&:nth-child(3n+1)": { order: 1 },
          "&:nth-child(3n+2)": { order: 2 },
          "&:nth-child(3n)  ": { order: 3 }
        }
      }
    }
  }
});

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/select.tsx
var select_exports = {};
__export(select_exports, {
  default: () => select_default
});
var import_react11 = __toESM(require("react"));

// src/components/Icon.tsx
var import_react10 = __toESM(require("react")), import_react_feather = require("react-feather"), icons = {
  search: import_react_feather.Search,
  "at-sign": import_react_feather.AtSign,
  "chevron-down": import_react_feather.ChevronDown
}, Icon = (_a) => {
  var _b = _a, { id, size, strokeWidth = 1 } = _b, delegated = __objRest(_b, ["id", "size", "strokeWidth"]);
  let Component = icons[id];
  if (!Component)
    throw new Error(`No icon found for ID: ${id}`);
  return /* @__PURE__ */ import_react10.default.createElement(Wrapper15, __spreadValues({
    style: {
      "--size": size + "px",
      "--stroke-width": strokeWidth + "px"
    }
  }, delegated), /* @__PURE__ */ import_react10.default.createElement(Component, {
    color: "currentColor",
    size
  }));
}, Wrapper15 = styled("div", {
  width: "var(--size)",
  height: "var(--size)",
  "& > svg": {
    display: "block",
    strokeWidth: "var(--stroke-width)"
  }
}), Icon_default = Icon;

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/select.tsx
var Select = () => {
  let [value, setValue] = (0, import_react11.useState)("volvo");
  return /* @__PURE__ */ import_react11.default.createElement(Wrapper16, null, /* @__PURE__ */ import_react11.default.createElement(NativeSelect, {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    }
  }, /* @__PURE__ */ import_react11.default.createElement("option", {
    value: "volvo"
  }, "Volvo"), /* @__PURE__ */ import_react11.default.createElement("option", {
    value: "saab"
  }, "Saab"), /* @__PURE__ */ import_react11.default.createElement("option", {
    value: "mercedes"
  }, "Mercedes"), /* @__PURE__ */ import_react11.default.createElement("option", {
    value: "audi"
  }, "Audi")), /* @__PURE__ */ import_react11.default.createElement(PresentationSelect, null, value || "...", /* @__PURE__ */ import_react11.default.createElement(IconWrapper, {
    style: { "--size": 24 + "px" }
  }, /* @__PURE__ */ import_react11.default.createElement(Icon_default, {
    id: "chevron-down",
    strokeWidth: 1,
    size: 24
  }))));
}, Wrapper16 = styled("div", {
  position: "relative",
  width: "max-content",
  transform: "translate(100px,100px)"
}), NativeSelect = styled("select", {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  opacity: "0"
}), PresentationSelect = styled("div", {
  color: "hsl(0deg 0% 40%)",
  backgroundColor: "hsl(0deg 0% 50% / 0.15)",
  fontSize: "1rem",
  padding: "12px 16px",
  paddingRight: "52px",
  borderRadius: "8px",
  [`${NativeSelect}:focus + &`]: {
    outline: "1px dotted #212121"
  },
  [`${NativeSelect}:hover + &`]: {
    color: "#000"
  }
}), IconWrapper = styled("div", {
  position: "absolute",
  top: "0",
  bottom: "0",
  right: "10px",
  margin: "auto",
  width: "var(--size)",
  height: "var(--size)",
  pointerEvents: "none"
}), select_default = Select;

// route:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index18
});
var import_react_router_dom5 = require("react-router-dom"), import_react12 = require("@remix-run/react");
function Index18() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Navigator7, null, /* @__PURE__ */ React.createElement(import_react_router_dom5.Link, {
    to: "flow-layout"
  }, "Flow Layout"), /* @__PURE__ */ React.createElement(import_react_router_dom5.Link, {
    to: "positioned-layout"
  }, "Position Layout"), /* @__PURE__ */ React.createElement(import_react_router_dom5.Link, {
    to: "flex-layout"
  }, "Flex Layout"), /* @__PURE__ */ React.createElement(import_react_router_dom5.Link, {
    to: "responsive"
  }, "responsive")), /* @__PURE__ */ React.createElement(import_react12.Outlet, null));
}
var Navigator7 = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28",
  marginBottom: "30px"
});

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "f571f101", entry: { module: "/build/entry.client-DPZEB4YA.js", imports: ["/build/_shared/chunk-VDHOEKYH.js", "/build/_shared/chunk-DNEVBLEG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-U5IO3XYI.js", imports: ["/build/_shared/chunk-M72R3G74.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/flex-layout": { id: "routes/flex-layout", parentId: "root", path: "flex-layout", index: void 0, caseSensitive: void 0, module: "/build/routes/flex-layout-TLYB7U7W.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/flow-layout": { id: "routes/flow-layout", parentId: "root", path: "flow-layout", index: void 0, caseSensitive: void 0, module: "/build/routes/flow-layout-EMIF43PB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/flow-layout/height": { id: "routes/flow-layout/height", parentId: "routes/flow-layout", path: "height", index: void 0, caseSensitive: void 0, module: "/build/routes/flow-layout/height-QCJME3TD.js", imports: ["/build/_shared/chunk-M72R3G74.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/flow-layout/height/margin": { id: "routes/flow-layout/height/margin", parentId: "routes/flow-layout/height", path: "margin", index: void 0, caseSensitive: void 0, module: "/build/routes/flow-layout/height/margin-EXIVZPKB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/flow-layout/width": { id: "routes/flow-layout/width", parentId: "routes/flow-layout", path: "width", index: void 0, caseSensitive: void 0, module: "/build/routes/flow-layout/width-BCRSJSKG.js", imports: ["/build/_shared/chunk-M72R3G74.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/flow-layout/width/auto-vs-100": { id: "routes/flow-layout/width/auto-vs-100", parentId: "routes/flow-layout/width", path: "auto-vs-100", index: void 0, caseSensitive: void 0, module: "/build/routes/flow-layout/width/auto-vs-100-L6EVALSE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/flow-layout/width/fit": { id: "routes/flow-layout/width/fit", parentId: "routes/flow-layout/width", path: "fit", index: void 0, caseSensitive: void 0, module: "/build/routes/flow-layout/width/fit-GFJBZXBY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-JE3EVLJK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/positioned-layout": { id: "routes/positioned-layout", parentId: "root", path: "positioned-layout", index: void 0, caseSensitive: void 0, module: "/build/routes/positioned-layout-5E6C2T2J.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/positioned-layout/fixed": { id: "routes/positioned-layout/fixed", parentId: "routes/positioned-layout", path: "fixed", index: void 0, caseSensitive: void 0, module: "/build/routes/positioned-layout/fixed-HAZXY5NF.js", imports: ["/build/_shared/chunk-M72R3G74.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/positioned-layout/modal": { id: "routes/positioned-layout/modal", parentId: "routes/positioned-layout", path: "modal", index: void 0, caseSensitive: void 0, module: "/build/routes/positioned-layout/modal-UOP36WO7.js", imports: ["/build/_shared/chunk-M72R3G74.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/positioned-layout/relative": { id: "routes/positioned-layout/relative", parentId: "routes/positioned-layout", path: "relative", index: void 0, caseSensitive: void 0, module: "/build/routes/positioned-layout/relative-VPF5BERZ.js", imports: ["/build/_shared/chunk-M72R3G74.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/responsive": { id: "routes/responsive", parentId: "root", path: "responsive", index: void 0, caseSensitive: void 0, module: "/build/routes/responsive-YC2X3PXP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/responsive/css-variable": { id: "routes/responsive/css-variable", parentId: "routes/responsive", path: "css-variable", index: void 0, caseSensitive: void 0, module: "/build/routes/responsive/css-variable-CXIKLEW7.js", imports: ["/build/_shared/chunk-M72R3G74.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/responsive/non-breakpoint": { id: "routes/responsive/non-breakpoint", parentId: "routes/responsive", path: "non-breakpoint", index: void 0, caseSensitive: void 0, module: "/build/routes/responsive/non-breakpoint-PXLO7YGQ.js", imports: ["/build/_shared/chunk-M72R3G74.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/responsive/typo": { id: "routes/responsive/typo", parentId: "routes/responsive", path: "typo", index: void 0, caseSensitive: void 0, module: "/build/routes/responsive/typo-JWM6I4LW.js", imports: ["/build/_shared/chunk-M72R3G74.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/responsive/typo/loading": { id: "routes/responsive/typo/loading", parentId: "routes/responsive/typo", path: "loading", index: void 0, caseSensitive: void 0, module: "/build/routes/responsive/typo/loading-JJE4CP56.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/responsive/typo/masonry": { id: "routes/responsive/typo/masonry", parentId: "routes/responsive/typo", path: "masonry", index: void 0, caseSensitive: void 0, module: "/build/routes/responsive/typo/masonry-IBNUDR3U.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/responsive/typo/print-style": { id: "routes/responsive/typo/print-style", parentId: "routes/responsive/typo", path: "print-style", index: void 0, caseSensitive: void 0, module: "/build/routes/responsive/typo/print-style-6Q6OEMJB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/responsive/typo/text-overflow": { id: "routes/responsive/typo/text-overflow", parentId: "routes/responsive/typo", path: "text-overflow", index: void 0, caseSensitive: void 0, module: "/build/routes/responsive/typo/text-overflow-G7ICPWBU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/select": { id: "routes/select", parentId: "root", path: "select", index: void 0, caseSensitive: void 0, module: "/build/routes/select-MAIERK3I.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-F571F101.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/positioned-layout": {
    id: "routes/positioned-layout",
    parentId: "root",
    path: "positioned-layout",
    index: void 0,
    caseSensitive: void 0,
    module: positioned_layout_exports
  },
  "routes/positioned-layout/relative": {
    id: "routes/positioned-layout/relative",
    parentId: "routes/positioned-layout",
    path: "relative",
    index: void 0,
    caseSensitive: void 0,
    module: relative_exports
  },
  "routes/positioned-layout/fixed": {
    id: "routes/positioned-layout/fixed",
    parentId: "routes/positioned-layout",
    path: "fixed",
    index: void 0,
    caseSensitive: void 0,
    module: fixed_exports
  },
  "routes/positioned-layout/modal": {
    id: "routes/positioned-layout/modal",
    parentId: "routes/positioned-layout",
    path: "modal",
    index: void 0,
    caseSensitive: void 0,
    module: modal_exports
  },
  "routes/flex-layout": {
    id: "routes/flex-layout",
    parentId: "root",
    path: "flex-layout",
    index: void 0,
    caseSensitive: void 0,
    module: flex_layout_exports
  },
  "routes/flow-layout": {
    id: "routes/flow-layout",
    parentId: "root",
    path: "flow-layout",
    index: void 0,
    caseSensitive: void 0,
    module: flow_layout_exports
  },
  "routes/flow-layout/height": {
    id: "routes/flow-layout/height",
    parentId: "routes/flow-layout",
    path: "height",
    index: void 0,
    caseSensitive: void 0,
    module: height_exports
  },
  "routes/flow-layout/height/margin": {
    id: "routes/flow-layout/height/margin",
    parentId: "routes/flow-layout/height",
    path: "margin",
    index: void 0,
    caseSensitive: void 0,
    module: margin_exports
  },
  "routes/flow-layout/width": {
    id: "routes/flow-layout/width",
    parentId: "routes/flow-layout",
    path: "width",
    index: void 0,
    caseSensitive: void 0,
    module: width_exports
  },
  "routes/flow-layout/width/auto-vs-100": {
    id: "routes/flow-layout/width/auto-vs-100",
    parentId: "routes/flow-layout/width",
    path: "auto-vs-100",
    index: void 0,
    caseSensitive: void 0,
    module: auto_vs_100_exports
  },
  "routes/flow-layout/width/fit": {
    id: "routes/flow-layout/width/fit",
    parentId: "routes/flow-layout/width",
    path: "fit",
    index: void 0,
    caseSensitive: void 0,
    module: fit_exports
  },
  "routes/responsive": {
    id: "routes/responsive",
    parentId: "root",
    path: "responsive",
    index: void 0,
    caseSensitive: void 0,
    module: responsive_exports
  },
  "routes/responsive/non-breakpoint": {
    id: "routes/responsive/non-breakpoint",
    parentId: "routes/responsive",
    path: "non-breakpoint",
    index: void 0,
    caseSensitive: void 0,
    module: non_breakpoint_exports
  },
  "routes/responsive/css-variable": {
    id: "routes/responsive/css-variable",
    parentId: "routes/responsive",
    path: "css-variable",
    index: void 0,
    caseSensitive: void 0,
    module: css_variable_exports
  },
  "routes/responsive/typo": {
    id: "routes/responsive/typo",
    parentId: "routes/responsive",
    path: "typo",
    index: void 0,
    caseSensitive: void 0,
    module: typo_exports
  },
  "routes/responsive/typo/text-overflow": {
    id: "routes/responsive/typo/text-overflow",
    parentId: "routes/responsive/typo",
    path: "text-overflow",
    index: void 0,
    caseSensitive: void 0,
    module: text_overflow_exports
  },
  "routes/responsive/typo/print-style": {
    id: "routes/responsive/typo/print-style",
    parentId: "routes/responsive/typo",
    path: "print-style",
    index: void 0,
    caseSensitive: void 0,
    module: print_style_exports
  },
  "routes/responsive/typo/loading": {
    id: "routes/responsive/typo/loading",
    parentId: "routes/responsive/typo",
    path: "loading",
    index: void 0,
    caseSensitive: void 0,
    module: loading_exports
  },
  "routes/responsive/typo/masonry": {
    id: "routes/responsive/typo/masonry",
    parentId: "routes/responsive/typo",
    path: "masonry",
    index: void 0,
    caseSensitive: void 0,
    module: masonry_exports
  },
  "routes/select": {
    id: "routes/select",
    parentId: "root",
    path: "select",
    index: void 0,
    caseSensitive: void 0,
    module: select_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
