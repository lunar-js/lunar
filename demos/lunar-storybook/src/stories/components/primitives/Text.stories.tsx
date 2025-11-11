import { type Meta, type StoryObj } from '@storybook/react-vite';

import {
  Text,
  TEXT_VARIANT__DISPLAY,
  TEXT_VARIANT__HEADING,
  TEXT_VARIANT__SUBHEADING,
  TEXT_VARIANT__BODY,
  TEXT_VARIANT__CAPTION,
  TEXT_VARIANT__LABEL,
  TEXT_SIZE__XL,
  TEXT_SIZE__LG,
  TEXT_SIZE__MD,
  TEXT_SIZE__SM,
  TEXT_COLOR__PRIMARY,
  TEXT_COLOR__SECONDARY,
  TEXT_COLOR__MUTED,
  TEXT_COLOR__DISABLED,
  TEXT_COLOR__INVERSE,
  TEXT_COLOR__INTERACTIVE,
  TEXT_COLOR__INTERACTIVE_HOVER,
  TEXT_COLOR__SUCCESS,
  TEXT_COLOR__WARNING,
  TEXT_COLOR__DANGER,
  TEXT_COLOR__INFO,
  TEXT_COLOR__BRAND,
  TEXT_COLOR__ACCENT,
  TEXT_WEIGHT__LIGHT,
  TEXT_WEIGHT__MEDIUM,
  TEXT_WEIGHT__BOLD,
} from '@wcm/lunar/src/index.js';

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['!autodocs', '!dev'],
};

export const DisplaySizes: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
      <Text {...args} as="h1" variant={TEXT_VARIANT__DISPLAY} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__BOLD}>
        Display XL - Hero Headlines
      </Text>
      <Text {...args} as="h2" variant={TEXT_VARIANT__DISPLAY} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__BOLD}>
        Display LG - Large Promotional Text
      </Text>
      <Text {...args} as="h3" variant={TEXT_VARIANT__DISPLAY} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__MEDIUM}>
        Display MD - Medium Display Text
      </Text>
      <Text {...args} as="h4" variant={TEXT_VARIANT__DISPLAY} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__MEDIUM}>
        Display SM - Small Display Text
      </Text>
    </div>
  ),
};

export const HeadingSizes: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '600px' }}>
      <Text {...args} as="h1" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__MEDIUM}>
        Heading XL - Large Headings
      </Text>
      <Text {...args} as="h2" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__MEDIUM}>
        Heading LG - Medium Headings
      </Text>
      <Text {...args} as="h3" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__MEDIUM}>
        Heading MD - Small Headings
      </Text>
      <Text {...args} as="h4" variant={TEXT_VARIANT__HEADING} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__MEDIUM}>
        Heading SM - Tiny Headings
      </Text>
    </div>
  ),
};

export const SubheadingSizes: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '600px' }}>
      <Text {...args} as="h1" variant={TEXT_VARIANT__SUBHEADING} size={TEXT_SIZE__XL} weight={TEXT_WEIGHT__MEDIUM}>
        Subheading XL - Extra large subheadings for major section divisions
      </Text>
      <Text {...args} as="h2" variant={TEXT_VARIANT__SUBHEADING} size={TEXT_SIZE__LG} weight={TEXT_WEIGHT__MEDIUM}>
        Subheading LG - Large subheadings for section divisions
      </Text>
      <Text {...args} as="h3" variant={TEXT_VARIANT__SUBHEADING} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__MEDIUM}>
        Subheading MD - Medium subheadings for subsections
      </Text>
      <Text {...args} as="h4" variant={TEXT_VARIANT__SUBHEADING} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__MEDIUM}>
        Subheading SM - Small subheadings for minor divisions
      </Text>
    </div>
  ),
};

export const BodySizes: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '600px' }}>
      <Text {...args} as="p" variant={TEXT_VARIANT__BODY} size={TEXT_SIZE__XL}>
        Body XL - Extra large body text for prominent content and hero messaging
      </Text>
      <Text {...args} as="p" variant={TEXT_VARIANT__BODY} size={TEXT_SIZE__LG}>
        Body LG - Large body text for important content and featured messaging
      </Text>
      <Text {...args} as="p" variant={TEXT_VARIANT__BODY} size={TEXT_SIZE__MD}>
        Body MD - Default body text for regular content and general reading
      </Text>
      <Text {...args} as="p" variant={TEXT_VARIANT__BODY} size={TEXT_SIZE__SM}>
        Body SM - Small body text for supporting content and detailed information
      </Text>
    </div>
  ),
};

export const Captions: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '500px' }}>
      <Text {...args} as="span" variant={TEXT_VARIANT__CAPTION} size={TEXT_SIZE__XL} color={TEXT_COLOR__MUTED}>
        Figure 1: An example image showing caption usage below media content
      </Text>
      <Text {...args} as="small" variant={TEXT_VARIANT__CAPTION} size={TEXT_SIZE__LG} color={TEXT_COLOR__MUTED}>
        * Required field - Please provide accurate information
      </Text>
      <Text {...args} as="span" variant={TEXT_VARIANT__CAPTION} size={TEXT_SIZE__MD} color={TEXT_COLOR__SECONDARY}>
        Last updated: November 2024
      </Text>
      <Text {...args} as="span" variant={TEXT_VARIANT__CAPTION} size={TEXT_SIZE__SM} color={TEXT_COLOR__SUCCESS}>
        ✓ Data successfully validated
      </Text>
    </div>
  ),
};

export const Labels: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '400px' }}>
      <Text {...args} as="span" variant={TEXT_VARIANT__LABEL} size={TEXT_SIZE__MD} weight={TEXT_WEIGHT__MEDIUM}>
        Form Label - Medium
      </Text>
      <Text {...args} as="span" variant={TEXT_VARIANT__LABEL} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__MEDIUM}>
        Form Label - Small
      </Text>
      <Text {...args} as="span" variant={TEXT_VARIANT__LABEL} size={TEXT_SIZE__SM} color={TEXT_COLOR__MUTED}>
        Field Helper Text
      </Text>
      <Text {...args} as="span" variant={TEXT_VARIANT__LABEL} size={TEXT_SIZE__SM} weight={TEXT_WEIGHT__BOLD}>
        Required Field Label *
      </Text>
    </div>
  ),
};

export const Colors: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '400px' }}>
      <Text {...args} as="p" color={TEXT_COLOR__PRIMARY}>
        Primary text color - main content
      </Text>
      <Text {...args} as="p" color={TEXT_COLOR__SECONDARY}>
        Secondary text color - supporting content
      </Text>
      <Text {...args} as="p" color={TEXT_COLOR__MUTED}>
        Muted text color - less important content
      </Text>
      <Text {...args} as="p" color={TEXT_COLOR__DISABLED}>
        Disabled text color - unavailable content
      </Text>
      <div style={{ backgroundColor: '#1a1a1a', padding: '8px', borderRadius: '4px' }}>
        <Text {...args} as="p" color={TEXT_COLOR__INVERSE}>
          Inverse text color - for dark backgrounds
        </Text>
      </div>
      <Text {...args} as="p" color={TEXT_COLOR__INTERACTIVE}>
        Interactive text color - links and actions
      </Text>
      <Text {...args} as="p" color={TEXT_COLOR__INTERACTIVE_HOVER}>
        Interactive hover text color - hovered links
      </Text>
      <Text {...args} as="p" color={TEXT_COLOR__SUCCESS}>
        Success text color - positive messages
      </Text>
      <Text {...args} as="p" color={TEXT_COLOR__WARNING}>
        Warning text color - cautionary messages
      </Text>
      <Text {...args} as="p" color={TEXT_COLOR__DANGER}>
        Danger text color - error messages
      </Text>
      <Text {...args} as="p" color={TEXT_COLOR__INFO}>
        Info text color - informational messages
      </Text>
      <Text {...args} as="p" color={TEXT_COLOR__BRAND}>
        Brand text color - branded content
      </Text>
      <Text {...args} as="p" color={TEXT_COLOR__ACCENT}>
        Accent text color - highlighted content
      </Text>
    </div>
  ),
};

export const Weights: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '400px' }}>
      <Text {...args} as="p" weight={TEXT_WEIGHT__LIGHT}>
        Light weight text - subtle content
      </Text>
      <Text {...args} as="p" weight={TEXT_WEIGHT__MEDIUM}>
        Medium weight text - default content
      </Text>
      <Text {...args} as="p" weight={TEXT_WEIGHT__BOLD}>
        Bold weight text - highly emphasized content
      </Text>
    </div>
  ),
};

const meta = {
  title: 'Components/Primitives/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    as: 'p' as const,
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The text content to display',
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
