import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeadingStyles from "../components/styles/PageHeadingStyles";

export default function Uses() {
  return (
    <Layout>
      <SEO title="Gerard Hynes | Uses" />
      <PageHeadingStyles>Hardware</PageHeadingStyles>
      <ul>
        <li>Laptop - Thinkpad X260</li>
        <li>Monitor - HP VH240a</li>
      </ul>
      <h3>Software</h3>
      <ul>
        <li>Editor - VS Code</li>
        <li>OS - Windows 10 + WSL</li>
        <li>Terminal - Zsh + Oh My Zsh</li>
      </ul>
    </Layout>
  );
}
