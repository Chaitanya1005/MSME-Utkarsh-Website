const highlights = [
  {
    title: 'Simple',
    description: 'A clean, straightforward experience for everyday banking tasks.',
    icon: (
      <path d="M5 12h14M12 5l7 7-7 7" />
    ),
  },
  {
    title: 'Fast',
    description: 'Built to get you in, done, and out without friction.',
    icon: (
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
    ),
  },
  {
    title: 'Accessible',
    description: 'Designed to bring MSME banking services to your phone.',
    icon: (
      <>
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
  },
];

export default function Highlights() {
  return (
    <section id="about" className="border-b border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-wide text-brand-600">
            Why MSME Utkarsh
          </h2>
          <p className="mt-2 text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
            Banking, made for your business
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-bg p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-100 hover:shadow-lg hover:shadow-brand-900/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm shadow-brand-700/30 transition-transform duration-200 group-hover:scale-105">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {item.icon}
                </svg>
              </div>
              <h3 className="mt-4 text-base font-bold text-ink-900">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
