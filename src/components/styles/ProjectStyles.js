import styled from "styled-components";

export const ProjectContainerStyles = styled.div`
  margin: 0 1.5rem;
`;

export const ProjectHeadingStyles = styled.h2`
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

export const ProjectLinkStyles = styled.div`
  display: flex;

  a {
    display: inline-flex;
    justify-content: space-between;
    background: var(--primary-800);
    color: #fff;
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    transition: background-color 300ms ease;

    &:hover {
      background-color: var(--primary-900);
    }
  }
`;
