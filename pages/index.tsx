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
          <div className="mx-auto mt-24 max-w-2xl lg:max-w-5xl">
            <div className="mb-6 flex items-center justify-center">
              <div className="h-44 w-44">
                <Image
                  className="rounded-full"
                  src={portrait}
                  alt="Gerard Hynes"
                  placeholder="blur"
                />
              </div>
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Hi, I'm Gerard
            </h1>
            <p className="mb-6 text-lg leading-7 text-slate-700">
              I'm a software engineer based in Galway. I currently work on
              real-time data reporting with Scala, Kafka, and Kubernetes.
            </p>
            <Socials />
          </div>
        </div>
        <section className="mt-10 py-8" id="dnd">
          <h2 className="mb-4 font-serif text-3xl font-bold text-slate-900">
            Roll Playing with Friends
          </h2>
          <p className="text-lg text-slate-700">
            I'm currently involved in two Dungeons and Dragons groups: one as a
            player, the other as a rotating DM.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
            {dndCampaigns.map((campaign) => (
              <DndCampaign campaign={campaign} key={campaign.name} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
