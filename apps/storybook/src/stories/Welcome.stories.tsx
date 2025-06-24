import type { Meta, StoryObj } from "@storybook/react";

const Welcome = () => {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">🐢 Welcome to Turtle Storybook</h1>
      <p className="text-lg text-gray-600 mb-6">
        This is the main Storybook where we document and showcase all components from the Turtle
        ecosystem.
      </p>
      <div className="space-y-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">📦 Packages</h2>
          <p className="text-blue-700">
            Components from migrated packages will automatically appear here.
          </p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <h2 className="text-xl font-semibold text-green-900 mb-2">🎨 Development</h2>
          <p className="text-green-700">
            Use <code className="px-2 py-1 bg-gray-100 rounded">bun dev</code> to start the
            development server.
          </p>
        </div>
      </div>
    </div>
  );
};

const meta = {
  title: "Welcome",
  component: Welcome,
} satisfies Meta<typeof Welcome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
