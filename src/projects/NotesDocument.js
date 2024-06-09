import "../components/ContentBlock.js";
import ContentBlock from "../components/ContentBlock.js";
import TextBlock from "../components/TextBlock.js";

const NotesDocument = () => {
  return (
    <div className="NotesDocument">
      <ContentBlock>
        <TextBlock
          heading="Background"
          text={
            <p>
              The Notes screen is an area utilised by various departments across
              the business. It allows users to place important information
              against jobs, for the visibility of other staff members. e.g
              finance, warehouse and logistics. Research conducted highlighted
              the lack of organisation, ease of finding information, and
              visibility of user availability within this screen.
            </p>
          }
        />
      </ContentBlock>

      <ContentBlock>
        <TextBlock
          heading="Introduction"
          text={
            <p>
              The purpose of this document is to outline the product strategy
              for enhancing the user experience of VIEW’s notes screen. With the
              varying levels of workload that require visibility, it’s important
              that users can find information about a job quickly and
              efficiently. This strategy aims to improve user satisfaction by
              addressing key pain points and introducing user friendly methods
              which in turn will improve work speed and save business hours.
              <br></br>
              <br></br>
              It’s important we understand that this screen has been considered
              “overwhelming” based on usability sessions and the survey
              conducted. Therefore, all design decisions should be made with the
              intent of making this area feel more welcoming and less intense.
              <br></br>
              <br></br>
              As this is a refresh, and not a complete redesign - this area
              should still feel familiar to users.
            </p>
          }
        />
      </ContentBlock>

      <ContentBlock>
        <TextBlock
          heading="Goals and Objectives"
          text={
            <ul>
              <li>
                Autonomy over organisation - What does the user deem important
                and how can they find it quickly and easily?
              </li>
              <li>Semantic notes. Post with a purpose.</li>
              <li>Improved and more legible interface</li>
              <li>Visibility on the availability of users</li>
              <li>Search and filtering functionality</li>
            </ul>
          }
        />
      </ContentBlock>

      <h3>The Solution</h3>

      <ContentBlock>
        <TextBlock
          heading="Note Templates"
          text={
            <p>
              Currently, important job updates such as shipping issues, carrier
              issues etc are being lost in the multitude of notes. As opposed to
              free text, note templates will allow users give a semantic meaning
              to each note. This will also feed into filtering for better
              finding of specific note types.
            </p>
          }
        />
      </ContentBlock>
    </div>
  );
};

export default NotesDocument;
