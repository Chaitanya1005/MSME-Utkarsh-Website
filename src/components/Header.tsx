import appIcon from '../assets/app-icon.png';
import { APK_URL } from '../config';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-2.5">
          <img
            src={appIcon}
            alt="Central Bank of India"
            className="h-8 w-8 shrink-0 rounded-md ring-1 ring-border sm:h-9 sm:w-9"
          />
          <div className="min-w-0 leading-tight">
            <p className="truncate text-base font-bold text-ink-900 sm:text-lg">
              MSME Utkarsh
            </p>
            <p className="hidden text-[11px] text-ink-500 sm:block">
              Central Bank of India
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-ink-700 lg:flex">
          <a href="#watch" className="transition-colors hover:text-brand-600">
            Watch
          </a>
          <a href="#features" className="transition-colors hover:text-brand-600">
            Features
          </a>
          <a href="#getting-started" className="transition-colors hover:text-brand-600">
            How to Use
          </a>
          <a href="#faq" className="transition-colors hover:text-brand-600">
            FAQ
          </a>
        </nav>

        <a
          href={APK_URL}
          download
          className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-brand-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-all duration-150 hover:bg-brand-700 hover:shadow-md active:scale-[0.97] sm:px-4 sm:py-2 sm:text-sm"
        >
          <svg
            className="h-3.5 w-3.5 sm:h-4 sm:w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 4v12" />
            <path d="M6 12l6 6 6-6" />
            <path d="M5 20h14" />
          </svg>
          Download
        </a>
      </div>
    </header>
  );
}
