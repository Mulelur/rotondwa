import styled from "styled-components/macro";
import {
  aboutBgColor,
  contactBgColor,
  expertiseBgColor,
  hobbiesBgColor,
  homeBgColor,
} from "../../../color";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
`;

export const Home = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${homeBgColor};
  background-color: #fff;
  // background-image: linear-gradient(
  //   101deg,
  //   ${homeBgColor} 0%,
  //   ${homeBgColor} 50%,
  //   #fc8649 50%
  // );
  // background-size: cover;
`;

export const About = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Expertise = styled.div`
  width: 100vw;
  background-color: ${expertiseBgColor};
`;

export const Hobbies = styled.div`
  width: 100vw;
  background-color: ${hobbiesBgColor};
`;

export const Contact = styled.div`
  width: 100vw;
  background-color: ${contactBgColor};
`;
