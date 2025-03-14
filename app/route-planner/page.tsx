"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bike, Bus, Car, Clock, Leaf, MapPin, Train, Zap } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RoutePlanner() {
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (origin && destination) {
      setShowResults(true)
    }
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Eco-Friendly Route Planner</h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Find the most sustainable way to get from A to B with our AI-powered route planner.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Plan Your Journey</CardTitle>
            <CardDescription>Enter your origin and destination to get started.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="origin">Origin</Label>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <Input
                    id="origin"
                    placeholder="Enter starting point"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <Input
                    id="destination"
                    placeholder="Enter destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Preferences</Label>
                <RadioGroup defaultValue="balanced">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="eco" id="eco" />
                    <Label htmlFor="eco" className="flex items-center gap-2">
                      <Leaf className="h-4 w-4 text-green-600" /> Most Eco-Friendly
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="balanced" id="balanced" />
                    <Label htmlFor="balanced" className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-amber-600" /> Balanced
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fast" id="fast" />
                    <Label htmlFor="fast" className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" /> Fastest
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Maximum Walking Distance</Label>
                  <span className="text-sm text-gray-500">1.5 km</span>
                </div>
                <Slider defaultValue={[1.5]} max={5} step={0.1} />
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Find Routes
              </Button>
            </form>
          </CardContent>
        </Card>

        {showResults ? (
          <div className="lg:col-span-2">
            <Tabs defaultValue="recommended">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="public">Public Transit</TabsTrigger>
                <TabsTrigger value="cycling">Cycling</TabsTrigger>
                <TabsTrigger value="driving">Driving</TabsTrigger>
              </TabsList>
              <TabsContent value="recommended">
                <Card>
                  <CardHeader className="bg-green-50 dark:bg-green-900/20 border-b">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Leaf className="h-5 w-5 text-green-600" /> Recommended Route
                        </CardTitle>
                        <CardDescription>Most eco-friendly option based on your preferences</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">25 min</div>
                        <div className="text-sm text-gray-500">0.8 kg CO₂</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                            <MapPin className="h-4 w-4 text-green-600" />
                          </div>
                          <div className="h-14 w-0.5 bg-gray-200 my-1"></div>
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                            <Train className="h-4 w-4 text-blue-600" />
                          </div>
                          <div className="h-14 w-0.5 bg-gray-200 my-1"></div>
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                            <MapPin className="h-4 w-4 text-green-600" />
                          </div>
                        </div>
                        <div className="flex-1 space-y-4">
                          <div>
                            <h4 className="font-medium">{origin || "Your Location"}</h4>
                            <p className="text-sm text-gray-500">Start your journey</p>
                          </div>
                          <div>
                            <h4 className="font-medium">Take the Green Line Train</h4>
                            <p className="text-sm text-gray-500">15 minutes (5 stops)</p>
                            <div className="mt-1 text-xs text-green-600">
                              Eco-friendly option: Saves 2.5 kg CO₂ compared to driving
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium">{destination || "Destination"}</h4>
                            <p className="text-sm text-gray-500">Arrive at your destination</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                        <div className="text-center">
                          <p className="text-sm font-medium">Travel Time</p>
                          <p className="text-lg font-bold">25 min</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium">CO₂ Emissions</p>
                          <p className="text-lg font-bold">0.8 kg</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium">Cost</p>
                          <p className="text-lg font-bold">$2.50</p>
                        </div>
                      </div>

                      <Button className="w-full bg-green-600 hover:bg-green-700">Start Navigation</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="public">
                <Card>
                  <CardHeader className="bg-blue-50 dark:bg-blue-900/20 border-b">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Bus className="h-5 w-5 text-blue-600" /> Public Transit
                        </CardTitle>
                        <CardDescription>Bus and train options</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">28 min</div>
                        <div className="text-sm text-gray-500">1.0 kg CO₂</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Bus className="h-5 w-5 text-blue-600" />
                            <div>
                              <p className="font-medium">Bus Route 42</p>
                              <p className="text-sm text-gray-500">Every 10 minutes</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">30 min</p>
                            <p className="text-sm text-gray-500">1.2 kg CO₂</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Train className="h-5 w-5 text-blue-600" />
                            <div>
                              <p className="font-medium">Green Line + Blue Line</p>
                              <p className="text-sm text-gray-500">Transfer at Central Station</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">28 min</p>
                            <p className="text-sm text-gray-500">1.0 kg CO₂</p>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cycling">
                <Card>
                  <CardHeader className="bg-green-50 dark:bg-green-900/20 border-b">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Bike className="h-5 w-5 text-green-600" /> Cycling
                        </CardTitle>
                        <CardDescription>Bike routes and bike-sharing options</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">35 min</div>
                        <div className="text-sm text-gray-500">0.0 kg CO₂</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Bike className="h-5 w-5 text-green-600" />
                            <div>
                              <p className="font-medium">Personal Bike</p>
                              <p className="text-sm text-gray-500">5.2 km via Riverside Path</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">35 min</p>
                            <p className="text-sm text-green-600">Zero emissions</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Bike className="h-5 w-5 text-green-600" />
                            <div>
                              <p className="font-medium">City Bike Share</p>
                              <p className="text-sm text-gray-500">Nearest station: 200m away</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">38 min</p>
                            <p className="text-sm text-green-600">Zero emissions</p>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="driving">
                <Card>
                  <CardHeader className="bg-amber-50 dark:bg-amber-900/20 border-b">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Car className="h-5 w-5 text-amber-600" /> Driving
                        </CardTitle>
                        <CardDescription>Car and rideshare options</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">18 min</div>
                        <div className="text-sm text-gray-500">3.3 kg CO₂</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Car className="h-5 w-5 text-amber-600" />
                            <div>
                              <p className="font-medium">Personal Vehicle</p>
                              <p className="text-sm text-gray-500">7.8 km via Main Highway</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">18 min</p>
                            <p className="text-sm text-gray-500">3.3 kg CO₂</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Car className="h-5 w-5 text-green-600" />
                            <div>
                              <p className="font-medium">Electric Vehicle</p>
                              <p className="text-sm text-gray-500">7.8 km via Main Highway</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">18 min</p>
                            <p className="text-sm text-green-600">0.8 kg CO₂</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Car className="h-5 w-5 text-blue-600" />
                            <div>
                              <p className="font-medium">Rideshare (Carpool)</p>
                              <p className="text-sm text-gray-500">3 passengers</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">22 min</p>
                            <p className="text-sm text-gray-500">1.1 kg CO₂</p>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="text-center p-8 max-w-md">
              <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enter Your Journey Details</h3>
              <p className="text-gray-500 mb-4">
                Fill in your origin and destination to discover the most eco-friendly routes for your journey.
              </p>
              <div className="p-4 bg-green-50 rounded-lg text-sm">
                <p className="text-green-800">
                  <Leaf className="inline h-4 w-4 mr-1" />
                  Our AI analyzes real-time traffic, emissions data, and available transport options to recommend the
                  most sustainable routes.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

