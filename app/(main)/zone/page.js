'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useState } from 'react'


export default function ZonePage() {
  const [activeTab, setActiveTab] = useState('forums')
  const [forumPosts] = useState([
    {
      id: 1,
      title: 'Best hidden gems in Paris?',
      author: 'TravelLover23',
      replies: 15,
      views: 234,
      lastActivity: '2 hours ago',
      category: 'Europe'
    },
    {
      id: 2,
      title: 'Solo travel tips for Southeast Asia',
      author: 'Wanderlust99',
      replies: 8,
      views: 156,
      lastActivity: '1 day ago',
      category: 'Asia'
    },
    {
      id: 3,
      title: 'Budget-friendly accommodation in NYC',
      author: 'BudgetTraveler',
      replies: 22,
      views: 445,
      lastActivity: '3 days ago',
      category: 'North America'
    }
  ])

  const [discordChannels] = useState([
    { name: 'general-travel', members: 1247, online: 89 },
    { name: 'europe-travel', members: 892, online: 45 },
    { name: 'asia-travel', members: 756, online: 32 },
    { name: 'budget-travel', members: 634, online: 28 }
  ])

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Travel Zone
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Connect with fellow travelers, share experiences, and get advice
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8">
          {[
            { id: 'forums', label: 'Forums', icon: '💬' },
            { id: 'discord', label: 'Discord', icon: '🎮' },
            { id: 'groups', label: 'Travel Groups', icon: '👥' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Forums Tab */}
      {activeTab === 'forums' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Travel Forums
            </h2>
            <Button>
              + New Post
            </Button>
          </div>

          <div className="grid gap-4">
            {forumPosts.map((post) => (
              <Card key={post.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {post.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>by {post.author}</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                        {post.category}
                      </span>
                      <span>{post.replies} replies</span>
                      <span>{post.views} views</span>
                      <span>Last: {post.lastActivity}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Post
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Discord Tab */}
      {activeTab === 'discord' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Discord Community
            </h2>
            <Button>
              Join Discord
            </Button>
          </div>

          <Card className="p-6">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Join Our Discord Server
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with thousands of travelers in real-time
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {discordChannels.map((channel) => (
                <div key={channel.name} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    #{channel.name}
                  </h4>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{channel.members} members</span>
                    <span className="text-green-600 dark:text-green-400">
                      {channel.online} online
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* Travel Groups Tab */}
      {activeTab === 'groups' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Travel Groups
            </h2>
            <Button>
              Create Group
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Mountain Adventures
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For hikers, climbers, and mountain enthusiasts
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                234 members • 12 online
              </div>
              <Button variant="outline" className="w-full">
                Join Group
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏖️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Beach & Island Life
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Tropical destinations and coastal adventures
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                189 members • 8 online
              </div>
              <Button variant="outline" className="w-full">
                Join Group
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Cultural Heritage
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Museums, historical sites, and cultural experiences
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                156 members • 5 online
              </div>
              <Button variant="outline" className="w-full">
                Join Group
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Budget Travel
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Tips for traveling on a budget
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                312 members • 18 online
              </div>
              <Button variant="outline" className="w-full">
                Join Group
              </Button>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}

