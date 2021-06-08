import React, { useEffect, useState } from 'react'
import { axio } from '../../Constants/axios'
import { API_KEY, imageurl } from '../../Constants/constants'
import './Banner.css'



function Banner() {
        const [banner, setbanner] = useState('')
    useEffect(() => {
        axio.get(`/trending/movie/day?api_key=${API_KEY}`).then((data)=>{
            // setbanner(data.data)
            setbanner(data.data.results[Math.floor(Math.random() * 20)])
            
        })
        
    }, [])

    
    return (
        <div style={banner?{backgroundImage:`url(${imageurl+banner.backdrop_path})`}:null} className="banner">
            <div className="content">
                <h1 className="title">{banner.title}</h1>
                <div className="buttons">
                    <button onClick={()=>{console.log(banner)}}>PLAY</button>
                    <button>watch list</button>
                </div>
                <p className='discription'>{banner.overview}</p>
            </div>
            <div className="fade">
                
            </div>
        </div>
    )
}

export default Banner
