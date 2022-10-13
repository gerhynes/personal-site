import type { NextPage } from "next";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center">
        <h1 className="text-5xl font-bold text-center">Hi, I'm Gerard</h1>
      </div>
    </Layout>
  );
};

export default Home;
