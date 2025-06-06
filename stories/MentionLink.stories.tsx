// stories/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import MentionLink from '../components/MentionLink';

const meta: Meta<typeof MentionLink> = {
  title: 'Components/MentionLink',
  component: MentionLink,
  tags: ['autodocs'],
  //   argTypes: {
  //     variant: { control: "select", options: ["primary", "secondary"] },
  //   },
};

export default meta;
type Story = StoryObj<typeof MentionLink>;

export const Primary: Story = {
  args: {
        href: 'https://fanyi.baidu.com/mtpe-individual/multimodal?query=Free%20users%20can%20only%20use%20GPT%204.1%20or%20Auto%20as%20premium%20models%0A(Request%20ID%3A%20232b2a43-e029-4ea3-89fb-44fa71021870)&lang=en2zh&ext_channel=pcPinzhuan',
      ellipsis: true
  },
};
