import React from "react";
import { About } from "../components";
import aboutImg from "../assets/tondi_1.jpeg";
import cv from "../assets/cv/Rotonda-Mulelu.pdf";

export default function AboutContainer() {
  return (
    <About>
      <About.Row>
        <About.Column>
          <About.Text>A little bit</About.Text>
          <About.Title>About Me</About.Title>
          <About.Text>
            I’m from South Africa. I taught myself to design and build websites.
            These days I live in Thohoyandou.
          </About.Text>
          <About.Text>
            I'm currently doing a diploma in Electrical and Technology. I
            previously studied Desig & building websites. It became my passion
            in college so I kept at it
          </About.Text>
          <About.Text>
            Personally, I love surfing and playing music, I am obsessed with my
            camper van 🚐 and I try to get away in it as much as possible. I am
            most happy in the water 🏄‍♂️.
          </About.Text>
          <About.Text>
            <About.Link href={cv} target="_blank">
              Dawonload cv &#8594
            </About.Link>
            <About.Link>Download cover letter &#8594</About.Link>
          </About.Text>
        </About.Column>
        <About.Column>
          <About.Avatar>
            <About.Img></About.Img>
          </About.Avatar>
        </About.Column>
      </About.Row>
      <About.BottomCol></About.BottomCol>
    </About>
  );
}
