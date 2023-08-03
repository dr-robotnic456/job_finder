import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';

function Filter({ triggerFilter,  handleFilter, handleLocationChange, locationQuery }) {
    return (
        <div className='fixed inset-0 flex flex-col justify-center items-center z-50 bg-opacity-50 bg-black'>
            <div className='flex items-end top-0 justify-end w-3 h-3 text-lg font-bold'>
                <button onClick={triggerFilter}>x</button>
            </div>
            <div className='flex flex-col bg-white rounded-md dark:bg-[#19202d] p-4'>
                <div className="border-b-2 border-b-[#6E8098]">
                    <div className="relative flex-grow ">
                        <input
                            type="text"
                            name="searchLocation"
                            value={locationQuery}
                            onChange={handleLocationChange}
                            className="text-black h-14 w-[300px] text-base  rounded-sm pl-10 pr-4 focus:outline-none dark:bg-[#19202d]"
                            placeholder="filter by location ....."
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <FaMapMarkerAlt className="text-[#5964E0]" />
                        </div>
                    </div>
                </div>

                {/* filter */}

                <div className="flex flex-col">
                    <div className="flex items-center pl-2 w-full py-5">
                        <input
                            type="checkbox"
                            name="filter"
                            value="fulltime"
                            onChange={handleFilter}
                            className="w-[1rem] outline-none h-[1rem] justify-center bg-[#cdd5e0] border-none checked:bg-blue-600 checked:ring-blue-600 checked:text-white"
                        />
                        <div className='ml-2 pr-0 '>
                            <label htmlFor="filter" className="text-base text-black dark:text-white font-semibold">
                                Full Time Only
                            </label>
                        </div>
                    </div>
                    <div className="bg-[#5964E0] md:px-4 justify-center sm:px-3 text-center rounded-lg p-2">
                        <button onClick={triggerFilter}>
                            Search
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Filter
