import styled from "styled-components"
import breakpoints from "../breakpoints"

export const Container = styled.div`
  min-height: calc(100vh - 70px); //70px from header

  margin-top: 70px;
  padding: 2rem 4.5rem;

  @media ${breakpoints.sm} {
      padding: 2rem 1.5rem;
    }

  .cards {
    padding: 2rem 0;

    .card {
      margin-top: 1rem;

      &:first-child {
        margin-top: 0;
      }
    }
  }
`
