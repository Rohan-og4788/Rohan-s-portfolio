import { useMemo, useState } from 'react'
import {
  Bell,
  Bookmark,
  BookmarkCheck,
  Calendar,
  ChevronDown,
  Clapperboard,
  Film,
  Flame,
  Grid3X3,
  Heart,
  Moon,
  Play,
  Search,
  SlidersHorizontal,
  Sparkles,
  Star,
  Sun,
  Tv,
  UserRound,
  X,
} from 'lucide-react'

const GENRES = ['All', 'Action', 'Drama', 'Sci-Fi', 'Thriller', 'Animation', 'Crime', 'Romance']
const YEARS = ['All', '2026', '2025', '2024', '2023', '2022', '2021', '2019', '2018']
const QUALITIES = ['All', '4K', '1080p', '720p']

const MOVIES = [
  {
    id: 1,
    title: 'Project Hail Mary',
    type: 'Movie',
    year: 2026,
    quality: '4K',
    rating: 8.7,
    runtime: '2h 14m',
    genre: ['Sci-Fi', 'Drama', 'Adventure'],
    cast: ['Ryan Gosling', 'Sandra Huller', 'Milana Vayntrub'],
    platform: 'Theater',
    mood: 'Cosmic, hopeful, brainy',
    poster: 'https://image.tmdb.org/t/p/w500/5e2ZLwC3jHDX9XFwWac3QTYMrZh.jpg',
    backdrop: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=85',
    overview:
      'A science teacher wakes up alone on a spaceship and uncovers a mission to stop a mysterious threat from killing Earths sun.',
    review: 'A premium sci-fi pick for anyone who likes survival stories, impossible math, and a big emotional finish.',
  },
  {
    id: 2,
    title: 'Daredevil: Born Again',
    type: 'Series',
    year: 2025,
    quality: '1080p',
    rating: 8.4,
    runtime: '2 seasons',
    genre: ['Action', 'Crime', 'Thriller'],
    cast: ['Charlie Cox', 'Vincent DOnofrio', 'Margarita Levieva'],
    platform: 'Disney+',
    mood: 'Gritty, legal, street-level',
    poster: 'https://image.tmdb.org/t/p/w500/9lLuhV703HGCbnz6FxnqCwIwzAZ.jpg',
    backdrop: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=85',
    overview:
      'Matt Murdock fights for justice through his law firm while Wilson Fisk builds a dangerous political future in New York.',
    review: 'Sharp city noir with muscular action and a strong rivalry at the center.',
  },
  {
    id: 3,
    title: 'The Boys',
    type: 'Series',
    year: 2026,
    quality: '4K',
    rating: 8.6,
    runtime: '5 seasons',
    genre: ['Action', 'Drama', 'Sci-Fi'],
    cast: ['Karl Urban', 'Jack Quaid', 'Antony Starr'],
    platform: 'Prime Video',
    mood: 'Chaotic, brutal, satirical',
    poster: 'https://image.tmdb.org/t/p/w500/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg',
    backdrop: 'https://images.unsplash.com/photo-1520473378652-85d9c4aee6cf?auto=format&fit=crop&w=1600&q=85',
    overview:
      'A group of vigilantes sets out to take down corrupt superheroes with grit, leverage, and dangerous secrets.',
    review: 'A loud, stylish anti-superhero ride with biting social commentary.',
  },
  {
    id: 4,
    title: 'Blade Runner 2049',
    type: 'Movie',
    year: 2017,
    quality: '4K',
    rating: 8.0,
    runtime: '2h 44m',
    genre: ['Sci-Fi', 'Drama', 'Thriller'],
    cast: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas'],
    platform: 'Apple TV',
    mood: 'Neon, lonely, philosophical',
    poster: 'https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
    backdrop: 'https://images.unsplash.com/photo-1485163819542-13adeb5e0068?auto=format&fit=crop&w=1600&q=85',
    overview:
      'A new blade runner unearths a long-buried secret that leads him to a former blade runner missing for decades.',
    review: 'Visually hypnotic and patient, with one of modern sci-fis most memorable worlds.',
  },
  {
    id: 5,
    title: 'Spider-Man: Across the Spider-Verse',
    type: 'Movie',
    year: 2023,
    quality: '1080p',
    rating: 8.6,
    runtime: '2h 20m',
    genre: ['Animation', 'Action', 'Adventure'],
    cast: ['Shameik Moore', 'Hailee Steinfeld', 'Oscar Isaac'],
    platform: 'Netflix',
    mood: 'Electric, emotional, kinetic',
    poster: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    backdrop: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85',
    overview:
      'Miles Morales catapults across the multiverse and faces a team of Spider-people with a very different idea of heroism.',
    review: 'A bursting comic-book canvas with huge heart and wild visual rhythm.',
  },
  {
    id: 6,
    title: 'Oppenheimer',
    type: 'Movie',
    year: 2023,
    quality: '4K',
    rating: 8.3,
    runtime: '3h 0m',
    genre: ['Drama', 'History', 'Thriller'],
    cast: ['Cillian Murphy', 'Emily Blunt', 'Robert Downey Jr.'],
    platform: 'Prime Video',
    mood: 'Tense, historical, grand',
    poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    backdrop: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85',
    overview:
      'The story of J. Robert Oppenheimer and the scientific, political, and moral pressure around the atomic bomb.',
    review: 'Dense, propulsive, and built around a magnetic lead performance.',
  },
  {
    id: 7,
    title: 'The Batman',
    type: 'Movie',
    year: 2022,
    quality: '1080p',
    rating: 7.8,
    runtime: '2h 57m',
    genre: ['Crime', 'Thriller', 'Action'],
    cast: ['Robert Pattinson', 'Zoe Kravitz', 'Paul Dano'],
    platform: 'Max',
    mood: 'Rainy, detective, noir',
    poster: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    backdrop: 'https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?auto=format&fit=crop&w=1600&q=85',
    overview:
      'Batman investigates Gothams hidden corruption when a sadistic killer starts targeting the citys elite.',
    review: 'A brooding detective story with a strong sense of place and atmosphere.',
  },
  {
    id: 8,
    title: 'Dune: Part Two',
    type: 'Movie',
    year: 2024,
    quality: '4K',
    rating: 8.5,
    runtime: '2h 46m',
    genre: ['Sci-Fi', 'Adventure', 'Drama'],
    cast: ['Timothee Chalamet', 'Zendaya', 'Rebecca Ferguson'],
    platform: 'Max',
    mood: 'Epic, desert, mythic',
    poster: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    backdrop: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1600&q=85',
    overview:
      'Paul Atreides unites with Chani and the Fremen while seeking revenge against the people who destroyed his family.',
    review: 'Massive scale, clean spectacle, and a sharper emotional center.',
  },
  {
    id: 9,
    title: 'The Last of Us',
    type: 'Series',
    year: 2023,
    quality: '1080p',
    rating: 8.7,
    runtime: '2 seasons',
    genre: ['Drama', 'Thriller', 'Adventure'],
    cast: ['Pedro Pascal', 'Bella Ramsey', 'Gabriel Luna'],
    platform: 'Max',
    mood: 'Tender, tense, post-apocalyptic',
    poster: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
    backdrop: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=85',
    overview:
      'A hardened survivor escorts a teenager across a transformed America after a global fungal outbreak.',
    review: 'Character-first survival storytelling with quiet emotional force.',
  },
  {
    id: 10,
    title: 'Inside Out 2',
    type: 'Movie',
    year: 2024,
    quality: '1080p',
    rating: 7.6,
    runtime: '1h 36m',
    genre: ['Animation', 'Comedy', 'Drama'],
    cast: ['Amy Poehler', 'Maya Hawke', 'Kensington Tallman'],
    platform: 'Disney+',
    mood: 'Warm, clever, family-friendly',
    poster: 'https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
    backdrop: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=85',
    overview:
      'Rileys emotions meet new arrivals as her inner world expands during the turbulent start of her teenage years.',
    review: 'Bright, funny, and emotionally precise about growing up.',
  },
  {
    id: 11,
    title: 'Euphoria',
    type: 'Series',
    year: 2019,
    quality: '1080p',
    rating: 8.2,
    runtime: '3 seasons',
    genre: ['Drama', 'Romance'],
    cast: ['Zendaya', 'Hunter Schafer', 'Sydney Sweeney'],
    platform: 'Max',
    mood: 'Stylized, raw, nocturnal',
    poster: 'https://image.tmdb.org/t/p/w500/3Q0hd3heuWwDWpwcDkhQOA6TYWI.jpg',
    backdrop: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=85',
    overview:
      'A group of high school students navigate friendship, love, identity, trauma, and social pressure.',
    review: 'A glossy and intense coming-of-age drama with bold direction.',
  },
  {
    id: 12,
    title: 'Interstellar',
    type: 'Movie',
    year: 2014,
    quality: '4K',
    rating: 8.7,
    runtime: '2h 49m',
    genre: ['Sci-Fi', 'Drama', 'Adventure'],
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    platform: 'Paramount+',
    mood: 'Vast, emotional, cosmic',
    poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    backdrop: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1600&q=85',
    overview:
      'A team travels through a wormhole near Saturn in search of a future home for humanity.',
    review: 'A sweeping science-fiction epic that puts family at the center of impossible scale.',
  },
]

function App() {
  const [query, setQuery] = useState('')
  const [activeGenre, setActiveGenre] = useState('All')
  const [activeYear, setActiveYear] = useState('All')
  const [activeQuality, setActiveQuality] = useState('All')
  const [selectedMovie, setSelectedMovie] = useState(MOVIES[0])
  const [watchlist, setWatchlist] = useState([MOVIES[7].id, MOVIES[11].id])
  const [showWatchlist, setShowWatchlist] = useState(false)
  const [theme, setTheme] = useState('dark')

  const featured = MOVIES[0]

  const filteredMovies = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    return MOVIES.filter((movie) => {
      const searchable = [
        movie.title,
        movie.type,
        movie.year,
        movie.platform,
        movie.cast.join(' '),
        movie.genre.join(' '),
      ]
        .join(' ')
        .toLowerCase()

      const matchesQuery = !normalized || searchable.includes(normalized)
      const matchesGenre = activeGenre === 'All' || movie.genre.includes(activeGenre)
      const matchesYear = activeYear === 'All' || String(movie.year) === activeYear
      const matchesQuality = activeQuality === 'All' || movie.quality === activeQuality

      return matchesQuery && matchesGenre && matchesYear && matchesQuality
    })
  }, [activeGenre, activeQuality, activeYear, query])

  const watchlistMovies = MOVIES.filter((movie) => watchlist.includes(movie.id))
  const recommended = MOVIES.filter(
    (movie) => movie.id !== selectedMovie.id && movie.genre.some((genre) => selectedMovie.genre.includes(genre)),
  ).slice(0, 4)

  const toggleWatchlist = (movieId) => {
    setWatchlist((current) =>
      current.includes(movieId) ? current.filter((id) => id !== movieId) : [...current, movieId],
    )
  }

  const setFilterFromQuickLink = (genre) => {
    setActiveGenre(genre)
    setQuery('')
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`app-shell ${theme}`}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CineVault home">
          <span className="brand-mark">
            <Clapperboard size={22} />
          </span>
          <span>
            <strong>CineVault</strong>
            <small>Movie discovery</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#catalog">Catalog</a>
          <a href="#trending">Trending</a>
          <a href="#reviews">Reviews</a>
          <a href="#ai">AI Picks</a>
        </nav>

        <div className="header-actions">
          <button className="icon-button" type="button" aria-label="Notifications">
            <Bell size={18} />
          </button>
          <button className="icon-button" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="watchlist-button" type="button" onClick={() => setShowWatchlist(true)}>
            <BookmarkCheck size={18} />
            <span>Watchlist</span>
            <strong>{watchlist.length}</strong>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section" style={{ '--hero-image': `url(${featured.backdrop})` }}>
          <div className="hero-content">
            <div className="eyebrow">
              <Sparkles size={16} />
              Search by title, actor, genre, year
            </div>
            <h1>Find the next movie worth your night.</h1>
            <p>
              Explore trending films and series, compare ratings, save a watchlist, and open rich detail previews from one cinematic search surface.
            </p>

            <form className="hero-search" onSubmit={(event) => event.preventDefault()}>
              <Search size={22} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search Inception, Zendaya, sci-fi, 2024..."
                aria-label="Search movies"
              />
              <button type="button" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
                Search
              </button>
            </form>

            <div className="quick-links" aria-label="Quick genre filters">
              {['Action', 'Sci-Fi', 'Drama', 'Thriller', 'Animation'].map((genre) => (
                <button key={genre} type="button" onClick={() => setFilterFromQuickLink(genre)}>
                  {genre}
                </button>
              ))}
            </div>
          </div>

          <aside className="hero-feature">
            <span className="quality-pill">{featured.quality}</span>
            <img
              src={featured.poster}
              alt={`${featured.title} poster`}
              loading="eager"
              onError={(event) => {
                event.currentTarget.src = featured.backdrop
              }}
            />
            <div>
              <p>Featured release</p>
              <h2>{featured.title}</h2>
              <div className="rating-line">
                <Star size={16} fill="currentColor" />
                {featured.rating} / 10
              </div>
            </div>
          </aside>
        </section>

        <section className="stats-strip" aria-label="Platform highlights">
          <Stat icon={<Film size={20} />} value="12" label="Curated titles" />
          <Stat icon={<Star size={20} />} value="8.3" label="Average rating" />
          <Stat icon={<Tv size={20} />} value="7" label="Streaming hubs" />
          <Stat icon={<Heart size={20} />} value={watchlist.length} label="Saved picks" />
        </section>

        <section className="page-section" id="trending">
          <SectionHeading
            eyebrow="Hot now"
            title="Trending spotlight"
            action="Updated daily"
            icon={<Flame size={18} />}
          />
          <div className="spotlight-grid">
            {MOVIES.slice(1, 5).map((movie) => (
              <SpotlightCard
                key={movie.id}
                movie={movie}
                selected={watchlist.includes(movie.id)}
                onOpen={setSelectedMovie}
                onToggle={toggleWatchlist}
              />
            ))}
          </div>
        </section>

        <section className="page-section catalog-layout" id="catalog">
          <div className="catalog-main">
            <SectionHeading
              eyebrow="Browse"
              title="Movie catalog"
              action={`${filteredMovies.length} results`}
              icon={<Grid3X3 size={18} />}
            />

            <div className="filter-panel">
              <FilterGroup icon={<SlidersHorizontal size={16} />} label="Genre" options={GENRES} value={activeGenre} onChange={setActiveGenre} />
              <FilterGroup icon={<Calendar size={16} />} label="Year" options={YEARS} value={activeYear} onChange={setActiveYear} />
              <FilterGroup icon={<Play size={16} />} label="Quality" options={QUALITIES} value={activeQuality} onChange={setActiveQuality} />
            </div>

            <div className="movie-grid">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  saved={watchlist.includes(movie.id)}
                  onOpen={setSelectedMovie}
                  onToggle={toggleWatchlist}
                />
              ))}
            </div>

            {filteredMovies.length === 0 && (
              <div className="empty-state">
                <Search size={30} />
                <h3>No titles found</h3>
                <p>Try a different actor, genre, year, or quality filter.</p>
              </div>
            )}
          </div>

          <aside className="details-panel">
            <MovieDetails movie={selectedMovie} saved={watchlist.includes(selectedMovie.id)} onToggle={toggleWatchlist} />
          </aside>
        </section>

        <section className="page-section two-column" id="reviews">
          <div className="review-panel">
            <SectionHeading eyebrow="Community" title="Fresh reviews" action="Live preview" icon={<UserRound size={18} />} />
            {MOVIES.slice(4, 8).map((movie) => (
              <article className="review-row" key={movie.id}>
                <img
                  src={movie.poster}
                  alt=""
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = movie.backdrop
                  }}
                />
                <div>
                  <div className="review-meta">
                    <strong>{movie.title}</strong>
                    <span>{movie.rating}/10</span>
                  </div>
                  <p>{movie.review}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="ai-panel" id="ai">
            <SectionHeading eyebrow="Smart picks" title="AI-style recommendations" action="Based on your selection" icon={<Sparkles size={18} />} />
            <p className="ai-copy">
              Because you selected <strong>{selectedMovie.title}</strong>, start with titles that share its tone, genre, and audience mood.
            </p>
            <div className="mini-list">
              {recommended.map((movie) => (
                <button key={movie.id} type="button" onClick={() => setSelectedMovie(movie)}>
                  <img
                    src={movie.poster}
                    alt=""
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.src = movie.backdrop
                    }}
                  />
                  <span>
                    <strong>{movie.title}</strong>
                    <small>{movie.mood}</small>
                  </span>
                  <ChevronDown size={16} />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>CineVault</strong>
          <p>Movie data concept inspired by TMDB-style discovery APIs. Built as a responsive demo website.</p>
        </div>
        <a href="#top">Back to top</a>
      </footer>

      {showWatchlist && (
        <div className="drawer-backdrop" role="presentation" onClick={() => setShowWatchlist(false)}>
          <aside className="watchlist-drawer" role="dialog" aria-label="Watchlist" onClick={(event) => event.stopPropagation()}>
            <div className="drawer-head">
              <div>
                <p>Saved titles</p>
                <h2>Your watchlist</h2>
              </div>
              <button className="icon-button" type="button" onClick={() => setShowWatchlist(false)} aria-label="Close watchlist">
                <X size={18} />
              </button>
            </div>
            <div className="drawer-list">
              {watchlistMovies.map((movie) => (
                <button
                  key={movie.id}
                  type="button"
                  onClick={() => {
                    setSelectedMovie(movie)
                    setShowWatchlist(false)
                  }}
                >
                  <img
                    src={movie.poster}
                    alt=""
                    onError={(event) => {
                      event.currentTarget.src = movie.backdrop
                    }}
                  />
                  <span>
                    <strong>{movie.title}</strong>
                    <small>{movie.year} | {movie.genre.slice(0, 2).join(', ')}</small>
                  </span>
                  <Star size={15} fill="currentColor" />
                </button>
              ))}
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}

function Stat({ icon, value, label }) {
  return (
    <div className="stat-card">
      {icon}
      <span>{value}</span>
      <p>{label}</p>
    </div>
  )
}

function SectionHeading({ eyebrow, title, action, icon }) {
  return (
    <div className="section-heading">
      <div>
        <p>
          {icon}
          {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      <span>{action}</span>
    </div>
  )
}

function FilterGroup({ icon, label, options, value, onChange }) {
  return (
    <div className="filter-group">
      <span>
        {icon}
        {label}
      </span>
      <div>
        {options.map((option) => (
          <button key={option} className={value === option ? 'active' : ''} type="button" onClick={() => onChange(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

function MovieCard({ movie, saved, onOpen, onToggle }) {
  return (
    <article className="movie-card">
      <button className="poster-button" type="button" onClick={() => onOpen(movie)} aria-label={`Open ${movie.title} details`}>
        <img
          src={movie.poster}
          alt={`${movie.title} poster`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = movie.backdrop
          }}
        />
        <span className="poster-overlay">
          <Play size={22} fill="currentColor" />
        </span>
        <span className="poster-rating">
          <Star size={13} fill="currentColor" />
          {movie.rating}
        </span>
      </button>
      <div className="movie-card-body">
        <div>
          <h3>{movie.title}</h3>
          <p>{movie.year} | {movie.type} | {movie.quality}</p>
        </div>
        <button className="save-button" type="button" onClick={() => onToggle(movie.id)} aria-label={saved ? 'Remove from watchlist' : 'Add to watchlist'}>
          {saved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
        </button>
      </div>
    </article>
  )
}

function SpotlightCard({ movie, selected, onOpen, onToggle }) {
  return (
    <article className="spotlight-card" style={{ '--card-image': `url(${movie.backdrop})` }}>
      <div>
        <span>{movie.quality}</span>
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        <div className="spotlight-actions">
          <button type="button" onClick={() => onOpen(movie)}>
            <Play size={16} fill="currentColor" />
            Preview
          </button>
          <button type="button" onClick={() => onToggle(movie.id)} aria-label={selected ? 'Remove from watchlist' : 'Save to watchlist'}>
            {selected ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
          </button>
        </div>
      </div>
    </article>
  )
}

function MovieDetails({ movie, saved, onToggle }) {
  return (
    <article className="movie-details">
      <div className="details-backdrop" style={{ '--details-image': `url(${movie.backdrop})` }} />
      <div className="details-content">
        <div className="details-title">
          <div>
            <p>{movie.type} | {movie.year} | {movie.runtime}</p>
            <h2>{movie.title}</h2>
          </div>
          <button className="save-button filled" type="button" onClick={() => onToggle(movie.id)} aria-label={saved ? 'Remove from watchlist' : 'Add to watchlist'}>
            {saved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
          </button>
        </div>

        <div className="score-row">
          <span>
            <Star size={16} fill="currentColor" />
            {movie.rating}
          </span>
          <span>{movie.quality}</span>
          <span>{movie.platform}</span>
        </div>

        <p className="details-overview">{movie.overview}</p>

        <div className="tag-cloud">
          {movie.genre.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>

        <div className="cast-list">
          <strong>Cast</strong>
          <p>{movie.cast.join(', ')}</p>
        </div>
      </div>
    </article>
  )
}

export default App
