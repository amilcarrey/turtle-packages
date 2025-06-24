import type { Meta, StoryObj } from "@storybook/react";

const TailwindV4Demo = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Tailwind CSS v4 Demo</h1>
        <p className="text-lg text-gray-600">
          This project uses Tailwind CSS v4, where configuration is handled directly in CSS.
        </p>
      </div>

      {/* Modern gradients and shadows example */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-xl shadow-lg text-white">
          <h3 className="text-xl font-semibold mb-2">Modern Gradient</h3>
          <p>Using Tailwind v4 gradient utilities</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Soft Shadows</h3>
          <p className="text-gray-600">Clean design with subtle borders</p>
        </div>

        <div className="bg-black text-white p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Dark Mode</h3>
          <p className="text-gray-300">Native support for dark themes</p>
        </div>
      </div>

      {/* Animations example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Smooth Animations</h2>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
            Hover me
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:scale-105 transition-transform duration-200">
            Scale on hover
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:shadow-lg transition-shadow duration-200">
            Shadow effect
          </button>
        </div>
      </div>

      {/* Flexible layouts example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Responsive Layouts</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-semibold"
            >
              {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const meta = {
  title: "Examples/Tailwind v4 Demo",
  component: TailwindV4Demo,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof TailwindV4Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
