export const ContentOrganization = () => {
  const datas = [
    {
      title: "Pers Division",
      url: "https://www.instagram.com/himaja_uinsgd/d",
      organization: "HIMAJA Ma'had Al-Jami'ah UIN BANDUNG",
      date: "September 2022 - July 2023",
      description: (
        <>
          <li>
          As a member of the Press Division in our organization, I am responsible for communicating our activities and achievements to the public. I focus on creating engaging content that informs and inspires our audience. My role allows me to enhance my writing skills, collaborate with a dynamic team, and contribute to building our organization’s brand and visibility.
          </li>
        </>
      ),
    },
    {
      title: "Member of Salman Digital Lab",
      url: "https://www.instagram.com/kaderisasisalman/",
      organization: "BMKA",
      date: "July 2023 - January 2024",
      description: (
        <>
          <li>
          As a member of Salman Digital Lab, I have the opportunity to deepen my knowledge of web development. Here, I engage in hands-on projects and collaborate with fellow members, enhancing my skills in programming and UI design. The lab provides a supportive environment for learning and innovation, allowing me to explore the latest technologies and trends in the digital space.
          </li>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-8 text-primary">
      {datas.map((data, index) => (
        <div key={index}>
          <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
            {data.title}
            <span className="text-base text-accent">
              {" "}
              @
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="text-underline"
              >
                {data.organization}
              </a>
            </span>
          </h3>
          <p className="pb-5 font-mono text-sm lg:text-base">{data.date}</p>
          <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
            {data.description}
          </ul>
        </div>
      ))}
    </div>
  );
};
