import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

export const MovieCard = ({title, poster_path, id}) => {
    let imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    return (
        <li className={styles.movieCard}>
            <Link to={`/movies/${id}`}>
            <img className={styles.movieImage} src={imgUrl} alt={title} width={230} height={345}/>
            <div>{title}</div></Link>
        </li>
    );
}
