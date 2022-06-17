import React, { useEffect, useState } from 'react'
import "../styles/Home.css";

export const Home = () => {
    const [city,setCity] = useState();
    const [ search,setSearch] = useState("pune");

    useEffect ( () => {
        const data = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5f9ab80e339ba4fffe4c0f58b4273163`;
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson)
            setCity(resJson.main)
        };
        data()
    },[search] );

    return(
    <>
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
                        <h2>{search}</h2>
                        <h3>{city.temp}</h3>
                        <h3>temp</h3>
                    </div>
                )}
                
            </div>
    </>
    )
}
