import Image from "next/image";
import portrait from "../public/images/portrait.jpg";

function About() {
  return (
    <div className="prose prose-slate mx-auto py-4 lg:prose-lg">
      <h1 className="text-center font-serif text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
        About
      </h1>
      <p>Hi, I'm Gerard.</p>
      <p>I'm a self-taught web developer from Ireland.</p>
      <p>
        I've spent the last couple of years diving into web development, with a
        focus on JavaScript, from frontend frameworks like React to Node on the
        server.
      </p>
      <p>
        Right now, I'm enjoying building fast, flexible sites and apps with the{" "}
        <a href="https://jamstack.org/">Jamstack</a>. In fact,{" "}
        <a href="https://github.com/gerhynes/personal-site">
          this is a Next.js site.
        </a>
      </p>
      <p>Labhair Gaeilge liom 👋.</p>
      <Image
        className="rounded-lg"
        src={portrait}
        alt="Gerard Hynes"
        placeholder="blur"
      />
    </div>
  );
}
export default About;
