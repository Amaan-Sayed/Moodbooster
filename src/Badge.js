import React from "react";
import styled from "styled-components";

import MakerPhoto from "./img/profile_pic.png";

const Badge = () => (
  <Link target="_blank" rel="noopener" href="https://twitter.com/amaansayed_">
    <Image src={MakerPhoto} />
    <Text>by Amaan</Text>
  </Link>
);

export default Badge;

const Link = styled.a`
  font-family: "Helvetica Neue", sans-serif;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 100;
  border-top-left-radius: 7px;
  padding: 6px 15px;
  background: #74bdd8;
  color: #222;
  text-decoration: none;
  transition: all 0.2s;
  &:hover {
    background: #5993a8;
  }
`;

const Image = styled.img`
  border-radius: 100%;
  width: 25px;
  vertical-align: middle;
`;

const Text = styled.p`
  margin: 0;
  vertical-align: middle;
  display: inline;
  margin-left: 7px;
  font-weight: 400;
  font-size: 14px;
`;
