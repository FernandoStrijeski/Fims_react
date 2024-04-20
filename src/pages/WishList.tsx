import { MovieCard } from "../components/MovieCard";
import { useWishList } from "../hooks/WishList";
import { IMovieProps } from "../hooks/WishList/types";
import { movie } from "../mocks/movie";
import * as Styles from "../styles/pages/Wishlist";

export function WishList() {
  const { wishList } = useWishList();

  return (
    <Styles.Container>
      <h1>Minha lista</h1>

      <div className="cards">
        <MovieCard
          key={movie.id}
          movie={movie}
          inWishList={true}
          handleAddOrRemoveMovieOnWishList={function (movie: IMovieProps): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </Styles.Container>
  );
}
