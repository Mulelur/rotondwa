import styled from "styled-components/macro";
import img from "../../../assets/tondi_1.jpeg";

export const Container = styled.div`
  display: flex;
  padding: 3rem;
  @media (max-width: 656px) {
    padding: 2.1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 479px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div`
  max-width: 50%;
  @media (max-width: 479px) {
    max-width: 100%;
  }
`;

export const Text = styled.p`
  color: #2b2b2b;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 1.5rem;
  margin-bottom: 1.8rem;
  margin-top: 2.5rem;
  @media (max-width: 650px) {
    margin-top: 1.3rem;
    padding: 0.3rem;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  transition: all 0.2s ease;
  padding-left: 0.7rem;
  padding-right: 0.5rem;
`;

export const BottomCol = styled.div``;

export const Title = styled.h1`
  font-size: 7.1rem;
  line-height: 1;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
  @media (max-width: 650px) {
    font-size: 5.2rem;
  }
`;

export const Avatar = styled.div`
  text-align: center;
  margin-top: 20rem;
  padding-left: 5rem;
  @media (max-width: 768px) {
    min-width: 250px;
    min-height: 250px;
    margin-top: 20rem;
    padding-left: 5rem;
  }
  @media (max-width: 1040px) {
    margin-bottom: 30px;
    margin-top: 20rem;
    padding-left: 5rem;
  }

  @media (max-width: 768px) {
    min-width: 180px;
    min-height: 180px;
    padding-left: 5rem;
  }
  @media (max-width: 479px) {
    margin-top: 5rem;
  }
  min-width: 300px;
  min-height: 300px;
  position: relative;
  border-radius: 100%;
`;

export const Img = styled.img`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 47rem;
  max-height: 34rem;
`;
