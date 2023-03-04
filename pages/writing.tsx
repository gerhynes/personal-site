import PostPreview from "../components/postPreview";
import FreeCodeCampPreviews from "../components/freeCodeCampPreviews";
import { getAllPosts, Post } from "../lib/mdxUtils";
import fccPreviews from "../data/fccPreviews.json";
import { FCCPreview } from "../components/freeCodeCampPreviews";

type WritingPageProps = {
  posts: Post[];
  fccPreviews: FCCPreview[];
};

function WritingPage({ posts, fccPreviews }: WritingPageProps) {
  return (
    <div className="my-8">
      <h1 className="mb-8 text-center font-serif text-2xl font-bold sm:text-3xl lg:text-4xl">
        Writing
      </h1>
      <p className="mb-8 px-4 text-lg text-slate-700">
        I write about the things I'm learning in the hope that explaining these
        topics will help me remember them, and maybe help other learners too.
      </p>
      <FreeCodeCampPreviews previews={fccPreviews} />
      <div className="px-4 pt-4">
        <h3 className="mb-2 font-serif text-xl font-semibold sm:text-2xl lg:text-3xl">
          Personal Posts
        </h3>
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

  return { props: { posts, fccPreviews } };
}
