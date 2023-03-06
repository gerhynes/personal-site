import ProjectPreview from "../components/projectPreview";
import { getAllProjects, Project } from "../lib/mdxUtils";

type ProjectsPageProps = {
  projects: Project[];
};

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <div className="my-8">
      <h1 className="mb-8 text-center font-serif text-2xl font-bold sm:text-3xl lg:text-4xl">
        Personal Projects
      </h1>
      <div id="projectsGrid">
        {projects.map((project) => (
          <ProjectPreview key={project.data.title} frontmatter={project.data} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const projects = getAllProjects();

  return { props: { projects } };
}
