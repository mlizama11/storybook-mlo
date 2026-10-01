import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react'
import { Check, Search, X } from 'lucide-react'
import './components.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline' | 'quiet' | 'icon'
  icon?: ReactNode
}

export function Button({
  children,
  variant = 'solid',
  icon,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button className={`ui-button ui-button--${variant} ${className}`} {...props}>
      {icon && <span className="ui-button-icon">{icon}</span>}
      {children}
    </button>
  )
}

export type Person = { name: string; image: string }

export function AvatarGroup({ people, limit = 3 }: { people: Person[]; limit?: number }) {
  const visiblePeople = people.slice(0, limit)
  return (
    <div className="avatar-group" aria-label={`${people.length} contributors`}>
      {visiblePeople.map((person) => (
        <img key={person.name} src={person.image} alt={person.name} title={person.name} />
      ))}
      {people.length > limit && <span className="avatar-overflow">+{people.length - limit}</span>}
    </div>
  )
}

export function Badge({
  children,
  tone = 'neutral',
}: {
  children: ReactNode
  tone?: 'neutral' | 'lime' | 'blue' | 'coral'
}) {
  return (
    <span className={`ui-badge ui-badge--${tone}`}>
      <span className="badge-dot" />
      {children}
    </span>
  )
}

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & { label?: string }

export function SearchInput({ label, ...props }: SearchInputProps) {
  return (
    <label className="search-field">
      <Search size={16} aria-hidden="true" />
      <input {...props} aria-label={props['aria-label'] ?? label ?? 'Search'} />
    </label>
  )
}

export function SegmentedControl({
  options,
  value,
  onChange,
}: {
  options: string[]
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="segmented-control" role="tablist">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          role="tab"
          aria-selected={value === option}
          className={value === option ? 'segment segment--active' : 'segment'}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}) {
  return (
    <label className="toggle-control">
      <span>{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        className={`toggle-track${checked ? ' toggle-track--checked' : ''}`}
        onClick={() => onChange(!checked)}
      >
        <span className="toggle-thumb" />
      </button>
    </label>
  )
}

export function ProgressRing({ value, label = 'complete' }: { value: number; label?: string }) {
  const progress = Math.min(100, Math.max(0, value))
  const circumference = 2 * Math.PI * 22
  return (
    <div className="progress-ring" role="img" aria-label={`${progress}% ${label}`}>
      <svg viewBox="0 0 60 60" aria-hidden="true">
        <circle className="ring-track" cx="30" cy="30" r="22" />
        <circle
          className="ring-value"
          cx="30"
          cy="30"
          r="22"
          strokeDasharray={`${(circumference * progress) / 100} ${circumference}`}
        />
      </svg>
      <span>
        {progress}
        <small>%</small>
      </span>
    </div>
  )
}

export function StatCard({
  label,
  value,
  change,
  trend = 'up',
}: {
  label: string
  value: string
  change: string
  trend?: 'up' | 'down'
}) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <span>{label}</span>
        <span className={`stat-change stat-change--${trend}`}>
          {trend === 'up' ? '+' : '-'}
          {change}
        </span>
      </div>
      <strong>{value}</strong>
      <span className="stat-caption">vs. last month</span>
    </div>
  )
}

export function ProjectCard({
  title,
  category,
  progress,
  image,
  people,
}: {
  title: string
  category: string
  progress: number
  image: string
  people: Person[]
}) {
  return (
    <article className="project-card">
      <div className="project-image" style={{ backgroundImage: `url(${image})` }}>
        <span className="project-image-label">
          FIELD NOTES <span>№ 08</span>
        </span>
        <button className="project-more" type="button" aria-label={`Open ${title}`}>
          <X size={14} />
        </button>
      </div>
      <div className="project-content">
        <div className="project-meta">
          <span>{category}</span>
          <Badge tone="lime">In progress</Badge>
        </div>
        <h3>{title}</h3>
        <div className="project-footer">
          <AvatarGroup people={people} />
          <span className="project-progress">
            {progress}% <span>done</span>
          </span>
        </div>
        <div className="project-progress-track">
          <span style={{ width: `${Math.min(100, Math.max(0, progress))}%` }} />
        </div>
      </div>
    </article>
  )
}

export function Toast({
  title,
  message,
  onDismiss,
}: {
  title: string
  message: string
  onDismiss: () => void
}) {
  return (
    <div className="ui-toast" role="status">
      <span className="toast-check">
        <Check size={14} />
      </span>
      <span className="toast-copy">
        <strong>{title}</strong>
        <span>{message}</span>
      </span>
      <button
        className="toast-close"
        type="button"
        aria-label="Dismiss notification"
        onClick={onDismiss}
      >
        <X size={15} />
      </button>
    </div>
  )
}
