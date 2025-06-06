// stories/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import ParagraphText from '../components/ParagraphText';

const meta: Meta<typeof ParagraphText> = {
  title: 'Components/ParagraphText',
  component: ParagraphText,
  tags: ['autodocs'],
  //   argTypes: {
  //     variant: { control: "select", options: ["primary", "secondary"] },
  //   },
};

export default meta;
type Story = StoryObj<typeof ParagraphText>;

export const Link: Story = {
  args: {
    href: '267351241637353564226735124163735356422673512416373535642267351241637353564226735124163735356422673512416373535642267351241637353564226735124163735356422673512416373535642267351241637353564226735124163735\n',
    copyable: true,
    // lineClamp: 3,
   type: 'link'
  },
};

export const Text: Story = {
  args: {
    text: '267351241637353564226735124163735356422673512416373535642267351241637353564226735124163735356422673512416373535642267351241637353564226735124163735356422673512416373535642267351241637353564226735124163735\n',
    copyable: true,
    // lineClamp: 3,
  //  type: 'link'
  },
};
