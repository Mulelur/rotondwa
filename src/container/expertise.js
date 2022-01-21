import moment from "moment";
import React from "react";
import { Expertise } from "../components";
import p1 from '../assets/screen-shots/form-it-ss.png';
import p2 from '../assets/screen-shots/code-editor-ss.png';
import p3 from '../assets/screen-shots/to-do-ss.png';

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
          <Expertise.Avatar>
            <Expertise.Image1></Expertise.Image1>
          </Expertise.Avatar>
        </Expertise.Col>
      </Expertise.Row>
      <Expertise.SubjectRow>
        <Expertise.Heading2>Projects</Expertise.Heading2>
      </Expertise.SubjectRow>
       <Expertise.Projects>
          <Expertise.Project >
            <Expertise.ProjectThmbnail style={{
              backgroundImage: `url(${p1})`,
              width: '45rem',
              height: '28rem'
            }}>
            </Expertise.ProjectThmbnail>
            <Expertise.SubjectRow>
            <Expertise.ProjectName>
              My project
            </Expertise.ProjectName>
            <Expertise.ProjectCreatedAT>
            created: 2021-11-05
            </Expertise.ProjectCreatedAT>
            </Expertise.SubjectRow>
            <Expertise.SubjectRow>
            <Expertise.ProjectDemo href="https://form-in-v2.netlify.app/recent">
              View Demo
            </Expertise.ProjectDemo>
            <Expertise.ProjectCode href='https://github.com/Mulelur/form-it-'>
              View Code
            </Expertise.ProjectCode>
            </Expertise.SubjectRow>
          </Expertise.Project>
          <Expertise.Project >
            <Expertise.ProjectThmbnail style={{
              backgroundImage: `url(${p2})`,
              width: '45rem',
              height: '28rem'
            }}>
            </Expertise.ProjectThmbnail>
            <Expertise.SubjectRow>
            <Expertise.ProjectName>
              online code editor
            </Expertise.ProjectName>
            <Expertise.ProjectCreatedAT>
              created: 2021-01-25
            </Expertise.ProjectCreatedAT>
            </Expertise.SubjectRow>
            <Expertise.SubjectRow>
            <Expertise.ProjectDemo href='https://webcode-editor-mulelur.netlify.app/'>
              View Demo
            </Expertise.ProjectDemo>
            <Expertise.ProjectCode href='https://github.com/Mulelur/online-codeEditor'>
              View Code
            </Expertise.ProjectCode>
            </Expertise.SubjectRow>
          </Expertise.Project>
        </Expertise.Projects>
    </Expertise>
  );
}
