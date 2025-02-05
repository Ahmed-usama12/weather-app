import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodayWeather from '../TodayWeather/TodayWeather';
import NextDaysWeather from '../NextDaysWeather/NextDaysWeather';
import { Puff } from 'react-loader-spinner'
export default function Home() {


    const [weatherData, setWeatherDatat] = useState(null);
    const [SearchCity, setSearchCity] = useState('london');

    function getWeather(cityName) {
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=c8c79a92aa9e4159ab2184502230308&q=${cityName}&days=3`).then((response) => {
            setWeatherDatat(response.data)
        }).catch((err) => {
            console.error("can't catch data");

        })
    }



    useEffect(() => {
        getWeather(SearchCity);
    }
        , [SearchCity])


    const handleSearch = (e) => {
        setSearchCity(e.target.value)
    }



    if (!weatherData) return <>
        <div className=' text-center  loading py-5'>
            <div className='d-flex justify-content-center pt-5'>
                <Puff
                    visible={true}
                    height="250"
                    width="250"
                    color="#1E202B"
                    ariaLabel="puff-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>

            <p className='fs-1 mt-3'>Loading....</p>
        </div>
    </>
    return <>


        <div className="app-container my-5 p-4">
            <div className="container">

                {/* SEARCH INPUT */}
                <div className="search-input position-relative w-100 mx-auto">
                    <input
                        type="text"
                        name="searchCity"
                        placeholder="Find your location..."
                        className="w-100 rounded-5 bg-main-color text-light py-3 px-5 border-0  "
                        value={SearchCity}
                        onChange={handleSearch}
                    />
                    <i className="fas fa-search position-absolute text-light"
                        style={{ right: "35px", top: "50%", transform: "translateY(-50%)" }}></i>
                </div>


                <div className="row mt-5">
                    <TodayWeather data={weatherData} />
                    {weatherData.forecast.forecastday.slice(1).map((day, index) => {
                        console.log("Rendering NextDaysWeather for:", day.date);

                        return (
                            <NextDaysWeather
                                key={day.date}
                                data={day}
                                isMiddle={index === 0}
                            />
                        );
                    })}
                </div>
            </div>
        </div>



    </>
}
