import { styled } from "@stitches/config";
import React from "react";
import { Search, AtSign, ChevronDown } from "react-feather";

const icons = {
  search: Search,
  "at-sign": AtSign,
  "chevron-down": ChevronDown,
};

const Icon = ({ id, size, strokeWidth = 1, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper
      style={{
        "--size": size + "px",
        "--stroke-width": strokeWidth + "px",
      }}
      {...delegated}
    >
      <Component color="currentColor" size={size} />
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  width: "var(--size)",
  height: "var(--size)",

  "& > svg": {
    display: "block",
    strokeWidth: "var(--stroke-width)",
  },
});

export default Icon;
