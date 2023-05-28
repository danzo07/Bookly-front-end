import Link from "next/link";
import styled from "styled-components";


export const ProductMainBox = styled.div`
  display: grid;
  grid-template-columns: 180px 220px;
  gap: 20px;
  max-width: 500px;
  border-radius: 1rem;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 300ms ease-in;
`;
export const AddToCart = styled.button`
  background-color: var(--green-500);
  display: block;
  color: white;
  font-size: 1rem;
  border: none;
  outline: none;
  border-radius: 5px;
  width: 100%;
  height: 3rem;
  text-align: center;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
background-color: var(--green-450);
  }
`;
export const InfoBox = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr auto auto;
gap: 20px;
padding: 1rem;
  h2{
    color: var(--black-400);
    font-weight: 500;
  }
  h3{
    color: var(--green-500);
    font-size: 1.3rem;
    font-weight: 700;
  }
`;
export const ImageBox = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  img {
    width: 100%;
    height: 100%;
    transform: scale(1.01);
  }
`;
