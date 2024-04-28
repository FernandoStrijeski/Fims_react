import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: ${({ theme }) => theme.colors.grey[700]};

  @media ${breakpoints.md} {
    flex-direction: column
  }

  border-radius: 8px;

  .movie-poster-wrapper {
    width: 100%;
    max-width: 190px;
    height: 290px;

    @media ${breakpoints.md} {
      width: 90%;
      max-width: 390px;
      height: auto;
    }

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px;

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

  .info-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    text-align: justify;

    height: 100%;
    padding: 1rem;

    h4 {
      font-size: 2rem;
      font-weight: 700;
    }

    a {
      text-decoration: none;
      color: white;
    }
    footer {
      margin-top: 1rem;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      .actions {
        @media ${breakpoints.bg} {
          margin-top: 1rem;
          flex-wrap: wrap;
        }

        display: flex;
        align-items: center;
        justify-content: center;

        button:first-child {
          margin-right: 0.5rem;
          svg {
            margin-left: 0.5rem;
          }
        }
      }
    }
  }
`;
