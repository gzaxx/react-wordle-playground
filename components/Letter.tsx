import React from "react";
import styled, { css } from "styled-components";
import { ValueStatus } from "../interfaces";
import * as colors from "../styles/colors";

export interface LetterProps {
  value?: string;
  status?: ValueStatus;
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
    switch (props.status) {
      case ValueStatus.currect:
        return css`
          background-color: ${colors.GREEN};
        `;
      case ValueStatus.wrongPosition: {
        return css`
          background-color: ${colors.YELLOW};
        `;
      }
      case ValueStatus.incorrect: {
        return css`
          background-color: ${colors.GRAY};
        `;
      }
      default:
        return css`
          background-color: ${colors.WHITE};
        `;
    }
  }}
`;

export const Letter = ({
  value = "",
  status = ValueStatus.notChecked,
  ...props
}: LetterProps) => {
  return (
    <LetterWrapper role="letter" status={status} {...props}>
      {value}
    </LetterWrapper>
  );
};
