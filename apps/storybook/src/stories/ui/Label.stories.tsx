import type { Meta, StoryObj } from "@storybook/react";
import { Label, Input } from "@turtledev/ui";

const meta = {
  title: "UI/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Email address",
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email">Email address</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  ),
};

export const WithRequiredIndicator: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="password">
        Password <span className="text-destructive">*</span>
      </Label>
      <Input id="password" type="password" placeholder="Enter your password" />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="John Doe" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email-form">Email address</Label>
        <Input id="email-form" type="email" placeholder="john@example.com" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <textarea 
          id="bio" 
          className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Tell us about yourself..."
        />
      </div>
    </div>
  ),
};