import React from 'react'
import {Categories, PostWidget} from '../components'

const Sidebar = ({slug, categories}) => {
  return (
    <div className='lg:col-span-4 col-span-1'>
      <div className='lg:sticky relative top-8'>
        <PostWidget slug={slug} categories={categories}/>
        <Categories/>
      </div>
    </div>
  )
}

export default Sidebar
