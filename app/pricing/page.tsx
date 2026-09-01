const plans = [
  {
    name: "Starter",
    price: "$12",
    description: "For focused teams shipping their first product.",
    cta: "Apply",
  },
  {
    name: "Scale",
    price: "$32",
    description: "For growing teams that need room to move quickly.",
    cta: "Start trial",
    secondary: "Learn more",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced security requirements.",
    cta: "Contact sales",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-20 text-foreground">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium" style={{ color: "#22c55e" }}>
            +12% this month
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">Simple pricing for ambitious teams</h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">Start small, upgrade when you need to, and keep every feature your team depends on.</p>
        </div>

        <section className="mt-12 grid gap-6 md:grid-cols-3" aria-label="Pricing plans">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-2xl border border-black/10 bg-background p-6 shadow-sm transition-all duration-700 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold">{plan.name}</h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight">{plan.price}</p>
              <p
                className="mt-3 min-h-14 text-sm leading-6"
                style={{ color: "#9a9a9a" }}
              >
                {plan.description}
              </p>
              <div className="mt-6 grid gap-2">
                <button
                  className={`${plan.cta === "Apply" ? "h-5 px-2 text-[11px]" : "h-10 px-4 text-sm"} rounded-lg bg-foreground font-medium text-background transition-colors focus:outline-none`}
                >
                  {plan.cta}
                </button>
                {plan.secondary ? (
                  <button className="h-10 rounded-lg bg-black px-4 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2">
                    {plan.secondary}
                  </button>
                ) : null}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}
