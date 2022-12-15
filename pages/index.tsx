import type { NextPage } from "next";
import Image from "next/image";
import portrait from "../public/images/portrait.jpg";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

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

                <div className="flex gap-6">
                  <a
                    className="group -m-1 p-1"
                    aria-label="Twitter"
                    href="https://twitter.com/Gerard_K_Hynes"
                  >
                    <FaTwitter
                      className="h-6 w-6 fill-slate-500 transition group-hover:fill-slate-600"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    className="group -m-1 p-1"
                    aria-label="GitHub"
                    href="https://github.com/gerhynes"
                  >
                    <FaGithub
                      className="h-6 w-6 fill-slate-500 transition group-hover:fill-slate-600"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    className="group -m-1 p-1"
                    aria-label="LinkedIn"
                    href="https://www.linkedin.com/in/hynesgk/"
                  >
                    <FaLinkedin
                      className="h-6 w-6 fill-slate-500 transition group-hover:fill-slate-600"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
