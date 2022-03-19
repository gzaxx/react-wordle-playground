import React from "react";

export interface LetterProps {
  value?: string;
  backgroundColor?: "white" | "yellow" | "grey" | "green";
  readonly: boolean;
  tabIndex: number;
}

export const Letter = ({
  value = "",
  backgroundColor = "white",
  readonly = true,
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
        readOnly={readonly}
        {...props}
      />
    </>
  );
};
