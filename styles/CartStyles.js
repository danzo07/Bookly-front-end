import styled from "styled-components";
const {motion} = require("framer-motion")


export const CartWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;

export const CartStyle = styled(motion.div)`
  width: 500px;
  background: var(--background);
  padding: 2rem 4rem;
  overflow-y: scroll;
  position: relative;
  .close {
    margin: 1rem;
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 100;
    transition: 300ms all ease-in;
    border-radius: 50%;
    padding: 5px;
    &:hover {
      background: var(--black-100);
    }
  }
`;

export const Card = styled(motion.div)`
display: grid;
grid-template-columns: auto 1fr;
  border-radius: 1rem;
  overflow: hidden;
  background: var(--background);
 // padding: 2rem;
  margin: 2rem 0rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  img {
    width: 8rem;
    height: 100%;
    transform: scale(1.05);

  }
  h3{
    margin-bottom: 5px;
  }
`;

export const CardInfo = styled(motion.div)`
padding: 1rem;
display: grid;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const EmptyStyle = styled(motion.div)`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
  h1 {
    color: var(--secondary);
    text-align:center
  }
  svg {
    font-size: 8rem;
    color: var(--secondary);
  }
`;

export const Checkout = styled(motion.div)`
  button {
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
    margin:1rem 0rem;
    transition: all 200ms ease-in-out;
    &:hover {
      background-color: var(--green-450);
    }
  }
`;

export const Cards = styled(motion.div)``;
