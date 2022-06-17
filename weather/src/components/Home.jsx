import React, { useEffect, useState } from 'react'
import "../styles/Home.css";

export const Home = () => {
    const [city,setCity] = useState();
    const [ search,setSearch] = useState();
    const [sys,setSys] =useState()


    useEffect ( () => {
        const data = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5f9ab80e339ba4fffe4c0f58b4273163`;
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson)
            setCity(resJson.main)
            setSys(resJson.sys)
            // console.log(sys)
        };
        data()
    },[search,sys] );

    return(
    <>
            <div className='container'>
            <div className='main'>
                <div className="search">
                    <input
                        className="srch"
                       
                        type="Search  "
                        onChange={(event) => {
                                setSearch(event.target.value) 
                        }}
                    ></input>
                </div>
                { !city ? (
                    <p> No Data Found</p>
                ) : (
                    <div className='data'>
                    <h3 className='name'>{search} </h3>
                        <h3 className='temp'>{city.temp}°C <img className="image" src="https://cdn-icons-png.flaticon.com/128/869/869869.png" alt="sofa1" ></img></h3>
                        <div className='pre'>
                            <h3 >Pressure  :  {city.pressure} hpa</h3>
                            <h3 >Humidity  :  {city.humidity} %</h3>
                        </div>
                        
                        <div className='sun'>
                        <h3 className='sunr'>Sunrise  :  {sys.sunrise}</h3>
                        <h3 className='suns'>Sunset  :  {sys.sunset}</h3>
                        </div>

                    </div>
                )}
                
            </div>
            </div>
    </>
    )
}
