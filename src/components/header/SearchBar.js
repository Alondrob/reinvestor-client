import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'

const CLASS_NAME = "abc"
/*  hidden  
                            md:inline-flex 
                            ml-2 
                            items-center 
                            bg-transparent 
                            outline-none
                            placeholder-gray-500 
                            w-11/12
                            flex-shrink */
const SearchBar = () => (
    <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
        <SearchIcon className="h-6 text-gray-600" />
        <input 
            className={CLASS_NAME}
            type="text"
            placeholder='Search...'
        />
    </div>
)

export default SearchBar