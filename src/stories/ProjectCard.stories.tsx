import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProjectCard } from '../components'

const people = [
  {
    name: 'Maya Chen',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces',
  },
  {
    name: 'Theo James',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces',
  },
  {
    name: 'Nina Patel',
    image:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=96&h=96&fit=crop&crop=faces',
  },
]

const meta = {
  title: 'Fieldwork UI/Components/Project Card',
  component: ProjectCard,
  args: {
    title: 'Sunday Assembly',
    category: 'Brand identity',
    progress: 68,
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=720&h=440&fit=crop',
    people,
  },
  argTypes: { progress: { control: { type: 'range', min: 0, max: 100, step: 1 } } },
  render: (args) => (
    <div style={{ width: 320 }}>
      <ProjectCard {...args} />
    </div>
  ),
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
