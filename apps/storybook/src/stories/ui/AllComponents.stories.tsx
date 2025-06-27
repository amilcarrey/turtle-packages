import type { Meta, StoryObj } from "@storybook/react";
import { 
  Button, 
  Input, 
  Label, 
  Switch,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  ScrollArea
} from "@turtledev/ui";
import { Toaster, toast } from "sonner";

const meta = {
  title: "UI/All Components",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <Toaster />
      
      <div>
        <h1 className="text-3xl font-bold mb-2">🐢 Turtle UI Components</h1>
        <p className="text-muted-foreground">
          A comprehensive showcase of all available UI components in the design system.
        </p>
      </div>

      <Separator />

      {/* Buttons Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        
        <div className="flex items-center gap-4">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">🎯</Button>
        </div>
      </section>

      <Separator />

      {/* Form Components */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Form Components</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter password" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">🇺🇸 United States</SelectItem>
                  <SelectItem value="ca">🇨🇦 Canada</SelectItem>
                  <SelectItem value="mx">🇲🇽 Mexico</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Email notifications</Label>
              <Switch id="notifications" />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="marketing">Marketing emails</Label>
              <Switch id="marketing" />
            </div>
            
            <div className="space-y-2">
              <Label>Text Alignment</Label>
              <ToggleGroup type="single" defaultValue="left">
                <ToggleGroupItem value="left">↰</ToggleGroupItem>
                <ToggleGroupItem value="center">↕</ToggleGroupItem>
                <ToggleGroupItem value="right">↱</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Interactive Components */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Interactive Components</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Toggles & Groups</h3>
            <div className="flex gap-4 items-center">
              <Toggle>B</Toggle>
              <Toggle>I</Toggle>
              <Toggle>U</Toggle>
              
              <Separator orientation="vertical" className="h-8" />
              
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
                <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
                <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Tooltips</h3>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a helpful tooltip</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">⚙️</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Settings</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Toasts</h3>
            <div className="flex gap-2 flex-wrap">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => toast.success("Success!")}
              >
                Success
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => toast.error("Error!")}
              >
                Error
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => toast.warning("Warning!")}
              >
                Warning
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => toast("Info message")}
              >
                Info
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Scroll Area */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Scroll Area</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Vertical Scroll</h3>
            <ScrollArea className="h-48 border rounded-md p-4">
              <div className="space-y-2">
                {Array.from({ length: 30 }, (_, i) => (
                  <div key={i} className="text-sm p-2 border rounded">
                    Item {i + 1} - Sample content for scrolling
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Horizontal Scroll</h3>
            <ScrollArea className="w-full border rounded-md">
              <div className="flex space-x-4 p-4">
                {Array.from({ length: 15 }, (_, i) => (
                  <div
                    key={i}
                    className="shrink-0 h-24 w-32 bg-muted rounded-md flex items-center justify-center text-sm"
                  >
                    Card {i + 1}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </section>

      <Separator />

      {/* Complete Form Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Complete Form Example</h2>
        <div className="border rounded-lg p-6 max-w-md">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullname">Full Name</Label>
              <Input id="fullname" placeholder="John Doe" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email-form">Email</Label>
              <Input id="email-form" type="email" placeholder="john@example.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="subscribe">Subscribe to newsletter</Label>
              <Switch id="subscribe" />
            </div>
            
            <Separator />
            
            <div className="flex gap-2">
              <Button className="flex-1">Submit</Button>
              <Button variant="outline" className="flex-1">Cancel</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
};