import ContentBlock from "../../components/ContentBlock";
import TextBlock from "../../components/TextBlock";

const UsabilitySurvey = () => {
  return (
    <>
      <ContentBlock>
        <TextBlock
          heading="Introduction
          "
          text={
            <p>
              After conducting a vast amount of usability calls and sessions, I
              still felt there were areas with missing information. Therefore I
              decided to conduct a survey with Typeform. This would ensure that
              all required pieces I was not able to capture in the initial
              calls, could be produced.
              <br />
              <br />
              Particularly because I realised many people are not comfortable in
              a speaking environment and prefer non-human interaction while
              giving unfiltered feedback.
            </p>
          }
        />
      </ContentBlock>

      <ContentBlock>
        <TextBlock
          heading="Why Tyoeform?
          "
          text={
            <p>
              I've loved Typeform ever since I stumbled across it years ago.
              It's interface, features, and customisability is seamless across
              the board.
              <br />
              <br />
              It was especially effective for this project as I needed to
              present questions to users' based on their department. Typeform
              provides integrated logic which means users only see questions
              which concern them. Removing the requirement to skip.
            </p>
          }
        />
      </ContentBlock>

      <ContentBlock>
        <TextBlock
          text={
            <p>
              I targeted a total of 10 departments, which allowed for varied
              responses. Each question was similar to those already asked in the
              usability sessions.
            </p>
          }
        />
        <TextBlock
          text={
            <p>
              I kept the questions succinct and easy to understand, while
              providing visual aids for reference. Mirroring the usability
              calls.
            </p>
          }
        />
      </ContentBlock>

      <ContentBlock>
        <TextBlock
          heading="Results"
          text={
            <p>
              I received 35 results in total. Which was fantastic in addition to
              the usability sessions conducted. The variety of qualitative and
              quantitative questions allowed me to evaluate some responses at a
              glance, while still receiving some in-depth responses where
              needed.
            </p>
          }
        />
      </ContentBlock>
    </>
  );
};

export default UsabilitySurvey;
