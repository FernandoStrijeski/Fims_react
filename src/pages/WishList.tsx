import { MovieCard } from "../components/MovieCard";
import { movie } from "../mocks/movie";
import * as Styles from "../styles/pages/Wishlist"

export function WishList() {
  return (
    <Styles.Container>
      <h1>Minha lista</h1>

      <div className="cards">
        <MovieCard key={movie.id} movie={movie} />
      </div>
    </Styles.Container>
  );
}
