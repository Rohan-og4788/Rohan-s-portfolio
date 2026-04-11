export default function Section({ id, title, subtitle, className, children }) {
  return (
    <section id={id} className={['py-14 sm:py-16', className].filter(Boolean).join(' ')}>
      {(title || subtitle) && (
        <header className="mb-6 sm:mb-8">
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-2 text-sm text-zinc-600 sm:text-base">{subtitle}</p>
          )}
        </header>
      )}
      {children}
    </section>
  )
}

