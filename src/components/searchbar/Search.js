import React from 'react';
import {useStateContext} from '../../context/ContextProvider'




const Search = ({handleSearch,handlereset}) => {
  const {value,setvalue}= useStateContext();
  return (
    <div>
    <div className='flex  justify-center items-center '>
    <form class="w-full max-w-sm items-center" onSubmit={handleSearch}>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
    </div>
    <div class="md:w-2/3  mt-3  ">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500   item-center" id="inline-full-name" type="search" value={value}  onChange={(e)=>{setvalue(e.target.value)}}/>
    </div>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-2 mx-2 mt-3 rounded" type='submit'>
  search
</button>
<button class="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-2 mx-2 mt-3 rounded" onClick={()=>handlereset}>
  reset
</button>
  </div>
</form>
    </div>
    </div>
  )
}

export default Search