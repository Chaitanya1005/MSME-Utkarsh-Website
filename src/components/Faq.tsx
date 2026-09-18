const faqs = [
  {
    question: 'Who is this application for?',
    answer:
      'The application is intended for MSME customers of Central Bank of India.',
  },
  {
    question: 'Which devices are supported?',
    answer:
      'The application is currently distributed as an Android APK. Please use a compatible Android device.',
  },
  {
    question: 'How do I install the application?',
    answer:
      'Download the APK, open it from your Downloads folder, and follow the Android installation prompts. See "How to Install" above for what to do if Android shows a security warning along the way.',
  },
  {
    question:
      'Google Play Protect warns that this app may be harmful. Is it safe to install?',
    answer:
      'Play Protect shows this warning for any app installed outside the Play Store — it does not mean the app is unsafe. If you trust the source of this page, tap "Install anyway" (or "More details" then "Install anyway") to continue.',
  },
  {
    question: "I'm having trouble downloading the APK. What should I do?",
    answer:
      "Make sure you're using a stable internet connection and your phone's default browser, then try again. If Chrome blocks the download, tap the warning and choose \"Download anyway.\" If the problem continues, reach out to whoever shared this page with you for assistance.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-bg py-14 sm:py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <h2 className="text-center text-sm font-bold uppercase tracking-wide text-brand-600">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 space-y-3 sm:mt-10">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-border bg-surface open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-ink-900 sm:text-base">
                {faq.question}
                <svg
                  className="h-4 w-4 shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="px-5 pb-4 text-sm leading-relaxed text-ink-700">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
