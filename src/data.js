import NotesDocument from "./projects/NotesDocument";
import Sidekick from "./projects/Sidekick";

const data = [
  {
    name: "Sidekick AI",
    desc: "Assistive AI tool",
    type: "case_studies",
    url: "sidekick-ai",
    component: <Sidekick />,
  },
  {
    name: "Notes v2",
    desc: "Place information against jobs",
    type: "case_studies",
    url: "notes-v2",
  },
  {
    name: "Typeform Survey",
    desc: "Usability sessions with departments",
    type: "audits",
    url: "typeform-survey",
  },

  {
    name: "GOV UK",
    desc: "Usability sessions with departments",
    type: "front_end",
    url: "gov-uk",
  },
  {
    name: "FUN",
    desc: "Usability sessions with departments",
    type: "just_for_fun",
    url: "fun",
  },
  {
    name: "Notes Screen Strategy Document",
    desc: "Notes Screen Strategy document",
    type: "documents",
    url: "notes-strategy-document",
    component: <NotesDocument />,
  },
  {
    name: "EUA Website",
    desc: "Notes Strategy document",
    type: "audits",
    url: "eua-website-audit",
    component: <NotesDocument />,
  },
];

export default data;
