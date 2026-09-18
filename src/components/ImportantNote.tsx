export default function ImportantNote() {
  return (
    <section className="border-b border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6 sm:p-7">
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
              <h2 className="text-base font-bold text-ink-900">
                Download safely
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
                Only install the MSME Utkarsh APK downloaded directly from
                this page, using the button above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
