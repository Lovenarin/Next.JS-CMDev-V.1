import React from "react";

export default function Movies({ movies }) {
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie, index) => {
          return <li key={`${index}`}>{`${index + 1}. ${movie}`}</li>;
        })}
      </ul>
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  return {
    props: {
      movies: ["Back to the future", "The contact", "iRobot", "Superman"],
    },
  };
}
