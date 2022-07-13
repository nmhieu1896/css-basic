import { Outlet } from "@remix-run/react";
import { styled } from "@stitches/config";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <h1>width algorithm</h1>
      <section>
        <Navigator>
          <Link to="auto-vs-100">100% vs auto</Link>
          <Link to="fit">Content width</Link>
        </Navigator>
        <Outlet />
      </section>
    </>
  );
}

const Navigator = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28",
});
