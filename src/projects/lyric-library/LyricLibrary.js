import TextBlock from "../../components/TextBlock";
import ContentBlock from "../../components/ContentBlock";

const LyricLibrary = () => {
  return (
    <>
      <ContentBlock>
        <TextBlock
          heading="Background"
          text={
            <p>
              My friend asked..Lyric Library is a songwriting software which
              aims to give users a structured and organised approach to creating
              music and storing Lyrics.
            </p>
          }
        />
      </ContentBlock>

      <ContentBlock>
        <TextBlock
          heading="Problem"
          text={
            <p>
              Songwriting and music creation is spontaneous and unpredictable.
              Musicians are currently using their installed notes / voice note
              software on their phone to store lyrics, and record melodies.
              <br />
              <br />
              However, this leads to the creation of numerous files in different
              locations which quickly becomes disorganised, while lacking any
              additional context.
            </p>
          }
        />
      </ContentBlock>

      <ContentBlock>
        <TextBlock
          heading="My Proposal"
          text={
            <p>
              A centralised location where musicians are able to store every
              piece of information pertaining to a song being created. This
              includes lyrics, melodies, and notes.
            </p>
          }
        />
      </ContentBlock>

      <ContentBlock>
        <TextBlock
          heading="Investigation"
          text={
            <p>
              Firstly, I investigated whether there were existing softwares
              which provided these features. I found 3 which were quite similar,
              however, their interfaces were quite archaic and features were not
              as robust as I envisioned for Lyric Library. This was great, as it
              confirmed there was certainly a gap in the market for a fresher
              product.
              <br />
              <br />
              I then spent some time on Reddit's music area. I needed some first
              hand accounts on pain points musicians experience while trying to
              create. These accounts ensured all design decisions are user
              centric and led with empathy.
              <br />
              <br />
              My next step was brainstorming how I wanted this product to look.
              I went back to the core purpose of this product which was better
              organisation and simplicity. A songwriter's brain is full of
              ideas, they need a clean and breathable interface to store these
              thoughts.
              <br />
              <br />
              I wanted the writing aspect / environment to feel familiar. So I
              quickly knew that I was going to take inspiration from existing
              word processors, which would also later on feed into some exciting
              functionality. I explored Word and Google Docs. Both products are
              packed with features and visual elements, but only a few made
              sense to include in Lyric Library. A page section (input) for
              writing, highlight functionality and sidebars for additional
              information.
              <br />
              <br />
              I remembered Notion was a great workspace tool I had used
              previously. It is clean, intuitive and out of the way. I decided
              that it would be the main visual and experience inspiration for
              this project. However, I continued to search for other existing
              designs to get a well rounded idea of the direction I wanted to
              move in.
              <br />
              <br />
            </p>
          }
        />
      </ContentBlock>

      <ContentBlock>
        <TextBlock
          heading="Investigation"
          text={
            <p>
              I started thinking about exactly what I wanted users to achieve
              from this app. In fact, before that - what's the purpose of the
              app again? For users to create and store song lyrics for their
              next greatest hit. So what does that entail?
              <br />
              <br />
              Users need an account, the ability to create a new project, store
              lyrics in that project, and revisit to iterate and build on their
              idea till completion. This is the core idea.
              <br />
              <br />I started visualising what this journey would like like for
              a user:
            </p>
          }
        />
      </ContentBlock>
    </>
  );
};

export default LyricLibrary;
