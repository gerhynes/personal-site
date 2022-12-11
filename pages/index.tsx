import type { NextPage } from "next";
import Image from "next/image";
import portrait from "../public/images/portrait.jpg";
import { FaTwitter, FaGithub } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <>
      <div className="mt-16 flex flex-col items-center justify-center">
        <h1 className="mb-4 text-center font-serif text-5xl font-semibold">
          Hi, I'm Gerard
        </h1>
        <p className="text-lg">I'm a software engineer based in Galway</p>
      </div>
      <div className="flex items-center justify-center py-4">
        <Image
          className="rounded-full"
          src={portrait}
          alt="Gerard Hynes"
          placeholder="blur"
        />
      </div>
      <div className="mx-auto flex">
        <FaTwitter />
        <FaGithub />
      </div>
    </>
  );
};

export default Home;
