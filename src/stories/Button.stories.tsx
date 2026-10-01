import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '../components'

const meta = {
  title: 'Fieldwork UI/Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['solid', 'outline', 'quiet', 'icon'] },
  },
  args: { children: 'Get started', variant: 'solid' },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: (
      <>
        Get started <ArrowUpRight size={15} />
      </>
    ),
  },
}

export const Outline: Story = {
  args: { children: 'Explore', variant: 'outline' },
}

export const Quiet: Story = {
  args: { children: 'Quick action', variant: 'quiet' },
}
