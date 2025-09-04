'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useState } from 'react'


export default function DashboardPage() {
  const [weather] = useState({
    city: 'New York',
    temperature: 72,
    condition: 'Sunny',
    icon: '☀️'
  })

  const [recommendedTrips] = useState([
    {
      id: 1,
      title: 'Weekend in Paris',
      destination: 'Paris, France',
      duration: '3 days',
      budget: '$800',
      image: '🗼'
    },
    {
      id: 2,
      title: 'Beach Getaway',
      destination: 'Bali, Indonesia',
      duration: '7 days',
      budget: '$1200',
      image: '🏖️'
    },
    {
      id: 3,
      title: 'Mountain Adventure',
      destination: 'Swiss Alps',
      duration: '5 days',
      budget: '$1500',
      image: '🏔️'
    }
  ])

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, Traveler!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Ready to plan your next adventure?
          </p>
        </div>
        <Button size="lg">
          + Create New Trip
        </Button>
      </div>

      {/* Weather Widget */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Weather in {weather.city}
            </h3>
            <div className="flex items-center mt-2">
              <span className="text-4xl mr-3">{weather.icon}</span>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {weather.temperature}°F
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {weather.condition}
                </p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: 2 min ago
            </p>
            <Button variant="outline" size="sm" className="mt-2">
              Change City
            </Button>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 text-center">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✈️</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Plan Trip
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Create a new itinerary with AI assistance
          </p>
          <Button variant="outline" className="w-full">
            Start Planning
          </Button>
        </Card>

        <Card className="p-6 text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💾</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Saved Trips
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            View and manage your saved itineraries
          </p>
          <Button variant="outline" className="w-full">
            View Trips
          </Button>
        </Card>

        <Card className="p-6 text-center">
          <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🤖</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            AI Assistant
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Get personalized travel recommendations
          </p>
          <Button variant="outline" className="w-full">
            Chat Now
          </Button>
        </Card>
      </div>

      {/* Recommended Trips */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Recommended for You
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {recommendedTrips.map((trip) => (
            <Card key={trip.id} className="p-6">
              <div className="text-center mb-4">
                <span className="text-4xl">{trip.image}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {trip.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {trip.destination}
              </p>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>{trip.duration}</span>
                <span>{trip.budget}</span>
              </div>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Recent Activity
        </h3>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            <span>Created new trip "Weekend in Paris"</span>
            <span className="ml-auto">2 hours ago</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            <span>Saved destination "Eiffel Tower" to favorites</span>
            <span className="ml-auto">1 day ago</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            <span>Received AI recommendation for "Beach Getaway"</span>
            <span className="ml-auto">3 days ago</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
