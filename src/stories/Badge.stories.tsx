import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '../components'

const meta = {
  title: 'Fieldwork UI/Components/Badge',
  component: Badge,
  argTypes: {
    tone: { control: 'select', options: ['neutral', 'lime', 'blue', 'coral'] },
  },
  args: { children: 'In progress', tone: 'lime' },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const InProgress: Story = {}

export const Review: Story = {
  args: { children: 'Review', tone: 'blue' },
}

export const NeedsAttention: Story = {
  args: { children: 'Needs love', tone: 'coral' },
}
