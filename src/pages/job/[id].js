import React, { useEffect, useState } from 'react';
import { BiSolidToggleRight, BiSolidToggleLeft, BiSolidSun, BiSolidMoon, BiMenu, BiSearch } from 'react-icons/bi';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import axios from 'axios'
import Image from 'next/image';

function SingleItem() {
    const [jobData, setJobData] = useState("");
    const { systemTheme, theme, setTheme } = useTheme();

    const router = useRouter();

    const { id } = router.query;

    useEffect(() => {
        if (id) {
            job();
        }
    }, [id]);

    const job = async () => {
        try {
            const response = await axios.get(`/api/job/${id}`);
            setJobData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const { title, description, employmentType, location, todo, company, requirements, requirementsInfo, introToWork, companyWebsite, icon } = jobData;


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
        <div className='bg-[#f2f2f2] dark:bg-[#121721]'>
            <header className='bg-[#5964E0] h-[150px] md:h-[162px] pb-[50px] md:rounded-bl-[100px] sm:rounded-bl-[50px] justify-center mb-16 items-center md:w-full dark:bg-[#5964E0] relative xsm:w-full'>
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

                {/* title */}
                <div className="md:flex sm:flex sm:justify-center rounded-lg justify-center mt-4 items-center md:w-full pr-2 xsm:hidden">
                    <div className="relative flex  bg-white items-center dark:bg-[#19202D]">
                        <div className='flex h-[140px] w-[689px]'>
                            <div className='justify-center flex h-full w-[140px]'>
                                <Image src={`/${icon}`} objectFit='fill' width={140} height={140}/>
                            </div>
                            <div className='flex justify-between w-full items-center'>
                                <div className='flex flex-col justify-start items-center pl-6'>
                                    <h1 className='text-black font-bold dark:text-white'>{company}</h1>
                                    <span className='text-[#6E8098]'>{companyWebsite}</span>
                                </div>
                                <div className='mr-6'>
                                    <button className='bg-[#f4f6f8] text-[#5964E0] font-base hover:bg-[#939bf4] dark:hover:bg-[#808080] px-5 py-2 rounded-lg dark:bg-[#333333]'>Company Site</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex justify-center md:hidden sm:hidden  mb-10'>
                    <fieldset className='bg-white w-[326px] flex flex-col items-center dark:bg-[#19202D] p-3'>
                        <legend className='text-center h-[50px] w-[50px] rounded-md mb-4'>
                            <Image src={`/${icon}`} width={50} height={50} />
                        </legend>
                        <div className='flex flex-col items-center text-black dark:text-white'>
                            <h1 className='text-xl font-bold py-3'>
                                {title}
                            </h1>
                            <span>
                                {companyWebsite}
                            </span>
                        </div>
                        <div className='my-5'>
                            <button className='bg-[#f4f6f8] text-[#5964E0] font-base dark:bg-[#333333] rounded-md py-3 px-10'>
                                Company Site
                            </button>
                        </div>
                    </fieldset>
                </div>


            </header>

            {/* content */}
            <main className='flex justify-center items-center'>
                <div className='rounded-lg shadow-lg md:w-[689px] md:mt-10 xsm:mt-40 xsm:w-[327px] sm:w-[670px] bg-white mt-2 text-black px-10 py-5 dark:bg-[#19202D]'>
                    <div className='flex flex-col md:flex-row mb-8 md:items-center md:justify-between xsm:flex-col xsm:items-center' >
                        <div className='flex flex-col xsm:w-full'>
                            <div className='flex gap-3 text-base text-[#6E8098]'>
                                <p>time</p>
                                <span>.</span>
                                <span>{employmentType}</span>
                            </div>
                            <h1 className='text-xl font-bold dark:text-white'>
                                {title}
                            </h1>
                            <div className='text-[#5964E0]'>
                                {location}
                            </div>
                        </div>
                        <div className='text-center text-white xsm:w-full  dark:text-black'>
                            <button className='bg-[#5964E0] rounded-md md:w-[141px] h-10 xsm:w-full xsm:mt-8 hover:bg-[#939BF4]'>
                                Apply now
                            </button>
                        </div>
                    </div>

                    {/* description */}
                    <div className='text-[#6E8098] text-base font-normal'>
                        {description}
                    </div>

                    {/* requirements */}
                    <div className='my-7'>
                        <div className='my-5 dark:text-white'>
                            <h3 className='font-bold'>Requirements</h3>
                        </div>

                        <div className='text-[#6E8098] text-base font-normal mb-4'>
                            {requirementsInfo}
                        </div>
                        <ul className='list-disc ml-10 text-[#6E8098]'>
                            {requirements && requirements.map((requirement, index) => (
                                <li key={index}>{requirement}</li>
                            ))}

                        </ul>
                    </div>

                    {/* what you will do */}
                    <div className='my-7'>
                        <div className='my-5'>
                            <h3 className='font-bold dark:text-white'>What Will You Do</h3>
                        </div>

                        <div className='text-[#6E8098] text-base font-normal mb-4'>
                            {introToWork}
                        </div>
                        <ol className='list-decimal ml-10 text-[#5964E0] '>
                            {todo && todo.map((item, index) => (
                                <li key={index} className='pl-3 text-[#6E8098] '>{item}</li>
                            ))}
                        </ol>
                    </div>

                </div>
            </main>

            <footer className='flex justify-center md:justify-center items-center w-full bg-white mt-10 h-16 text-black dark:bg-[#19202D]'>
                <div className='md:w-[689px] xsm:w-[327px] flex items-center md:justify-between'>
                    <div className='md:flex md:flex-col xsm:hidden'>
                        <h1 className='font-bold text-lg dark:text-white'>{title}</h1>
                        <span className='text-[#6E8098] text-base'>motto</span>
                    </div>
                    <div className='text-center text-white dark:text-black'>
                        <button className='bg-[#5964E0] rounded-md md:w-[141px] h-10 hover:bg-[#939BF4] xsm:w-[327px]'>
                            Apply
                        </button>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default SingleItem;
