import React from "react";
import styled from "styled-components";


function Herosection() {
  return (
    <HeroSection>
      <img src="/hero.jpg" alt="" />
      <div className="overlay">
        <h1>
          Can't Find the Book You're Searching For? Don't Worry, We'll Add It
          Just for You! Request Now.
        </h1>
        <button>Request a book</button>
      </div>
    </HeroSection>
  );
}

export default Herosection;

const HeroSection = styled.div`
  margin-top: 63px;
  position: relative;
  height: 600px;
  font-family: "Lato", sans-serif;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 5rem;
  }

  h1 {
    font-size: 4rem;
    margin-bottom: 2rem;
    color: white;
    font-weight: 300;
  }

  button {
    font-size: 1.5rem;
    display: block;
    background-color: white;
    color: var(--green-500);
    outline: none;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    padding: 1rem 3rem;
    height: 4rem;
    font-weight: 400;
    text-align: center;
    transition: all 500ms ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    &:hover {
      background-color: var(--green-500);
      color: white;
    }
    svg{
      width: 20px;
      height: 20px;
    }
  }
`;
