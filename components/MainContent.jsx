import React from 'react'

const MainContent = ({children}) => {
  return (
    <main className="col-span-1 lg:col-span-8">
      {children}
    </main>
  )
}

export default MainContent
