import React from 'react'
import { imageurl } from '../../Constants/constants'
import './Flimlist.css'

function Flimlist({ films, title }) {
    return (
        <div className="listView">
            <h1 className="filmtitle">{title}</h1>

            <div className="posts">
                {
                    films.map((obj,index) => {
                        return (

                            // <img src="https://cdn.seat42f.com/wp-content/uploads/2020/07/15192015/Project-Power-Movie-Poster-Jamie-Foxx.jpg" alt="" />
                            <img src={`${imageurl+obj.poster_path}`} alt="" key={index}/>
                            // {/* <button onClick={()=>{console.log(films)}}>hh</button> */ }
                            // {/* <h1>{films[0].title}</h1> */ }
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Flimlist
