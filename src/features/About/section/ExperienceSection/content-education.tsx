export const ContentEducation = () => {
  return (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Informatics Engineering
        <span className="text-base text-accent">
          {" "}
          @
          <a
            href="https://if.uinsgd.ac.id/"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            Sunan Gunung Jati State Islamic University, Bandung
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">Aug 2020 - Present</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <li>
          I enrolled in the Informatics Engineering program with the motivation
          that commercial jobs would be replaced by technology in the future, so
          I decided to pursue this field of study.
        </li>
        <li>
        From the beginning of the semester, I was interested in AI and machine learning. In the second semester, I had already created a classification model.
        </li>
        <li>
        In my 4th semester, my team and I participated in the <a className="text-accent" href="https://www.iicyms.or.id/">IICYMS competition</a> where we won a gold medal in the computer science category. This achievement deepened my interest and sparked a growing passion for machine learning.
        </li>
      </ul>
    </div>
  );
};
