import React from 'react'

const Filter = ({handlefilter}) => {

  return (
    <div>
    <div  className="">
    <h4 className=''>FilterByStatus:</h4>
    <div className=''>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-2 mx-2 mt-3 rounded" 
     onClick={()=>handlefilter('success')}>
  success
    </button>
    <button class="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-2 mx-2 mt-3 rounded" 
    onClick={()=>handlefilter('pending')}>
  pending
    </button>
    </div>
    </div>
    </div>
  )
}

export default Filter