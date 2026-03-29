import { HOTEL } from "@/lib/constants";

const QUICK_LINKS = [
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "#dining" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Google Reviews", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-darkest text-cream/40 py-[60px] px-8 md:px-[60px]">
      <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12 max-w-[1100px] mx-auto">
        <div>
          <h5 className="font-heading text-xl text-cream/80 mb-4 font-normal">
            {HOTEL.name}
          </h5>
          <p className="text-[13px] leading-8">
            A boutique retreat in the heart of Shimla.
            <br />
            Family-run, personally hosted, and always warm — even when the
            mountains are cold.
          </p>
        </div>
        <div>
          <h5 className="font-heading text-xl text-cream/80 mb-4 font-normal">
            Quick Links
          </h5>
          <p className="text-[13px] leading-8">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-cream/40 hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </p>
        </div>
        <div>
          <h5 className="font-heading text-xl text-cream/80 mb-4 font-normal">
            Follow Us
          </h5>
          <p className="text-[13px] leading-8">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-cream/40 hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </p>
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto mt-9 pt-6 border-t border-white/5 text-xs text-center tracking-wider">
        © {new Date().getFullYear()} {HOTEL.name} · {HOTEL.location}
      </div>
    </footer>
  );
}
