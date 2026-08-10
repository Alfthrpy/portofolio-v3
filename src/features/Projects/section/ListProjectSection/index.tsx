"use client";
import { useState, useEffect, type FC } from "react";
import CardProject from "@/components/Card/card-project";
import { Reveal, TiltCard } from "@/components";
import { projects } from "@/utils/datas";

const ListProject: FC = () => {
  const [numToShow, setNumToShow] = useState(6);
  const [loading, setLoading] = useState([]);

  const dataArray = Object.keys(projects).map((key) => {
    return { id: key, ...projects[key] };
  });

  const sortedData = [...dataArray].sort((a, b) => (a.id < b.id ? 1 : -1));

  const handleShowMore = () => {
    setNumToShow(numToShow + 6);
  };

  useEffect(() => {
    if (numToShow > sortedData.length) {
      setNumToShow(sortedData.length);
    }
  }, [numToShow, sortedData.length]);

  const shouldShowMore = () => {
    return numToShow < sortedData.length;
  };

  const handleShowLess = () => {
    setNumToShow(6);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5 xl:grid-cols-3">
        {sortedData.slice(0, numToShow).map((data, index) => (
          <Reveal key={data.id} delay={Math.min((index % 6) * 0.05, 0.25)}>
            <TiltCard className="cursor-pointer transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(95,212,255,0.25)]">
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
            </TiltCard>
          </Reveal>
        ))}
      </div>
      <button
        onClick={shouldShowMore() ? handleShowMore : handleShowLess}
        className="rounded-lg border-2 border-accent px-7 py-4 font-mono text-accent transition-[background-color,transform] duration-300 hover:bg-accent hover:bg-opacity-10 active:scale-[0.96]"
      >
        {shouldShowMore() ? "Show More" : "Show Less"}
      </button>
    </div>
  );
};

export default ListProject;
