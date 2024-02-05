import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./Home";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { Media } from "./Media";
import { Contact } from "./Contact";
import { Robocolobee } from "../posts/Robocolobee";
import { Oil } from "../posts/Oil";

const Wrapper = styled.div`
  background-color: whitesmoke;
`;

export const Page = () => (
  <Wrapper>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/media" element={<Media />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/robocolobee" element={<Robocolobee />} />
      <Route path="/oil" element={<Oil />} />
    </Routes>
  </Wrapper>
);
