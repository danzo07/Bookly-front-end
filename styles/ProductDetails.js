import styled from "styled-components";

export const DetailsStyle = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 2rem;
  padding: 3rem 0rem;
  max-width: 1200px;
  margin: 0 auto;
`;
export const ImageBox = styled.div`
  width: 100%;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    transform: scale(1.1);
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    padding: 1.5rem;
    h3{
      font-size: 1.5rem;
      margin-bottom:1rem;
    }
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;
export const Quantity = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0rem;
  button {
    background: transparent;
    display: flex;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  p {
    text-align: center;
    width: 1rem;
  }
  span {
    color: var(--secondary);
  }
  svg {
    color: var(--green-500);
  }
`;
export const Buy = styled.button`
  background-color: var(--green-500);
  display: block;
  color: white;
  font-size: 1.2rem;
  border: none;
  outline: none;
  border-radius: 5px;
  width: 100%;
  height: 3rem;
  text-align: center;
  cursor: pointer;
  margin: 1rem 0rem;
  transition: all 200ms ease-in-out;
  &:hover {
    background-color: var(--green-450);
  }
`;
