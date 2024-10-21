import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Search = () => {
    const {search,setSearch} = useContext(AppContext)
  return (
    <div className='w-full pb-8'>
      <div className='lg:w-[80%] sm:w-[85%] w-[90%] mx-auto border '>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" placeholder='search product' className='p-2 pl-4 border-none outline-none text-sm w-full' />
      </div>
    </div>
  )
}

export default Search
