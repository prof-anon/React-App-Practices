import {
  HeadText,
  HeadText5,
  NormalText,
  Subheading2,
  Subheading,
} from "../../styles/Typography";
import Layout from "../../template/layout/Layout";
import { SectionWrapper, Wrapper } from "./StyledDestination";
import Image from "next/image";
import { useState } from "react";
import data from "../../store/data.json";

const Destination = ({ datas }: any) => {
  const [index, setIndex] = useState(0);
  const planet = datas[index];
  return (
    <Layout
      img="/assets/destination/background-destination-desktop.jpg"
      text1="01"
      text2="Pick your destination"
    >
      <Wrapper>
        <div className="tab">
          {datas.map(({ name }: any, i: any) => (
            <div className="planet" key={`planet-${i}`}>
              <HeadText5
                className={`planet-text ${i === index ? "active" : "border"}`}
                fontweight="400"
                onClick={() => setIndex(i)}
              >
                {name}
              </HeadText5>
            </div>
          ))}
        </div>

        <SectionWrapper>
          <div className="img">
            <Image
              src={planet.images.png}
              alt={planet.name}
              layout="fill"
              objectFit="contain"
              priority
              quality="50%"
            />
          </div>
          <div className="page">
            <HeadText my="1.75rem" className="main-text">
              {planet.name}
            </HeadText>
            <NormalText className="normal-text">
              {planet.description}
            </NormalText>
            <div className="line"></div>
            <div className="distance">
              <div className="avg-distance">
                <Subheading2 fontweight="400">avg distance</Subheading2>
                <Subheading className="subhead">{planet.distance}</Subheading>
              </div>
              <div className="avg-distance">
                <Subheading2 fontweight="400">est. travel time</Subheading2>
                <Subheading className="subhead">{planet.travel}</Subheading>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </Wrapper>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const datas = await data.destinations;
  return {
    props: {
      datas,
    },
  };
};

export default Destination;