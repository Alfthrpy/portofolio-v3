"use client";

import React, { FC, useState } from "react";
import { ContentCertification } from "./content-certification";
import { ContentEducation } from "./content-education";
import { ContentAward } from "./content-awards";
import { ContentOrganization } from "./content-organization";
import { ContentWorkExperience } from "./content-work-experience";
import { Reveal } from "@/components";

const ExperienceSection: FC = () => {
  const [activeCategory, setActiveCategory] = useState("education");

  let selectedContent;

  if (activeCategory === "education") {
    selectedContent = <ContentEducation />;
  } else if (activeCategory === "organizations") {
    selectedContent = <ContentOrganization />;
  } else if (activeCategory === "awards") {
    selectedContent = <ContentAward />;
  } else if (activeCategory === "certification") {
    selectedContent = <ContentCertification />;
  }

  const categories = [
    { name: "Education", value: "education" },
    { name: "Organizations", value: "organizations" },
    { name: "Awards", value: "awards" },
    { name: "Certification", value: "certification" },
  ];

  return (
    <section className="pt-[100px] pb-[50px] lg:pb-[60px]">
      <div className="flex flex-col items-center justify-center gap-5 pb-32">
        <Reveal className="mb-5 flex w-full max-w-3xl items-center justify-start gap-4">
          <h1 className="text-xl font-semibold text-secondary md:text-2xl">
            My Experience
          </h1>
          <div className="h-[1px] w-32 bg-border_col md:w-96"></div>
        </Reveal>
        <Reveal
          delay={0.08}
          className="flex w-full max-w-3xl flex-col items-stretch gap-5 md:flex-row md:items-start md:gap-8"
        >
          <div className="flex w-full flex-row gap-1 overflow-x-auto font-mono text-sm text-primary md:w-auto md:flex-col md:overflow-visible">
            {categories.map((category) => (
              <button
                className={`w-auto whitespace-nowrap rounded-lg px-4 py-3 text-start text-xs transition-all duration-300 hover:bg-accent/10 hover:text-accent md:px-5 md:py-3 md:text-base ${
                  activeCategory === category.value
                    ? "bg-accent/10 text-accent"
                    : ""
                }`}
                onClick={() => setActiveCategory(category.value)}
                key={category.value}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="h-[480px] w-full max-w-[600px] overflow-auto">
            {selectedContent}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ExperienceSection;
