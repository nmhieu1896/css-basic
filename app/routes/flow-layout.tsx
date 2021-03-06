import { Outlet } from "@remix-run/react";
import { styled } from "@stitches/config";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Wrapper>
      <Navigator>
        <Link to="width">Width</Link>
        <Link to="height">Height</Link>
      </Navigator>
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  width: "100%",
  minHeight: "400px",
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
  marginBottom: "30px",
});
