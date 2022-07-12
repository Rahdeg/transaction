import React from "react"
import {useStateContext} from '../../context/ContextProvider'


const Day4 = () => {
    const today = "10/11/2022"

    const {data}= useStateContext(); 

  return (
    <div>
    <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
    <h4 className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2  mx-2 mt-3 rounded w-20">{today} </h4>
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                ID
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                NAME
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                STATUS
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                TYPE
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                TIME
              </th>
            </tr>
          </thead>
         {data.length===0 ? <div className='flex  justify-center items-center'>No data found</div> :(data.map((item,idx)=>(

           (item.date===today) && 
            <tbody>
            <tr class="border-b" key={idx}>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
             {idx+1}
             </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {item.name}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {item.status}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {item.type}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {item.time}
            </td>
          </tr> 
          </tbody>
          
           
         )))}

        </table>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Day4