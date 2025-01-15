import final from "../media/notes-final.png";
const Notes = () => {
  return (
    <div className="page-wrap">
      <h1 className="project-title">Enhancing the VIEW Notes Screen</h1>

      <img src={final} className="final" />

      <div className="content-block">
        <h2>Background</h2>
        <p>
          The Notes screen is a crucial tool used by multiple departments within
          the business, including finance, warehouse, and logistics teams. It
          allows users to add important information to jobs, ensuring visibility
          across departments. However, research conducted revealed issues with
          organization, the ease of finding relevant information, and user
          visibility within the screen.
        </p>
      </div>

      <div className="content-block">
        <h2>Introduction</h2>
        <p>
          This case study outlines the strategy developed to improve the user
          experience of VIEW’s Notes screen. The primary goal was to address key
          pain points, such as information overload and difficulty in searching
          for specific notes. By enhancing organization, introducing intuitive
          features, and streamlining user interactions, the solution aimed to
          improve work efficiency, user satisfaction, and ultimately save time
          across departments.
        </p>
        <p>
          The Notes screen was described as "overwhelming" during usability
          sessions, so the redesign needed to focus on making the area feel more
          welcoming and user-friendly without losing the familiar layout. This
          refresh emphasizes simplicity and efficiency while maintaining the
          screen’s core functionality.
        </p>
      </div>

      <div className="content-block">
        <h2>Goals and Objectives</h2>
        <p>
          The main objectives for the enhancement of the Notes screen included:
        </p>
        <ul>
          <li>
            Improved organization: Empowering users to quickly find what they
            need by making the screen more organized and intuitive.
          </li>
          <li>
            Semantic notes: Notes should have specific purposes, improving their
            relevance and usability.
          </li>
          <li>
            More legible interface: The interface should be clearer and easier
            to navigate.
          </li>
          <li>
            User availability visibility: Show when users are available or out
            of the office.
          </li>
          <li>
            Search and filter capabilities: Users need the ability to filter
            through notes effectively to find the information they need.
          </li>
        </ul>
      </div>

      <div className="content-block">
        <h2>Suggested Improvements</h2>
        <p>
          To address the pain points identified through research and feedback,
          the following improvements were proposed:
        </p>
        <ul>
          <li>
            Note templates: Important updates, such as shipping or carrier
            issues, were often lost in a sea of free-text notes. By introducing
            templates for common types of updates, we could categorize notes and
            make them easier to search.
          </li>
          <li>
            Whitespace: Adding more whitespace would make the screen easier on
            the eyes, particularly since it was text-heavy.
          </li>
          <li>
            Sidekick AI assistant: The AI assistant, called Sidekick, felt
            static and easily overlooked. The plan was to make it feel more
            dynamic and integrated into the overall experience.
          </li>
          <li>
            Progressive disclosure: To reduce the overwhelming nature of the
            screen, only the original note would be shown initially, with the
            option to show or hide replies.
          </li>
          <li>
            Acknowledgements: Instead of users adding redundant comments like
            “Thank you” or “Okay,” a set of emojis would allow quick reactions
            to notes without cluttering the screen.
          </li>
          <li>
            Filtering functionality: A better way to search and filter through
            hundreds of notes was needed. Pre-set filters, such as "read" or
            "unread" notes, would significantly improve navigation.
          </li>
          <li>
            Username highlighting: Differentiating tagged usernames from regular
            text would help users easily identify who was involved in the note
            and what information was being shared.
          </li>
          <li>
            Avatars with status: Avatars would show whether a user was in or out
            of the office, reducing the issue of missed communication.
          </li>
        </ul>
      </div>

      <div className="content-block">
        <h2>Design Decisions</h2>
        <p>
          To address the user pain points identified in the research and UX
          audit, several design decisions were made:
        </p>
        <ul>
          <li>
            Note templates were introduced to give a structured approach to
            adding information, ensuring each note has a clear purpose and can
            be easily filtered.
          </li>
          <li>
            Whitespace was added to create a less cluttered interface, making
            the screen more digestible and less overwhelming.
          </li>
          <li>
            The Sidekick AI assistant was redesigned to feel more alive and
            dynamic, ensuring it stood out more on the screen.
          </li>
          <li>
            Progressive disclosure was implemented to allow users to focus only
            on essential information at first, with the option to dive deeper
            into replies if necessary.
          </li>
          <li>
            Acknowledgements were added to replace redundant comments, enabling
            users to react quickly using emojis, saving time and space.
          </li>
          <li>
            A filtering system was introduced to help users search through notes
            more efficiently by using preset filters like "read" and "unread."
          </li>
          <li>
            Username highlighting was added to differentiate between tagged
            users and regular text.
          </li>
          <li>
            Avatars with status indicators were introduced to show whether users
            were available or out of the office, making it easier to direct
            communication to the right person.
          </li>
        </ul>
      </div>

      <div className="content-block">
        <h2>Conclusion</h2>
        <p>The refresh of</p>
      </div>
    </div>
  );
};

export default Notes;
