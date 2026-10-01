import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProgressRing } from '../components'

const meta = {
  title: 'Fieldwork UI/Components/Progress Ring',
  component: ProgressRing,
  args: { value: 72, label: 'complete' },
  argTypes: { value: { control: { type: 'range', min: 0, max: 100, step: 1 } } },
} satisfies Meta<typeof ProgressRing>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
