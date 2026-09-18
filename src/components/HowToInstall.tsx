const steps = [
  {
    number: '01',
    title: 'Download',
    description:
      'Tap the Download MSME Utkarsh App button above. Chrome may show a warning such as "Download blocked" or "This type of file can harm your device" — this is normal for APK files. Tap the notification and choose "Download anyway" (or "Keep") to continue.',
  },
  {
    number: '02',
    title: 'Open the APK',
    description:
      "Open the downloaded file from your Android device's Downloads folder, or tap the download notification directly in Chrome.",
  },
  {
    number: '03',
    title: 'Allow installation',
    description:
      'Android may show "Install blocked — for your security, your phone is set to block installation of apps from unknown sources." Tap Settings on that message, turn on "Allow from this source" for the app you used to open the file (usually Chrome), then go back and tap Install. This one-time permission is a standard Android safeguard for apps installed outside the Play Store.',
  },
];

export default function HowToInstall() {
  return (
    <section
      id="install"
      className="border-b border-border bg-bg py-14 sm:py-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-sm font-bold uppercase tracking-wide text-brand-600">
          How to Install
        </h2>

        <ol className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-3 sm:gap-6">
          {steps.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow duration-150 hover:shadow-md"
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

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-500">
          MSME Utkarsh is distributed directly as an APK rather than through
          the Play Store, so Android's standard security prompts above are
          expected — they don't mean anything is wrong.
        </p>
      </div>
    </section>
  );
}
