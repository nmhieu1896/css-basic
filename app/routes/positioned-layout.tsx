import { Link, Outlet } from "@remix-run/react";
import { styled } from "@stitches/config";

export default function Index() {
  return (
    <Wrapper>
      <Navigator>
        <Link to="relative">Relative</Link>
        <a
          href="https://codesandbox.io/s/cranky-vaughan-tz96oc?file=/src/stacking.js"
          target="_blank"
        >
          Absolute
        </a>
        <Link to="fixed">Fixed</Link>
        <Link to="modal">Modal</Link>
        <a
          href="https://codesandbox.io/s/cranky-vaughan-tz96oc?file=/src/stacking.js"
          target="_blank"
        >
          Stacking context
        </a>
        <a
          href="https://codesandbox.io/s/cranky-vaughan-tz96oc?file=/src/overflow.js"
          target="_blank"
        >
          Overflow
        </a>
      </Navigator>
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  width: "100%",
  minHeight: "150vh",
  border: "1px solid $green500",
  //   background: "$gray300",
  background: "hsl(306deg 60% 76% / 0.15)",

  "& h1": {
    fontSize: "$28",
    textAlign: "center",
    margin: "0",
  },
  "& section": {
    border: "1px solid $purple500",
    padding: "40px",

    marginBottom: "20px",
  },
});

const Navigator = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28",
});
