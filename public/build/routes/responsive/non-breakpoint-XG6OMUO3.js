import {
  styled
} from "/build/_shared/chunk-ZQB7JCVI.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:/Users/macbookM1/Documents/code/spiritech-camp/css-workshop/app/routes/responsive/non-breakpoint.tsx?browser
init_react();

// app/routes/responsive/non-breakpoint.tsx
init_react();
function non_breakpoint_default() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement("div", {
    className: "column"
  }, /* @__PURE__ */ React.createElement("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."), /* @__PURE__ */ React.createElement("p", null, "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")), /* @__PURE__ */ React.createElement(Form, null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    placeholder: "Name"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "email",
    placeholder: "Email Address"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "submit",
    value: "Subscribe"
  }))));
}
var Wrapper = styled("main", {
  ".column": {
    width: "clamp(500px, 65%, 800px)",
    background: "white",
    borderRadius: "4px",
    padding: "24px",
    margin: "0 auto"
  }
});
var Form = styled("form", {
  flexWrap: "wrap",
  background: "white",
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
  "form > input": {
    flex: "1 1 10ch",
    margin: ".5rem"
  },
  'form > input[type="email"]': {
    flex: "3 1 30ch"
  }
});
export {
  non_breakpoint_default as default
};
//# sourceMappingURL=/build/routes/responsive/non-breakpoint-XG6OMUO3.js.map
