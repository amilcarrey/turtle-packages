import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "@turtledev/ui";

const meta = {
  title: "UI/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border p-4">
      <div className="space-y-4">
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1} - This is a sample item in the scroll area
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const HorizontalScroll: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="shrink-0 h-20 w-32 rounded-md bg-muted flex items-center justify-center text-sm"
          >
            Card {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const ChatHistory: Story = {
  render: () => (
    <div className="border rounded-lg">
      <div className="p-4 border-b">
        <h3 className="font-semibold">Chat History</h3>
      </div>
      <ScrollArea className="h-80 p-4">
        <div className="space-y-4">
          {[
            { user: "Alice", message: "Hey, how's it going?", time: "2:30 PM" },
            { user: "Bob", message: "Pretty good! Just working on some code.", time: "2:31 PM" },
            { user: "Alice", message: "Nice! What are you building?", time: "2:32 PM" },
            { user: "Bob", message: "A new component library with Storybook", time: "2:33 PM" },
            { user: "Alice", message: "That sounds awesome! I love Storybook", time: "2:34 PM" },
            { user: "Bob", message: "Yeah, it's really helpful for documenting components", time: "2:35 PM" },
            { user: "Alice", message: "Have you tried the latest version?", time: "2:36 PM" },
            { user: "Bob", message: "Yes! The new features are amazing", time: "2:37 PM" },
            { user: "Alice", message: "I should check it out soon", time: "2:38 PM" },
            { user: "Bob", message: "Definitely recommend it!", time: "2:39 PM" },
          ].map((msg, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{msg.user}</span>
                <span className="text-xs text-muted-foreground">{msg.time}</span>
              </div>
              <p className="text-sm text-muted-foreground">{msg.message}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  ),
};

export const CodeBlock: Story = {
  render: () => (
    <div className="border rounded-lg">
      <div className="p-3 border-b bg-muted text-sm font-mono">
        example.tsx
      </div>
      <ScrollArea className="h-64">
        <pre className="p-4 text-sm">
{`import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border p-4">
      <div className="space-y-4">
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1} - This is a sample item
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

export default ScrollAreaDemo`}
        </pre>
      </ScrollArea>
    </div>
  ),
};