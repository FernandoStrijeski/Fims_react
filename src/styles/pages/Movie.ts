import styled from "styled-components";
import breakpoints from "../breakpoints";

export const Container = styled.div`
  margin-top: 90px;
  padding: 4rem 4.5rem 2rem;

  @media ${breakpoints.md} {
    padding: 2rem 1.5rem;
  }

  #presentation {    
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    @media ${breakpoints.md} {
      flex-direction: column;
    }

    width: 100%;
    max-width: 1200px;
    height: 290px;
    margin: 0 auto;

    .movie-poster-wrapper {
      width: 100%;
      max-width: 190px;
      height: 290px;

      @media ${breakpoints.md} {
        align-self: center;
      }
      
      @media ${breakpoints.md} {
        width: 90%;
        max-width: 390px;
        height: auto;
      }

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        border-radius: 8px 0 0 8px;
      }

      p {
        margin-top: 0.5rem;
      }
    }

    img {
      width: 100%;
      max-width: 400px;
    }

    .about {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      height: 100%;

      margin: 0 2rem 2rem 2rem;
      @media ${breakpoints.md} {
        margin: 0 0 2rem 0;
      }

      > div {
        h1 {
          font-size: 2.5rem;
          font-weight: 700;
          @media ${breakpoints.md} {
            text-align: center;
          }
        }

        h4 {
          span {
            margin: 0 0.5rem;
          }
        }

        p {
          margin-top: 2rem;
          text-align: justify;
        }
        a {
          text-decoration: none;
          color: white;
        }
      }

      footer {
        padding: 1rem 0 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        width: 100%;

        span {
          font-weight: 700;
        }

        .actions {
          @media ${breakpoints.bg} {
            margin-top: 1rem;
            flex-wrap: wrap;
          }

          display: flex;
          align-items: center;
          justify-content: center;

          button:first-child {
            margin-right: 1rem;
          }
        }
      }
    }
  }
`;
