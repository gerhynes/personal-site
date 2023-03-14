import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export type Post = {
  content: string;
  data: {
    [key: string]: any;
  };
};

export type Project = {
  content: string;
  data: {
    [key: string]: any;
  };
};

const postsDirectory = join(process.cwd(), "posts");
const projectsDirectory = join(process.cwd(), "projects");

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getProjectSlugs(): string[] {
  return fs.readdirSync(projectsDirectory);
}

export function getPostBySlug(slug: string): string {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return fileContents;
}

export function getProjectBySlug(slug: string): string {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(projectsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return fileContents;
}

export function getAllPostSlugs(): string[] {
  const slugs = fs.readdirSync(postsDirectory);

  const realSlugs = slugs.map((slug) => slug.replace(/\.mdx$/, ""));

  return realSlugs;
}

export function getAllProjectSlugs(): string[] {
  const slugs = fs.readdirSync(projectsDirectory);

  const realSlugs = slugs.map((slug) => slug.replace(/\.mdx$/, ""));

  return realSlugs;
}

export function getAllPosts(): Post[] {
  const slugs = getAllPostSlugs();

  const postFiles = slugs.map((slug) => getPostBySlug(slug));

  const posts = postFiles.map((post) => {
    const { content, data } = matter(post);
    return {
      content,
      data,
    };
  });

  const sortedPosts = posts.sort(
    (post1, post2) =>
      new Date(post2.data.date).getTime() - new Date(post1.data.date).getTime()
  );

  return sortedPosts;
}

export function getAllProjects() {
  const slugs = getAllProjectSlugs();

  const projectFiles = slugs.map((slug) => getProjectBySlug(slug));

  const projects = projectFiles.map((project) => {
    const { content, data } = matter(project);
    return {
      content,
      data,
    };
  });

  const sortedProjects = projects.sort((project1, project2) =>
    project1.data.date > project2.data.date ? -1 : 1
  );

  return sortedProjects;
}
