import Image from "next/image";

type ProjectProps = {
  frontmatter: any;
  children: React.ReactNode;
};

function Project({ frontmatter, children }: ProjectProps) {
  return (
    <div>
      <h2 className="py-8 font-serif text-2xl font-bold sm:text-3xl lg:text-4xl">
        {frontmatter.title}
      </h2>
      <div className="mb-4">
        <Image
          src={frontmatter.image}
          alt={frontmatter.title}
          width="1898"
          height="923"
        />
      </div>
      <span>{new Date(frontmatter.date).toLocaleDateString()}</span>
      <div className="prose prose-slate mx-auto mt-4 prose-headings:font-serif lg:prose-lg">
        {children}
      </div>
    </div>
  );
}
export default Project;
