import { APK_URL, APP_VERSION } from '../config';

interface DownloadButtonProps {
  className?: string;
}

export default function DownloadButton({ className = '' }: DownloadButtonProps) {
  return (
    <a
      href={APK_URL}
      download
      aria-label={`Download MSME Utkarsh Android application APK, version ${APP_VERSION}`}
      className={`group inline-flex w-full max-w-sm flex-col items-center gap-1 rounded-2xl bg-brand-600 px-6 py-4 text-white shadow-lg shadow-brand-800/25 transition-all duration-150 hover:bg-brand-700 hover:shadow-xl active:scale-[0.98] sm:w-auto sm:px-8 ${className}`}
    >
      <span className="flex items-center gap-2 whitespace-nowrap text-base font-bold sm:text-xl">
        <svg
          className="h-4 w-4 shrink-0 transition-transform duration-150 group-hover:translate-y-0.5 sm:h-5 sm:w-5"
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
        Download MSME Utkarsh App
      </span>
      <span className="text-xs font-medium text-brand-100">
        APK &middot; Android &middot; v{APP_VERSION}
      </span>
    </a>
  );
}
