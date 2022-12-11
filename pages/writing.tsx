import PostPreview from "../components/postPreview";
import FreeCodeCampPreviews from "../components/freeCodeCampPreviews";
import { getAllPosts, Post } from "../lib/mdxUtils";

import { FCCPreview } from "../components/freeCodeCampPreviews";

type WritingPageProps = {
  posts: Post[];
  fccPreviews: FCCPreview[];
};

function WritingPage({ posts, fccPreviews }: WritingPageProps) {
  return (
    <div className="my-4">
      <h1 className="mb-4 text-center font-serif text-2xl font-bold sm:text-3xl lg:text-4xl">
        Writing
      </h1>
      <p className="mb-4 px-4 text-lg">
        I write about the things I'm learning in the hope that explaining these
        topics will help me remember them, and maybe help other learners too.
      </p>
      <FreeCodeCampPreviews previews={fccPreviews} />
      <div className="px-4">
        {posts.map((post) => (
          <PostPreview key={post.data.title} frontmatter={post.data} />
        ))}
      </div>
    </div>
  );
}
export default WritingPage;

export async function getStaticProps() {
  const posts = getAllPosts();

  const fccPreviews = [
    {
      title:
        "Learn the Eleventy Static Site Generator by Building and Deploying a Portfolio Website",
      date: "2022-09-06",
      description:
        "Eleventy is a static site generator that uses JavaScript to transform data and templates into HTML pages",
      url: "https://www.freecodecamp.org/news/learn-eleventy/",
    },
    {
      title:
        "How to Manage PostgreSQL Databases from the Command Line with psql",
      date: "2022-06-07",
      description:
        "Now is a great time to learn relational databases and SQL. From web development to data science, they are used everywhere",
      url: "https://www.freecodecamp.org/news/manage-postgresql-with-psql/",
    },
  ];

  return { props: { posts, fccPreviews } };
}
