import cbiLogo from '../assets/cbi-header-logo.png';
import { APK_URL } from '../config';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900 py-10 text-center">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:px-6">
        <img
          src={cbiLogo}
          alt="Central Bank of India"
          className="h-7 w-auto rounded-sm sm:h-8"
        />
        <div>
          <p className="text-sm font-semibold text-white">MSME Utkarsh</p>
          <p className="text-xs text-white/60">Central Bank of India</p>
        </div>
        <a
          href={APK_URL}
          download
          className="text-xs font-semibold text-brand-200 underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          Download the app
        </a>
      </div>
    </footer>
  );
}
