import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { get } from '../utils/httpClient';
import styles from './MovieDetails.module.css';

export const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const {movieId} = useParams();
    useEffect(() => {
        get(`/movie/${movieId}`)
        .then(data => {
          setMovie(data);
        });
    },[movieId]);

    if(!movie)
        return null;

    const {poster_path, overview, title, genres} = movie;
    
    let imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imgUrl} alt={title}/>
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}><strong>Title:</strong> {title}</p>
                <p><strong>Description:</strong> {overview}</p>
                <p>{genres.map(u => u.name).join(", ")}</p>
            </div>
        </div>
    )
}
