export default function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900/50 px-3 py-1 text-sm">Impact</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Making a Difference Together</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our platform has helped thousands of users reduce their carbon footprint through sustainable transportation
            choices.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-card p-8 text-center shadow-sm">
            <div className="text-4xl font-bold">25K+</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Active Users</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-card p-8 text-center shadow-sm">
            <div className="text-4xl font-bold">500K</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Eco-Routes Planned</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-card p-8 text-center shadow-sm">
            <div className="text-4xl font-bold">120K</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Tons of CO₂ Saved</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-card p-8 text-center shadow-sm">
            <div className="text-4xl font-bold">85%</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">User Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}

