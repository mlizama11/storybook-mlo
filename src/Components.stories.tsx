import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import {
  AvatarGroup,
  Badge,
  Button,
  ProjectCard,
  ProgressRing,
  SearchInput,
  SegmentedControl,
  StatCard,
  Toast,
  Toggle,
} from './components'

const meta: Meta = {
  title: 'Fieldwork UI/Components',
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj

export const Buttons: Story = {
  render: () => (
    <div className="button-row">
      <Button>
        Get started <ArrowUpRight size={15} />
      </Button>
      <Button variant="outline">Explore</Button>
      <Button variant="quiet">Quick action</Button>
    </div>
  ),
}
export const Avatars: Story = {
  render: () => (
    <AvatarGroup
      limit={3}
      people={[
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
      ]}
    />
  ),
}
export const Badges: Story = {
  render: () => (
    <div className="badge-row">
      <Badge tone="lime">In progress</Badge>
      <Badge tone="blue">Review</Badge>
      <Badge tone="coral">Needs love</Badge>
    </div>
  ),
}
export const Search: Story = {
  render: () => <SearchInput placeholder="Search the library" style={{ width: 260 }} />,
}
export const Segmented: Story = { render: () => <SegmentedStory /> }
export const ToggleSwitch: Story = { render: () => <ToggleStory /> }
export const Progress: Story = { render: () => <ProgressRing value={72} /> }
export const Statistics: Story = {
  render: () => (
    <div style={{ width: 220 }}>
      <StatCard label="Active projects" value="24" change="12%" />
    </div>
  ),
}
export const Project: Story = {
  render: () => (
    <div style={{ width: 280 }}>
      <ProjectCard
        title="Sunday Assembly"
        category="Brand identity"
        progress={68}
        image="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=720&h=440&fit=crop"
        people={[
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
        ]}
      />
    </div>
  ),
}
export const ToastNotification: Story = {
  render: () => (
    <div style={{ width: 330 }}>
      <Toast
        title="Changes saved"
        message="Your workspace is up to date."
        onDismiss={() => undefined}
      />
    </div>
  ),
}

function SegmentedStory() {
  const [value, setValue] = useState('Overview')
  return (
    <SegmentedControl
      options={['Overview', 'Activity', 'Members']}
      value={value}
      onChange={setValue}
    />
  )
}

function ToggleStory() {
  const [checked, setChecked] = useState(true)
  return (
    <div style={{ width: 220 }}>
      <Toggle label="Weekly digest" checked={checked} onChange={setChecked} />
    </div>
  )
}
