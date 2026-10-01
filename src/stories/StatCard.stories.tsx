import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatCard } from '../components'

const meta = {
  title: 'Fieldwork UI/Components/Stat Card',
  component: StatCard,
  args: { label: 'Active projects', value: '24', change: '12%', trend: 'up' },
  argTypes: { trend: { control: 'radio', options: ['up', 'down'] } },
  render: (args) => (
    <div style={{ width: 220 }}>
      <StatCard {...args} />
    </div>
  ),
} satisfies Meta<typeof StatCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Declining: Story = {
  args: { label: 'Open tasks', value: '08', change: '4%', trend: 'down' },
}
