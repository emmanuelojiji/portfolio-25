import final from "../media/usability-calls-final.png";

const UsabilitySession = () => {
  return (
    <div className="page-wrap">
      <h1 className="project-title">VIEW Usability Session</h1>
      <img src={final} />
      <div className="content-block">
        <h2>Background</h2>
        <p>
          VIEW is a warehouse management system used by various departments to
          handle the logistics of job orders. Recently, multiple departments
          expressed frustrations with certain areas of the system, making their
          daily tasks cumbersome. The goal of the session was to identify user
          pain points across different sections of the platform, so we could
          streamline processes and improve overall usability.
        </p>
      </div>

      <div className="content-block">
        <h2>Introduction</h2>
        <p>
          My team and I were tasked with gathering insights from various users
          across the organization to better understand the challenges they were
          facing within the VIEW system. I was specifically responsible for
          engaging with the Global Trade and Sales teams, who handle critical
          elements of the warehouse process.
        </p>
      </div>

      <div className="content-block">
        <h2>Process</h2>
        <p>
          We began by scheduling sessions with each department, sending out
          calendar invites to key staff members. In my introduction, I made it
          clear that our goal was to enhance their workflow by addressing any
          inefficiencies in the software.
        </p>
      </div>

      <div className="content-block">
        <h2>The Calls</h2>
        <p>
          Using Google Meets, I conducted remote usability sessions with
          participants. The focus was on collecting as much candid feedback as
          possible regarding their experience using the warehouse software. I
          began by introducing myself and explaining the broader goals of the
          research—reassuring participants that their honesty, whether positive
          or negative, would help us craft better solutions.
        </p>
        <p>
          Each participant gave a brief overview of their role in the warehouse
          process, which helped me understand their unique workflows and needs.
          They then shared their screens, walking me through the key tasks they
          performed daily. This hands-on approach allowed me to observe
          real-time pain points, which were often reinforced by their
          commentary.
        </p>
      </div>

      <div className="content-block">
        <h2>Post-Call</h2>
        <p>
          All sessions were recorded, and after the calls, I reviewed the
          recordings and documented key findings on a shared Miro board. This
          collaborative space allowed me to work closely with my team,
          identifying "quick wins" that the development team could implement to
          deliver immediate improvements.
        </p>
      </div>

      <div className="content-block">
        <h2>Conclusion</h2>
        <p>
          Overall, the research provided valuable insights into user
          frustrations and areas for improvement, shaping future design and
          development priorities. It was a productive exercise in addressing
          real user needs and refining the VIEW platform.
        </p>
      </div>
    </div>
  );
};

export default UsabilitySession;
