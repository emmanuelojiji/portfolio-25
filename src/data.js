import LyricLibrary from "./projects/lyric-library/LyricLibrary";
import NotesDocument from "./projects/NotesDocument";
import Sidekick from "./projects/Sidekick";
import UsabilitySession from "./projects/usability-session/UsabilitySession";
import UsabilitySurvey from "./projects/usability-survey/UsabilitySurvey";
import usability_session_thumbnail from "./projects/usability-session/1.png";
import usability_survey_thumbnail from "./projects/usability-survey/1.png";
import lyric_library_thumbnail from "./projects/lyric-library/1.png";
import jobs_kanban_board_thumbnail from "./projects/jobs-kanban-board/1.png";
import JobsKanbanBoard from "./projects/jobs-kanban-board/JobsKanbanBoard";

const data = [
  {
    name: "Jobs Kanban Board",
    desc: "Jobs kanban board",
    type: "case_studies",
    url: "jobs-kanban-board",
    component: <JobsKanbanBoard />,
    img: jobs_kanban_board_thumbnail,
    available: true,
  },
  {
    name: "Notes v2",
    desc: "Audit of EUA website",
    type: "case_studies",
    url: "sidekick-ai-assistant",
    component: <JobsKanbanBoard />,
    available: true,
  },

  {
    name: "VIEW Usability Session",
    desc: "Usability sessions with departments",
    type: "research",
    url: "view-usability-session",
    component: <UsabilitySession />,
    img: usability_session_thumbnail,
    available: true,
  },
  {
    name: "VIEW Usability Survey",
    desc: "Usability sessions with Typeform",
    type: "research",
    url: "view-usability-survey",
    component: <UsabilitySurvey />,
    img: usability_survey_thumbnail,
    available: true,
  },
  {
    name: "Lyric Library",
    desc: "Lyric Library Exploration",
    type: "explorations",
    url: "lyric-library",
    component: <LyricLibrary />,
    img: lyric_library_thumbnail,
    available: true,
  },
  /*{
    name: "Sidekick AI Assistant",
    desc: "AI Assistant which helps to source and price mechanical parts",
    type: "case_studies",
    url: "sidekick-ai-assistant",
    component: <JobsKanbanBoard />,
    available: false,
  },
  {
    name: "EUA Website",
    desc: "Audit of EUA website",
    type: "audits",
    url: "sidekick-ai-assistant",
    component: <JobsKanbanBoard />,
    available: false,
  },
  {
    name: "Badges",
    desc: "Audit of EUA website",
    type: "explorations",
    url: "sidekick-ai-assistant",
    component: <JobsKanbanBoard />,
    available: false,
  },*/
];

export default data;
