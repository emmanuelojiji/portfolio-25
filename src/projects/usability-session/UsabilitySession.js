import ContentBlock from "../../components/ContentBlock";
import TextBlock from "../../components/TextBlock";
import image_1 from "../usability-session/1.png";

const UsabilitySession = () => {
  return (
    <>
      <ContentBlock>
        <TextBlock
          heading="Background
          "
          text={
            <p>
              VIEW is a warehouse management system which is used by various
              departments to handle the logistics of a job order.
            </p>
          }
        />
      </ContentBlock>

      <ContentBlock>
        <TextBlock
          heading="Introduction
          "
          text={
            <p>
              Multiple departments of the business complained about areas of the
              system which made their job extremely frustrating. It was my team
              & I's responsibility to investigate all issues staff were facing,
              and strive to eradicate these with seamless solutions.
            </p>
          }
        />
      </ContentBlock>

      <ContentBlock>
        <TextBlock
          heading="Process
          "
          text={
            <p>
              The Product team designated themselves specific departments to
              liaise with for these sessions. I was responsible for the Global
              Trade team, as well as Sales.
              <br />
              <br />I sent out bulk calendar invites to staff members in these
              departments, officially introducing myself, and how exactly my
              team and I were there to improve their work processes.
            </p>
          }
        />
      </ContentBlock>

      <ContentBlock>
        <TextBlock
          heading="The Calls
          "
          src={image_1}
          caption="Call in session on Google Meets"
          text={
            <p>
              I wanted to get as much unfiltered information from participants
              as possible. The warehouse software has a vast amount of screens,
              therefore receiving quality responses that would convert was my
              main priority.
              <br />
              <br />
              I started each call with a friendly introduction of myself, and
              the wider objectives my team and I had with transforming the
              current software. I reassured each participant that it was an open
              and unfiltered discussion and told them the more honest they were
              - whether positive or negative - the more I could help them.
              <br />
              <br />
              I asked each participant to to give a brief overview of their role
              and where it fits into the warehouse process. This gave me a more
              solid understanding on their ways of working, as well as ways to
              assist them better.
              <br />
              <br />
              Users' shared their screens and I asked them to complete their
              main day-to-day tasks while walking me through each step. With
              this approach, I was able to visibly witness pain points, and also
              hear it further emphasised by them.
              <br />
              <br />
              Generally, participants were forthcoming with responses and I
              received a variety.
            </p>
          }
        />
      </ContentBlock>

      <ContentBlock>
        <TextBlock
          heading="Post Call
          "
          text={
            <p>
              All sessions were recorded with consent. I re-watched the sessions
              and noted down all findings in a collaborative Miro board shared
              with my team.
              <br />
              <br />
              I was responsible for identifying quick wins which could be
              undertaken by the development team to ensure feedback is actioned
              quickly and users start to see and feel positive changes.
              <br />
              <br />
              Overall, this research was productive and helped to inform further
              design and project pipeline decisions.
            </p>
          }
        />
      </ContentBlock>
    </>
  );
};

export default UsabilitySession;
