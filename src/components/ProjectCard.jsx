function isExternalLiveUrl(url) {
  return (
    typeof url === 'string' &&
    url.length > 0 &&
    url !== '#' &&
    !url.startsWith('#')
  )
}

function isHashLiveUrl(url) {
  return typeof url === 'string' && url.startsWith('#') && url.length > 1
}

function isRepoUrl(url) {
  return typeof url === 'string' && url.length > 0 && url !== '#'
}

export default function ProjectCard({ project }) {
  const hasExternalLive = isExternalLiveUrl(project.liveUrl)
  const hasHashLive = isHashLiveUrl(project.liveUrl)
  const hasLive = hasExternalLive || hasHashLive
  const hasRepo = isRepoUrl(project.repoUrl)

  return (
    <article className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-zinc-900">{project.title}</h3>
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {hasLive ? (
          <a
            href={project.liveUrl}
            {...(hasExternalLive
              ? { target: '_blank', rel: 'noreferrer' }
              : {})}
            className="inline-flex flex-1 items-center justify-center rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 ring-1 ring-indigo-600/40 transition hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:flex-none"
          >
            {hasHashLive ? 'View' : 'Live demo'}
          </a>
        ) : (
          <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center rounded-xl bg-zinc-100 px-3 py-2 text-sm font-semibold text-zinc-400 ring-1 ring-zinc-200 sm:flex-none">
            Demo soon
          </span>
        )}
        {hasRepo ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-zinc-900 ring-1 ring-zinc-200 transition hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:flex-none"
          >
            Source
          </a>
        ) : null}
      </div>
    </article>
  )
}
