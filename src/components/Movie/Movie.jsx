import styles from './movie.module.css';

export default function Movie({ title, year, genres, rating, poster }) {
    return (
        <div className={styles.Movie}>
            <h2>{title}</h2>
            <h3>{year}</h3>
            <ul>
                <h4>Generos:</h4>
                {genres.map(genre => {
                    return <li> {genre} </li>
                })}
            </ul>
            <p> Nota: {rating} </p>
            <img src={poster} alt={title} />
        </div>

    )
}