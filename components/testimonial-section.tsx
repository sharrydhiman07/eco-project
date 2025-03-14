import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900/50 px-3 py-1 text-sm">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Hear from people who have transformed their daily commute with our eco-friendly transportation system.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Sarah Johnson" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Daily Commuter</p>
                  <p className="text-sm">
                    "This app has completely changed how I commute. I've reduced my carbon footprint by 40% and
                    discovered so many efficient public transit routes I never knew existed!"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Michael Chen" />
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Michael Chen</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Business Traveler</p>
                  <p className="text-sm">
                    "As someone who travels frequently for work, this platform has helped me make more sustainable
                    choices. The carbon calculator is eye-opening and motivates me to choose greener options."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Priya Patel" />
                  <AvatarFallback>PP</AvatarFallback>
                </Avatar>
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Priya Patel</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Environmental Advocate</p>
                  <p className="text-sm">
                    "I've been looking for tools to help my community reduce emissions. This system provides actionable
                    data and alternatives that make sustainable transportation accessible to everyone."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

