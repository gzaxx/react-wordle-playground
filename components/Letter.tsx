import React from "react";
import styled, { css } from "styled-components";

export interface LetterProps {
  value?: string;
  backgroundColor?: "white" | "yellow" | "grey" | "green";
  tabIndex: number;
}

const Letter = ({
  value = "",
  backgroundColor = "white",
  tabIndex,
  ...props
}: LetterProps) => {
  return (
    <>
      <input
        type="text"
        tabIndex={tabIndex}
        className={backgroundColor}
        name="letter"
        value={value}
        {...props}
      />
    </>
  );
};

export const StyledLetter = styled(Letter)`
  width: 40px;
  height: 65px;
  font-size: 32px;
  line-height: 65px;
  text-align: center;
  ${(props) => {
    switch (props.backgroundColor) {
      case "green":
        return css`
          background-color: #fff;
        `;
    }
  }}
`;
