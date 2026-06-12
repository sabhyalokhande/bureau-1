import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-primary-deep">
      <img
        src={heroImg}
        alt="1-Bureau consultants collaborating in a Singapore office"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-16 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur">
            We are 1-Bureau
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-6xl">
            Professional Consulting <span className="text-accent">for Your Business</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
            A dedicated team providing accounting, corporate secretarial, taxation and payroll
            services to small &amp; medium businesses across Singapore since 2007.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="xl">
              <a href="#services">Explore Our Services</a>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href="#contact">Talk to Us</a>
            </Button>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/20 pt-8">
            {[
              { v: "2007", l: "Established" },
              { v: "30+", l: "Years' Expertise" },
              { v: "SME", l: "Specialists" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-3xl font-bold text-accent">{s.v}</dt>
                <dd className="mt-1 text-sm text-primary-foreground/75">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}