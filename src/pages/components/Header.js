import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Use FaMapMarkerAlt instead of FaLocationDot
import { BiSolidToggleRight, BiSolidToggleLeft, BiSolidSun, BiSolidMoon, BiSearch } from 'react-icons/bi';
import { FaFilter } from 'react-icons/fa';
import { useTheme } from 'next-themes';

function SearchBox({ query, locationQuery, handleInputChange, triggerFilter,  handleLocationChange , handleFilter }) {

    const { systemTheme, theme, setTheme } = useTheme();

    const changeTheme = () => {
        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return (
                <BiSolidToggleRight size={40} role='button' onClick={() => setTheme("light")} />
            )
        } else {
            return (
                <BiSolidToggleLeft size={40} role='button' onClick={() => setTheme("dark")} />
            )
        }
    }

    return (
        <header className='bg-[#5964E0] h-[150px] md:h-[162px] pb-[50px] md:rounded-bl-[100px] sm:rounded-bl-[50px] justify-center mb-16 items-center md:w-full dark:bg-[#5964E0] relative'>
            <div className='flex justify-between items-center'>
                <div className='items-center justify-center pt-8 pl-10'>
                    <h1 className='font-bold text-lg'>DevJobs</h1>
                </div>
                <div className='items-center justify-center pt-8 pl-10 flex gap-3 mr-12'>
                    <BiSolidSun />
                    {changeTheme()}
                    <BiSolidMoon />
                </div>

            </div>
            <div className="flex justify-center mt-0 pb-7">

                <div className="flex md:static absolute bottom-[-30px] max-h-[80px] h-14 xsm:h-14 xsm:w-[80%] sm:w-4/5 md:w-[85%] w-[90%] bg-white mt-20 rounded-lg items-center justify-center p-0 dark:bg-[#19202D]">

                    {/* title search */}
                    <div className="flex items-center xsm:w-[50%] sm:w-[75%]  sm:pl-0 md:w-full md:border-r border-gray-300 pr-2 ">
                        <div className="relative flex flex-grow">
                            <input
                                type="text"
                                name="searchTitle"
                                value={query}
                                onChange={handleInputChange}
                                className="text-black rounded-sm md:pl-10 h-full xsm:h-10 xsm:m-0 xsm:pl-1 dark:text-white  pr-4 w-full focus:outline-none dark:bg-[#19202D]"
                                placeholder="Filter by title ....."
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-5 xsm:hidden">
                                <BsSearch className="text-[#5964E0] hover:text-[#939BF4]" />
                            </div>
                        </div>
                    </div>

                    {/* location search */}

                    <div className="md:flex items-center  xsm:w-[60%] sm:w-1/3 md:w-[90%] border-r border-gray-300 pr-2 sm:hidden xsm:hidden">
                        <div className="relative flex-grow">
                            <input
                                type="text"
                                name="searchLocation"
                                value={locationQuery}
                                className="text-black h-10 font-bold w-full text-base rounded-sm dark:text-white pl-10 pr-4  focus:outline-none dark:bg-[#19202D]"
                                onChange={handleLocationChange}
                                placeholder="Search by location ....."
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <FaMapMarkerAlt className="text-[#5964E0] hover:text-[#939BF4]" />
                            </div>
                        </div>
                    </div>

                    {/* filter */}

                    <div className="md:flex xsm:hidden sm:hidden items-center sm:w-1/3  md:w-[100%] justify-center pr-2">
                        <div className="flex items-center justify-evenly w-full ml-3">
                            <input
                                type="checkbox"
                                name="filter"
                                value='fulltime'
                                className="w-[1rem] font-bold outline-none h-[1rem] bg-[#cdd5e0] border-none checked:bg-blue-600 checked:ring-blue-600 checked:text-white"
                                onChange={handleFilter}
                            />
                            <div className='mr-0 pr-0 '>
                                <label htmlFor="filter" className="md:flex w-full text-black font-bold dark:text-white items-center justify-center sm:hidden xsm:hidden">
                                    Full Time Only
                                </label>
                            </div>
                            <div className="md:bg-[#5964E0] hover:bg-[#939BF4] md:px-4 justify-center sm:px-3 text-center rounded-sm p-2">
                                <button>
                                    Search
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className='justify-center gap-8 items-center flex md:hidden'>
                        <div className='text-gray-400 dark:text-white'>
                            <FaFilter size={25} role='button' onClick={triggerFilter} handleFilter={handleFilter} handleInputChange={handleInputChange} query={query}/>
                        </div>
                        <div className='bg-[#5964E0] hover:bg-[#939BF4]  p-2 rounded-lg'>
                            <BiSearch size={30} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default SearchBox;