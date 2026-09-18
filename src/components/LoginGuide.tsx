const usernameExamples = ['4726.nmro', '1142.panaji', '1151.mmzo'];

export default function LoginGuide() {
  return (
    <section id="login" className="bg-bg py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-wide text-brand-600">
            Signing in
          </h2>
          <p className="mt-2 text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
            Your username is issued to you
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-700 sm:text-base">
            Usernames follow a{' '}
            <code className="rounded bg-brand-50 px-1.5 py-0.5 font-mono text-brand-700">
              code.unit
            </code>{' '}
            pattern &mdash; a numeric code, a dot, and your office or zone
            code. A few illustrative examples:
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10">
          {usernameExamples.map((example) => (
            <code
              key={example}
              className="rounded-xl border border-border bg-surface px-4 py-2.5 font-mono text-sm font-semibold text-brand-700 shadow-sm"
            >
              {example}
            </code>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 16v-5" />
              <path d="M12 8h.01" />
            </svg>
            <div>
              <h3 className="text-sm font-bold text-ink-900">
                These are illustrative examples, not real logins
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
                The codes above won&apos;t work as a real sign-in. Your
                actual username and password are issued by your branch or
                zonal administrator when your account is created. If you
                don&apos;t have credentials yet, or need a password reset,
                contact your administrator rather than guessing at the
                format.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
