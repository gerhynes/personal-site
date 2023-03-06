import type { NextPage } from "next";
import Image from "next/image";
import portrait from "../public/images/portrait.jpg";
import Socials from "../components/socials";
import DndCampaign from "../components/dndCampaign";
import dndCampaigns from "../data/dndCampaigns.json";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mt-12 max-w-2xl lg:max-w-5xl">
            <div className="mb-12 flex items-center justify-center">
              <div className="h-44 w-44">
                <Image
                  className="rounded-full"
                  src={portrait}
                  alt="Gerard Hynes"
                  placeholder="blur"
                />
              </div>
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Hi, I'm Gerard
            </h1>
            <p className="mb-2 text-lg leading-7 text-slate-700 dark:text-slate-300">
              I'm a software engineer, former English teacher, and big nerd.
            </p>
            <p className="mb-6 text-lg leading-7 text-slate-700 dark:text-slate-300">
              My professional work focuses on real-time data reporting
              microservices with Scala, Kafka, and Kubernetes.
            </p>
            <Socials />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
