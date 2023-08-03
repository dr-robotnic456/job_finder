import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Card({ id, title, employmentType, company, location, icon }) {
    return (
        <Link href={`/job/${id}`}>
        <fieldset className='card relative bg-white md:w-[350px] xsm:w-[350px] mb-3 justify-center items-center h-[228px] rounded-lg border-none max-w-[400px] text-black p-5 shadow-lg dark:bg-[#19202D] flex-grow'>
            <legend className='card-image bg-none h-[40px] w-[40px]'>
                <Image src={`/${icon}`} width={40} height={40} objectFit='cover' />
            </legend>
            <div className='card-content flex flex-col '>
                <div className='flex justify-start gap-1 text-[#6E8098] text-base'>
                    <span className='mr-1'>time</span>
                    <span>.</span>
                    <span>{employmentType}</span>
                </div>
                <h2 className="text-lg font-bold dark:text-white">{title}</h2>
                <p className='text-base text-[#6E8098]'>{company}</p>
                <p className='card-footer text-[#5964E0] text-base absolute bottom-3 font-bold'>{location}</p>
            </div>
        </fieldset>
        </Link>
    );
}

export default Card;
