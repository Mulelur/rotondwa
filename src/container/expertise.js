import React from "react";
import { Expertise } from "../components";
import img from "../assets/tondi_1.jpeg";
import { Heading2 } from "../components/expertise/styles/expertise";
import { highSchool, vut } from "../components/expertise/data/subjectsData";
import {
  URGENTANDIMPORTANT,
  URGENTBUTNOTIMPORTANT,
} from "../components/expertise/data/manegementMatrixData";

export default function ExpertiseContainer() {
  return (
    <Expertise>
      <Expertise.Row>
        <Expertise.Col>
          <Expertise.Heading1># www</Expertise.Heading1>
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
        <Expertise.Col>
          <Heading2>## High school</Heading2>
          <Expertise.List>
            {highSchool.map((item) => {
              return <Expertise.ListItem>{item.sbj}</Expertise.ListItem>;
            })}
          </Expertise.List>
        </Expertise.Col>
        <Expertise.Col>
          <Heading2>## Modules</Heading2>
          <Expertise.List>
            {vut.map((item) => {
              return <Expertise.ListItem>{item.sbj}</Expertise.ListItem>;
            })}
          </Expertise.List>
        </Expertise.Col>
      </Expertise.SubjectRow>
      <Expertise.MatrixTitleContainer>
        <Expertise.Heading2>Manegement Matrix</Expertise.Heading2>
      </Expertise.MatrixTitleContainer>
      <Expertise.Row>
        <Expertise.Matrix>
          <Expertise.MatrixHeader>URGENT AND IMPORTANT</Expertise.MatrixHeader>
          <Expertise.MatrixBody>
            <Expertise.MatrixList>
              {URGENTANDIMPORTANT.map((item) => {
                return (
                  <Expertise.MatrixListItem>{item}</Expertise.MatrixListItem>
                );
              })}
            </Expertise.MatrixList>
          </Expertise.MatrixBody>
        </Expertise.Matrix>
        <Expertise.Matrix>
          <Expertise.MatrixHeader>
            URGENT BUT NOT IMPORTANT
          </Expertise.MatrixHeader>
          <Expertise.MatrixBody>
            <Expertise.MatrixList>
              {URGENTBUTNOTIMPORTANT.map((item) => {
                return (
                  <Expertise.MatrixListItem>{item}</Expertise.MatrixListItem>
                );
              })}
            </Expertise.MatrixList>
          </Expertise.MatrixBody>
        </Expertise.Matrix>
      </Expertise.Row>
    </Expertise>
  );
}
