const features = [
  {
    title: 'Built for the whole hierarchy',
    description:
      'One application for Corporate, Zonal, Regional and Branch offices — everyone sees the view that matches their role.',
    icon: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M5 21v-1a7 7 0 0 1 14 0v1" />
      </>
    ),
  },
  {
    title: 'Follow up in one tap',
    description:
      'Select recipients, pick a channel — WhatsApp, email or call — and a tone, and send one automated message to everyone at once.',
    icon: (
      <>
        <path d="M4 4h16v12H8l-4 4V4z" />
      </>
    ),
  },
  {
    title: 'Every lead, every stage',
    description:
      'From Lead Confirmed to Disbursed, the full pipeline is visible at a glance — nothing sits in a blind spot.',
    icon: (
      <>
        <circle cx="5" cy="12" r="1.6" />
        <circle cx="12" cy="12" r="1.6" />
        <circle cx="19" cy="12" r="1.6" />
        <path d="M6.6 12h4.8M13.6 12h4.8" />
      </>
    ),
  },
  {
    title: 'Update leads by voice',
    description:
      'Say the lead number and the new stage out loud — Voice AI handles the update. No forms, no typing.',
    icon: (
      <>
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0" />
        <path d="M12 18v3" />
      </>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="border-b border-border bg-bg py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-wide text-brand-600">
            What&apos;s inside
          </h2>
          <p className="mt-2 text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
            Everything shown in the film, built in
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {features.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-100 hover:shadow-lg hover:shadow-brand-900/5"
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
