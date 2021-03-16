import React from "react";

import Layout from "../Layout";
import MailChimpPage from "../MailChimpPage";
// import SEO from "../Seo";
import { Container, ImgBox, Title, BgImage, Content, Article } from "./styles";

function BlogPost({ children, content }) {
  console.log(content);

  return (
    <Layout>
      {/* <SEO title={title} description={excerpt} type="article" /> */}
      <ImgBox>
        <BgImage fluid={content.featuredImage}>
          <Title>{content.title}</Title>
        </BgImage>
      </ImgBox>
      <div className="container">
        <Content>
          <Article>{children}</Article>
          <MailChimpPage />
        </Content>
      </div>
    </Layout>
  );
}

export default BlogPost;
