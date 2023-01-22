import Image from "next/image";

type PostProps = {
  frontmatter: any;
  children: React.ReactNode;
};

function Post({ frontmatter, children }: PostProps) {
  return (
    <div>
      <h2 className="py-8 font-serif text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
        {frontmatter.title}
      </h2>
      <div className="mb-4">
        <Image
          src={frontmatter.image}
          alt={frontmatter.title}
          width="1600"
          height="800"
        />
      </div>
      <span className="text-slate-600">
        {new Date(frontmatter.date).toLocaleDateString()}
      </span>
      <div className="prose prose-slate mx-auto mt-4 prose-headings:font-serif lg:prose-lg">
        {children}
      </div>
    </div>
  );
}
export default Post;
