import styled from "styled-components";

export const PostBody = styled.section`
  font-size: 1.2rem;
  line-height: 1.75;
  color: #374151;

  h1,
  h2,
  h3 {
    font-weight: 700;
  }

  h1 {
    font-size: 2.25rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  code {
    color: #1a202c;
    background: #e2e8f0;
    font-weight: 600;

    &::before {
      content: "\`";
    }

    &::after {
      content: "\`";
    }
  }

  pre {
    overflow-x: auto;
    background: #2d3748;
    padding: 1rem 1.5rem;
    border-radius: 0.375rem;
    margin-bottom: 1rem;
  }

  pre code {
    color: #e2e8f0;
    background: #2d3748;
    font-weight: 500;

    &::before {
      content: "";
    }
    &::after {
      content: "";
    }
  }

  p {
    margin-bottom: 1.25rem;
  }

  a {
    font-weight: 600;
    text-decoration: underline;
    color: #75abad;
  }

  ol {
    width: 100%;
    padding-left: 1.75em;
    margin-bottom: 1.25rem;
  }

  ol > li {
    position: relative;
    list-style-type: decimal;
  }

  ul {
    width: 100%;
    margin-bottom: 1.25rem;
  }

  ul > li::before {
    content: "";
    position: absolute;
    background-color: #cbd5e0;
    border-radius: 50%;
    width: 0.375em;
    height: 0.375em;
    top: 0.6875em;
    left: 0.25em;
  }

  ul > li {
    position: relative;
    padding-left: 1.75em;
  }

  blockquote {
    font-weight: 500;
    border-left: 0.25rem solid #e2e8f0;

    p {
      margin-left: 1rem;
    }
  }
`;

export const PostNavigation = styled.ul`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  liststyle: none;
  padding: 0;

  li {
    margin-bottom: 1rem;
    font-weight: 500;
  }

  a {
    color: var(--primary-900);
  }
`;
