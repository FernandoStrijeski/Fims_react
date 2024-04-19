import { HTMLAttributes } from "react";

export interface IMovieCardProps extends HTMLAttributes<HTMLDivElement> {
  movie: any;
  inWishList?: boolean;
  handleAddMovieOnWishList?: (movie) => void;
}
