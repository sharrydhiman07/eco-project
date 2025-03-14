import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BarChart, Clock, Leaf, MapPin, Target, Train } from "lucide-react"

export default function About() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our Project</h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Learn more about the Eco-Friendly Transportation System and our mission to promote sustainable mobility.
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="objectives">Objectives</TabsTrigger>
          <TabsTrigger value="methodology">Methodology</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Introduction</h2>
              <p className="text-gray-500 mb-4">
                Transportation is a major contributor to environmental pollution, with traditional fuel-based vehicles
                emitting high levels of carbon dioxide (CO₂) and other greenhouse gases (GHGs). The Eco-Friendly
                Transportation System aims to provide a sustainable solution by optimizing green transport options such
                as electric vehicles (EVs), public transport, cycling, and walking.
              </p>
              <p className="text-gray-500 mb-4">
                Our system analyzes traffic patterns, emission levels, and user preferences to recommend the most
                energy-efficient and eco-friendly travel routes. This project integrates real-time data, AI-based route
                optimization, and carbon footprint analysis to encourage individuals and businesses to adopt cleaner
                transportation methods, thereby reducing their overall environmental impact.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Problem Definition</h3>
              <p className="text-gray-500 mb-4">
                With the increasing levels of air pollution and traffic congestion, urban areas face serious challenges
                in reducing emissions and promoting sustainable mobility. Traditional petrol and diesel-powered vehicles
                contribute to climate change, while public transport and alternative travel modes remain underutilized
                due to a lack of awareness and planning tools.
              </p>

              <h4 className="text-lg font-bold mt-4 mb-2">Current Scenario:</h4>
              <ul className="list-disc list-inside text-gray-500 space-y-2 mb-4">
                <li>
                  High carbon emissions from private vehicles – Personal vehicles account for a large percentage of
                  daily CO₂ emissions.
                </li>
                <li>
                  Lack of optimized green transportation options – Many individuals are unaware of eco-friendly travel
                  routes, electric vehicle charging stations, or public transit benefits.
                </li>
                <li>
                  Inefficient traffic and transport planning – Existing navigation tools do not prioritize low-emission
                  travel modes, leading to increased fuel consumption and pollution.
                </li>
              </ul>

              <h4 className="text-lg font-bold mt-4 mb-2">Problem Statement:</h4>
              <p className="text-gray-500">
                There is no integrated system that helps individuals and businesses optimize their travel choices by
                prioritizing low-emission, energy-efficient, and sustainable transportation solutions. Existing systems
                focus on speed and convenience but do not account for environmental impact, making it difficult to
                transition toward greener alternatives.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Eco-friendly transportation"
                  className="w-full h-auto object-cover"
                />
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Research Gap</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    While several navigation applications exist, they primarily focus on travel time and distance. There
                    is a lack of a sustainable transport recommender system that encourages users to shift towards
                    low-carbon transport solutions. This project aims to bridge that gap by providing a holistic,
                    AI-powered, and user-centric approach to green commuting.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                        <Target className="h-4 w-4 text-green-600" />
                      </div>
                      <CardTitle className="text-base">Our Vision</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-gray-500">
                      A world where sustainable transportation is the default choice, leading to cleaner air, reduced
                      emissions, and healthier communities.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                        <Leaf className="h-4 w-4 text-green-600" />
                      </div>
                      <CardTitle className="text-base">Our Mission</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-gray-500">
                      To empower individuals and organizations with the tools and information needed to make
                      environmentally responsible transportation choices.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="objectives" className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Project Objectives</CardTitle>
                  <CardDescription>
                    Our key goals and targets for the Eco-Friendly Transportation System
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">
                    The Eco-Friendly Transportation System aims to address the challenges of urban mobility while
                    prioritizing environmental sustainability through a comprehensive set of objectives.
                  </p>
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-300">
                      By achieving these objectives, we aim to reduce transportation-related carbon emissions by up to
                      30% for our users while improving their overall travel experience.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                        <MapPin className="h-4 w-4 text-green-600" />
                      </div>
                      <CardTitle className="text-base">AI-Powered Route Planning</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-gray-500">
                      To create an intuitive web-based platform that suggests the most eco-friendly travel mode (public
                      transport, cycling, EVs, carpooling) based on user preferences, traffic conditions, and emission
                      levels.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                        <BarChart className="h-4 w-4 text-green-600" />
                      </div>
                      <CardTitle className="text-base">Emissions Tracking</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-gray-500">
                      To provide a detailed breakdown of transportation emissions, categorizing travel choices based on
                      fuel consumption, distance traveled, and carbon footprint for accurate sustainability assessment.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                        <Train className="h-4 w-4 text-green-600" />
                      </div>
                      <CardTitle className="text-base">Transit Integration</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-gray-500">
                      To integrate public transport data, EV charging stations, and bike rental services for a seamless
                      green travel experience.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                        <Clock className="h-4 w-4 text-green-600" />
                      </div>
                      <CardTitle className="text-base">Real-Time Updates</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-gray-500">
                      To implement instant feedback notifications, alerting users to traffic congestion, air quality
                      levels, and alternate green routes for improved decision-making.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                        <Award className="h-4 w-4 text-green-600" />
                      </div>
                      <CardTitle className="text-base">Gamification & Rewards</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-gray-500">
                      To encourage users to switch to sustainable transport through gamification, rewards, and emission
                      tracking.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                        <Target className="h-4 w-4 text-green-600" />
                      </div>
                      <CardTitle className="text-base">Goal Setting</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-gray-500">
                      To enable users to set sustainability goals, offering personalized suggestions, incentives, and
                      reminders to encourage continuous eco-friendly travel habits.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="methodology" className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Our Approach</CardTitle>
                  <CardDescription>
                    The methodology and process behind our eco-friendly transportation system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">
                    The project follows the Prototype Model to ensure iterative improvements and user feedback
                    integration throughout the development process.
                  </p>
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-300">
                      Our iterative approach allows us to continuously refine the system based on real-world usage
                      patterns and environmental impact data.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Development Methodology</CardTitle>
                  <CardDescription>The Prototype Model for iterative development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                          <span className="font-bold text-green-600">1</span>
                        </div>
                        <div className="h-14 w-0.5 bg-gray-200 my-1"></div>
                      </div>
                      <div>
                        <h3 className="font-bold">Requirement Gathering</h3>
                        <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
                          <li>Conduct surveys on transportation preferences and eco-friendly awareness</li>
                          <li>Analyze the impact of different transportation modes on carbon emissions</li>
                          <li>Identify key user needs and pain points in current transportation systems</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                          <span className="font-bold text-green-600">2</span>
                        </div>
                        <div className="h-14 w-0.5 bg-gray-200 my-1"></div>
                      </div>
                      <div>
                        <h3 className="font-bold">System Design</h3>
                        <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
                          <li>
                            Develop an architecture integrating GPS, real-time transit data, and carbon footprint
                            calculators
                          </li>
                          <li>Design an intuitive UI/UX for mobile and web applications</li>
                          <li>Create data models for emissions tracking and route optimization</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                          <span className="font-bold text-green-600">3</span>
                        </div>
                        <div className="h-14 w-0.5 bg-gray-200 my-1"></div>
                      </div>
                      <div>
                        <h3 className="font-bold">Development</h3>
                        <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
                          <li>Backend: Develop APIs to fetch and process real-time transport data</li>
                          <li>Frontend: Implement a user-friendly interface for trip planning</li>
                          <li>Integration: Connect with third-party services for transit information and mapping</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                          <span className="font-bold text-green-600">4</span>
                        </div>
                        <div className="h-14 w-0.5 bg-gray-200 my-1"></div>
                      </div>
                      <div>
                        <h3 className="font-bold">Testing</h3>
                        <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
                          <li>Perform usability and functionality testing with sample users</li>
                          <li>Validate emissions calculations with real-world data</li>
                          <li>Conduct performance testing for route optimization algorithms</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                          <span className="font-bold text-green-600">5</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold">Deployment</h3>
                        <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
                          <li>Host the application on a cloud-based platform</li>
                          <li>Ensure scalability and accessibility for a wide audience</li>
                          <li>Implement continuous monitoring and feedback collection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">Tools & Technologies</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <ul className="space-y-2 text-sm text-gray-500">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-600"></div>
                        <span>Backend: Node.js with Express.js</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-600"></div>
                        <span>Frontend: React.js</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-600"></div>
                        <span>Database: MongoDB</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-600"></div>
                        <span>APIs: Google Maps API, OpenStreetMap, Public Transport APIs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-600"></div>
                        <span>Hosting: AWS, Vercel, or Heroku</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">Data Sources</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <ul className="space-y-2 text-sm text-gray-500">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-600"></div>
                        <span>Real-time traffic data from transportation authorities</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-600"></div>
                        <span>Public transit schedules and real-time updates</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-600"></div>
                        <span>EV charging station locations and availability</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-600"></div>
                        <span>Bike sharing system data and availability</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-600"></div>
                        <span>Carbon emission factors for different transport modes</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="team" className="py-6">
          <div className="grid grid-cols-1 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Project Team</CardTitle>
                <CardDescription>The people behind the Eco-Friendly Transportation System</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-4 text-center mb-8">
                  <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900/50 px-3 py-1 text-sm">
                    Bachelor of Computer Applications Project
                  </div>
                  <h2 className="text-2xl font-bold">Guru Gobind Singh Indraprastha University, Delhi</h2>
                  <p className="text-gray-500">Department of Information, Communication & Technology</p>
                  <p className="text-gray-500">Batch: 2022-2025</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden">
                      <img
                        src="/placeholder.svg?height=128&width=128"
                        alt="Student"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Akshita Sharma</h3>
                      <p className="text-gray-500">03217002022</p>
                      <p className="text-gray-500">Shift: 1st</p>
                      <p className="text-gray-500">Year/Sem: 3rd/6th</p>
                    </div>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden">
                      <img
                        src="/placeholder.svg?height=128&width=128"
                        alt="Professor"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Mr. Abhishek Maheshwari</h3>
                      <p className="text-gray-500">Associate Professor</p>
                      <p className="text-gray-500">Project Guide</p>
                    </div>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-center">Acknowledgements</h3>
                  <p className="text-gray-500 text-center">
                    We would like to express our sincere gratitude to the Department of Information, Communication &
                    Technology at Guru Gobind Singh Indraprastha University for their support and guidance throughout
                    this project. Special thanks to all the faculty members, beta testers, and everyone who contributed
                    to making this eco-friendly transportation system a reality.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

