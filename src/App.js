import { useEffect, useState } from 'react';
import './App.css';
import Banner from './Components/banner/Banner';
import Flimlist from './Components/List-view/Flimlist';
import NavBar from './Components/NavBar/NavBar';
import { axio } from './Constants/axios';
import { API_KEY } from './Constants/constants';

function App() {
  const [movies, setMovies] = useState('')
  const [comedy, setComedy] = useState('')
    useEffect(() => {
      axio.get(`/trending/movie/day?api_key=${API_KEY}`).then((res)=>{
        setMovies(res.data.results)
      })
      axio.get(`/trending/movie/day?api_key=${API_KEY}&page=2`).then((res)=>{
        setComedy(res.data.results)
      })
      // console.log(movies)
    
    }, [])

  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     {movies? <Flimlist title='trending' films={movies}/> : null}
     {comedy? <Flimlist title='comedy' films={comedy}/> : null}

    </div>
  );
}

export default App;
