type IconProps = { className?: string };

export function LogoMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path d="M24 43V17" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M24 31c0-8.4 4-15 13-21.5C38.5 20 34.5 28 24 31Z"
        fill="currentColor"
      />
      <path
        d="M24 37c-1.2-7.4-5.2-13-13.5-17.6C10.8 28 15 34 24 37Z"
        fill="currentColor"
        opacity=".7"
      />
      <path
        d="M24 24c.4-6.2 3.8-11.4 10.4-15.6"
        stroke="#08040f"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity=".3"
      />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="m16 16 4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CrownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="m3 17 .8-9 5 4.2L12 4l3.2 8.2 5-4.2.8 9H3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M4.5 20h15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M5 12h13m-5-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronLeft({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="m14.5 5-7 7 7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="m9.5 5 7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 7.5V12l3 1.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="m12 3.4 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.6l5.9-.9L12 3.4Z" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M6.5 3.5h3l1.4 3.6-2 1.4a12.5 12.5 0 0 0 6.6 6.6l1.4-2 3.6 1.4v3c0 1.7-1.4 3-3.1 2.8C10.4 19.5 4.5 13.6 3.7 6.6c-.2-1.7 1.1-3.1 2.8-3.1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m4.5 7 7.5 6 7.5-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.3h2.5l.4-2.9h-2.9V8.9c0-.8.3-1.4 1.4-1.4h1.6V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2H7.8v2.9h2.5V21h3.2Z" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.9C18.2 4.9 12 4.9 12 4.9s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.9c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.9A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6.4 8.8H3.6V21h2.8V8.8ZM5 7.4a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM21 14.1c0-3.4-1.8-5-4.2-5-1.9 0-2.8 1.1-3.3 1.8V8.8H10c.1.9 0 12.2 0 12.2h3.4v-6.6c0-.3 0-.6.1-.9.3-.7.9-1.4 1.9-1.4 1.3 0 1.9 1 1.9 2.6V21H21v-6.9Z" />
    </svg>
  );
}

export function ScissorsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="6" cy="6.5" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="17.5" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.2 8 19 17.5M8.2 16 19 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function PaletteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 3a9 9 0 1 0 0 18c1.6 0 2.1-1 1.5-2.1-.6-1.1.1-2.5 1.5-2.5h1.6a4.4 4.4 0 0 0 4.4-4.4C21 7.2 17 3 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="9" r="1.2" fill="currentColor" />
      <circle cx="12" cy="6.8" r="1.2" fill="currentColor" />
      <circle cx="16" cy="9" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function LotusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 4c2.3 2.6 2.7 5.6 0 8.4-2.7-2.8-2.3-5.8 0-8.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.4c-2.4-2.6-5-3.3-8-2 .6 3.2 3.4 5.1 8 2Zm0 0c2.4-2.6 5-3.3 8-2-.6 3.2-3.4 5.1-8 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 13.2c1.2 3.7 4.3 5.8 8.5 5.8s7.3-2.1 8.5-5.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FaceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 21a8.5 8.5 0 0 0 8.4-7.2c-2.6.2-4.2-1-5-2.6-.5 1.2-1.6 1.9-3.2 2-1.8.1-3.4-.7-4.4-2.2-1.2 1.3-2.6 1.8-4.2 1.6A8.5 8.5 0 0 0 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M5.8 6.2C7.6 4 10 3 12.5 3.4c2.6.4 4.6 2 5.7 4.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="9.3" cy="12.5" r="0.9" fill="currentColor" />
      <circle cx="14.7" cy="12.5" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function BrushIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="m14.5 9.5-8 8a2.1 2.1 0 0 1-3-3l8-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M13 5.4 18.6 11l2-2a2.5 2.5 0 0 0 0-3.6l-2-2a2.5 2.5 0 0 0-3.6 0l-2 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M5 16.5 7.5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function NailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="7" y="9" width="10" height="11" rx="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.5 9V6.2h5V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10.2 3.5h3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 13.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function SpaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <ellipse cx="12" cy="8" rx="4" ry="2.6" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="12" cy="13.2" rx="5.4" ry="2.8" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="12" cy="18.4" rx="6.8" ry="2.8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
