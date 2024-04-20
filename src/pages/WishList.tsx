import { MovieCard } from "../components/MovieCard";
import { useWishList } from "../hooks/WishList";
import * as Styles from "../styles/pages/Wishlist";

export function WishList() {
  const { wishList, isMovieInWishList, handleAddOrRemoveMovieOnWishList } = useWishList();

  return (
    <Styles.Container>
      <h1>Minha lista</h1>

      <div className="cards">
        {wishList.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            inWishList={isMovieInWishList(movie.id)}
            handleAddOrRemoveMovieOnWishList={handleAddOrRemoveMovieOnWishList}
            className="card"
          />
        ))}
      </div>
    </Styles.Container>
  );
}
