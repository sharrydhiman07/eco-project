import Link from "next/link"
import { ArrowRight, Bike, Bus, Car, ChevronRight, Leaf, MapPin, Train, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import StatsSection from "@/components/stats-section"
import TestimonialSection from "@/components/testimonial-section"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Mission Statement */}
      <section className="py-12 md:py-16 bg-green-50 dark:bg-green-950/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900/50 px-3 py-1 text-sm">
              Our Mission
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Sustainable Transportation for a Greener Future
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We're dedicated to reducing carbon emissions by optimizing green transport options such as electric
              vehicles, public transport, cycling, and walking through AI-driven solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <FeatureSection />

      {/* Stats */}
      <StatsSection />

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900/50 px-3 py-1 text-sm">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Plan Your Eco-Friendly Journey
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our AI-powered system analyzes multiple factors to recommend the most sustainable transportation options.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                <MapPin className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Enter Your Route</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Input your starting point and destination to begin planning your journey.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold">AI Analysis</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our system analyzes traffic, emissions, and available transport options in real-time.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Green Recommendations</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Receive personalized eco-friendly route options with carbon footprint comparisons.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/route-planner">
              <Button className="bg-green-600 hover:bg-green-700">
                Try Route Planner <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Transport Options */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900/50 px-3 py-1 text-sm">
              Transport Options
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Sustainable Mobility Solutions
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore various eco-friendly transportation methods to reduce your carbon footprint.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
            <Card>
              <CardHeader className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                  <Train className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="mt-4">Public Transit</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-500 dark:text-gray-400">
                  Buses, trains, and trams reduce congestion and emissions per passenger.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/transport-options#public-transit">
                  <Button variant="outline" size="sm">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                  <Car className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="mt-4">Electric Vehicles</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-500 dark:text-gray-400">
                  Zero-emission vehicles powered by electricity instead of fossil fuels.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/transport-options#electric-vehicles">
                  <Button variant="outline" size="sm">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                  <Bike className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="mt-4">Cycling</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-500 dark:text-gray-400">
                  Zero-emission transportation that also promotes physical health.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/transport-options#cycling">
                  <Button variant="outline" size="sm">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                  <Bus className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="mt-4">Carpooling</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-500 dark:text-gray-400">
                  Share rides to reduce the number of vehicles on the road.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/transport-options#carpooling">
                  <Button variant="outline" size="sm">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Call to Action */}
      <CallToAction />
    </div>
  )
}

