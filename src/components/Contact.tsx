import { Button } from "@/components/ui/button";

const details = [
  {
    label: "Address",
    value: "200 Jalan Sultan, #03-11,\nTextile Centre, Singapore 199018",
    icon: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />,
  },
  {
    label: "Telephone",
    value: "+(65) 6299 1567",
    icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  },
  {
    label: "Business Hours",
    value: "Monday – Friday\n9:00am – 6:00pm",
    icon: <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2" />,
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-secondary shadow-[var(--shadow-card)] lg:grid lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent-strong">
              Get in Touch
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Let&apos;s talk about your business
            </h2>
            <p className="mt-4 text-muted-foreground">
              Reach out to our team for accounting, taxation, payroll and corporate secretarial
              support tailored to your needs.
            </p>

            <div className="mt-10 space-y-7">
              {details.map((d) => (
                <div key={d.label} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-accent">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      {d.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{d.label}</p>
                    <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground">{d.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-primary p-8 text-primary-foreground sm:p-12"
          >
            <h3 className="text-xl font-semibold">Send us a message</h3>
            <div className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:border-accent"
                />
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:border-accent"
                />
              </div>
              <input
                placeholder="Subject"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:border-accent"
              />
              <textarea
                rows={4}
                required
                placeholder="How can we help?"
                className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:border-accent"
              />
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}