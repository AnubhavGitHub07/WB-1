import Link from "next/link";
import { footerConfig } from "@/config/footer";
import { companyConfig } from "@/config/company";
import { siteConfig } from "@/config/site";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12 border-t border-border/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
          
          {/* Brand Info */}
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl tracking-widest">
                {companyConfig.name}
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              {companyConfig.tagline}
            </p>

          </div>

          {/* Links */}
          {footerConfig.links.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="font-serif text-lg tracking-wider uppercase text-primary-foreground/90">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300 uppercase tracking-widest"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg tracking-wider uppercase text-primary-foreground/90">
              お問い合わせ
            </h3>
            <ul className="space-y-4 text-sm text-primary-foreground/60">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>{companyConfig.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="shrink-0" />
                <a href={`mailto:${companyConfig.email}`} className="hover:text-primary-foreground transition-colors">
                  {companyConfig.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="shrink-0" />
                <a href={`tel:${companyConfig.phone}`} className="hover:text-primary-foreground transition-colors">
                  {companyConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/50 tracking-widest">
            &copy; {currentYear} {companyConfig.name}. 無断複写・転載を禁じます。
          </p>
          <p className="text-xs text-primary-foreground/50 uppercase tracking-widest">
            {companyConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
