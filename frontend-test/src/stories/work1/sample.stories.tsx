import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Page } from "components/Page";

export default {
  title: "sample/1.画面の初期表示",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.storyName = "正常表示";
Primary.parameters = {
  chromatic: { disableSnapshot: false },
};
