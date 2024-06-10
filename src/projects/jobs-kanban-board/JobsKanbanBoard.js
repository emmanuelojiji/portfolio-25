import ContentBlock from "../../components/ContentBlock";
import TextBlock from "../../components/TextBlock";

const JobsKanbanBoard = () => {
  return (
    <>
      <ContentBlock>
        <TextBlock
          heading="Background"
          text={
            <p>
              The Job Screen is an area which staff use to keep track of the
              status of jobs, end to end.
            </p>
          }
        />
      </ContentBlock>

      <ContentBlock>
        <TextBlock
          heading="The Problem"
          text={
            <p>
              Users felt this screen was too cluttered and they were was no
              visibility of the status / position of a job. The amount of
              information provided was too overwhelming.
            </p>
          }
        />
      </ContentBlock>

      <ContentBlock>
        <TextBlock
          heading="Investigation"
          text={
            <p>
              I sent out emails and call invites to departments that regularly
              interact with this screen. I wanted to investigate the main tasks
              they complete, how they currently complete it, any positives,
              frustrations, limitations and further thoughts.
              <br />
              <br />
              Users felt there were too many elements on this screen, and many
              which they don't use. Their main concern was visibility over the
              status of a job, so they could action any issues.
            </p>
          }
        />
      </ContentBlock>
    </>
  );
};

export default JobsKanbanBoard;
