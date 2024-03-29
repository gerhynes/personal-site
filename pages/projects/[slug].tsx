import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Project from "../../components/project";
import { getProjectBySlug, getAllProjectSlugs } from "../../lib/mdxUtils";
import MDXImage from "../../components/mdxImage";

type ProjectPageProps = {
  source: MDXRemoteSerializeResult;
};

const components = {
  img: (props: any) => <MDXImage {...props} />,
};

function ProjectPage({ source }: ProjectPageProps) {
  return (
    <>
      <Project frontmatter={source.frontmatter}>
        <MDXRemote {...source} components={components} />
      </Project>
    </>
  );
}

export default ProjectPage;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const project = getProjectBySlug(params.slug);

  const mdxSource = await serialize(project, {
    parseFrontmatter: true,
  });
  return { props: { source: mdxSource } };
}

export async function getStaticPaths() {
  const slugs = getAllProjectSlugs();

  const paths = slugs.map((slug: string) => {
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
