import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@turtledev/ui";
import { Toaster, toast } from "sonner";

const meta = {
  title: "UI/Sonner (Toast)",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-y-2">
        <Button onClick={() => toast("Hello! This is a toast message.")}>
          Show Toast
        </Button>
        <p className="text-sm text-muted-foreground">
          Click the button to see a toast notification
        </p>
      </div>
    </div>
  ),
};

export const Success: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <Button 
        onClick={() => toast.success("Successfully saved!")}
        variant="default"
      >
        Success Toast
      </Button>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <Button 
        onClick={() => toast.error("Something went wrong!")}
        variant="destructive"
      >
        Error Toast
      </Button>
    </div>
  ),
};

export const Warning: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <Button 
        onClick={() => toast.warning("This action cannot be undone.")}
        variant="outline"
      >
        Warning Toast
      </Button>
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <Button 
        onClick={() => 
          toast("Email sent successfully!", {
            action: {
              label: "Undo",
              onClick: () => toast("Undoing email..."),
            },
          })
        }
      >
        Toast with Action
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <Button 
        onClick={() => {
          const promise = new Promise((resolve) => 
            setTimeout(resolve, 2000)
          );
          
          toast.promise(promise, {
            loading: "Saving changes...",
            success: "Changes saved successfully!",
            error: "Failed to save changes.",
          });
        }}
      >
        Loading Toast
      </Button>
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="grid grid-cols-2 gap-2">
        <Button 
          onClick={() => toast("Default message")}
          variant="outline"
        >
          Default
        </Button>
        
        <Button 
          onClick={() => toast.success("Success message")}
          variant="default"
        >
          Success
        </Button>
        
        <Button 
          onClick={() => toast.error("Error message")}
          variant="destructive"
        >
          Error
        </Button>
        
        <Button 
          onClick={() => toast.warning("Warning message")}
          variant="secondary"
        >
          Warning
        </Button>
        
        <Button 
          onClick={() => toast.info("Info message")}
          variant="ghost"
        >
          Info
        </Button>
        
        <Button 
          onClick={() => 
            toast("Message with action", {
              action: {
                label: "Action",
                onClick: () => console.log("Action clicked"),
              },
            })
          }
          variant="outline"
        >
          With Action
        </Button>
      </div>
    </div>
  ),
};

export const CustomDuration: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-x-2">
        <Button 
          onClick={() => toast("Quick toast (1s)", { duration: 1000 })}
          size="sm"
        >
          1 Second
        </Button>
        
        <Button 
          onClick={() => toast("Long toast (10s)", { duration: 10000 })}
          size="sm"
        >
          10 Seconds
        </Button>
        
        <Button 
          onClick={() => toast("Persistent toast", { duration: Infinity })}
          size="sm"
        >
          Persistent
        </Button>
      </div>
    </div>
  ),
};