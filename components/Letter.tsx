import React from "react";
import styled, { css } from "styled-components";

export interface LetterProps {
  value?: string;
  backgroundColor?: "white" | "yellow" | "grey" | "green";
}

const LetterWrapper = styled.div`
  display: inline-flex;
  width: 62px;
  height: 62px;
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  border: 1px solid #c2c2c2;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  ${(props: LetterProps) => {
    switch (props.backgroundColor) {
      case "green":
        return css`
          background-color: greenyellow;
        `;
    }
  }}
`;

export const Letter = ({
  value = "",
  backgroundColor = "green",
  ...props
}: LetterProps) => {
  return (
    <LetterWrapper backgroundColor={backgroundColor} {...props}>
      {value}
    </LetterWrapper>
  );
};
