import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@turtledev/ui";

const meta = {
  title: "UI/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    decorative: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-64">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix UI</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  ),
};

export const InMenu: Story = {
  render: () => (
    <div className="border rounded-lg p-4 w-56">
      <div className="space-y-2">
        <div className="p-2 hover:bg-accent rounded cursor-pointer">Profile</div>
        <div className="p-2 hover:bg-accent rounded cursor-pointer">Settings</div>
        <div className="p-2 hover:bg-accent rounded cursor-pointer">Billing</div>
        <Separator />
        <div className="p-2 hover:bg-accent rounded cursor-pointer text-destructive">
          Logout
        </div>
      </div>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="border rounded-lg p-6 w-80">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your account preferences and settings.
          </p>
        </div>
        
        <Separator />
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Personal Information</h4>
          <p className="text-sm text-muted-foreground">
            Update your personal details and profile information.
          </p>
        </div>
        
        <Separator />
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Security</h4>
          <p className="text-sm text-muted-foreground">
            Manage your password and security preferences.
          </p>
        </div>
      </div>
    </div>
  ),
};