import { FiCameraOff, FiCheck, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { ButtonVariants } from "../Button/types";
import * as Styles from "./styles";
import { IMovieCardProps } from "./types";
import { Link } from "../Link";

export function MovieCard(props: IMovieCardProps) {
  const navigate = useNavigate();

  return (
    <Styles.Container {...props}>
      <div className="movie-poster-wrapper">
        {props.movie.poster_path ? (
          <Link to={props.movie.homepage}>
            <img
              src={`${import.meta.env.VITE_THE_MOVIE_DB_IMAGES_URL}${
                props.movie.poster_path
              }`}
              alt={`${props.movie.title} film cover`}
            />
          </Link>
        ) : (
          <>
            <FiCameraOff />
            <p>Capa indisponível</p>
          </>
        )}
      </div>

      <div className="info-wrapper">
        <div>
          <Link to={props.movie.homepage}>
            <h4>{props.movie.title}</h4>
          </Link>
          <p>{props.movie.overview}</p>
        </div>

        <footer>
          <div className="rating">
            <span>Avaliação geral: </span>
            <strong>{props.movie.vote_average.toFixed(1)}</strong>
          </div>
          <div className="rating">
            <span>Quantidade de votos: </span>
            <strong>{props.movie.vote_count}</strong>
          </div>

          <div className="actions">
            <Button
              type="button"
              variant={ButtonVariants.Secondary}
              onClick={() => props.handleAddMovieOnWishList(props.movie)}
            >
              {props.inWishList ? (
                <>
                  Em sua lista
                  <FiCheck />
                </>
              ) : (
                <>
                  Adicionar à minha lista
                  <FiPlus />
                </>
              )}
            </Button>
            <Button
              type="button"
              onClick={() => navigate(`/movie/${props.movie.id}`)}
            >
              Ver mais
            </Button>
          </div>
        </footer>
      </div>
    </Styles.Container>
  );
}
