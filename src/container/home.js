import React from "react";
import { Home } from "../components";
import HomeIcon from "../icons";
import img from "../assets/homeIcon.svg";
import cv from "../assets/cv/Rotonda-Mulelu.pdf";

export default function HomeContainer() {
  return (
    <Home>
      <Home.Column>
        <Home.Text>Hi, I'm Rotonda Mulelu</Home.Text>
        <Home.Title>
          A Digital Designer and Softwer Developer from the South.
        </Home.Title>
        <Home.Text>
          I work as a product designer for WebLinnk, I build conference software
          that is used by some of the top institutes in the world.
        </Home.Text>
        <Home.Link href={cv} target="_blank">
          download cv
        </Home.Link>
      </Home.Column>
      <Home.Column>
        <Home.Img src={img} />
      </Home.Column>
    </Home>
  );
}
