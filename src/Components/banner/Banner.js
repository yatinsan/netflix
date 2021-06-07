import React, { useEffect, useState } from 'react'
import { axio } from '../../Constants/axios'
import { API_KEY, imageurl } from '../../Constants/constants'
import './Banner.css'



function Banner() {
        const [banner, setbanner] = useState('')
        const [num, setnum] = useState(1)
    useEffect(() => {
        axio.get(`/trending/movie/day?api_key=${API_KEY}`).then((data)=>{
            console.log(data.data.results[1])
            setbanner(data.data.results[1])
            
        })
        
    }, [])

    const chnum=()=>{
        setnum(num + 1)
        axio.get(`/trending/movie/day?api_key=${API_KEY}`).then((data)=>{setbanner(data.data.results[num])})
        
    }

    return (
        <div style={{backgroundImage:`url(${imageurl+banner.backdrop_path})`}} className="banner">
            <div className="content">
                <h1 className="title">{banner.title}</h1>
                <div className="buttons">
                    <button>PLAY</button>
                    <button onClick={chnum}>watch list</button>
                </div>
                <p className='discription'>{banner.overview}</p>
            </div>
            <div className="fade">
                
            </div>
        </div>
    )
}

export default Banner
