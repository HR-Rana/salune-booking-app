import Link from "next/link";
import { services, salonInfo } from "@/lib/data";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  LogoMark,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  YoutubeIcon,
} from "./icons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Browse Services", href: "/services" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "YouTube", href: "#", Icon: YoutubeIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedinIcon },
];

export default function SiteFooter() {
  const footerServices = services.slice(0, 4);

  return (
    <footer
      id="contact"
      className="border-t border-white/[0.06] bg-[#07030c]"
    >
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <LogoMark className="h-9 w-9 text-gold" />
            <span className="font-display text-[24px] font-semibold tracking-tight text-gold-soft">
              SalonBook
            </span>
          </Link>
          <p className="mt-4 max-w-[240px] text-[12px] leading-6 text-white/50">
            Premium salon services at your fingertips. Book, relax and feel
            beautiful.
          </p>

          <div className="mt-5 flex gap-2.5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-gold hover:bg-gold hover:text-[#140a02]"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[12px] text-white/55 transition hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Our Services</h3>
          <ul className="mt-4 space-y-3">
            {footerServices.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services/${service.id}`}
                  className="text-[12px] text-white/55 transition hover:text-gold"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contact Info</h3>
          <ul className="mt-4 space-y-3 text-[12px] text-white/55">
            <li className="flex items-start gap-2.5">
              <PhoneIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
              <a
                href={salonInfo.phoneHref}
                className="transition hover:text-gold"
              >
                {salonInfo.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MailIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
              <a
                href={`mailto:${salonInfo.email}`}
                className="transition hover:text-gold"
              >
                {salonInfo.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
              <span>{salonInfo.location}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Opening Hours</h3>
          <div className="mt-4 flex items-start gap-2.5 text-[12px] text-white/55">
            <ClockIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
            <p>
              Mon - Sun:
              <br />
              9AM - 9PM
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-[11px] text-white/40 sm:flex-row">
          <p>© 2026 SalonBook. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Define Your Beauty
            <span className="text-gold">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
