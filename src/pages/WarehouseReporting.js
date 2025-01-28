import final from "../media/reporter-final.png";

const WarehouseReporting = () => {
  return (
    <div className="page-wrap">
      <h1 className="project-title">Warehouse Employee Performance Reporter</h1>
      <img src={final} />
      <div className="content-block">
        <h2>Background</h2>
        <p>
          The warehouse team had been relying on a manual process to track
          employee performance, entering data into spreadsheets and using Google
          Looker to visualise it. However, their system lacked the granularity
          needed to make informed decisions, especially around employee
          productivity trends. The managers wanted not only daily reports but
          insights into performance on an hourly and even minute-by-minute
          basis.
        </p>
        <p>
          Recognising the inefficiencies in this approach, I proposed building
          an in-house performance tracking system that would automate data
          collection and provide the granularity they needed. This solution
          would streamline the tracking process, making it easier for warehouse
          managers to monitor performance in real time and respond to
          productivity trends more effectively.
        </p>
      </div>

      <div className="content-block">
        <h2>Introduction</h2>
        <p>
          This case study outlines the strategy developed to enhance the
          warehouse team’s ability to track employee productivity with precision
          and reliability. The goal was to transition from manual processes to
          an automated system that delivers actionable insights, enabling
          warehouse managers to make timely and informed decisions.
        </p>
      </div>

      <div className="content-block">
        <h2>Research and Discovery</h2>
        <p>
          To understand the challenges faced by the warehouse team, I conducted
          a series of interviews with managers and shadowed their workflow to
          observe the current processes in action. Key insights included:
        </p>
        <ul>
          <li>
            <strong>Data Entry Bottlenecks:</strong> Manual data entry was
            time-consuming and prone to errors.
          </li>
          <li>
            <strong>Lack of Granular Insights:</strong> The existing tools only
            provided daily performance data, which limited the ability to
            identify productivity trends during specific hours.
          </li>
          <li>
            <strong>Operational Blind Spots:</strong> Managers were unable to
            pinpoint when and why productivity dips occurred.
          </li>
        </ul>
      </div>

      <div className="content-block">
        <h2>Goals and Objectives</h2>
        <ul>
          <li>
            <strong>Automated Data Collection:</strong> Replace manual entry
            with real-time backend integration.
          </li>
          <li>
            <strong>Detailed Analytics:</strong> Provide granular insights into
            employee performance at daily, hourly, and minute levels.
          </li>
          <li>
            <strong>Improved Decision-Making:</strong> Equip managers with
            actionable data to address productivity challenges.
          </li>
        </ul>
      </div>

      <div className="content-block">
        <h2>Collaboration</h2>
        <p>
          I worked closely with warehouse managers to gather requirements and
          iterated on prototypes based on their feedback. Collaboration also
          involved backend developers to ensure seamless integration with
          existing systems and data pipelines. Regular check-ins ensured
          alignment with stakeholders’ needs and expectations.
        </p>
      </div>

      <div className="content-block">
        <h2>Suggested Improvements</h2>
        <ul>
          <li>
            <strong>Automated Reporting:</strong> Replacing manual data entry
            with backend integration to reduce errors and save time.
          </li>
          <li>
            <strong>Accordion-Style Cards:</strong> Presenting employee
            performance summaries with expandable details for hourly and
            minute-level granularity.
          </li>
          <li>
            <strong>Real-Time Tracking:</strong> Enabling managers to monitor
            performance trends as they occur.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> Designing a clean layout
            for quick access to key metrics.
          </li>
        </ul>
      </div>
      <div className="content-block">
        <h2>Challenges and Solutions</h2>
        <p>
          <strong>Integration with Existing Systems:</strong> Ensuring seamless
          integration with the warehouse’s current software required close
          coordination with backend developers. We established a robust API
          pipeline for real-time data synchronisation.
        </p>
        <p>
          <strong>Balancing Simplicity with Depth:</strong> The need to provide
          detailed insights without overwhelming users was addressed through the
          accordion-style card design, which presents data progressively.
        </p>
      </div>
      <div className="content-block">
        <h2>Design Decisions</h2>
        <p>
          The interface was designed to prioritise both usability and
          functionality. Key design choices included:
        </p>
        <ul>
          <li>
            <strong>Accordion-Style Cards:</strong> Allowing managers to view
            high-level summaries at a glance and expand for detailed hourly and
            minute-by-minute data.
          </li>
          <li>
            <strong>Real-Time Visualisation:</strong> Using dynamic charts and
            tables to provide immediate feedback on performance trends.
          </li>
          <li>
            <strong>Responsive Design:</strong> Ensuring accessibility across
            devices, from desktops to tablets used on warehouse floors.
          </li>
        </ul>
      </div>

      <div className="content-block">
        <h2>Impact</h2>
        <p>
          The Warehouse Employee Performance Reporter significantly improved
          productivity tracking and decision-making. Key outcomes included:
        </p>
        <ul>
          <li>
            <strong>Error Reduction:</strong> Eliminated manual data entry
            errors, saving an estimated 10 hours weekly.
          </li>
          <li>
            <strong>Real-Time Insights:</strong> Enabled managers to identify
            and address productivity dips as they occurred.
          </li>
          <li>
            <strong>Enhanced Efficiency:</strong> Streamlined workflows,
            allowing managers to focus on strategic decisions rather than
            administrative tasks.
          </li>
        </ul>
      </div>

      <div className="content-block">
        <h2>Future Considerations</h2>
        <p>
          Future enhancements include the development of Employee Profiles,
          which will store detailed performance metrics, averages, and
          personalised reports. Additionally, predictive analytics could be
          introduced to forecast productivity trends and proactively address
          potential issues.
        </p>
      </div>
    </div>
  );
};

export default WarehouseReporting;
