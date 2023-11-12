import { Meta, StoryFn } from "@storybook/react";
import DepartmentButton, { DepartmentButtonVariant } from "./DepartmentButton";

export default {
  title: "molecules/departmentButton/DepartmentButton",
  component: DepartmentButton,
} as Meta<typeof DepartmentButton>;

const Template: StoryFn<typeof DepartmentButton> = (args) => (
  <DepartmentButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  departmentCode: "UG",
  departmentName: "공통",
};
export const SelectedMajor = Template.bind({});
SelectedMajor.args = {
  departmentCode: "GS",
  departmentName: "기초",
  variant: DepartmentButtonVariant.selectedMajor,
};
export const SelectedMinor = Template.bind({});
SelectedMinor.args = {
  departmentCode: "MM",
  departmentName: "수학",
  variant: DepartmentButtonVariant.selectedMinor,
};
