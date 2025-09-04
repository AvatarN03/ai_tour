'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useState } from 'react'


export default function SavedTripsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [savedTrips] = useState([
    {
      id: 1,
      title: 'Weekend in Paris',
      destination: 'Paris, France',
      savedDate: '2024-01-15',
      budget: '$800',
      days: '3',
      status: 'Planning'
    },
    {
      id: 2,
      title: 'Beach Getaway',
      destination: 'Bali, Indonesia',
      savedDate: '2024-01-10',
      budget: '$1200',
      days: '7',
      status: 'Booked'
    },
    {
      id: 3,
      title: 'Mountain Adventure',
      destination: 'Swiss Alps',
      savedDate: '2024-01-05',
      budget: '$1500',
      days: '5',
      status: 'Completed'
    }
  ])

  const filteredTrips = savedTrips.filter(trip =>
    trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trip.destination.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Saved Trips
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage and organize your travel plans
          </p>
        </div>
        <Button size="lg">
          + Create New Trip
        </Button>
      </div>

      {/* Search Bar */}
      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search saved trips..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <Button>
            Search
          </Button>
        </div>
      </Card>

      {/* Saved Trips List */}
      <div className="grid gap-6">
        {filteredTrips.map((trip) => (
          <Card key={trip.id} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">✈️</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {trip.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {trip.destination}
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <span>Saved: {trip.savedDate}</span>
                      <span>Budget: {trip.budget}</span>
                      <span>Duration: {trip.days} days</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        trip.status === 'Booked' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        trip.status === 'Planning' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                      }`}>
                        {trip.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  Share
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredTrips.length === 0 && (
        <Card className="p-12 text-center">
          <div className="text-6xl mb-4">✈️</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No trips found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {searchQuery ? 'Try adjusting your search terms' : 'Start planning your first trip!'}
          </p>
          <Button>
            Create New Trip
          </Button>
        </Card>
      )}
    </div>
  )
}

