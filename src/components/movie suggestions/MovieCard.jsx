import React from "react";
import { IMG_URL } from "../../utils/constants";

const MovieCard = ({ image_id }) => {
  return (
    <div className="shrink-0 w-[300px]">
      <img className="w-full" src={IMG_URL + image_id} />
    </div>
  );
};

export default MovieCard;
