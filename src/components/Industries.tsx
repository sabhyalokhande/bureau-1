const industries = [
  "Restaurants",
  "Food Caterers",
  "Ship Builders",
  "Investment Brokers",
  "Freight Forwarders",
  "Retail & Trade",
];

export function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Industries We Serve
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Expertise across a wide range of industries
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-primary-foreground/80">
              From restaurants to freight forwarders, we understand the unique financial needs of
              small and medium enterprises across many sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {industries.map((i) => (
              <div
                key={i}
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-5 text-center font-semibold backdrop-blur transition-colors hover:border-accent/50 hover:bg-white/10"
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}