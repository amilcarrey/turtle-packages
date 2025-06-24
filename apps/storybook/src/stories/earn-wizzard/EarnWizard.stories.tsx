import type { Meta, StoryObj } from "@storybook/react";
import { EarnWizard, defaultWidgetStyleConfig } from "@turtledev/earn-wizzard";

const meta = {
  title: "Earn/EarnWizard",
  component: EarnWizard,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    initialConfig: {
      description: "Initial configuration for the widget",
      control: { type: "object" },
    },
    defaultCollapsed: {
      description: "Whether the sidebar starts collapsed",
      control: { type: "boolean" },
    },
    onConfigChange: {
      description: "Callback when configuration changes",
      action: "configChanged",
    },
  },
} satisfies Meta<typeof EarnWizard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialConfig: defaultWidgetStyleConfig,
    defaultCollapsed: false,
  },
};
