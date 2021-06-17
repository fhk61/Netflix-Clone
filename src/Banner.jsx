import axios from "axios";
import { useState, useEffect } from "react";
import './Banner.css';

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(fetchUrl)
      .then((response) =>
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        )
      );
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + ' ...' : str;
  }

  return (
    <header
      className="bannerHeader"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      }}
    >
      <div className="bannerContent">
        {/* Title */}
        <h2 className='bannerName'>{movie?.name || movie?.title}</h2>
              {/* Buttons */}
        <div className="bannerButtons">
            <button className='btn'>Play</button>
            <button className='btn'>MyList</button>      
        </div>
        <h1 className='description'>
          {truncate(movie?.overview, 150)}
        </h1>
        {/* Description */}
      </div>
      <div className="banner-fade"></div>
    </header>
  );
}

export default Banner;
