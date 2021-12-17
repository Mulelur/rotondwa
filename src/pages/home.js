import React from "react";
import { Background } from "../components";
import HomeContainer from "../container/home";
import NavBarContainer from "../container/navBar";
// import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      {/* <motion.div> */}
      <Background>
        <Background.Home>
          <NavBarContainer />
          <HomeContainer />
        </Background.Home>
      </Background>
      {/* </motion.div> */}
    </>
  );
}
