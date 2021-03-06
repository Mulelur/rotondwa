import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem;
  color: #2b2b2b;
  @media (max-width: 760px) {
    margin-left: 1.2rem;
  }
  @media (max-width: 876px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div`
  padding: 1rem;
  width: 45vw;
  @media (max-width: 876px) {
    width: 100%;
  }
`;

export const Text = styled.p`
  font-family: Roboto Mono, Courier, Helvetica, Arial, sans-serif;

  color: #2b2b2b;
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 2.8rem;
  @media (max-width: 760px) {
    font-size: 1.4rem;
    margin-top: 1.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 5.9rem;
  line-height: 1;
  margin-top: 1.5rem;
  margin-bottom: 2.8rem;
  -webkit-letter-spacing: 1px;
  -moz-letter-spacing: 1px;
  -ms-letter-spacing: 1px;
  letter-spacing: 1px;
  font-family: Canela Web, Times, serif;
  font-weight: 700;
  @media (max-width: 760px) {
    font-size: 4.1rem;
    margin-top: 1.5rem;
  }
`;

export const Link = styled.a`
  margin-top: 1.5rem;
  font-size: 1.7rem;
  color: #fff;

  text-decoration: none;
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Video = styled.video`
  width: 500px;
  height: 500px;
`;
