import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/moviecard';
function Favourites(){
    const {favorites} = useMovieContext();

    if (favorites) {
        return(
            <div className='favorites'>
                <h2>Your Favourites</h2>
             <div className="movies-grid">
                {favorites.map(
                    (movie) =>
                    (
                        <MovieCard movie={movie} key={movie.id} />
                    )
                )}
            </div>
            </div>
        )
    }
  else return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );

}

export default Favourites;