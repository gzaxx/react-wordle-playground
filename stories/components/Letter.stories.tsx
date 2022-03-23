import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Letter } from "../../components/Letter";
import { ValueStatus } from "../../interfaces";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Letter",
  component: Letter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    status: {
      options: [0, 1, 2, 3],
      mapping: [0, 1, 2, 3],
      control: {
        type: "select",
        labels: ["Not Checked", "Correct", "Incorrect", "Wrong Position"],
      },
    },
  },
} as ComponentMeta<typeof Letter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Letter> = (args) => <Letter {...args} />;

export const Default = Template.bind({
  value: "A",
  status: ValueStatus.notSet,
});
