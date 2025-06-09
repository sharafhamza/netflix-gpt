import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/redux/movieSlice";

const useTrailerVideo = () => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getVideo = async () => {
    const videData = await fetch(
      "https://api.themoviedb.org/3/tv/" + id + "/videos?language=en-US",
      options
    );
    const json = videData.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getVideo();
  });
};

export default useTrailerVideo;
