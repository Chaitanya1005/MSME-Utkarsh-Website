import DownloadButton from './DownloadButton';

export default function Hero() {
  return (
    <section id="watch" className="relative overflow-hidden border-b border-border bg-bg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-accent-red/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="animate-fade-in mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
            Central Bank of India
          </span>

          <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
            MSME{' '}
            <span className="bg-gradient-to-br from-brand-500 to-brand-800 bg-clip-text text-transparent">
              Utkarsh
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-ink-700">
            A digital platform designed to make MSME banking services
            simpler, faster and more accessible &mdash; right from your
            phone.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <DownloadButton />
            <p className="text-sm text-ink-500">APK &middot; Android</p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-accent-green"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
              </svg>
              Built for Central Bank of India
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-accent-green"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="6" y="3" width="12" height="18" rx="2" />
              </svg>
              Android application
            </span>
          </div>
        </div>

        <div className="animate-fade-in-delay relative mx-auto mt-14 w-full max-w-4xl sm:mt-16">
          <div className="overflow-hidden rounded-2xl border border-border bg-ink-900 shadow-2xl shadow-brand-900/30">
            <div className="aspect-video w-full">
              <iframe
                src="/film/index.html"
                title="MSME Utkarsh product film"
                className="h-full w-full border-0"
                allow="autoplay"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
