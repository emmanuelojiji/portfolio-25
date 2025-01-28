import final from "../media/notes-final.png";
const Notes = () => {
  return (
    <div className="page-wrap">
      <h1 className="project-title">Case Study: Enhancing the Notes Screen for VIEW</h1>

      <div className="content-block">
        <h2>Background</h2>
        <p>
          The Notes screen is an integral feature used by finance, warehouse,
          and logistics teams within the VIEW platform. It provides a shared
          space for adding critical job-related information, ensuring visibility
          across departments. Despite its importance, user research revealed
          significant challenges: information overload, difficulty locating
          relevant details, and poor visibility of user availability.
        </p>
      </div>

      <div className="content-block">
        <h2>Introduction</h2>
        <p>
          This case study delves into the redesign strategy for VIEW’s Notes
          screen, focusing on addressing user pain points such as cluttered
          organization and inefficient search functionality. By prioritizing a
          more intuitive, user-friendly interface, the redesign aims to boost
          productivity and satisfaction while preserving the core functionality
          users rely on.
        </p>
        <p>
          During usability testing, users described the screen as
          "overwhelming," highlighting the need for a welcoming yet efficient
          redesign. The updated interface seeks to achieve simplicity, clarity,
          and a structured workflow.
        </p>
      </div>

      <div className="content-block">
        <h2>Goals and Objectives</h2>
        <ul>
          <li>
            <strong>Improved Organization:</strong> Enable users to locate
            information quickly through a more intuitive layout.
          </li>
          <li>
            <strong>Semantic Notes:</strong> Introduce note types with specific
            purposes to enhance clarity and relevance.
          </li>
          <li>
            <strong>Enhanced Legibility:</strong> Ensure the interface is
            visually clear and easy to navigate.
          </li>
          <li>
            <strong>User Availability Visibility:</strong> Provide a clear
            indicator of user availability to streamline communication.
          </li>
          <li>
            <strong>Advanced Search and Filtering:</strong> Implement robust
            tools for filtering and searching notes.
          </li>
        </ul>
      </div>

      <div className="content-block">
        <h2>Proposed Improvements</h2>
        <h3>1. Note Templates</h3>
        <p>
          Standardized templates for common updates (e.g., shipping issues)
          categorize notes and make them easier to find. Templates reduce
          ambiguity and allow users to quickly identify critical updates.
        </p>

        <h3>2. Whitespace Usage</h3>
        <p>
          Introducing ample whitespace improves readability and reduces visual
          clutter. A cleaner interface makes text-heavy screens more
          approachable and less overwhelming.
        </p>

        <h3>3. Dynamic Sidekick AI Assistant</h3>
        <p>
          The static Sidekick AI was revamped to feel more interactive and
          integrated. Features like proactive suggestions and contextual
          assistance enhance its usefulness.
        </p>

        <h3>4. Progressive Disclosure</h3>
        <p>
          Only the original note is shown by default, with replies hidden unless
          expanded. This approach minimizes cognitive overload while preserving
          access to detailed discussions.
        </p>

        <h3>5. Acknowledgements</h3>
        <p>
          Replacing redundant comments with emoji reactions (e.g., 👍, ✅)
          streamlines responses. This reduces unnecessary clutter and provides
          quick, clear feedback.
        </p>

        <h3>6. Filtering Functionality</h3>
        <p>
          New filters, such as "read" or "unread," allow users to efficiently
          sort through notes. Customizable filters improve the relevance of
          search results.
        </p>

        <h3>7. Username Highlighting</h3>
        <p>
          Highlighting tagged usernames differentiates them from regular text,
          aiding collaboration. This ensures users can quickly identify who is
          involved in specific updates.
        </p>

        <h3>8. Avatars with Status Indicators</h3>
        <p>
          User avatars now display availability (e.g., "in office" or "out of
          office"). This feature helps direct communication to the appropriate
          person, reducing missed updates.
        </p>
      </div>

      <div className="content-block">
        <h2>Design Decisions</h2>
        <p>
          To address these improvements, the following design solutions were
          implemented:
        </p>
        <ul>
          <li>
            <strong>Structured Templates:</strong> Notes are now categorized by
            purpose, making them easier to scan and filter.
          </li>
          <li>
            <strong>Whitespace Integration:</strong> A balanced use of
            whitespace creates a more visually appealing and less overwhelming
            interface.
          </li>
          <li>
            <strong>Enhanced Sidekick AI:</strong> The assistant is now more
            prominent and actively supports users by providing real-time
            suggestions and insights.
          </li>
          <li>
            <strong>Reply Management via Progressive Disclosure:</strong>{" "}
            Collapsed replies keep the focus on key information while enabling
            detailed exploration as needed.
          </li>
          <li>
            <strong>Emoji Acknowledgements:</strong> Quick-reaction emojis save
            time and declutter threads.
          </li>
          <li>
            <strong>Advanced Filters:</strong> Pre-set and customizable filters
            improve search precision and speed.
          </li>
          <li>
            <strong>User Highlighting:</strong> Differentiated tags for
            usernames facilitate collaboration and user recognition.
          </li>
          <li>
            <strong>Availability Avatars:</strong> Status-aware avatars promote
            efficient communication and minimize delays.
          </li>
          Ï
        </ul>
      </div>

      <div className="content-block">
        <h2>Conclusion</h2>
        <p>
          The redesigned Notes screen prioritizes organization, clarity, and
          functionality, addressing user pain points while maintaining
          familiarity. By implementing these improvements, VIEW ensures that its
          Notes screen continues to be an indispensable tool for its finance,
          warehouse, and logistics teams. The focus on simplicity and efficiency
          empowers users to manage information effectively, fostering better
          collaboration and saving valuable time across departments.
        </p>
      </div>
    </div>
  );
};

export default Notes;
