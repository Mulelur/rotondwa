import React from "react";
import { Hobbies } from "../components";
import img from "../assets/about.png";

export default function HobbiesContainer() {
  return (
    <Hobbies>
      <Hobbies.Row>
        <Hobbies.Avatar>
          <Hobbies.Image1></Hobbies.Image1>
        </Hobbies.Avatar>
      </Hobbies.Row>
      <Hobbies.Row>
        <Hobbies.Heading1>Hobbies</Hobbies.Heading1>
      </Hobbies.Row>
      <Hobbies.Row>
        <Hobbies.Col>
          <Hobbies.MyHobbies>
            <Hobbies.Item>
              <Hobbies.Header>
                <Hobbies.Heading2>🎧 Listening</Hobbies.Heading2>
              </Hobbies.Header>
              <Hobbies.Body>
                <Hobbies.List>
                  <Hobbies.ListItem>
                    Kevin Crawford - Bag of Spuds
                  </Hobbies.ListItem>
                  <Hobbies.ListItem>Maribou State - Steal</Hobbies.ListItem>
                  <Hobbies.ListItem>John Grant - GMF</Hobbies.ListItem>
                </Hobbies.List>
              </Hobbies.Body>
            </Hobbies.Item>
            <Hobbies.Heading2>📘 Reading</Hobbies.Heading2>
            <Hobbies.Heading2>📺 Watching</Hobbies.Heading2>
          </Hobbies.MyHobbies>
        </Hobbies.Col>
      </Hobbies.Row>
    </Hobbies>
  );
}
