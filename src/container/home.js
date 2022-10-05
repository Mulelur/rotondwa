import React from "react";
import { Home } from "../components";
import img from "../assets/5484597.jpg";
import cv from "../assets/cv/Rotonda-Mulelu.pdf";
import Typewiter from "typewriter-effect";

export default function HomeContainer() {
  return (
    <Home>
      <Home.Column>
        <Home.Text>Hi, I'm Rotonda Mulelu</Home.Text>
        <Home.Title>
          <Typewiter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewiter) => {
              typewiter
                .typeString("I Am Full Stuck developer.")
                .pauseFor(2500)
                .deleteAll()
                .typeString("I'M A Software Developer from the South.")
                .pauseFor(1600)
                .start();
            }}
          />
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
        {/* <Home.Video src={video} autoPlay type="video/m4v" loop muted /> */}
      </Home.Column>
    </Home>
  );
}
