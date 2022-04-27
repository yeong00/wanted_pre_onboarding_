import React, { useState } from "react";
import styled from "styled-components";

//Tab
//

function Tab() {
  const Tablist = ["감자", "고구마", "카레라이스"];
  const [selected, setSelected] = useState(0);
  const ClickTab = (click) => {
    setSelected(click);
  };

  return (
    <Container>
      <SelectBar selected={selected} />
      {Tablist.map((li, idx) => (
        <Menu onClick={() => ClickTab(idx)} clicked={idx === selected}>
          {li}
        </Menu>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 500px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #d3d3d3;
  }
`;

const Menu = styled.button`
  width: 90%;
  height: 50px;
  border-style: none;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  background-color: #ffffff;
  color: ${({ clicked }) => (clicked ? "#000000" : "#D9DDDE")};
  cursor: pointer;
  :hover {
    color: #000000;
  }
`;

const SelectBar = styled.div`
  position: absolute;
  width: 166px;
  height: 6px;
  bottom: 0;
  background-color: #b2e9fa;
  flex: 1;
  transform: ${({ selected }) =>
    selected ? `translate(${100 * selected}%, 0)` : "none"};
  transition: 0.4s;
`;

export default Tab;
