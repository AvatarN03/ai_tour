import React from 'react'
import Header from './Header'

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className='rounded-md p-3'>
                {children}
            </div>
        </>
    )
}

export default MainLayout