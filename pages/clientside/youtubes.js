import React from "react";
import useSWR from "swr";
import axios from "axios";

export default function Youtubes() {
  // const fetcher = (key) => fetch(key).then((res) => res.json());
  const fetcher = (...args) => axios(...args).then((res) => res.data);

  const url =
    "https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&passwoed=password&type=foods";
  const { data, error } = useSWR(url, fetcher);

  console.log("data", data);

  return (
    <div>
      <h1>Client-Side Youtubes</h1>
      <ul>
        {data &&
          data.youtubes.map((movie, index) => {
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
