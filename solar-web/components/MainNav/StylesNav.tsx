import styled from "styled-components";

export const NavWrapper = styled.nav`
  width: 51.875rem;
  height: 6rem;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  display: flex;
  justify-content: center;
  align-items: center;

  .path {
    color: white;
    font-family: ${(props) => props.theme.fonts.barlowCondensed};
    line-height: 1.1875rem;
    letter-spacing: 0.16875rem;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    column-gap: 3rem;

    .border {
      position: relative;
    }

    .border:hover::before {
      content: "";
      height: 0.1875rem;
      width: 100%;
      opacity: 0.5;
      background: white;
      position: absolute;
      bottom: -2.4rem;
    }

    .active {
      position: relative;
    }

    .active::before {
      content: "";
      height: 0.1875rem;
      width: 100%;
      background: white;
      position: absolute;
      bottom: -2.4rem;
    }

    .pathId {
      font-weight: bold;
      margin-right: 0.75rem;
    }
  }
`;