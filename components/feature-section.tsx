import { BarChart3, Bike, Car, Leaf, MapPin, Zap } from "lucide-react"

export default function FeatureSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900/50 px-3 py-1 text-sm">Features</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Smart Transportation Solutions
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our platform offers a comprehensive suite of tools to help you make sustainable transportation choices.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
              <MapPin className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold">AI-Powered Route Planning</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Get personalized eco-friendly route recommendations based on real-time traffic and emissions data.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
              <BarChart3 className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold">Carbon Footprint Tracking</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Monitor and analyze your transportation emissions with detailed insights and comparisons.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
              <Car className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold">EV Charging Network</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Find nearby electric vehicle charging stations and plan your journey with confidence.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
              <Bike className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold">Bike & Scooter Sharing</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Locate and access shared mobility options for short-distance travel in urban areas.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
              <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold">Real-Time Transit Updates</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Stay informed with live updates on public transportation schedules and service changes.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
              <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold">Sustainability Rewards</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Earn points and rewards for choosing eco-friendly transportation options and reducing emissions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

