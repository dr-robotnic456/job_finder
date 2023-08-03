import React from 'react'
import Filter from './Filter'

const Jobs = ({ showFilter, triggerFilter, result, handleFilter, handleLocationChange, locationQuery }) => {
  return (
    <div className='xsm:w-[80%] sm:w-4/5 md:w-[85%] w-[90%] relative'>
      <div className='flex flex-wrap justify-center gap-2 after:w-[250px] after:h-[228px]'>
        {showFilter && <Filter
          triggerFilter={triggerFilter}
          handleFilter={handleFilter}
          handleLocationChange={handleLocationChange}
          locationQuery={locationQuery}
        />}

        {result && result.length === 0 ? (
          <div className='font-bold text-3xl h-screen'>
            No Data Found
          </div>
        ) : (
          result
        )
        }



      </div>
      <div className=' flex justify-center mt-0'>
        <button className='absolute bottom-10 bg-[#5964E0] py-2 rounded-lg px-5 hover:bg-[#939BF4]'>Load</button>
      </div>
    </div>
  )
}

export default Jobs
