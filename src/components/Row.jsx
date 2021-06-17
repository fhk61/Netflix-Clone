import axios from 'axios'
import { useState, useEffect } from 'react'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Row({ title, fetchUrl, isLarger }) {

    const [films, setFilms] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        axios.get(fetchUrl).then((response) => setFilms(response.data.results))
        console.log(films);
    }, [fetchUrl])

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
    
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        }
        else {
            movieTrailer(movie?.name || '')
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                }).catch(error => console.log(error));
        }
    }

    return (
        <div className="row">
            <h2 className="rowTitle">{title} </h2>
            <div className='rowPoster'>
                {
                    films.map((movie) => {
                        return (
                            <img
                                onClick={() => handleClick(movie)}
                                className={`img ${isLarger &&'largeImg'}  `}
                                key={movie.id}
                                src={`https://image.tmdb.org/t/p/original/${
                                    isLarger ? movie.backdrop_path : movie.poster_path
                                }`}
                                alt={movie.name} />
                        )
                    })
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}  />};
        </div>
    )
}

export default Row
