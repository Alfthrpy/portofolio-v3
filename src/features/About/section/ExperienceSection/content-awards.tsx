export const ContentAward = () => {
  const datas = [
    {
      title:
        "3rd Place IT Cup IT Fair",
      url: "https://idcamp.ioh.co.id/news/861/coding-scholarship-offline-training-gratis-idcamp-x-kadin",
      organization: "Informatics Engineering UIN Bandung",
      date: "September 2022",
      description: (
        <>
          <li> Won the IT Cup programming competition, selected from numerous participants for my exceptional performance in solving programming problems and case studies. </li> <li> Successfully completed a series of challenging questions that emphasized programming logic and efficient coding practices. </li> <li> Recognized for my ability to apply critical thinking and problem-solving skills effectively during the competition. </li>
        </>
      ),
    },
    {
      title: "3rd Place Hackathon IT Fair",
      url: "https://bdd.kemenparekraf.go.id/",
      organization: "Informatics Engineering UIN Bandung",
      date: "September 2023",
      description: (
        <>
          <li> Won a hackathon focused on web development, where I collaborated with a team to create an innovative solution for a specific problem provided during the event. </li> <li> Designed and implemented a web application that effectively addressed the challenge, showcasing creativity and technical skills. </li> <li> Recognized for my ability to work under pressure and deliver a functional product within a limited timeframe during the competition. </li>
        </>
      ),
    },
    {
      title: "Gold Medal IICYMS Category Computer Science",
      url: "https://www.iysa.or.id/",
      organization: "IYSA",
      date: "August 2024",
      description: (
        <>
        <li> Won the IICYMS competition Gold Medal in the Computer Science category, where my team developed a semantic search engine application for the Quran. </li>
        <li> Collaboratively designed and implemented an innovative solution that enhances users' ability to search and access Quranic content effectively. </li>
        <li> Recognized for our creativity and technical expertise in addressing complex challenges within the project, leading to our success in the competition. </li>
        <li>Link Application : <a className="text-accent" href="https://beta-sequran.vercel.app/">Sequran</a></li>
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
          <ul className="flex list-inside list-disc flex-col gap-2 text-sm leading-relaxed lg:text-base">
            {data.description}
          </ul>
        </div>
      ))}
    </div>
  );
};
