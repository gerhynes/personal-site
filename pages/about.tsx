import Image from "next/image";
import portrait from "../public/images/portrait.jpg";

function About() {
  return (
    <div className="prose prose-slate mx-auto my-8 py-4 lg:prose-lg">
      <h1 className="mb-8 text-center font-serif text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
        A bit about me
      </h1>
      <div className="flex justify-center sm:float-right sm:ml-4 sm:mb-4">
        <Image
          className="rounded-lg"
          src={portrait}
          alt="Gerard Hynes"
          placeholder="blur"
        />
      </div>
      <p>
        Hi, I'm Gerard. I'm a software engineer, former English teacher, and big
        nerd.
      </p>
      <p>
        In 2017 I decided to learn to code. After a few years cramming in study
        around work, I bit the bullet, did a Higher Diploma in Software Design
        and Development, and landed a software development internship. That led
        to my first software engineering role.
      </p>
      <p>
        These days my professional work focuses on real-time data reporting
        microservices with Scala, Kafka, and Kubernetes.
      </p>
      <p>
        I've written tutorials for{" "}
        <a href="https://www.freecodecamp.org/news/author/gerardhynes/">
          freeCodeCamp
        </a>{" "}
        on topics from Kafka to PostgreSQL.
      </p>
      <p>
        JavaScript was the first programming langauge I learned and I still love
        it. When I can, I enjoy building sites and apps with the{" "}
        <a href="https://jamstack.org/">Jamstack</a>. If you're wondering, this
        is a <a href="https://github.com/gerhynes/personal-site">Next.js</a>{" "}
        site.
      </p>
      <p>
        I love fantasy and science fiction, once did a PhD on J.R.R. Tolkien,
        and enjoy playing tabletop role-playing games with my friends and
        family. If you ever meet me, online or offline, labhair Gaeilge liom 👋.
      </p>
    </div>
  );
}
export default About;
