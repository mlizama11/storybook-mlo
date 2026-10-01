import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'
import { SegmentedControl } from '../components'

const meta = {
  title: 'Fieldwork UI/Components/Segmented Control',
  component: SegmentedControl,
  args: {
    options: ['Overview', 'Activity', 'Members'],
    value: 'Overview',
    onChange: () => undefined,
  },
  render: (args) => <InteractiveSegmentedControl {...args} />,
} satisfies Meta<typeof SegmentedControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

function InteractiveSegmentedControl(args: ComponentProps<typeof SegmentedControl>) {
  const [value, setValue] = useState(args.value)
  return <SegmentedControl {...args} value={value} onChange={setValue} />
}
