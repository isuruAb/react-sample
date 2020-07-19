import React from "react";

function Child(props) {
  const { movies, setMovies, handleSelect, name } = props;
  React.useEffect(() => {
    if (movies.length !== 0) {
      return;
    }
    fetch(process.env.REACT_APP_SERVER_URL + `?query="a"`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setMovies(res.results));
  }, [movies.length, setMovies]);

  return (
    <div className="child">
      <select onChange={handleSelect} name={name}>
        {movies.map((movie) => {
          return (
            <option value={movie.original_title}>{movie.original_title}</option>
          );
        })}
      </select>
    </div>
  );
}

export default Child;
