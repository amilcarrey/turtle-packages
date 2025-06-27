import type { Meta, StoryObj } from "@storybook/react";
import { Switch, Label } from "@turtledev/ui";

const meta = {
  title: "UI/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    checked: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="notifications" />
      <Label htmlFor="notifications">Enable notifications</Label>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div className="flex items-center justify-between">
        <Label htmlFor="marketing" className="text-sm font-medium">
          Marketing emails
        </Label>
        <Switch id="marketing" />
      </div>
      
      <div className="flex items-center justify-between">
        <Label htmlFor="security" className="text-sm font-medium">
          Security notifications
        </Label>
        <Switch id="security" defaultChecked />
      </div>
      
      <div className="flex items-center justify-between">
        <Label htmlFor="updates" className="text-sm font-medium">
          Product updates
        </Label>
        <Switch id="updates" />
      </div>
      
      <div className="flex items-center justify-between opacity-50">
        <Label htmlFor="beta" className="text-sm font-medium">
          Beta features (Coming soon)
        </Label>
        <Switch id="beta" disabled />
      </div>
    </div>
  ),
};

export const SettingsPanel: Story = {
  render: () => (
    <div className="border rounded-lg p-6 space-y-4 w-96">
      <h3 className="text-lg font-semibold">Preferences</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label className="text-sm font-medium">Dark mode</Label>
            <p className="text-xs text-muted-foreground">Switch to dark theme</p>
          </div>
          <Switch />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label className="text-sm font-medium">Auto-save</Label>
            <p className="text-xs text-muted-foreground">Automatically save changes</p>
          </div>
          <Switch defaultChecked />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label className="text-sm font-medium">Sound effects</Label>
            <p className="text-xs text-muted-foreground">Play sounds for actions</p>
          </div>
          <Switch />
        </div>
      </div>
    </div>
  ),
};