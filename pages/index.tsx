import type { NextPage } from "next";
import Image from "next/image";
import portrait from "../public/images/portrait.jpg";
import Socials from "../components/socials";
import DndCampaign from "../components/dndCampaign";

const Home: NextPage = () => {
  return (
    <main>
      <div className="sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mt-24">
                <div className="mb-6 flex items-center justify-center">
                  <div className="h-36 w-36">
                    <Image
                      className="rounded-full"
                      src={portrait}
                      alt="Gerard Hynes"
                      placeholder="blur"
                    />
                  </div>
                </div>
                <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
                  Hi, I'm Gerard
                </h1>
                <p className="mb-6 text-base leading-7 text-slate-600">
                  I'm a software engineer based in Galway. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Necessitatibus dolor
                  praesentium nihil et perferendis totam minus iure sint quam
                  ducimus autem beatae impedit, ad, molestiae aperiam molestias
                  eius voluptatum architecto?
                </p>
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-10 py-8" id="dnd">
        <h2 className="mb-4 font-serif text-3xl font-bold">
          Roll Playing with Friends
        </h2>
        <p className="text-slate-500">
          I'm currently involved in two Dungeons and Dragons groups: one as a
          player, the other as a rotating DM.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
          <DndCampaign />
          <DndCampaign />
        </div>
      </section>
    </main>
  );
};

export default Home;
