const WarehouseReporting = () => {
  return (
    <div className="page-wrap">
      <h1 className="project-title">Warehouse Employee Performance Reporter</h1>

      <div className="content-block">
        <h2>Project Overview</h2>
        <p>
          The warehouse team had been relying on a manual process to track
          employee performance, entering data into spreadsheets and using Google
          Looker to visualize it. However, their system lacked the granularity
          needed to make informed decisions, especially around employee
          productivity trends. The managers wanted not only daily reports but
          insights into performance on an hourly and even minute-by-minute
          basis.
        </p>
        <p>
          Recognizing the inefficiencies in this approach, I proposed building
          an in-house performance tracking system that would automate data
          collection and provide the granularity they needed. This solution
          would streamline the tracking process, making it easier for warehouse
          managers to monitor performance in real time and respond to
          productivity trends more effectively.
        </p>
      </div>

      <div className="content-block">
        <h2>The Problem</h2>
        <ul>
          <li>
            <strong>Manual Data Entry:</strong> Managers were inputting employee
            data into spreadsheets, a process prone to errors and delays.
          </li>
          <li>
            <strong>Limited Granularity:</strong> The previous system only
            offered daily package reports and lacked detailed insights into
            hourly or minute-based performance.
          </li>
          <li>
            <strong>Visibility Gaps:</strong> Managers needed a way to spot
            trends such as employees slacking during certain hours or leaving
            early, which wasn’t possible with their existing system.
          </li>
        </ul>
      </div>

      <div className="content-block">
        <h2>My Role</h2>
        <p>
          I led the design and development of the Warehouse Employee Performance
          Reporter, working closely with the warehouse managers to understand
          their pain points and the specific insights they required from the
          system.
        </p>
      </div>

      <div className="content-block">
        <h2>The Solution</h2>
        <p>
          I developed an in-house reporting system that automated the data
          collection process, pulling information directly from the backend.
          This allowed managers to track the number of packages employees marked
          as “arrived” at various levels of detail: daily, hourly, and down to
          the minute.
        </p>
        <p>
          The design prioritizes both high-level overviews and granular
          insights. Employee performance is presented through accordion-style
          cards, which provide a quick summary of key metrics at a glance, such
          as:
        </p>
        <ul>
          <li>
            <strong>Total Packages Completed (Per Day & Date Range):</strong>{" "}
            This metric allows managers to quickly assess each employee’s
            overall productivity.
          </li>
          <li>
            <strong>Hourly Breakdown:</strong> Managers can expand the cards to
            view performance per hour, helping them identify trends, like
            slacking during certain periods or employees leaving early.
          </li>
          <li>
            <strong>Minute-by-Minute Detail:</strong> For even more granularity,
            the second screen allows managers to drill down further, showing
            when each individual package was processed during the day.
          </li>
        </ul>
      </div>

      <div className="content-block">
        <h2>Future Considerations</h2>
        <p>
          In the future, we plan to expand the system with{" "}
          <strong>Employee Profiles</strong>, which would store more detailed
          performance metrics, including averages, personalized reports, and
          deeper analytics on employee trends.
        </p>
      </div>

      <div className="content-block">
        <h2>Design Decisions</h2>
        <p>
          The interface was designed to balance ease of use with the ability to
          access deeper insights when needed. I opted for an{" "}
          <strong>accordion-style card layout</strong> for each employee,
          allowing users to view high-level information—such as daily totals—at
          a glance while offering the ability to expand each card for more
          granular hourly and minute-by-minute details.
        </p>
        <p>
          This design choice not only provides a clean, organized structure but
          also ensures that{" "}
          <strong>all relevant information remains on a single screen</strong>.
          By using the accordion style, managers don’t have to navigate in and
          out of different pages to find key data, streamlining their workflow
          and making the system more efficient to use.
        </p>
      </div>

      <div className="content-block">
        <h2>Impact</h2>
        <p>
          By automating data collection and providing granular performance
          insights, this system has significantly improved the warehouse team’s
          ability to monitor employee productivity. Managers now have the tools
          to:
        </p>
        <ul>
          <li>Spot productivity dips in real time</li>
          <li>Take action based on specific data trends</li>
          <li>Reduce manual data entry errors</li>
          <li>Make more informed decisions about team performance</li>
        </ul>
      </div>
    </div>
  );
};

export default WarehouseReporting;
