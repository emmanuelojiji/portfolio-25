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

      <ContentBlock>
        <TextBlock
          heading="Whitesapce"
          text={
            <p>
              Whitespace is an effective approach to creating an easier feel on
              the eyes, particularly with a text heavy interface.
            </p>
          }
        />
      </ContentBlock>

      <ContentBlock>
        <TextBlock
          heading="Progressive Disclosure
          "
          text={
            <p>
              In order to achieve a less overwhelming screen, only the original
              note will be shown. The user will have the option to show / hide
              replies at their discretion. This will ensure more focus and less
              obligation to take in every piece of information simultaneously.
            </p>
          }
        />
      </ContentBlock>

      <ContentBlock>
        <TextBlock
          heading="Acknowledgements
          "
          text={
            <p>
              In a bid to reduce redundant comments and keep the notes area
              compact, Acknowledgements will be implemented to allow users
              “react” to comments with a set of emojis that show
              acknowledgement. Users are currently creating notes such as “Thank
              you” and “Okay”, this is unnecessary and can be substituted with a
              thumbs up, heart, or hand raised emoji.
            </p>
          }
        />
      </ContentBlock>

      <ContentBlock>
        <TextBlock
          heading="Filtering
          "
          text={
            <p>
              There needs to be an effective approach to give users the ability
              to query existing notes. If there are 1000 notes against a job and
              a user wants to see notes which match a specific condition,
              manually searching through this is unmanageable and
              time-consuming. Providing the user with preset filters can solve
              this issue. This can include but not be limited to read and
              unread.
            </p>
          }
        />
      </ContentBlock>

      <ContentBlock>
        <TextBlock
          heading="User Availability
          "
          text={
            <p>
              Avatars should have an indication on whether or not a user is in
              or out of the office. This could be communicated by a tick or
              cross icon. Accompanied by a tooltip for further context. This
              information will be retrieved from Bamboo HR. This solution will
              allow VIEW users direct information to another user who can pick
              it up. Eradicating the current problem of missed communication.
            </p>
          }
        />
      </ContentBlock>
    </div>
  );
};

export default NotesDocument;
