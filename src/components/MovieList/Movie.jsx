import { Genres } from './Genres';
import css from './MovieList.module.css'
import istockphoto from '../../default/istockphoto-610780794-612x612.jpg'

export const Movie = ({ movieInfo }) => {
    const {
        title,
        overview,
        poster_path,
        release_date,
        runtime,
        vote_average,
        genres,
        tagline,
    } = movieInfo;

    return (
        <div className={css.movieContainer}>
            <div className={css.movieBG}>
                <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : `${istockphoto}`} alt={title} className={css.movieIMG} />
                <div className={css.wraper}>
                    <h1 className={css.movietitle}>{title}</h1>
                    <p className={css.tagLine}>{tagline}</p>
                    <p className={css.description}>{overview}</p>
                    <p><span className={css.span}>Release data</span>: {release_date}</p>
                    <p><span className={css.span}>Time</span>: {runtime} min</p>
                    <p><span className={css.span}>Rating</span>: {vote_average}</p>
                    <ul className={css.list}><span className={css.span}>Genres</span> :
                        <Genres genres={genres} />
                    </ul>
                </div>
            </div>
        </div >
    )

}