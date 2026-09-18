const steps = [
  {
    number: '01',
    title: 'Log in',
    description:
      'Open the app and sign in with the username and password issued to you by your branch or zonal administrator.',
  },
  {
    number: '02',
    title: 'Land on your dashboard',
    description:
      'Your role decides your view — a Branch user sees their branch, a Zonal user sees every region in their zone, and so on.',
  },
  {
    number: '03',
    title: 'Work your leads',
    description:
      'Check the pipeline, follow up with recipients in one tap, or update a lead just by speaking — right from the dashboard.',
  },
];

export default function GettingStarted() {
  return (
    <section
      id="getting-started"
      className="border-b border-border bg-surface py-14 sm:py-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-sm font-bold uppercase tracking-wide text-brand-600">
          How to Use
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
          Up and running in three steps
        </p>

        <ol className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-3 sm:gap-6">
          {steps.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl border border-border bg-bg p-6 shadow-sm transition-shadow duration-150 hover:shadow-md"
            >
              <span className="text-2xl font-extrabold text-brand-200">
                {step.number}
              </span>
              <h3 className="mt-2 text-base font-bold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
