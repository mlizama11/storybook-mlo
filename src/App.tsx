import { useState } from 'react'
import { ArrowUpRight, BookOpen, Command, Component, Layers3, Sparkles } from 'lucide-react'
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
import './App.css'

const storybookUrl = import.meta.env.VITE_STORYBOOK_URL || 'http://localhost:6006'

function App() {
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('Everything')
  const [activeView, setActiveView] = useState('Overview')
  const [notificationsOn, setNotificationsOn] = useState(true)
  const [toastVisible, setToastVisible] = useState(true)

  const team = [
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

  const pieces = [
    {
      name: 'Buttons',
      story: 'button--primary',
      category: 'Controls',
      description: 'Clear actions, made tactile.',
      preview: (
        <div className="button-row">
          <Button>
            Get started <ArrowUpRight size={15} />
          </Button>
          <Button variant="outline">Explore</Button>
          <Button variant="quiet" icon={<Sparkles size={15} />}>
            Quick action
          </Button>
        </div>
      ),
    },
    {
      name: 'Avatars',
      story: 'avatar-group--default',
      category: 'People',
      description: 'A little face goes a long way.',
      preview: (
        <div className="avatar-preview">
          <AvatarGroup people={team} />
          <span>+ 12 contributors</span>
        </div>
      ),
    },
    {
      name: 'Badges',
      story: 'badge--in-progress',
      category: 'Signals',
      description: 'Small signals with a point of view.',
      preview: (
        <div className="badge-row">
          <Badge tone="lime">In progress</Badge>
          <Badge tone="blue">Review</Badge>
          <Badge tone="coral">Needs love</Badge>
        </div>
      ),
    },
    {
      name: 'Search field',
      story: 'search-input--default',
      category: 'Controls',
      description: 'Find the right thing, faster.',
      preview: <SearchInput placeholder="Try ‘buttons’" />,
    },
    {
      name: 'Segmented control',
      story: 'segmented-control--default',
      category: 'Controls',
      description: 'Switch context without losing it.',
      preview: (
        <SegmentedControl
          options={['Overview', 'Activity', 'Members']}
          value={activeView}
          onChange={setActiveView}
        />
      ),
    },
    {
      name: 'Toggle',
      story: 'toggle--enabled',
      category: 'Controls',
      description: 'An honest on or off.',
      preview: (
        <Toggle label="Weekly digest" checked={notificationsOn} onChange={setNotificationsOn} />
      ),
    },
    {
      name: 'Progress ring',
      story: 'progress-ring--default',
      category: 'Signals',
      description: 'Momentum at a glance.',
      preview: (
        <div className="ring-preview">
          <ProgressRing value={72} />
          <div>
            <strong>Almost there</strong>
            <span>18 of 25 tasks</span>
          </div>
        </div>
      ),
    },
    {
      name: 'Stat card',
      story: 'stat-card--default',
      category: 'Data',
      description: 'Numbers with a little context.',
      preview: <StatCard label="Active projects" value="24" change="12%" trend="up" />,
    },
    {
      name: 'Project card',
      story: 'project-card--default',
      category: 'Content',
      description: 'A whole world in one glance.',
      preview: (
        <ProjectCard
          title="Sunday Assembly"
          category="Brand identity"
          progress={68}
          image="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=720&h=440&fit=crop"
          people={team.slice(0, 3)}
        />
      ),
    },
    {
      name: 'Toast',
      story: 'toast--success',
      category: 'Feedback',
      description: 'A useful nudge, never a shout.',
      preview: toastVisible ? (
        <Toast
          title="Changes saved"
          message="Your workspace is up to date."
          onDismiss={() => setToastVisible(false)}
        />
      ) : (
        <Button variant="outline" onClick={() => setToastVisible(true)}>
          Show notification
        </Button>
      ),
    },
  ]

  const filters = ['Everything', 'Controls', 'Signals', 'More']
  const visiblePieces = pieces.filter((piece) => {
    const matchesQuery = `${piece.name} ${piece.description}`
      .toLowerCase()
      .includes(query.toLowerCase())
    const matchesFilter =
      activeFilter === 'Everything' ||
      (activeFilter === 'More'
        ? !['Controls', 'Signals'].includes(piece.category)
        : piece.category === activeFilter)
    return matchesQuery && matchesFilter
  })

  return (
    <div className="workspace">
      <aside className="sidebar">
        <a className="brand" href="#top" aria-label="Fieldwork UI home">
          <span className="brand-mark">
            <Component size={17} />
          </span>
          <span>
            fieldwork<span className="brand-dot">.</span>
            <small>UI LIBRARY</small>
          </span>
        </a>
        <div className="sidebar-section">
          <span className="eyebrow">WORKSPACE</span>
          <a className="side-link side-link--active" href="#components">
            <Layers3 size={16} /> Components <span className="side-count">10</span>
          </a>
          <a className="side-link" href={storybookUrl} target="_blank" rel="noreferrer">
            <BookOpen size={16} /> Storybook <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="sidebar-bottom">
          <div className="version-line">
            <span className="live-dot" /> All systems go <span>v1.0</span>
          </div>
          <a className="github-link" href={storybookUrl} target="_blank" rel="noreferrer">
            <BookOpen size={15} /> Read component stories <ArrowUpRight size={13} />
          </a>
          <div className="profile">
            <div className="profile-avatar">ML</div>
            <span>
              <strong>Made with care</strong>
              <small>Portfolio edition</small>
            </span>
            <Command size={15} />
          </div>
        </div>
      </aside>

      <main className="main-content" id="top">
        <header className="topbar">
          <div className="breadcrumb">
            Library <span>/</span> <strong>Components</strong>
          </div>
          <div className="topbar-actions">
            <span className="updated-label">Updated just now</span>
            <a
              className="ui-button ui-button--icon"
              href={storybookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open component documentation"
              title="Open component documentation"
            >
              <BookOpen size={17} />
            </a>
            <a
              className="ui-button ui-button--solid"
              href={storybookUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="ui-button-icon">
                <ArrowUpRight size={15} />
              </span>
              View docs
            </a>
          </div>
        </header>

        <section className="intro" id="components">
          <div className="intro-copy">
            <div className="intro-kicker">
              <span className="kicker-mark">
                <Sparkles size={13} />
              </span>{' '}
              THE FIELDWORK COLLECTION <span className="kicker-line" />
            </div>
            <h1>
              Good design is
              <br />
              <em>in the details.</em>
            </h1>
            <p>
              A considered set of little things that make the big things feel effortless. Built for
              teams who care how work feels.
            </p>
            <div className="intro-meta">
              <span>
                <strong>10</strong> components
              </span>
              <span className="meta-divider" />
              <span>
                <strong>04</strong> categories
              </span>
              <span className="meta-divider" />
              <span>
                <strong>01</strong> point of view
              </span>
            </div>
          </div>
          <div className="intro-art" aria-label="Abstract sunburst artwork">
            <div className="art-stamp">
              FW
              <br />
              <span>EST. 24</span>
            </div>
            <div className="sunburst">
              <div className="sunburst-core" />
            </div>
            <span className="art-caption">
              A little more
              <br />
              human, by design.
            </span>
            <span className="art-index">№ 01 — 10</span>
          </div>
        </section>

        <section className="collection-head">
          <div>
            <div className="section-kicker">
              THE LIBRARY <span> / 01</span>
            </div>
            <h2>
              Components{' '}
              <span className="component-count">
                {visiblePieces.length.toString().padStart(2, '0')}
              </span>
            </h2>
          </div>
          <div className="collection-tools">
            <SearchInput
              placeholder="Search components"
              aria-label="Search components"
              value={query}
              onChange={(event) => setQuery(event.currentTarget.value)}
            />
            <span className="tool-divider" />
            <div className="filter-tabs" role="group" aria-label="Filter components">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={
                    activeFilter === filter ? 'filter-tab filter-tab--active' : 'filter-tab'
                  }
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="component-grid" aria-label="Component gallery">
          {visiblePieces.map((piece, index) => (
            <article className="specimen" key={piece.name}>
              <div className="specimen-head">
                <span className="specimen-index">{(index + 1).toString().padStart(2, '0')}</span>
                <span className="specimen-category">{piece.category}</span>
                <a
                  className="specimen-open"
                  href={`${storybookUrl}/?path=/story/fieldwork-ui-components-${piece.story}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${piece.name} story`}
                  title={`View ${piece.name} story`}
                >
                  <ArrowUpRight size={15} />
                </a>
              </div>
              <div
                className={`specimen-preview specimen-preview--${piece.name.toLowerCase().replaceAll(' ', '-')}`}
              >
                {piece.preview}
              </div>
              <div className="specimen-info">
                <div>
                  <h3>{piece.name}</h3>
                  <p>{piece.description}</p>
                </div>
                <span className="specimen-arrow">
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </section>

        {visiblePieces.length === 0 && (
          <div className="empty-state">
            <strong>No components found.</strong>
            <span>Try another search or filter.</span>
          </div>
        )}

        <footer className="page-footer">
          <span>
            FIELDWORK UI <span className="footer-star">✳</span> MADE TO MAKE GOOD WORK
          </span>
          <span>© 2025 — MADE FOR THE DETAILS</span>
        </footer>
      </main>
      <div className="mobile-bottom-bar">
        <span className="brand-mark">
          <Component size={17} />
        </span>
        <strong>
          fieldwork<span className="brand-dot">.</span>
        </strong>
        <span className="mobile-count">10 pieces</span>
      </div>
    </div>
  )
}

export default App
