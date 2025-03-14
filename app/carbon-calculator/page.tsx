"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { BarChart, Car, Leaf, PlaneTakeoff, Train } from "lucide-react"
import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function CarbonCalculator() {
  const [showResults, setShowResults] = useState(false)
  const [transportType, setTransportType] = useState("car")
  const [distance, setDistance] = useState(10)
  const [frequency, setFrequency] = useState("daily")

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResults(true)
  }

  // Sample data for the chart
  const data = [
    { name: "Car (Petrol)", emissions: 2.3 },
    { name: "Car (Diesel)", emissions: 2.1 },
    { name: "Car (Hybrid)", emissions: 1.4 },
    { name: "Electric Vehicle", emissions: 0.6 },
    { name: "Bus", emissions: 0.9 },
    { name: "Train", emissions: 0.4 },
    { name: "Bicycle", emissions: 0 },
    { name: "Walking", emissions: 0 },
  ]

  // Sample comparison data
  const comparisonData = [
    { name: "Your Current", emissions: 2.3, fill: "#f87171" },
    { name: "Eco Alternative", emissions: 0.4, fill: "#4ade80" },
  ]

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Carbon Footprint Calculator</h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Calculate and compare the environmental impact of your transportation choices.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Calculate Your Emissions</CardTitle>
            <CardDescription>Enter your transportation details to calculate your carbon footprint.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCalculate} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="transport-type">Transportation Type</Label>
                <Select defaultValue={transportType} onValueChange={setTransportType}>
                  <SelectTrigger id="transport-type">
                    <SelectValue placeholder="Select transportation type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="car">Car (Petrol)</SelectItem>
                    <SelectItem value="car-diesel">Car (Diesel)</SelectItem>
                    <SelectItem value="car-hybrid">Car (Hybrid)</SelectItem>
                    <SelectItem value="ev">Electric Vehicle</SelectItem>
                    <SelectItem value="bus">Bus</SelectItem>
                    <SelectItem value="train">Train</SelectItem>
                    <SelectItem value="plane">Airplane</SelectItem>
                    <SelectItem value="bike">Bicycle</SelectItem>
                    <SelectItem value="walk">Walking</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="distance">Distance (km)</Label>
                  <span className="text-sm text-gray-500">{distance} km</span>
                </div>
                <Slider
                  id="distance"
                  defaultValue={[distance]}
                  max={100}
                  step={1}
                  onValueChange={(value) => setDistance(value[0])}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="frequency">Frequency</Label>
                <Select defaultValue={frequency} onValueChange={setFrequency}>
                  <SelectTrigger id="frequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="once">One-time trip</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Calculate Emissions
              </Button>
            </form>
          </CardContent>
        </Card>

        {showResults ? (
          <div className="lg:col-span-2">
            <Tabs defaultValue="results">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="results">Results</TabsTrigger>
                <TabsTrigger value="comparison">Comparison</TabsTrigger>
                <TabsTrigger value="alternatives">Alternatives</TabsTrigger>
              </TabsList>

              <TabsContent value="results">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Carbon Footprint</CardTitle>
                    <CardDescription>Based on your transportation choices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex flex-col items-center justify-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="text-4xl font-bold text-green-600">2.3 kg CO₂</div>
                        <p className="text-sm text-gray-500">Per trip</p>

                        <div className="w-full h-2 bg-gray-200 rounded-full mt-4">
                          <div className="h-2 bg-red-400 rounded-full" style={{ width: "70%" }}></div>
                        </div>

                        <div className="flex justify-between w-full mt-2 text-xs text-gray-500">
                          <span>Low Impact</span>
                          <span>High Impact</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="text-sm text-gray-500">Monthly</div>
                          <div className="text-2xl font-bold">69 kg CO₂</div>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="text-sm text-gray-500">Yearly</div>
                          <div className="text-2xl font-bold">839.5 kg CO₂</div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="font-medium mb-2">Environmental Impact</h3>
                        <p className="text-sm text-gray-500 mb-4">
                          Your annual emissions from this transportation choice are equivalent to:
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-600"></div>
                            Planting 42 trees to offset
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-600"></div>
                            3,358 smartphone charges
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-600"></div>
                            Driving 3,358 km in a petrol car
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="comparison">
                <Card>
                  <CardHeader>
                    <CardTitle>Emissions Comparison</CardTitle>
                    <CardDescription>How different transportation methods compare</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <Chart data={data} layout="vertical">
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" unit=" kg" />
                          <YAxis dataKey="name" type="category" width={100} />
                          <Tooltip formatter={(value) => [`${value} kg CO₂`, "Emissions"]} />
                          <Bar dataKey="emissions" fill="#22c55e" />
                        </Chart>
                      </ResponsiveContainer>
                    </div>

                    <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Leaf className="h-5 w-5 text-green-600" />
                        Did You Know?
                      </h3>
                      <p className="text-sm text-gray-500">
                        Switching from a petrol car to public transportation for your daily commute could reduce your
                        carbon footprint by up to 70% over a year.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="alternatives">
                <Card>
                  <CardHeader>
                    <CardTitle>Eco-Friendly Alternatives</CardTitle>
                    <CardDescription>Greener options for your journey</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="h-[200px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <Chart data={comparisonData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis unit=" kg" />
                            <Tooltip formatter={(value) => [`${value} kg CO₂`, "Emissions"]} />
                            <Bar dataKey="emissions" fill={(entry) => entry.fill} />
                          </Chart>
                        </ResponsiveContainer>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader className="p-4">
                            <CardTitle className="text-base flex items-center gap-2">
                              <Train className="h-5 w-5 text-green-600" />
                              Take the Train
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <p className="text-sm text-gray-500 mb-2">Reduces your emissions by 83%</p>
                            <div className="flex items-center gap-2 text-sm">
                              <div className="h-2 w-2 rounded-full bg-green-600"></div>
                              <span>0.4 kg CO₂ per trip</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <div className="h-2 w-2 rounded-full bg-green-600"></div>
                              <span>146 kg CO₂ per year</span>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="p-4">
                            <CardTitle className="text-base flex items-center gap-2">
                              <Car className="h-5 w-5 text-green-600" />
                              Electric Vehicle
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <p className="text-sm text-gray-500 mb-2">Reduces your emissions by 74%</p>
                            <div className="flex items-center gap-2 text-sm">
                              <div className="h-2 w-2 rounded-full bg-green-600"></div>
                              <span>0.6 kg CO₂ per trip</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <div className="h-2 w-2 rounded-full bg-green-600"></div>
                              <span>219 kg CO₂ per year</span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h3 className="font-medium mb-2 flex items-center gap-2">
                          <BarChart className="h-5 w-5 text-blue-600" />
                          Potential Impact
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">
                          By switching to the train for this regular journey, you could save:
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-600"></div>
                            693.5 kg CO₂ per year
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-600"></div>
                            Equivalent to planting 35 trees
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-600"></div>
                            $450 in fuel costs annually
                          </li>
                        </ul>
                      </div>
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
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Calculate Your Carbon Footprint</h3>
              <p className="text-gray-500 mb-4">
                Enter your transportation details to see your environmental impact and discover greener alternatives.
              </p>
              <div className="p-4 bg-green-50 rounded-lg text-sm">
                <p className="text-green-800">
                  <PlaneTakeoff className="inline h-4 w-4 mr-1" />
                  Did you know? A single long-haul flight can generate more carbon emissions than the average person
                  produces in a year in many countries.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

