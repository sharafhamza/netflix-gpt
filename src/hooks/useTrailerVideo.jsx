import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/redux/movieSlice";
import { API_options } from "../utils/constants";

const useTrailerVideo = async (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getVideo = async () => {
    const videData = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_options
    );
    const json = await videData.json();

    const filterData = json.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData?.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getVideo();
  });
};

export default useTrailerVideo;
