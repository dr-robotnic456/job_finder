import { Inter } from 'next/font/google'
import SearchBox from './components/Header'
import Jobs from './components/Jobs'
import { useEffect, useState } from 'react'
import Card from './components/Card'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // states
  const [jobsData, setJobsData] = useState([])
  const [query, setQuery] = useState("")
  const [locationQuery, setLocationQuery] = useState("")
  const [checkBoxFilter, setCheckboxFilter] = useState(null)
  
  const [showFilter, setShowFilter] = useState(false)

  // filter trigger
  const triggerFilter = () => {
    setShowFilter(!showFilter)
}


// input filter
const handleInputChange = e => {
  setQuery(e.target.value)
}

const handleLocationChange = e => {
  setLocationQuery(e.target.value)
}

const handleFilter = (e) => {
  if (checkBoxFilter === e.target.value) {
    // If the checkbox filter is already applied, uncheck it
    setCheckboxFilter(null);
  } else {
    // If the checkbox filter is not applied, apply it
    setCheckboxFilter(e.target.value);
  }
};


const filteredItems = jobsData.filter(jobData => jobData.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
const filteredLocation = jobsData.filter(jobData => jobData.location.toLowerCase().indexOf(locationQuery.toLowerCase()) !== -1)

// button filter

function filteredData(jobsData, query, locationQuery, employmentType) {
  let filteredJobs = jobsData

  // filtering input items
  if (query) {
    filteredJobs = filteredItems
  }

  if (locationQuery) {
    filteredJobs = filteredLocation
  }

  if (employmentType === "fulltime") {
    filteredJobs = filteredJobs.filter(
      jobData => jobData.employmentType === "fulltime"
    );
  }

  return filteredJobs.map(({ _id, title, employmentType, location, company, icon }) => (
    <Card key={_id}
      id={_id}
      title={title}
      employmentType={employmentType}
      location={location}
      company={company}
      icon={icon}
    />
  ))
}

const result = filteredData(jobsData, query, locationQuery, checkBoxFilter);

useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  try {
    const response = await axios.get("/api/job");
    const jobData = response.data;
    setJobsData(jobData);
  } catch (err) {
    console.log("Error fetching job data", err);
  }
};
  return (
    <div className='bg-[#f2f2f2] dark:bg-[#121721]'>
      <SearchBox 
        triggerFilter={triggerFilter} 
        locationQuery={locationQuery} 
        handleLocationChange={handleLocationChange} 
        handleInputChange={handleInputChange} 
        handleFilter={handleFilter}
      />

      <main>
        <div className='flex justify-center'>
          <Jobs 
            showFilter={showFilter} triggerFilter={triggerFilter}
             result = {result} 
             handleFilter={handleFilter} 
             handleLocationChange={handleLocationChange}
             locationQuery={locationQuery}
             />
        </div>
      </main>
    </div>
  )
}