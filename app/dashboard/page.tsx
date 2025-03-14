"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BarChart, LineChart, PieChart } from "recharts"
import { Bar, Line, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts"
import {
  ArrowUp,
  Award,
  Bike,
  Bus,
  Calendar,
  Car,
  Download,
  Leaf,
  Settings,
  Target,
  Train,
  TrendingUp,
  User,
  Zap,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Dashboard() {
  const [period, setPeriod] = useState("month")

  // Sample data for charts
  const emissionsData = [
    { name: "Mon", car: 2.3, bus: 0.8, train: 0.4, bike: 0 },
    { name: "Tue", car: 1.8, bus: 0.9, train: 0.4, bike: 0 },
    { name: "Wed", car: 0, bus: 0.7, train: 0.4, bike: 0 },
    { name: "Thu", car: 0, bus: 0, train: 0.4, bike: 0 },
    { name: "Fri", car: 2.1, bus: 0, train: 0.4, bike: 0 },
    { name: "Sat", car: 2.5, bus: 0, train: 0, bike: 0 },
    { name: "Sun", car: 1.2, bus: 0, train: 0, bike: 0 },
  ]

  const transportModeData = [
    { name: "Car", value: 45, color: "#f87171" },
    { name: "Bus", value: 20, color: "#60a5fa" },
    { name: "Train", value: 25, color: "#34d399" },
    { name: "Bike", value: 10, color: "#a3e635" },
  ]

  const monthlyTrendData = [
    { name: "Jan", emissions: 120 },
    { name: "Feb", emissions: 110 },
    { name: "Mar", emissions: 105 },
    { name: "Apr", emissions: 95 },
    { name: "May", emissions: 85 },
    { name: "Jun", emissions: 90 },
    { name: "Jul", emissions: 80 },
    { name: "Aug", emissions: 75 },
    { name: "Sep", emissions: 65 },
    { name: "Oct", emissions: 60 },
    { name: "Nov", emissions: 55 },
    { name: "Dec", emissions: 50 },
  ]

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter">Your Dashboard</h1>
          <p className="text-gray-500">Track your environmental impact and sustainable transportation habits</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="bg-transparent border-none focus:outline-none text-sm"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total CO₂ Saved</CardDescription>
            <CardTitle className="text-2xl">120.5 kg</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="mr-1 h-4 w-4" />
              <span>12% increase</span>
            </div>
            <Progress value={65} className="h-2 mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Eco-Friendly Trips</CardDescription>
            <CardTitle className="text-2xl">24 trips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-green-600">
              <ArrowUp className="mr-1 h-4 w-4" />
              <span>8 more than last month</span>
            </div>
            <Progress value={75} className="h-2 mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Green Transport Usage</CardDescription>
            <CardTitle className="text-2xl">68%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="mr-1 h-4 w-4" />
              <span>15% increase</span>
            </div>
            <Progress value={68} className="h-2 mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Sustainability Score</CardDescription>
            <CardTitle className="text-2xl">82/100</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-amber-600">
              <Target className="mr-1 h-4 w-4" />
              <span>18 points to goal</span>
            </div>
            <Progress value={82} className="h-2 mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Weekly Emissions Breakdown</CardTitle>
            <CardDescription>Your carbon footprint by transportation mode</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={emissionsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis unit=" kg" />
                  <Tooltip formatter={(value) => [`${value} kg CO₂`, "Emissions"]} />
                  <Legend />
                  <Bar dataKey="car" name="Car" stackId="a" fill="#f87171" />
                  <Bar dataKey="bus" name="Bus" stackId="a" fill="#60a5fa" />
                  <Bar dataKey="train" name="Train" stackId="a" fill="#34d399" />
                  <Bar dataKey="bike" name="Bike" stackId="a" fill="#a3e635" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Transport Mode Distribution</CardTitle>
            <CardDescription>Your travel habits this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={transportModeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {transportModeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, "Usage"]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <span className="text-xs">Car</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                <span className="text-xs">Bus</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                <span className="text-xs">Train</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-lime-400"></div>
                <span className="text-xs">Bike</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Emissions Trend</CardTitle>
            <CardDescription>Your carbon footprint over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis unit=" kg" />
                  <Tooltip formatter={(value) => [`${value} kg CO₂`, "Emissions"]} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="emissions"
                    name="CO₂ Emissions"
                    stroke="#22c55e"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
            <CardDescription>Your sustainability milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                  <Award className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Green Commuter</h4>
                  <p className="text-xs text-gray-500">Used public transport 20 days in a row</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                  <Bike className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Cycling Enthusiast</h4>
                  <p className="text-xs text-gray-500">Cycled over 100km this month</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/50">
                  <Leaf className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-medium">Carbon Reducer</h4>
                  <p className="text-xs text-gray-500">Reduced emissions by 50% from last year</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                  <Zap className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <h4 className="font-medium">EV Explorer</h4>
                  <p className="text-xs text-gray-500">Complete 5 more electric vehicle trips</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Trips</CardTitle>
            <CardDescription>Your latest journeys</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                  <Train className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Home to Office</h4>
                    <span className="text-xs text-gray-500">Today</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">8.5 km via Green Line</p>
                    <span className="text-xs text-green-600">0.4 kg CO₂</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                  <Bike className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Office to Gym</h4>
                    <span className="text-xs text-gray-500">Yesterday</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">2.3 km via Bike Lane</p>
                    <span className="text-xs text-green-600">0.0 kg CO₂</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50">
                  <Car className="h-5 w-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Home to Shopping Mall</h4>
                    <span className="text-xs text-gray-500">2 days ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">12.7 km via Highway</p>
                    <span className="text-xs text-red-600">2.9 kg CO₂</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                  <Bus className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Home to Park</h4>
                    <span className="text-xs text-gray-500">3 days ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">5.2 km via Bus Route 42</p>
                    <span className="text-xs text-amber-600">0.8 kg CO₂</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sustainability Tips</CardTitle>
            <CardDescription>Ways to reduce your carbon footprint</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-medium mb-1">Combine Trips</h4>
                <p className="text-xs text-gray-500">
                  Plan your errands to reduce the number of separate trips. This can save up to 30% of your
                  transportation emissions.
                </p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-medium mb-1">Try Carpooling</h4>
                <p className="text-xs text-gray-500">
                  Sharing rides with colleagues can cut your commuting emissions by 50-75% depending on the number of
                  passengers.
                </p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-medium mb-1">Maintain Your Vehicle</h4>
                <p className="text-xs text-gray-500">
                  Regular maintenance and proper tire inflation can improve fuel efficiency by up to 15%.
                </p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-medium mb-1">Consider an Electric Vehicle</h4>
                <p className="text-xs text-gray-500">
                  EVs produce zero tailpipe emissions and can reduce your carbon footprint by up to 70% compared to
                  conventional vehicles.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
            <CardDescription>Personal information and preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-4 text-center">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold text-lg">Jane Doe</h3>
                <p className="text-sm text-gray-500">Eco Enthusiast</p>
              </div>
              <div className="w-full p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-medium mb-1">Sustainability Level</h4>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-xs text-gray-500 mt-2">
                  You're well on your way to becoming a sustainability expert!
                </p>
              </div>
              <div className="w-full grid grid-cols-2 gap-2">
                <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                  <p className="text-xs text-gray-500">CO₂ Saved</p>
                  <p className="font-bold">1.2 tons</p>
                </div>
                <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                  <p className="text-xs text-gray-500">Green Trips</p>
                  <p className="font-bold">248</p>
                </div>
              </div>
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <User className="h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

