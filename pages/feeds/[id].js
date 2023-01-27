import React from "react";

export default function Feed({ movies }) {
  return (
    <div>
      <h1>Movies</h1>

      <ul>
        {movies.map((movie, index) => {
          return (
            <li key={`${index}`}>
              <img
                src={movie.youtube_image}
                alt=""
                height={30}
                style={{ marginRight: 16 }}
              />
              {`${index + 1}. ${movie.title} | ${movie.subtitle}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "foods" } },
      { params: { id: "songs" } },
      { params: { id: "superhero" } },
    ],
    fallback: false,
  };
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  const url = `https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&passwoed=password&type=${params.id}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      movies: data.youtubes,
    },
  };
}
