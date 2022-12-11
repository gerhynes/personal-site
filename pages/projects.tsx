import ProjectPreview from "../components/projectPreview";
import { getAllProjects, Project } from "../lib/mdxUtils";

interface ProjectsPageProps {
  projects: Project[];
}

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <>
      <h1 className="mb-4 text-center font-serif text-2xl font-bold sm:text-3xl lg:text-4xl">
        Projects
      </h1>
      {projects.map((project) => (
        <ProjectPreview key={project.data.title} frontmatter={project.data} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const projects = getAllProjects();

  return { props: { projects } };
}
