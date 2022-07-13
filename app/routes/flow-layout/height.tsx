import { Outlet } from "@remix-run/react";
import { styled } from "@stitches/config";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Wrapper>
      <h1>height algorithm</h1>
      <section>
        <Navigator>
          <Link to="margin">Margin Collapsing</Link>
        </Navigator>
        <Outlet />
      </section>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  height: "100%",
  background: "hsl(148deg 60% 60% / 0.3)",
});

const Navigator = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28",
});
