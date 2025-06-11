import React from "react";
import { IMG_URL } from "../../utils/constants";

const MovieCard = ({ image_id }) => {
  return (
    <div className="shrink-0 w-[16%] h-[400px] cursor-pointer ">
      <img className="w-full h-full rounded-2xl" src={IMG_URL + image_id} />
    </div>
  );
};

export default MovieCard;
