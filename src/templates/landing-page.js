import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../layouts/index";

const Service = ({ data }) => {
  const { title, author } = data.contentfulLandingPage;
  return (
    <Layout bodyClass="page-service">
      <SEO title={title} />
      <div className="strip strip-white strip-diagonal">
        <div className="container pt-4 pt-md-10">
          <div className="row justify-content-start">
            <div className="col-12 col-md-8">
              <div className="service service-single">
                <h1 className="title">{title}</h1>
                <h2 className="title">{author}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ContentfulLandingPageBySlug($slug: String!) {
    contentfulLandingPage(slug: { eq: $slug }) {
      title
      author
    }
  }
`;

export default Service;
