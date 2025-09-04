'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useState } from 'react'


export default function ToolsPage() {
  const [activeTool, setActiveTool] = useState('expense')
  const [expenses, setExpenses] = useState([
    { id: 1, category: 'Accommodation', amount: 150, currency: 'USD', date: '2024-01-15' },
    { id: 2, category: 'Food', amount: 45, currency: 'USD', date: '2024-01-15' },
    { id: 3, category: 'Transportation', amount: 25, currency: 'USD', date: '2024-01-15' }
  ])
  const [newExpense, setNewExpense] = useState({ category: '', amount: '', currency: 'USD' })
  
  const [currencyData] = useState({
    from: 'USD',
    to: 'EUR',
    amount: 100,
    rate: 0.85
  })

  const [emergencyContacts] = useState([
    { country: 'France', police: '17', ambulance: '15', fire: '18' },
    { country: 'Japan', police: '110', ambulance: '119', fire: '119' },
    { country: 'Australia', police: '000', ambulance: '000', fire: '000' }
  ])

  const addExpense = () => {
    if (newExpense.category && newExpense.amount) {
      const expense = {
        id: Date.now(),
        ...newExpense,
        date: new Date().toISOString().split('T')[0]
      }
      setExpenses([...expenses, expense])
      setNewExpense({ category: '', amount: '', currency: 'USD' })
    }
  }

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0)

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Travel Tools
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Essential tools to make your travels easier and safer
        </p>
      </div>

      {/* Tool Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8">
          {[
            { id: 'expense', label: 'Expense Tracker', icon: '💰' },
            { id: 'currency', label: 'Currency Converter', icon: '💱' },
            { id: 'emergency', label: 'Emergency Contacts', icon: '🚨' }
          ].map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTool === tool.id
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <span className="mr-2">{tool.icon}</span>
              {tool.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Expense Tracker */}
      {activeTool === 'expense' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Expense Tracker
            </h2>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              Total: ${totalExpenses}
            </div>
          </div>

          {/* Add Expense Form */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Add New Expense
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Category"
                value={newExpense.category}
                onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="number"
                placeholder="Amount"
                value={newExpense.amount}
                onChange={(e) => setNewExpense({...newExpense, amount: parseFloat(e.target.value) || ''})}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <select
                value={newExpense.currency}
                onChange={(e) => setNewExpense({...newExpense, currency: e.target.value})}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
              </select>
              <Button onClick={addExpense} className="w-full">
                Add Expense
              </Button>
            </div>
          </Card>

          {/* Expenses List */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Recent Expenses
            </h3>
            <div className="space-y-3">
              {expenses.map((expense) => (
                <div key={expense.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">💰</span>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{expense.category}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{expense.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {expense.amount} {expense.currency}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* Currency Converter */}
      {activeTool === 'currency' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Currency Converter
          </h2>

          <Card className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Convert Currency
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Amount
                    </label>
                    <input
                      type="number"
                      value={currencyData.amount}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        From
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="JPY">JPY</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        To
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="JPY">JPY</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4">💱</div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {currencyData.amount} USD
                </div>
                <div className="text-2xl text-gray-600 dark:text-gray-400 mb-4">
                  = {currencyData.amount * currencyData.rate} EUR
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Exchange Rate: 1 USD = {currencyData.rate} EUR
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                  Last updated: 2 hours ago
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Emergency Contacts */}
      {activeTool === 'emergency' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Emergency Contacts
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {emergencyContacts.map((contact) => (
              <Card key={contact.country} className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl">🚨</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {contact.country}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <span className="font-medium text-gray-900 dark:text-white">Police</span>
                    <span className="text-2xl font-bold text-red-600 dark:text-red-400">{contact.police}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <span className="font-medium text-gray-900 dark:text-white">Ambulance</span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{contact.ambulance}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <span className="font-medium text-gray-900 dark:text-white">Fire</span>
                    <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">{contact.fire}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Need More Countries?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Search for emergency contacts in any country
              </p>
              <div className="flex space-x-2 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Enter country name..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <Button>
                  Search
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
