import React from 'react';
import Filter from './Filter';

const Jobs = ({ showFilter, triggerFilter, result }) => {
  const isResultEmpty = result.length === 0;

  return (
    <div className={`xsm:w-[80%] sm:w-4/5 md:w-[85%] w-[90%] relative ${isResultEmpty ? 'h-screen' : ''}`}>
      <div className='flex flex-wrap justify-center gap-2 after:w-[250px] after:h-[228px]' onClick={triggerFilter}>
        {showFilter && <Filter triggerFilter={triggerFilter} />}

        {result}

      </div>
      {isResultEmpty && (
        <div className='flex justify-center items-center h-full'>
          <p className='text-gray-500'>No jobs found.</p>
        </div>
      )}
      {!isResultEmpty && (
        <div className='flex justify-center mt-0'>
          <button className='absolute bottom-10 bg-[#5964E0] py-2 rounded-lg px-5 hover:bg-[#939BF4]'>Load</button>
        </div>
      )}
    </div>
  );
};

export default Jobs;
