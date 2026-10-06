"use client";
import { useState, useEffect, type FC } from "react";
import CardProject from "@/components/Card/card-project";
import { Reveal } from "@/components";
import FeaturedProject from "./FeaturedProject";
import { projects } from "@/utils/datas";

const FEATURED_NAMES = ["STUD", "Purrstation"];

const ListProject: FC = () => {
  const [numToShow, setNumToShow] = useState(6);
  const [loading, setLoading] = useState([]);

  const featured = projects.filter((project) =>
    FEATURED_NAMES.includes(project.name)
  );
  const rest = projects
    .filter((project) => !FEATURED_NAMES.includes(project.name))
    .sort((a, b) => (a.id < b.id ? 1 : -1));

  const handleShowMore = () => {
    setNumToShow(numToShow + 6);
  };

  useEffect(() => {
    if (numToShow > rest.length) {
      setNumToShow(rest.length);
    }
  }, [numToShow, rest.length]);

  const shouldShowMore = () => {
    return numToShow < rest.length;
  };

  const handleShowLess = () => {
    setNumToShow(6);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-14 flex w-full flex-col gap-14 lg:gap-20">
        {featured.map((project, index) => (
          <FeaturedProject
            key={project.id}
            project={project}
            flip={index % 2 === 1}
            index={index}
          />
        ))}
      </div>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {rest.slice(0, numToShow).map((data, index) => (
          <Reveal key={data.id} delay={Math.min((index % 6) * 0.05, 0.25)}>
            <CardProject
              loading={loading[index]}
              setLoading={(value) => {
                setLoading((prevLoading) => {
                  const newLoading = [...prevLoading];
                  newLoading[index] = value;
                  return newLoading;
                });
              }}
              name={data.name}
              github={data.repo}
              web={data.web}
              image={data.image}
              desc={data.desc}
              stack={data.stack}
              gif={data.gif}
            />
          </Reveal>
        ))}
      </div>
      <button
        onClick={shouldShowMore() ? handleShowMore : handleShowLess}
        className="btn-secondary mt-14"
      >
        {shouldShowMore() ? "Show More" : "Show Less"}
      </button>
    </div>
  );
};

export default ListProject;
