import React from 'react'
import "../styles/Home.css";

export const Home = () => {
    return(
    <>
            <div className='main'>
            <div className="search">
                    <input
                        className="srch"
                        type="Search  "
                        placeholder="Search City"
                    ></input>
        </div>
            </div>
    </>
    )
}
