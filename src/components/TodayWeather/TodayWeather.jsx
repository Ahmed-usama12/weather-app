import React, { use, useEffect, useState } from 'react'
import humidityPic from'../../Assets/images/icon-umberella.png';
import windSpeedPic from'../../Assets/images/icon-wind.png';
import windDirPic from'../../Assets/images/icon-compass.png';
export default function TodayWeather({ data }) {

    const [todayDate, setTodayDate] = useState(new Date())

    useEffect(() => {
        setTodayDate(new Date());
    }, [])


    return <>
        <div className="item col-md-4 bg-sec-color m-0 p-0 item-border-left">
            {/* Start Header */}
            <div className="item-header item-header-border-left d-flex justify-content-between  py-2 px-4 bg-main-color text-light   ">
                <p className='text-white '>
                    {todayDate.toLocaleDateString("en-US", { weekday: "long" })}
                </p>
                <span className='text-white '>
                    <span>{todayDate.getDate()} </span>
                    <span>{todayDate.toLocaleDateString("en-US", { month: "long" })}</span>
                </span>
            </div>
            {/* End Header */}


            {/* Start Content */}
            <div className='item-content text-start px-4 py-3  text-light'>
                <p className='fs-2'>{data.location.name}</p>

                <div className="d-flex justify-content-between align-items-center">
                    <span className='fs-1 fw-bold'>{data.current.temp_c}
                        <sup> o</sup>C
                    </span>
                    <img src={data.current.condition.icon} alt="" />
                </div>

        <span className='text-light-blue'>{data.current.condition.text}</span>

            <div className="item-footer d-flex justify-content-between align-items-center text-light p-3 mt-4">
                <div className="humidity d-flex me-3">
                    <img src={humidityPic} alt="Umberella " className='footer-icons me-2'/>
                    <p className=''>{data.current.humidity}%</p>
                </div>
                <div className="wind-speed d-flex me-3">
                    <img src={windSpeedPic} alt="Wind Speed " className='footer-icons me-2'/>
                    <p>{data.current.wind_kph}Km/h</p>
                </div>
                <div className="wind-diriction d-flex me-3 bg-d">
                    <img src={windDirPic} alt="Wind Direction " className='footer-icons me-2'/>
                    <p>{data.current.wind_dir}</p>
                </div>
            </div>
            </div>
            {/* End Content */}
        </div>


    </>
}
