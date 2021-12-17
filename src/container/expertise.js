import React from "react";
import { Expertise } from "../components";

export default function ExpertiseContainer() {
  return (
    <Expertise>
      <Expertise.Row>
        <Expertise.Col>
          <Expertise.Heading1># My Expertise</Expertise.Heading1>
          <Expertise.Text>
            🌊 I spend a lot of time surfing both the ocean and the web.
            Optimising this website was an experiment to lower my online carbon
            footprint.
          </Expertise.Text>
          <Expertise.Text>
            🦶 The site was designed to be small in size and is highly
            performant (The whole site is less than 8mb).
          </Expertise.Text>
          <Expertise.Text>
            🌳 It is hosted on a green server that is run on renewable energy.
          </Expertise.Text>
          <Expertise.Text>
            🤖 I’ve tried my best to make this site as accessible as possible.
          </Expertise.Text>
          <Expertise.Text>
            🕵️‍♂️ I’m not a spy, I don't track any users. If you want to get in
            touch, say hello.
          </Expertise.Text>
        </Expertise.Col>
        <Expertise.Col>
          {/* <Expertise.Avatar>
            <Expertise.Image></Expertise.Image>
          </Expertise.Avatar> */}
          <Expertise.Avatar>
            <Expertise.Image1></Expertise.Image1>
          </Expertise.Avatar>
        </Expertise.Col>
      </Expertise.Row>
      <Expertise.SubjectRow>
        <Expertise.Heading2>Projects</Expertise.Heading2>
      </Expertise.SubjectRow>
    </Expertise>
  );
}
