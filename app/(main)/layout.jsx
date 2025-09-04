import MainLayout from '@/components/MainLayout'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = ({ children }) => {
  return (
    <div className='flex h-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 gap-1'>
      <Sidebar />
      <div className="flex-1">
        <MainLayout>
        {children}
        </MainLayout>          
      </div>
    </div>
  )
}

export default layout