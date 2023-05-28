import styled from "styled-components";

export const NavStyle = styled.div`
  background-color: var(--background);
  height: 4rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.46));

  a {
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--black-500);
    display: block;
    width: 110px;
  }
`;
export const NavBox = styled.div`
  height: 100%;
  margin: 0 10%;
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 30px;

  a {
    display: flex;
    align-items: center;
  }

  div {
    display: flex;
    align-items: center;
    gap: 5px;
    position: relative;
    cursor: pointer;
    svg {
      color: var(--black-500);
      height: 25px;
      width: 25px;
    }
    h3 {
      color: var(--black-500);
    }
    span {
      background: #ff2626;
      color: white;
      width: 1.3rem;
      height: 1.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 0.75rem;
      position: absolute;
      right: -35%;
      top: 18%;
      pointer-events: none;
    }
  }
`;