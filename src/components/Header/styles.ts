import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 1rem 2.5rem;

  z-index: 2;

  background: linear-gradient(rgba(0, 0, 0, 0.8) 60%, transparent 100%);

  div {
    display: flex;
    align-items: center;

    &:last-child {
      margin-right: 0;
    }

    img {
      width: 150px;
      height: 38px;

      margin-right: 1.5rem;

      @media ${breakpoints.sm} {
        width: 70px;
        height: 18px;
      }
    }

    svg {
      margin-right: 0.25rem;
    }
  }

  .search-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      background: ${({ theme }) => theme.colors.white};

      padding: calc(0.5rem - 2px) 1rem;

      border: none;
      border-radius: 4px 0 0 4px;
    }

    @media ${breakpoints.md} {
      margin-top: 15px;
      width: 100vw;
      input {
        width: 63vw
      }
    }

    @media ${breakpoints.sm} {
      margin-top: 15px;
      width: 80vw;
      input {
        width: 63vw
      }
    }
  }
`;
