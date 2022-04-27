import React, { useState } from "react";
import styled from "styled-components";

//Toggle
//Boolean으로 구현하기
// 토글의 상태에 따라 위치가 변하는  거 만들기

function Toggle() {
  const [isToggle, setIsToggle] = useState(true);
  const ClickToggle = (click) => {
    setIsToggle(click);
  };

  return (
    <Container>
      <SelectToggle isToggle={isToggle} />
      <Button onClick={() => ClickToggle(true)} clicked={isToggle}>
        기본
      </Button>
      <Button onClick={() => ClickToggle(false)} clicked={!isToggle}>
        상세
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 400px;
  height: 50px;
  background-color: #d4f1fa;
  position: relative;
  padding: 10px 5px;
  border-radius: 60px;
  align-items: center;
`;

const Button = styled.button`
  position: relative;
  width: 90%;
  font-size: 25px;
  background: none;
  color: ${({ clicked }) => (clicked ? "#000000" : "#809196")};
  border-style: none;
  cursor: pointer;
  :hover {
    color: #000000;
  }
`;

const SelectToggle = styled.div`
  position: absolute;
  width: 49%;
  height: 85%;
  background-color: #ffffff;
  border-radius: 60px;
  transform: ${({ isToggle }) => (isToggle ? "0%" : "translate(98%, 0)")};
  transition: 0.3s;
`;

export default Toggle;
