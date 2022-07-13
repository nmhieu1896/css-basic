import React, { useState } from "react";
import { styled } from "@stitches/config";

import Icon from "@components/Icon";

const Select = () => {
  const [value, setValue] = useState("volvo");
  //   const displayedValue = getDisplayedValue(value, children);
  const displayedValue = value || "...";

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {/* {children} */}
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </NativeSelect>
      <PresentationSelect>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationSelect>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  position: "relative",
  width: "max-content",
  transform: "translate(100px,100px)",
});

const NativeSelect = styled("select", {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  opacity: "0",
});

const PresentationSelect = styled("div", {
  color: "hsl(0deg 0% 40%)",
  backgroundColor: "hsl(0deg 0% 50% / 0.15)",
  fontSize: "1rem",
  padding: "12px 16px",
  paddingRight: "52px",
  borderRadius: "8px",
  [`${NativeSelect}:focus + &`]: {
    outline: "1px dotted #212121",
    // outline: "5px auto -webkit-focus-ring-color",
  },
  [`${NativeSelect}:hover + &`]: {
    color: "#000",
  },
});

const IconWrapper = styled("div", {
  position: "absolute",
  top: "0",
  bottom: "0",
  right: "10px",
  margin: "auto",
  width: "var(--size)",
  height: "var(--size)",
  pointerEvents: "none",
});

export default Select;
