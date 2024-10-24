import { Meta, StoryObj } from "@storybook/vue3";

import Button from "../components/Button.vue";
import { ButtonVariants } from "../Constants";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Sign Up",
  },
  argTypes: {
    variant: {
      control: "select",
      options: Object.values(ButtonVariants),
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
    <div class="w-fit">
    <Button v-bind="args" class="py-2 px-4 text-sm"/>
    </div>
    `,
  }),
};

export const Secondary: Story = {
  args: {
    label: "Learn More",
    variant: ButtonVariants.Secondary,
  },
  argTypes: {
    variant: {
      control: "select",
      options: Object.values(ButtonVariants),
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <div class="w-fit">
      <Button v-bind="args" class="py-2 px-4 text-sm"/>
      </div>
      `,
  }),
};

export const Tertiary: Story = {
  args: {
    label: "Sign Up",
    variant: ButtonVariants.Tertiary,
  },
  argTypes: {
    variant: {
      control: "select",
      options: Object.values(ButtonVariants),
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <div class="w-fit">
      <Button v-bind="args" class="py-2 px-4 text-sm"/>
      </div>
      `,
  }),
};
