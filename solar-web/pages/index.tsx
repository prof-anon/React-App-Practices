import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../template/layout/Layout";
import { HomeWrapper } from "../styles/HomeStyles";
import {
  HeadText5,
  NormalText,
  HeadText4,
  HeadText,
} from "../styles/Typography";
const Home: NextPage = () => {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeWrapper>
        <div className="content">
          <HeadText5 className="headtext5" fontweight="400">
            so, you want to travel to
          </HeadText5>
          <HeadText className="headtext" my="1.75rem">
            space
          </HeadText>
          <NormalText className="text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </NormalText>
        </div>
        <button
          className="home-button"
          onClick={() => router.push("/destination")}
        >
          Explore
        </button>
      </HomeWrapper>
    </Layout>
  );
};

export default Home;
