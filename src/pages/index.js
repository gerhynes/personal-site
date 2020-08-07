import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Gerard Hynes | Web Developer" />
    <h1>Hi, I'm Gerard</h1>
    <p>
      I make fast, modern sites and apps using the JAMstack and fullstack
      JavaScript.
    </p>
  </Layout>
);

export default IndexPage;
