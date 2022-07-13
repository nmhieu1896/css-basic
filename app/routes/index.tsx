import { styled } from "@stitches/config";
import { Link } from "react-router-dom";
import { Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <Navigator>
        <Link to="flow-layout">Flow Layout</Link>
        <Link to="positioned-layout">Position Layout</Link>
        <Link to="flex-layout">Flex Layout</Link>
        <Link to="responsive">responsive</Link>
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
