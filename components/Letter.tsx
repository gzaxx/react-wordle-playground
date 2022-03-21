import React from "react";
import styled, { css } from "styled-components";
import { ValueStatus } from "../interfaces";

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
          background-color: rgb(106, 170, 100);
        `;
      case ValueStatus.wrongPlace: {
        return css`
          background-color: rgb(201, 180, 88);
        `;
      }
      case ValueStatus.incorrect: {
        return css`
          background-color: rgb(120, 124, 126);
        `;
      }
      default:
        return css`
          background-color: #fff;
        `;
    }
  }}
`;

export const Letter = ({
  value = "",
  status = ValueStatus.notSet,
  ...props
}: LetterProps) => {
  return (
    <LetterWrapper status={status} {...props}>
      {value}
    </LetterWrapper>
  );
};
