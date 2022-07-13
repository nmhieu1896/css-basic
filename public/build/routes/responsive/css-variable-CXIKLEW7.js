import {
  styled
} from "/build/_shared/chunk-M72R3G74.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive/css-variable.tsx?browser
init_react();

// app/routes/responsive/css-variable.tsx
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Article, null, "Card 1"), /* @__PURE__ */ React.createElement(Article, null, "Card 2"), /* @__PURE__ */ React.createElement(Article, null, "Card 3")), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Box, {
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
var Wrapper = styled("main", {
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
});
var Article = styled("article", {
  background: "white",
  height: "200px",
  boxShadow: "0px 2px 16px hsla(0deg 0% 0% / 0.2)",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  maxWidth: "600px",
  borderRadius: "var(--spacing)",
  padding: "var(--spacing)"
});
var Row = styled("div", {
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
});
var Box = styled("div", {
  width: "100px",
  height: "100px",
  borderRadius: "4px"
});
export {
  Index as default
};
//# sourceMappingURL=/build/routes/responsive/css-variable-CXIKLEW7.js.map