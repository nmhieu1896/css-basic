import { styled } from "@stitches/config";
import { Link } from "react-router-dom";
import { Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <Navigator>
        <Link to="css-variable">CSS Variables</Link>
        <Link to="non-breakpoint">Non Breakpoint</Link>
        <Link to="typo">typo</Link>
      </Navigator>
      <Outlet />
    </div>
  );
}

const Navigator = styled("div", {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  fontSize: "$28",
  marginBottom: "30px",
});
