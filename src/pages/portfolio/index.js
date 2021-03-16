import React from "react";

import BlogRoll from "../../components/BlogRoll";
import Layout from "../../components/Layout";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <BlogRoll />
      </Layout>
    );
  }
}
