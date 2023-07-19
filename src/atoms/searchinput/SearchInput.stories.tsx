import { Meta, StoryFn } from "@storybook/react";

import SearchInput from "./SearchInput";

export default {
  title: "atoms/searchinput/SearchInput",
  component: SearchInput,
} as Meta<typeof SearchInput>;

const Template: StoryFn<typeof SearchInput> = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: "강의명/교수명/강의코드",
};