import type { Meta, StoryObj } from '@storybook/react-vite'
import { AvatarGroup } from '../components'

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
  {
    name: 'Owen Lee',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&fit=crop&crop=faces',
  },
]

const meta = {
  title: 'Fieldwork UI/Components/Avatar Group',
  component: AvatarGroup,
  args: { people, limit: 3 },
} satisfies Meta<typeof AvatarGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithoutOverflow: Story = {
  args: { people: people.slice(0, 3), limit: 3 },
}
