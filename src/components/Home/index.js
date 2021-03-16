import React from "react";

import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";

import Layout from "../Layout";
import About from "./About";
import Banner from "./Banner";
import Services from "./Services";
import { Container } from "./styles";
import Tratament from "./Tratament";
import TratamentInfo from "./TratamentInfo";

function Home({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) {
  const imgs = image.blurbs;
  return (
    <Layout>
      <Banner slides={imgs} />
      <About />
      <Services />
    </Layout>
  );
}

export default Home;

Home.propTypes = {
  image: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};
// https://www.mockplus.com/blog/post/best-landing-page-design-examples
