import logoWhite from "@/assets/1-bureau-logo-white.png";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src={logoWhite} alt="1-Bureau Private Limited" className="h-9 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Professional accounting, taxation, payroll and corporate secretarial services for SMEs
              in Singapore since 2007.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-accent">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
              {["Starting a Business", "Accounting", "Virtual Office", "Taxation", "Payroll Services"].map((s) => (
                <li key={s}>
                  <a href="#services" className="transition-colors hover:text-accent">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-accent">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
              <li>420 North Bridge Road, #06-28,<br />North Bridge Centre, Singapore 188727</li>
              <li>Tel: +(65) 6299 1567</li>
              <li>Mon – Fri, 9:00am – 6:00pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} 1-Bureau Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}