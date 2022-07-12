import React from 'react'
import {useStateContext} from '../../context/ContextProvider'

const Sortbar = ({handlesort}) => {
  const {sortvalue}= useStateContext();

const sortoptions=["name","status","type","time"]

  return (
    <div>
    <div className='flex justify-around items-center '>
   
    <div className="ml-4">
  <h4 className=" ml-2">SortBy:</h4>
  <div>
<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
onChange={handlesort} value={sortvalue}>
  <option >Please Select Value</option>
  {sortoptions.map((item,idx)=>(
    <option value={item} key={idx}>{item}</option>
  ))}
</select>
  </div>
  </div>
    </div>
    </div>
  )
}

export default Sortbar