import { HTMLAttributes } from "react";
import { IMovieProps } from "../../hooks/WishList/types";

export interface IMovieCardProps extends HTMLAttributes<HTMLDivElement> {
  movie: any;
  inWishList: boolean;
  handleAddOrRemoveMovieOnWishList: (movie : IMovieProps) => void;  
}
