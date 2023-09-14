export default function Genre({ movies, genres }) {
  return (
    <small>{movies.genre_ids.map((genreId) => genres[genreId].join(", "))}</small>
  );
}
