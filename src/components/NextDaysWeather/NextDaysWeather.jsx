import React from 'react'

export default function NextDaysWeather({ data, isMiddle }) {


  const nextDate = new Date(data.date);

  const containerClass = `item col-md-4 m-0 p-0 text-light ${isMiddle ? 'bg-main-color' : 'bg-sec-color item-border-right'}`;
  const headerClass = `py-2 text-center w-100 ${isMiddle ? 'bg-sec-color' : 'bg-main-color item-header-border-right'}`;

  return <>
    <div className={containerClass}>

      {/* Start Header */}
      <div className={headerClass}>
        <p className='text-light'>{nextDate.toLocaleDateString("en-US", { weekday: "long" })}</p>
      </div>
      {/* End Header */}



      <div className="text-center mt-3">
        <img src={data.day.condition.icon} alt="" className='' />
      </div>

      <div className='text-center mt-1'>
        <p className=' m-0'><span className='fs-2   fw-medium'>
          {data.day.maxtemp_c} <sup>o</sup>C
        </span></p>
        <p className=''>
          <span className='fs-4  text-secondary'>
            {data.day.mintemp_c} <sup>o</sup>C
          </span>
        </p>

        <span className='text-light-blue'>{data.day.condition.text}</span>
      </div>
    </div>
  </>;
}
