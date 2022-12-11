import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Post from "../components/post";
import { getPostBySlug, getAllPostSlugs } from "../lib/mdxUtils";

type PostPageProps = {
  source: MDXRemoteSerializeResult;
};

function PostPage({ source }: PostPageProps) {
  return (
    <>
      <Post frontmatter={source.frontmatter}>
        <MDXRemote {...source} />
      </Post>
    </>
  );
}

export default PostPage;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug);

  const mdxSource = await serialize(post, { parseFrontmatter: true });
  return { props: { source: mdxSource } };
}

export async function getStaticPaths() {
  const slugs = getAllPostSlugs();

  const paths = slugs.map((slug) => {
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
