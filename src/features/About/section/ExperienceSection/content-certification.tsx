import { useState } from "react";

export const ContentCertification = () => {
  const [hover, setHover] = useState([]);

  const vendorList = [
    {
      type: "Course",
      name: "Dicoding",
      link: "https://www.dicoding.com",
      certificate: [
        {
          name: "Java Beginner",
          link: "https://www.dicoding.com/certificates/JMZV32KQRPN9",
        },
        {
          name: "Beginner Machine Learning Engineer",
          link: "https://www.dicoding.com/certificates/2VX3OJE7VZYQ",
        },
        {
          name: "Learn the Basics of Data Visualization",
          link: "https://www.dicoding.com/certificates/JLX1W7QWGP72",
        },
        {
          name: "Python Beginner",
          link: "https://www.dicoding.com/certificates/GRX52D802X0M",
        },
      ],
    },
    {
      type: "Course",
      name: "Kaggle",
      link: "https://www.kaggle.com/",
      certificate: [
        {
          name: "Python",
          link: "https://www.kaggle.com/learn/certification/alfthrpy/python",
        },
        {
          name: "Introduction to Machine Learning",
          link: "https://www.kaggle.com/learn/certification/alfthrpy/intro-to-machine-learning",
        },
        {
          name: "Pandas Python",
          link: "https://www.kaggle.com/learn/certification/alfthrpy/pandas",
        },
        {
          name: "Intermediate Machine Learning",
          link: "https://www.kaggle.com/learn/certification/alfthrpy/intermediate-machine-learning",
        },
        {
          name: "Data Visualization",
          link: "https://www.kaggle.com/learn/certification/alfthrpy/data-visualization",
        },
        {
          name: "Feature Engineering",
          link: "https://www.kaggle.com/learn/certification/alfthrpy/feature-engineering",
        },
        {
          name: "Introduction to Deep Learning",
          link: "https://www.kaggle.com/learn/certification/alfthrpy/intro-to-deep-learning",
        },
      ],
    },
    {
      type: "Course",
      name: "FreeCodeCamp",
      link: "https://www.freecodecamp.org",
      certificate: [
        {
          name: "Responsive Web Design",
          link: "https://www.freecodecamp.org/certification/fccd895ee9e-97f3-4be1-8665-c3385f3fb338/responsive-web-design",
        },
        {
          name: "Javascript Algorithms and Data Structures",
          link: "https://www.freecodecamp.org/certification/fccd895ee9e-97f3-4be1-8665-c3385f3fb338/javascript-algorithms-and-data-structures-v8",
        },
        {
          name: "Backend Development and APIs",
          link: "https://www.freecodecamp.org/certification/fccd895ee9e-97f3-4be1-8665-c3385f3fb338/back-end-development-and-apis",
        },
      ],
    },
  ];

  return (
    <div className="cursor-default text-primary">
      {vendorList.map((vendor, index) => {
        return (
          <div key={index}>
            <h3 className="pb-3 text-lg font-medium leading-loose text-secondary md:text-xl">
              {vendor.type}
              <span className="text-base text-accent">
                {" "}
                @
                <a
                  href={vendor.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-underline"
                >
                  {vendor.name}
                </a>
              </span>
            </h3>
            <ul className="flex list-inside list-disc flex-col gap-4 pb-5 text-sm leading-relaxed lg:text-base">
              {vendor.certificate.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="static  items-center justify-start transition-all duration-300 hover:text-accent md:inline-flex"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
