import { useEffect, useState } from "react";
import "./App.css";

/* =========================================================
   GERMAN TIME
========================================================= */

function GermanTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Berlin",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      setTime(formatter.format(new Date()));
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{time}</span>;
}


/* =========================================================
   JOURNEY DATA
========================================================= */

const journey = [
  {
    id: 1,
    title: (
      <>
        Digital
        <br />
        Forensics
      </>
    ),
    description:
      "I started by learning how digital evidence can be preserved, examined, and interpreted to understand what happened during a security incident.",
  },

  {
    id: 2,
    title: (
      <>
        Offensive
        <br />
        Security
      </>
    ),
    description:
      "Understanding how attacks happen led me toward offensive security. I explored vulnerabilities, attack paths, and practical security testing to understand the perspective of an attacker.",
  },

  {
    id: 3,
    title: (
      <>
        Defensive
        <br />
        Security
      </>
    ),
    description:
      "Seeing how vulnerabilities could be exploited made me interested in the other side of security: detecting attacks, investigating incidents, and understanding how defenders respond.",
  },

  {
    id: 4,
    title: (
      <>
        Human
        <br />
        Factors / HCI
      </>
    ),
    description:
      "During my Master's, HCI introduced another perspective: security is ultimately experienced by people. Understanding how people behave, misunderstand, and make decisions became another part of how I think about security.",
  },
];


/* =========================================================
   CVEs
========================================================= */

const cves = [
  "CVE-2015-3306",
  "CVE-2021-3129",
  "CVE-2021-42013",
  "CVE-2021-41773",
  "CVE-2022-26134",
];


/* =========================================================
   HOME PAGE
========================================================= */

function HomePage() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (id) => {
    setFlippedCards((previous) => ({
      ...previous,
      [id]: !previous[id],
    }));
  };

  return (
    <div className="portfolio">

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <header className="top-bar">

        <div className="top-left">
          <div className="online-row">
            <span className="online-dot"></span>
            <span>ONLINE</span>
          </div>

          <div>GERMANY</div>

          <div>
            <GermanTime />
          </div>
        </div>

        <div className="top-right">
          SAM DANIEL JOHN
        </div>

      </header>


      {/* =====================================================
          INDEX
      ===================================================== */}

      <nav className="site-index">

        <a href="#about">
          ABOUT
        </a>

        <a href="#contact">
          CONTACT
        </a>

        <a href="#journey">
          JOURNEY
        </a>

        <a href="#projects">
          PROJECTS
        </a>

      </nav>


      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="hero">

          <h1>
            Understanding
            <span>security</span>
            from different
            perspectives.
          </h1>

        </section>


        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section
          className="about-section"
          id="about"
        >

          <div className="section-header">

            <div className="section-number">
              02
            </div>

            <div className="section-label">
              ABOUT
            </div>

          </div>


          <div className="about-content">

            <h2>
              Who am I
            </h2>

            <p>
              I’m a Cybersecurity Master’s student who looks at security
              from two angles: the system and the human behind it. While
              I’m deeply interested in the defensive side of security,
              detecting, analyzing, and responding to real-world attacks,
              my academic journey also led me to explore how user behavior,
              decisions, and misunderstandings shape security outcomes.
              Combining technical security foundations with user-centered
              thinking helps me understand not only how incidents happen,
              but also why they happen, a perspective I’m eager to grow
              in both research and practice.
            </p>

          </div>

        </section>


        {/* =====================================================
            JOURNEY
        ===================================================== */}

        <section
          className="journey-section"
          id="journey"
        >

          <div className="section-header">

            <div className="section-number">
              03
            </div>

            <div className="section-label">
              THE JOURNEY
            </div>

          </div>


          <div className="journey-introduction">

            <h2>
              One question
              <br />
              led to another.
            </h2>

            <p>
              I did not arrive at one perspective and stop there.
              Each stage raised a different question and pushed me
              toward the next.
            </p>

          </div>


          <div className="journey-grid">

            {journey.map((item) => (

              <div
                key={item.id}
                className={`journey-card ${
                  flippedCards[item.id] ? "flipped" : ""
                }`}
                onClick={() => toggleCard(item.id)}
              >

                <div className="journey-card-inner">

                  {/* FRONT */}

                  <div className="journey-card-face journey-card-front">

                    <span className="card-number">
                      0{item.id}
                    </span>

                    <div className="journey-title">
                      {item.title}
                    </div>

                    <div className="flip-hint">
                      CLICK TO FLIP ↗
                    </div>

                  </div>


                  {/* BACK */}

                  <div className="journey-card-face journey-card-back">

                    <p>
                      {item.description}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section
          className="projects-section"
          id="projects"
        >

          <div className="section-header">

            <div className="section-number">
              04
            </div>

            <div className="section-label">
              PROJECTS
            </div>

          </div>


          <div className="projects-heading">

            <h2>
              What I've built.
            </h2>

            <p>
              Work across security research, security practice,
              and human-centered security.
            </p>

          </div>


          {/* FEATURED PROJECTS */}

          <div className="projects-grid">

            <a href="/sam-daniel-john-portfolio/project/behind-the-digital-trail" className="project-card">
              <div className="project-card-top">
                <span className="project-number">01</span>
                <span className="project-arrow">↗</span>
              </div>
              <div className="project-content">
                <div className="project-category">USABLE PRIVACY</div>
                <h3>Behind the Digital Trail</h3>
                <p>Exploring how users understand what happens when they cast content from a phone to a TV.</p>
              </div>
              <div className="project-tags">
                <span>User Research</span><span>HCI</span><span>Usable Privacy</span><span>Mental Models</span>
              </div>
              <div className="project-click">CLICK FOR MORE ↗</div>
            </a>

            <a href="/sam-daniel-john-portfolio/project/user-centered-research" className="project-card">
              <div className="project-card-top">
                <span className="project-number">02</span>
                <span className="project-arrow">↗</span>
              </div>

              <div className="project-content">
                <div className="project-category">HUMAN-CENTERED SECURITY</div>
                <h3>User-Centered Research</h3>
                <p>
                  Exploring the behavioral, motivational, and practical barriers
                  students face when learning German alongside university life.
                </p>
              </div>

              <div className="project-tags">
                <span>User Research</span>
                <span>HCI</span>
                <span>Interviews</span>
                <span>Empathy Mapping</span>
                <span>Affinity Diagramming</span>
              </div>

              <div className="project-click">CLICK FOR MORE ↗</div>
            </a>

            <a href="/sam-daniel-john-portfolio/project/security-warnings" className="project-card">
              <div className="project-card-top">
                <span className="project-number">03</span>
                <span className="project-arrow">↗</span>
              </div>

              <div className="project-content">
                <div className="project-category">USABLE SECURITY</div>
                <h3>Do Users Understand Security Warnings?</h3>
                <p>
                  A study exploring how users interpret permission prompts and
                  security warnings when making security-relevant decisions.
                </p>
              </div>

              <div className="project-tags">
                <span>Usable Security</span>
                <span>User Study</span>
                <span>Security Warnings</span>
                <span>Mental Models</span>
              </div>

              <div className="project-click">CLICK FOR MORE ↗</div>
            </a>

            <a href="/sam-daniel-john-portfolio/project/owl-app" className="project-card">
              <div className="project-card-top">
                <span className="project-number">04</span>
                <span className="project-arrow">↗</span>
              </div>

              <div className="project-content">
                <div className="project-category">HUMAN-CENTERED DESIGN</div>
                <h3>The Owl App</h3>
                <p>
                  A student-centered sustainability platform concept designed
                  around everyday campus behavior and participation.
                </p>
              </div>

              <div className="project-tags">
                <span>HCI</span>
                <span>User Research</span>
                <span>Personas</span>
                <span>Storyboarding</span>
                <span>Figma</span>
              </div>

              <div className="project-click">CLICK FOR MORE ↗</div>
            </a>

            

            

            

          </div>
        </section>


        {/* =====================================================
            CVE MARQUEE
        ===================================================== */}

        <section className="cve-section">

          <div className="cve-track">

            {[...cves, ...cves, ...cves].map(
              (cve, index) => (

                <span
                  className="cve-item"
                  key={`${cve}-${index}`}
                >
                  {cve}
                </span>

              )
            )}

          </div>

        </section>


        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section
          className="contact-section"
          id="contact"
        >

          <div className="section-header">

            <div className="section-number">
              06
            </div>

            <div className="section-label">
              CONTACT
            </div>

          </div>


          <h2 className="contact-title">
            Let's connect.
          </h2>


          <div className="contact-links">

            <a
              href="mailto:sam.daniel.john@outlook.com"
              className="contact-icon"
            >

              <span className="contact-symbol">
                @
              </span>

              <span className="contact-name">
                EMAIL
              </span>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            <a
              href="https://www.linkedin.com/in/sam-daniel-john/"
              target="_blank"
              rel="noreferrer"
              className="contact-icon"
            >

              <span className="contact-symbol">
                in
              </span>

              <span className="contact-name">
                LINKEDIN
              </span>

              <span className="contact-arrow">
                ↗
              </span>

            </a>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <span>
          SDJ_
        </span>

        <span>
          SECURITY / RESEARCH / PRACTICE
        </span>

      </footer>

    </div>
  );
}


/* =========================================================
   USER-CENTERED RESEARCH PROJECT PAGE
========================================================= */

function BehindDigitalTrailPage() {
  return (
    <div className="portfolio project-page">

      <header className="top-bar">
        <div className="top-left">
          <div className="online-row">
            <span className="online-dot"></span>
            <span>ONLINE</span>
          </div>
          <div>GERMANY</div>
          <div><GermanTime /></div>
        </div>
        <div className="top-right">SAM DANIEL JOHN</div>
      </header>

      <nav className="site-index">
        <a href="/#about">ABOUT</a>
        <a href="/#contact">CONTACT</a>
        <a href="/#journey">JOURNEY</a>
        <a href="/#projects">PROJECTS</a>
      </nav>

      <main>
        <article className="project-detail">

          <a href="/#projects" className="back-link">
            ← BACK TO PROJECTS
          </a>

          <div className="project-detail-category">
            USABLE PRIVACY
          </div>

          <h1>
            Behind the
            <br />
            Digital Trail
          </h1>

          <p className="project-lead">
            Understanding what users think happens when they cast a YouTube
            video from a phone to a TV.
          </p>

          <div className="project-detail-tags">
            <span>[Mental Models]</span>
            <span>[Privacy Awareness]</span>
            <span>[Transparency]</span>
            <span>[User Research]</span>
            <span>[User Control]</span>
          </div>

          <section className="detail-section">

            <div className="detail-kicker">
              01 / THE QUESTION
            </div>

            <h2>
              What does a person actually think is happening?
            </h2>

            <p>
              Casting a YouTube video from a phone to a TV feels almost
              effortless. You tap the Cast button, choose a TV, and the video
              starts playing.
            </p>

            <p>
              But at some point I started wondering what a person actually
              thinks is happening behind that simple interaction.
            </p>

            <p>
              Is the video being sent directly from the phone to the TV? Is
              YouTube involved? Does my account get associated with the
              interaction? What information does the TV know? And, perhaps
              more importantly, <strong>what do users think happens?</strong>
            </p>

            <p>
              I decided to explore this from a usable-privacy perspective.
            </p>

            <blockquote>
              How can privacy information become easier to understand without
              becoming another thing users have to work around?
            </blockquote>

          </section>

          <section className="detail-section">

            <div className="detail-kicker">
              02 / RESEARCH APPROACH
            </div>

            <h2>
              Starting with users instead of the technical architecture.
            </h2>

            <p>
              I conducted a small exploratory study with
              <strong> 15 participants</strong>, asking them to describe what
              they believed happened during casting, what information they
              thought was involved, who they believed might be involved, and
              what they would want to know about their data.
            </p>

            <p>
              The goal wasn't to prove that users were “wrong.” I wanted to
              understand <strong>how people build a mental model</strong> of
              an interaction that is technically complex but presented through
              a very simple interface.
            </p>

            <p>
              Instead of starting with a prototype or showing participants a
              technical explanation, I created an anonymous questionnaire and
              asked people to describe the casting experience in their own
              words. This helped capture their natural understanding before
              influencing it with technical information.
            </p>

            <div className="research-stats">

              <div>
                <strong>15</strong>
                <span>PARTICIPANTS</span>
              </div>

              <div>
                <strong>01</strong>
                <span>EXPLORATORY STUDY</span>
              </div>

              <div>
                <strong>06</strong>
                <span>RESEARCH AREAS</span>
              </div>

            </div>

          </section>

          <section className="detail-section">

            <div className="detail-kicker">
              03 / WHAT I ASKED ABOUT
            </div>

            <h2>
              Looking beyond the Cast button.
            </h2>

            <div className="finding-grid">

              <div className="finding-card">
                <span>01</span>
                <h3>Casting experience</h3>
                <p>
                  How often participants cast content and what they normally
                  use it for.
                </p>
              </div>

              <div className="finding-card">
                <span>02</span>
                <h3>Mental models</h3>
                <p>
                  What they think happens between the phone, the TV, and the
                  service.
                </p>
              </div>

              <div className="finding-card">
                <span>03</span>
                <h3>Information involved</h3>
                <p>
                  What information they think might be collected or associated
                  with the interaction.
                </p>
              </div>

              <div className="finding-card">
                <span>04</span>
                <h3>People and services</h3>
                <p>
                  Who they believe might have access to or receive information.
                </p>
              </div>

              <div className="finding-card">
                <span>05</span>
                <h3>Privacy</h3>
                <p>
                  Whether they see privacy implications and what makes them
                  feel that way.
                </p>
              </div>

              <div className="finding-card">
                <span>06</span>
                <h3>Information preferences</h3>
                <p>
                  What they would actually want to know and how they would
                  prefer that information to be presented.
                </p>
              </div>

            </div>

            <p>
              I shared the questionnaire with people from my apartment and
              student groups and collected <strong>15 responses</strong>.
              I wasn't trying to make a statistically representative study.
              I wanted to get an initial look at how differently people might
              understand the same everyday interaction and use those
              observations to guide the design.
            </p>

          </section>

          <section className="detail-section">

            <div className="detail-kicker">
              04 / WHO TOOK PART?
            </div>

            <h2>
              A small exploratory sample.
            </h2>

            <p>
              I shared the questionnaire mainly through student and apartment
              WhatsApp groups, so the people who responded were mostly from my
              immediate environment.
            </p>

            <p>
              I kept the questionnaire anonymous and did not try to recruit a
              specific demographic profile. I was more interested in getting a
              mix of people with different levels of familiarity with
              technology and privacy.
            </p>

            <p>
              This was a small exploratory study, so I am not treating these
              15 responses as representative of all casting users. The purpose
              was to look for <strong>patterns worth investigating further</strong>
              and use those patterns to inform the design.
            </p>

          </section>

          <section className="detail-section">

            <div className="detail-kicker">
              05 / FINDING 01
            </div>

            <h2>
              People imagined casting differently.
            </h2>

            <p>
              The first thing that caught my attention was that people did not
              describe casting in the same way.
            </p>

            <p>
              I expected most answers to be fairly similar because the
              interaction itself is so simple. Instead, people seemed to have
              different ideas about what was happening behind the scenes.
            </p>

            <div className="principle-line">
              <span>DIFFERENT MENTAL MODELS</span>
              <strong>
                Phone → TV
              </strong>
              <strong>
                Phone → Controller → TV
              </strong>
              <strong>
                Phone → Middleman → TV
              </strong>
            </div>

            <p>
              None of these people necessarily had trouble using casting. They
              could all perform the same action successfully, but they were
              imagining the underlying interaction differently.
            </p>

            <blockquote>
              Successful interaction does not necessarily mean that the user
              has an accurate mental model of what is happening.
            </blockquote>

            <p>
              This became important for the rest of the project. If users have
              different ideas about what is happening, how can we expect them
              to make informed decisions about the privacy implications of that
              interaction?
            </p>

          </section>

          <section className="detail-section">

            <div className="detail-kicker">
              06 / FINDING 02
            </div>

            <h2>
              The data behind casting felt invisible.
            </h2>

            <p>
              After looking at how people understood the basic casting
              interaction, I wanted to go one step further. I asked
              participants what information they thought might be involved and
              who they thought might be involved in the process.
            </p>

            <p>
              Most people naturally thought about the things they could see:
              <strong> their phone, the TV, the video, and YouTube.</strong>
            </p>

            <p>
              Fewer participants spontaneously thought about things such as
              device information, viewing activity, accounts, TV manufacturers,
              or other services.
            </p>

            <p>
              A person can understand enough to successfully cast a video
              without necessarily having a clear idea of what information might
              be associated with the activity, which services are involved,
              whether their account is connected to the interaction, or what
              the TV or other devices might know.
            </p>

            <blockquote>
              The interface gives users almost no reason to think about the
              data relationships behind the interaction.
            </blockquote>

            <p>
              This suggested that privacy information should begin by making
              those relationships visible, rather than presenting users with a
              long privacy policy or technical documentation.
            </p>

          </section>

          <section className="detail-section">

            <div className="detail-kicker">
              07 / FINDING 03
            </div>

            <h2>
              Privacy concern is not the whole story.
            </h2>

            <p>
              I did not want to assume that people who use casting are
              automatically worried about privacy. The answers were mixed.
              Some people were not concerned at all, while others were unsure
              or had specific concerns about account information, viewing
              activity, or the TV itself.
            </p>

            <p>
              What I found more interesting was that even when someone was not
              particularly worried, they could still have questions about what
              was happening.
            </p>

            <div className="decision-list">

              <div>
                <span>What information is being collected?</span>
                <b>→ Make information relationships visible</b>
              </div>

              <div>
                <span>Who might receive it?</span>
                <b>→ Show the wider ecosystem</b>
              </div>

              <div>
                <span>Is my account connected?</span>
                <b>→ Explain the relevant relationships</b>
              </div>

              <div>
                <span>Is anything stored?</span>
                <b>→ Provide understandable context</b>
              </div>

              <div>
                <span>Can I control it?</span>
                <b>→ Point toward relevant controls</b>
              </div>

            </div>

            <p>
              This shifted my question from “Do users care about privacy when
              casting?” to:
            </p>

            <blockquote>
              Do users have enough information to understand the privacy
              implications of casting in the first place?
            </blockquote>

          </section>

          <section className="detail-section">

            <div className="detail-kicker">
              08 / FINDING 04
            </div>

            <h2>
              People wanted different levels of explanation.
            </h2>

            <p>
              Some participants preferred a short explanation in plain
              language. Others wanted a visual explanation showing how the
              phone, TV, services, and information were connected. Some were
              more comfortable going into technical detail.
            </p>

            <p>
              This made me realize that there probably isn't one perfect way to
              explain privacy to everyone.
            </p>

            <div className="principle-line">

              <span>
                PROGRESSIVE DISCLOSURE
              </span>

              <strong>
                Simple explanation
              </strong>

              <strong>
                ↓
              </strong>

              <strong>
                Visual explanation
              </strong>

              <strong>
                ↓
              </strong>

              <strong>
                Detailed information
              </strong>

            </div>

            <p>
              The interface should start simple and allow people to explore
              more if they are interested. Privacy information should not force
              every user to become technical.
            </p>

          </section>

          <section className="detail-section">

            <div className="detail-kicker">
              09 / FROM FINDINGS TO A DESIGN OPPORTUNITY
            </div>

            <h2>
              The problem was not simply privacy awareness.
            </h2>

            <p>
              People were able to use casting without much difficulty, but
              their understanding of what happened underneath was quite
              different.
            </p>

            <p>
              Some saw a simple phone-to-TV interaction. Others thought about
              the service, accounts, devices, and other actors involved. At the
              same time, people did not necessarily want a long privacy
              explanation every time they cast something.
            </p>

            <blockquote>
              How might we make the data relationships behind casting easier to
              understand without interrupting the user's main task?
            </blockquote>

            <p>
              This became the design opportunity for the project. I wasn't
              trying to redesign casting itself. I wanted to explore a small
              layer that could sit alongside the existing experience and answer
              the questions users might naturally have.
            </p>

            <div className="finding-grid">

              <div className="finding-card">
                <span>01</span>
                <h3>What's happening?</h3>
                <p>
                  Explain the roles of the phone, casting service, and TV.
                </p>
              </div>

              <div className="finding-card">
                <span>02</span>
                <h3>What's happening with my information?</h3>
                <p>
                  Show the types of information that may be associated with
                  the interaction.
                </p>
              </div>

              <div className="finding-card">
                <span>03</span>
                <h3>Who may be involved?</h3>
                <p>
                  Make the wider ecosystem visible.
                </p>
              </div>

              <div className="finding-card">
                <span>04</span>
                <h3>What can I control?</h3>
                <p>
                  Point users toward relevant privacy and device controls.
                </p>
              </div>

            </div>

          </section>

          <section className="detail-section">

            <div className="detail-kicker">
              10 / CAST PRIVACY LENS
            </div>

            <h2>
              A privacy layer that stays out of the way.
            </h2>

            <p>
              Instead of creating another settings page or showing a large
              privacy warning, I imagined a small privacy layer that appears
              around the casting experience.
            </p>

            <p>
              The idea is simple: when someone starts casting, they can choose
              to understand what is happening behind the interaction.
            </p>

            <p>
              If someone just wants to watch their video, they can continue. If
              they are curious about privacy, they can explore.
            </p>

            <blockquote>
              Privacy information should be available without becoming another
              interruption.
            </blockquote>

          </section>

          <section className="detail-section">

            <div className="detail-kicker">
              11 / DESIGN PRINCIPLES
            </div>

            <h2>
              Four principles guided the concept.
            </h2>

            <div className="finding-grid">

              <div className="finding-card">
                <span>01</span>
                <h3>Keep it simple</h3>
                <p>
                  The first layer should be understandable without technical
                  knowledge.
                </p>
              </div>

              <div className="finding-card">
                <span>02</span>
                <h3>Show relationships</h3>
                <p>
                  Make the connections between devices, services, and
                  information visible.
                </p>
              </div>

              <div className="finding-card">
                <span>03</span>
                <h3>Let users go deeper</h3>
                <p>
                  Start simple and allow people to explore more detail when
                  they want it.
                </p>
              </div>

              <div className="finding-card">
                <span>04</span>
                <h3>Don't get in the way</h3>
                <p>
                  Privacy information should support the casting task rather
                  than interrupt it.
                </p>
              </div>

            </div>

          </section>

          <section className="detail-section">

            <div className="detail-kicker">
              12 / THE PROTOTYPE
            </div>

            <h2>
              From research to an interface concept.
            </h2>

            <p>
              I kept the prototype intentionally small. I wasn't trying to
              build a complete casting application. I wanted to test one idea:
            </p>

            <blockquote>
              Can privacy information be introduced gradually without making a
              simple casting interaction feel complicated?
            </blockquote>

            <p>
              The prototype follows the user's journey from starting a casting
              session to exploring the privacy information behind it.
            </p>

            <div className="finding-grid">

              <div className="finding-card">
                <span>01</span>
                <h3>Starting a casting session</h3>
                <p>
                  Keep the normal casting experience simple while providing an
                  optional route to understand the data context.
                </p>
              </div>

              <div className="finding-card">
                <span>02</span>
                <h3>What's happening?</h3>
                <p>
                  Introduce the basic roles involved without overwhelming the
                  user with technical implementation details.
                </p>
              </div>

              <div className="finding-card">
                <span>03</span>
                <h3>My information</h3>
                <p>
                  Explain the types of information that may be associated with
                  the casting activity in plain language.
                </p>
              </div>

              <div className="finding-card">
                <span>04</span>
                <h3>Who may be involved?</h3>
                <p>
                  Make the wider ecosystem visible instead of reducing the
                  interaction to phone → TV.
                </p>
              </div>

              <div className="finding-card">
                <span>05</span>
                <h3>What can I control?</h3>
                <p>
                  Give users entry points toward privacy and device controls
                  relevant to their setup.
                </p>
              </div>

            </div>

          </section>

          <section className="detail-section">

            <div className="detail-kicker">
              13 / RESEARCH → DESIGN DECISIONS
            </div>

            <h2>
              Making sure the prototype came from the research.
            </h2>

            <div className="decision-list">

              <div>
                <span>
                  People had different ideas about how casting works
                </span>
                <b>
                  → Show the roles involved
                </b>
              </div>

              <div>
                <span>
                  The wider data ecosystem was not always obvious
                </span>
                <b>
                  → Make different actors visible
                </b>
              </div>

              <div>
                <span>
                  People wanted to know what information was involved
                </span>
                <b>
                  → Explain information in simple categories
                </b>
              </div>

              <div>
                <span>
                  People preferred different amounts of detail
                </span>
                <b>
                  → Use progressive disclosure
                </b>
              </div>

              <div>
                <span>
                  Some participants preferred plain language
                </span>
                <b>
                  → Put the simple explanation first
                </b>
              </div>

              <div>
                <span>
                  Casting is mainly about convenience
                </span>
                <b>
                  → Keep the privacy layer optional and non-blocking
                </b>
              </div>

            </div>

            <p>
              The prototype is not meant to be the final answer to the privacy
              problem. It is my first attempt at translating what I heard from
              participants into something that could actually be tested.
            </p>

          </section>

          <section className="detail-section">

            <div className="detail-kicker">
              14 / HOW I WOULD EVALUATE THE CONCEPT
            </div>

            <h2>
              The next question is whether it actually helps.
            </h2>

            <p>
              At this stage, I have a prototype, but I don't want to claim that
              it actually improves privacy understanding without testing it.
            </p>

            <p>
              I would first ask participants:
            </p>

            <blockquote>
              Imagine you are casting a video from your phone to your TV. What
              do you think is happening?
            </blockquote>

            <p>
              I would record how they describe the interaction and the actors
              they mention. Then I would show them the Cast Privacy Lens
              prototype and let them explore it.
            </p>

            <p>
              Afterwards, I would ask a similar question again:
            </p>

            <blockquote>
              Now, after seeing this, can you explain what you think is
              happening?
            </blockquote>

            <div className="finding-grid">

              <div className="finding-card">
                <span>01</span>
                <h3>Understanding</h3>
                <p>
                  Can users explain the different roles involved more clearly?
                </p>
              </div>

              <div className="finding-card">
                <span>02</span>
                <h3>Mental model</h3>
                <p>
                  Do they distinguish between the phone, casting service, and
                  TV or receiver?
                </p>
              </div>

              <div className="finding-card">
                <span>03</span>
                <h3>Clarity</h3>
                <p>
                  Do they understand the privacy information without needing
                  technical knowledge?
                </p>
              </div>

              <div className="finding-card">
                <span>04</span>
                <h3>Perceived control</h3>
                <p>
                  Do they understand what they can and cannot control?
                </p>
              </div>

              <div className="finding-card">
                <span>05</span>
                <h3>Effort</h3>
                <p>
                  Does the privacy layer help without making casting feel
                  unnecessarily complicated?
                </p>
              </div>

            </div>

            <p>
              The goal would not simply be to find out whether people like the
              interface. I would want to know whether it actually helps them
              build a better mental model of what is happening.
            </p>

          </section>

          <section className="detail-section">

            <div className="detail-kicker">
              15 / LIMITATIONS
            </div>

            <h2>
              What the study does not tell me yet.
            </h2>

            <div className="decision-list">

              <div>
                <span>Small sample</span>
                <b>
                  15 participants are useful for early patterns, not broad
                  population claims.
                </b>
              </div>

              <div>
                <span>Recruitment</span>
                <b>
                  Participants came mainly from my apartment and student
                  groups.
                </b>
              </div>

              <div>
                <span>Self-reported understanding</span>
                <b>
                  The responses describe mental models, not necessarily the
                  technical reality of every casting setup.
                </b>
              </div>

              <div>
                <span>No prototype evaluation yet</span>
                <b>
                  The concept still needs user testing to determine whether it
                  improves understanding.
                </b>
              </div>

              <div>
                <span>Different casting setups</span>
                <b>
                  Casting can vary depending on the device, service,
                  application, and settings.
                </b>
              </div>

            </div>

            <p>
              These limitations are also what make the project interesting to
              continue. The next step would be to test the prototype with a
              broader group of participants and compare their mental models
              before and after using it.
            </p>

          </section>

          <section className="detail-section">

            <div className="detail-kicker">
              16 / REFLECTION
            </div>

            <h2>
              From a simple interaction to a deeper privacy question.
            </h2>

            <p>
              The most interesting part of this project was that I started with
              a very simple question, but the answers made the problem much
              more interesting.
            </p>

            <p>
              I initially thought I would mainly be looking at whether people
              were concerned about privacy when casting. Instead, I found
              myself thinking more about <strong>mental models</strong>.
            </p>

            <p>
              People can use the same feature successfully while imagining very
              different things happening behind it. That made me realize that
              privacy decisions are difficult when the underlying interaction
              itself is not clear.
            </p>

            <p>
              The project also changed how I think about privacy communication.
              I don't think the answer is simply to give users more
              information. Too much information can become another thing users
              ignore.
            </p>

            <blockquote>
              The more interesting challenge is deciding what information
              should be visible first, what should remain optional, and how to
              explain it in a way that fits the user's context.
            </blockquote>

            <p>
              It is still a concept and there is much more I would want to
              test, but the project gave me a chance to take a question from an
              everyday interaction, investigate how people think about it, and
              turn those observations into a design direction.
            </p>

            <blockquote>
              Good usable-privacy design is not just about making systems more
              secure. It is also about helping people understand what is
              happening well enough to make their own decisions.
            </blockquote>

          </section>

          <section className="detail-section">

            <div className="detail-kicker">
              17 / WHAT'S NEXT?
            </div>

            <h2>
              Turning the concept into a research direction.
            </h2>

            <div className="finding-grid">

              <div className="finding-card">
                <span>01</span>
                <h3>Test the prototype</h3>
                <p>
                  Evaluate Cast Privacy Lens with real users and measure
                  whether it improves understanding.
                </p>
              </div>

              <div className="finding-card">
                <span>02</span>
                <h3>Compare explanations</h3>
                <p>
                  Compare plain-language and visual explanations to see which
                  supports a clearer mental model.
                </p>
              </div>

              <div className="finding-card">
                <span>03</span>
                <h3>Explore other contexts</h3>
                <p>
                  Apply the approach to other cross-device interactions where
                  users cannot easily see what happens behind the interface.
                </p>
              </div>

              <div className="finding-card">
                <span>04</span>
                <h3>Investigate controls</h3>
                <p>
                  Explore how explanations could connect more directly to
                  privacy controls available in a specific ecosystem.
                </p>
              </div>

              <div className="finding-card">
                <span>05</span>
                <h3>Refine the prototype</h3>
                <p>
                  Iterate on information hierarchy, visualizations, and level
                  of detail based on evaluation results.
                </p>
              </div>

            </div>

            <blockquote>
              How can privacy information become easier to understand without
              becoming another thing users have to work around?
            </blockquote>

          </section>

          <a href="/#projects" className="back-link bottom-back">
            ← BACK TO PROJECTS
          </a>

        </article>
      </main>

      <footer className="footer">
        <span>SDJ_</span>
        <span>SECURITY / RESEARCH / PRACTICE</span>
      </footer>

    </div>
  );
}






/* =========================================================
   USER-CENTERED RESEARCH PROJECT PAGE
   ========================================================= */

function UserCenteredResearchPage() {
  return (
    <div className="portfolio project-page">
      <header className="top-bar">
        <div className="top-left">
          <div className="online-row">
            <span className="online-dot"></span>
            <span>ONLINE</span>
          </div>
          <div>GERMANY</div>
          <div><GermanTime /></div>
        </div>
        <div className="top-right">SAM DANIEL JOHN</div>
      </header>

      <nav className="site-index">
        <a href="/#about">ABOUT</a>
        <a href="/#contact">CONTACT</a>
        <a href="/#journey">JOURNEY</a>
        <a href="/#projects">PROJECTS</a>
      </nav>

      <main>
        <article className="project-detail">
          <a href="/#projects" className="back-link">← BACK TO PROJECTS</a>

          <div className="project-detail-category">HUMAN-CENTERED SECURITY</div>

          <h1>User-Centered<br />Research</h1>

          <p className="project-lead">
            Understanding the behavioral, motivational, and practical barriers
            students face when learning German alongside university life.
          </p>

          <div className="project-detail-tags">
            <span>[User Research]</span>
            <span>[HCI]</span>
            <span>[Qualitative Research]</span>
            <span>[Empathy Mapping]</span>
            <span>[Affinity Diagramming]</span>
            <span>[Behavioral Design]</span>
          </div>

          <section className="detail-section">
            <div className="detail-kicker">01 / PROJECT OVERVIEW</div>
            <h2>The question</h2>

            <p>
              This project was part of a User-Centered Research seminar where
              we investigated challenges faced by students learning a new
              language while managing academic and personal responsibilities.
              The focus was on understanding behavioral, motivational, and
              practical barriers rather than only the learning content itself.
            </p>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">02 / USER RESEARCH</div>
            <h2>I started by listening.</h2>

            <p>
              We conducted qualitative interviews with participants from
              different academic backgrounds who were learning German alongside
              their studies. The image shows structured participant profiles
              and summarized responses, capturing motivations, habits,
              struggles, and learning contexts.
            </p>

            <p>
              This helped us understand real-life constraints such as limited
              time, academic workload, confidence issues in speaking, and
              dependence on passive learning methods.
            </p>

            <p>
              By documenting individual behaviors and patterns, we moved beyond
              assumptions and grounded our analysis in real user experiences.
              This formed the foundation for identifying common pain points and
              shaping later design directions.
            </p>

            <div className="research-image-block">
              <img
                src="/sam-daniel-john-portfolio/images/user-research.png"
                alt="Participant profiles and structured interview responses"
              />
              <span>USER RESEARCH — PARTICIPANT PROFILES & RESPONSES</span>
            </div>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">03 / EMPATHY MAPPING</div>
            <h2>Understanding the learner's perspective.</h2>

            <p>
              After collecting interview data, we used an empathy mapping
              exercise to better understand the learner’s perspective. The
              empathy map helped us organize what the learner
              <strong> says, thinks, feels, and does</strong>, allowing us to
              identify emotional and behavioral barriers, not just practical
              ones.
            </p>

            <p>
              The analysis revealed key <strong>pain points</strong> such as
              time management struggles, lack of practice opportunities, low
              confidence in communication, and difficulty integrating language
              learning into daily life. At the same time, we identified
              <strong> motivations and gains</strong>, including career
              opportunities, cultural integration, easier travel, and improved
              confidence.
            </p>

            <p>
              Using these insights, we transformed the observed challenges into
              design opportunities by formulating <strong>“How Might We”</strong>
              questions, focusing on:
            </p>

            <ul>
              <li>Helping learners find time within existing routines</li>
              <li>Building confidence using their current knowledge</li>
              <li>Supporting recall of learned material</li>
              <li>Reducing procrastination</li>
              <li>Encouraging consistent daily learning habits</li>
            </ul>

            <div className="research-image-block">
              <img
                src="/sam-daniel-john-portfolio/images/empathy-map.png"
                alt="Empathy map showing learner pain points, gains and How Might We questions"
              />
              <span>EMPATHY MAP — PAINS, GAINS & HOW MIGHT WE QUESTIONS</span>
            </div>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">04 / AFFINITY DIAGRAMMING</div>
            <h2>Finding patterns across the interviews.</h2>

            <p>
              After empathy mapping, we organized all interview observations
              and notes into an affinity diagram. This helped us cluster
              related behaviors, motivations, and challenges into meaningful
              themes rather than viewing them as isolated problems.
            </p>

            <p>The grouping revealed major patterns such as:</p>

            <ul>
              <li>
                <strong>Time management issues</strong> — learners struggle to
                fit language learning into already busy academic schedules.
              </li>
              <li>
                <strong>Personal learning challenges</strong> — difficulty
                forming sentences, fear of speaking, and low confidence.
              </li>
              <li>
                <strong>Learning method frustrations</strong> — passive
                learning methods dominate while active practice is limited.
              </li>
              <li>
                <strong>Motivational drivers</strong> — long-term career
                opportunities and cultural integration are strong motivators.
              </li>
              <li>
                <strong>Distraction and digital habits</strong> — available
                time is often consumed by non-productive digital activities.
              </li>
            </ul>

            <div className="research-image-block">
              <img
                src="/sam-daniel-john-portfolio/images/affinity-diagram.png"
                alt="Affinity diagram showing grouped interview observations and themes"
              />
              <span>AFFINITY DIAGRAM — RESEARCH THEMES & PATTERNS</span>
            </div>
          </section>

          <section className="detail-section opportunity-section">
            <div className="detail-kicker">05 / KEY INSIGHT</div>
            <h2>The problem was not simply a lack of time.</h2>

            <p>
              Although many learners claimed they “don’t have time” to study,
              our research showed a different reality. The issue was not a
              true lack of time, but how time is spent especially on digital
              distractions.
            </p>

            <p>
              Learners often lose small pockets of time on social media and
              other apps, which could instead support meaningful learning.
            </p>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">06 / PROPOSED SOLUTION</div>
            <h2>Turn distraction into micro-learning.</h2>

            <p>
              Based on this insight, we explored a solution that combines
              <strong> distraction interruption</strong> with
              <strong> micro-learning</strong>.
            </p>

            <p>
              Inspired by apps like <em>One Sec</em>, which pause users before
              they open distracting apps, our concept replaces the usual pause
              message with a short <strong>German vocabulary puzzle</strong>.
              Instead of simply reminding users to “take a breath,” the
              interruption becomes a learning opportunity.
            </p>

            <div className="finding-grid">
              <div className="finding-card">
                <span>01</span>
                <h3>Small moments</h3>
                <p>
                  Learning happens in small, low-effort moments rather than
                  requiring another dedicated study session.
                </p>
              </div>

              <div className="finding-card">
                <span>02</span>
                <h3>Daily habits</h3>
                <p>
                  The concept supports consistent daily practice instead of
                  relying on short bursts of motivation.
                </p>
              </div>

              <div className="finding-card">
                <span>03</span>
                <h3>Vocabulary</h3>
                <p>
                  Short vocabulary challenges target an area learners often
                  neglect while focusing mainly on sentence structure.
                </p>
              </div>

              <div className="finding-card">
                <span>04</span>
                <h3>Confidence</h3>
                <p>
                  Consistent exposure can help learners build familiarity and
                  confidence over time.
                </p>
              </div>
            </div>

            <div className="principle-line">
              <span>DESIGN PRINCIPLE</span>
              <strong>
                Do not demand more time. Transform moments of distraction into
                productive learning opportunities.
              </strong>
            </div>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">07 / DESIGN DIRECTION</div>
            <h2>From research insight to intervention.</h2>

            <div className="decision-list">
              <div>
                <span>Limited available time</span>
                <b>→ Micro-learning in existing moments</b>
              </div>
              <div>
                <span>Digital distraction</span>
                <b>→ Distraction interruption</b>
              </div>
              <div>
                <span>Vocabulary often neglected</span>
                <b>→ Short vocabulary puzzles</b>
              </div>
              <div>
                <span>Motivation is inconsistent</span>
                <b>→ Support daily habit formation</b>
              </div>
            </div>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">08 / CONCLUSION</div>
            <h2>Designing around real behavior.</h2>

            <p>
              This project helped me understand how user-centered research can
              uncover the real causes behind a problem, which are often
              different from initial assumptions.
            </p>

            <p>
              What seemed like a time constraint issue turned out to be a
              behavioral and habit-related challenge. By studying learners’
              routines, emotions, and motivations, we identified that small
              design interventions could meaningfully support consistent
              learning.
            </p>

            <p>
              It also strengthened my ability to translate qualitative insights
              into structured problem framing and practical design directions.
              The experience reinforced the importance of aligning solutions
              with real user behavior rather than ideal assumptions.
            </p>
          </section>

          <a href="/#projects" className="back-link bottom-back">
            ← BACK TO PROJECTS
          </a>
        </article>
      </main>

      <footer className="footer">
        <span>SDJ_</span>
        <span>SECURITY / RESEARCH / PRACTICE</span>
      </footer>
    </div>
  );
}



/* =========================================================
   SECURITY WARNINGS PROJECT PAGE
   ========================================================= */

function SecurityWarningsPage() {
  return (
    <div className="portfolio project-page">
      <header className="top-bar">
        <div className="top-left">
          <div className="online-row">
            <span className="online-dot"></span>
            <span>ONLINE</span>
          </div>
          <div>GERMANY</div>
          <div><GermanTime /></div>
        </div>
        <div className="top-right">SAM DANIEL JOHN</div>
      </header>

      <nav className="site-index">
        <a href="/#about">ABOUT</a>
        <a href="/#contact">CONTACT</a>
        <a href="/#journey">JOURNEY</a>
        <a href="/#projects">PROJECTS</a>
      </nav>

      <main>
        <article className="project-detail">
          <a href="/#projects" className="back-link">← BACK TO PROJECTS</a>

          <div className="project-detail-category">USABLE SECURITY</div>

          <h1>Do Users Understand<br />Security Warnings?</h1>

          <p className="project-lead">
            A usable security study exploring how users interpret common
            permission prompts and security warnings, and how they respond
            when making security-relevant decisions.
          </p>

          <div className="project-detail-tags">
            <span>[Usable Security]</span>
            <span>[User Study]</span>
            <span>[Security Warnings]</span>
            <span>[Mental Models]</span>
            <span>[Survey]</span>
          </div>

          <section className="detail-section">
            <div className="detail-kicker">01 / INTRODUCTION</div>
            <h2>Are warnings communicating risk — or just getting in the way?</h2>

            <p>
              Security warnings and permission prompts are one of the primary
              ways systems communicate risk to users. Whether it is an app
              requesting access to a microphone or a browser warning about an
              unsafe connection, users are expected to make security-relevant
              decisions based on these messages.
            </p>

            <p>
              Previous usable security research suggests that users often
              ignore, misunderstand, or quickly bypass warnings. This raises a
              central question: are these interfaces effectively communicating
              risk, or are they simply obstacles users try to get past?
            </p>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">02 / RESEARCH QUESTION</div>
            <h2>How do users interpret and respond?</h2>

            <blockquote>
              How do users interpret and respond to common security warnings
              and permission prompts?
            </blockquote>

            <ul>
              <li>Do users correctly understand what these warnings mean?</li>
              <li>
                Do users make decisions based on risk understanding or
                convenience?
              </li>
              <li>What factors influence their behavior?</li>
            </ul>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">03 / METHOD</div>
            <h2>A short online survey.</h2>

            <p>
              A short online survey was conducted to understand user perception
              and behavior regarding security warnings. Participants had
              varying levels of technical background.
            </p>

            <div className="research-stats">
              <div>
                <strong>01</strong>
                <span>ONLINE SURVEY</span>
              </div>
              <div>
                <strong>04</strong>
                <span>WARNING TYPES</span>
              </div>
              <div>
                <strong>03</strong>
                <span>CORE QUESTIONS</span>
              </div>
            </div>

            <p>
              The survey collected age range and self-rated technical
              familiarity. Participants were then shown common security prompts
              and asked what they thought the message meant, what action they
              would take, and why.
            </p>

            <div className="research-image-block">
              <img
                src="/sam-daniel-john-portfolio/images/security-warning-survey-01.png"
                alt="Online survey showing participant questions and a microphone permission prompt"
              />
              <span>SURVEY — PARTICIPANT QUESTIONS & PERMISSION PROMPT</span>
            </div>

            <div className="research-image-block">
              <img
                src="/sam-daniel-john-portfolio/images/security-warning-survey-02.png"
                alt="Online survey showing additional security warning scenarios"
              />
              <span>SURVEY — SECURITY WARNING SCENARIOS</span>
            </div>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">04 / SECURITY PROMPTS</div>
            <h2>What does the warning actually communicate?</h2>

            <p>
              Participants encountered examples covering microphone access,
              unsafe connections, potentially harmful files, and location
              permissions.
            </p>

            <div className="finding-grid">
              <div className="finding-card">
                <span>01</span>
                <h3>Meaning</h3>
                <p>
                  What does the user think the warning or permission actually
                  allows?
                </p>
              </div>

              <div className="finding-card">
                <span>02</span>
                <h3>Action</h3>
                <p>
                  Would the user allow, deny, continue, leave, or download?
                </p>
              </div>

              <div className="finding-card">
                <span>03</span>
                <h3>Reasoning</h3>
                <p>
                  Is the choice driven by risk understanding, trust, or
                  convenience?
                </p>
              </div>

              <div className="finding-card">
                <span>04</span>
                <h3>Behavior</h3>
                <p>
                  How does repeated exposure to warnings influence attention
                  and decision-making?
                </p>
              </div>
            </div>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">05 / FINDINGS</div>
            <h2>The gap between warning and understanding.</h2>

            <h3>Limited understanding of technical meaning</h3>
            <p>
              Participants could often identify the general purpose of a
              warning, such as recognizing that a situation was related to
              safety, but struggled to explain the specific risk involved.
            </p>

            <h3>Convenience over security</h3>
            <p>
              Some participants indicated that they would click “Allow” or
              “Continue” even when unsure about the risk. Reasons included
              trust in the application, wanting to continue the task, and the
              belief that nothing bad usually happens.
            </p>

            <h3>Warning fatigue</h3>
            <p>
              Frequent exposure to security prompts can lead to habituation.
              Repeated warnings become interruptions rather than messages that
              receive careful attention.
            </p>

            <h3>Ambiguity in risk communication</h3>
            <p>
              Terms such as “harm your device” or “not private” may not clearly
              communicate the real-world consequence of the risk.
            </p>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">06 / DISCUSSION</div>
            <h2>Users optimize for task completion.</h2>

            <p>
              The findings suggest that security interfaces are often treated
              as interruptions rather than informative guidance. Users may
              lack a clear mental model of the risk, yet still proceed with
              their task.
            </p>

            <p>
              This highlights a mismatch between system expectations — users
              make informed security decisions — and real user behavior, where
              users may optimize for convenience and task completion.
            </p>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">07 / DESIGN IMPLICATIONS</div>
            <h2>Warnings need to explain, not just interrupt.</h2>

            <div className="decision-list">
              <div>
                <span>Abstract technical language</span>
                <b>→ Explain real-world consequences</b>
              </div>
              <div>
                <span>Generic warning</span>
                <b>→ Contextualize the current task</b>
              </div>
              <div>
                <span>Repeated interruptions</span>
                <b>→ Reduce unnecessary warnings</b>
              </div>
              <div>
                <span>Equal visual treatment</span>
                <b>→ Make severity easier to distinguish</b>
              </div>
            </div>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">08 / CONCLUSION</div>
            <h2>Effective security depends on understanding.</h2>

            <p>
              This study demonstrates a gap between the presence of a security
              warning and the user's understanding of the risk it represents.
              Users may still make security-relevant decisions without fully
              understanding the consequences.
            </p>

            <p>
              From a usable security perspective, effective security does not
              depend solely on technical mechanisms. It also depends on how
              clearly risks are communicated and whether users can act on that
              information.
            </p>
          </section>

          <a href="/#projects" className="back-link bottom-back">
            ← BACK TO PROJECTS
          </a>
        </article>
      </main>

      <footer className="footer">
        <span>SDJ_</span>
        <span>SECURITY / RESEARCH / PRACTICE</span>
      </footer>
    </div>
  );
}



/* =========================================================
   OWL APP PROJECT PAGE
   ========================================================= */

function OwlAppPage() {
  return (
    <div className="portfolio project-page">
      <header className="top-bar">
        <div className="top-left">
          <div className="online-row">
            <span className="online-dot"></span>
            <span>ONLINE</span>
          </div>
          <div>GERMANY</div>
          <div><GermanTime /></div>
        </div>
        <div className="top-right">SAM DANIEL JOHN</div>
      </header>

      <nav className="site-index">
        <a href="/#about">ABOUT</a>
        <a href="/#contact">CONTACT</a>
        <a href="/#journey">JOURNEY</a>
        <a href="/#projects">PROJECTS</a>
      </nav>

      <main>
        <article className="project-detail">
          <a href="/#projects" className="back-link">← BACK TO PROJECTS</a>

          <div className="project-detail-category">HUMAN-CENTERED DESIGN</div>

          <h1>The Owl App:<br />A Sustainability Support Platform for Students</h1>

          <p className="project-lead">
            A student-centered digital platform concept designed to make
            sustainable actions easier to discover and integrate into everyday
            campus life.
          </p>

          <div className="project-detail-tags">
            <span>[HCI]</span>
            <span>[User Research]</span>
            <span>[Personas]</span>
            <span>[Storyboarding]</span>
            <span>[Low-Fidelity]</span>
            <span>[Figma]</span>
          </div>

          <section className="detail-section">
            <div className="detail-kicker">01 / PROJECT OVERVIEW</div>
            <h2>The problem was not a lack of interest.</h2>

            <p>
              This project focused on designing a student-centered digital
              platform that encourages sustainable behavior on campus. Using
              human-centered design methods from HCI, we explored how students
              engage with sustainability initiatives and identified barriers
              that limit participation.
            </p>

            <p>
              The goal was to make sustainable actions more visible,
              accessible, and integrated into students’ everyday academic life,
              while supporting collaboration and awareness across the campus
              community.
            </p>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">02 / USER RESEARCH</div>
            <h2>Understanding existing student behavior.</h2>

            <p>
              We conducted interviews and contextual observations to understand
              how students discover events, manage daily campus activities, and
              what prevents them from participating in environmentally friendly
              practices.
            </p>

            <p>
              The research showed that although students are interested in
              sustainability, participation is limited by scattered
              information, lack of visibility, and poor integration of
              sustainability tools into daily routines.
            </p>

            <div className="research-stats">
              <div>
                <strong>03</strong>
                <span>USER TYPES</span>
              </div>
              <div>
                <strong>01</strong>
                <span>CENTRAL PROBLEM</span>
              </div>
              <div>
                <strong>01</strong>
                <span>PLATFORM CONCEPT</span>
              </div>
            </div>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">03 / PERSONAS</div>
            <h2>Designing for different student needs.</h2>

            <p>
              Based on the research findings, we developed personas to
              represent different types of students interacting with
              sustainability initiatives. These personas helped us design for
              real user needs rather than assumptions.
            </p>

            <ul>
              <li>
                Students who want to participate but struggle to find reliable,
                centralized information
              </li>
              <li>
                Graduating students looking to resell items instead of
                discarding them
              </li>
              <li>
                New students who feel overwhelmed by multiple platforms and
                scattered campus services
              </li>
            </ul>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">04 / PROBLEM STATEMENT</div>
            <h2>Make sustainable participation easier.</h2>

            <p>
              Although many sustainability initiatives exist on campus,
              students struggle to actively participate. The main issue was
              not a lack of interest, but barriers in accessibility and
              awareness.
            </p>

            <p>
              Information about events, resources, and initiatives is scattered
              across different platforms. Sustainability tools are also not
              sufficiently integrated into students’ daily routines, reducing
              engagement and participation.
            </p>

            <blockquote>
              How might we centralize sustainability resources and make
              sustainable actions easier, more visible, and part of everyday
              student life?
            </blockquote>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">05 / IDEATION & STORYBOARDING</div>
            <h2>Making the concept fit into real routines.</h2>

            <p>
              We explored solution ideas through storyboarding to visualize how
              students might interact with a sustainability support system in
              real-life scenarios. The storyboard helped us understand the
              journey from discovering a feature to completing an action.
            </p>

            <div className="research-image-block">
              <img
                src="/sam-daniel-john-portfolio/images/owl-storyboard.png"
                alt="Storyboard showing student interactions with the Owl sustainability platform"
              />
              <span>STORYBOARD — EXPLORING USER JOURNEYS</span>
            </div>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">06 / LOW-FIDELITY PROTOTYPE</div>
            <h2>Sketch first. Polish later.</h2>

            <p>
              We created low-fidelity sketches to quickly explore layout ideas
              and interaction flows before focusing on visual details. This
              stage allowed rapid iteration and helped us evaluate structure,
              feature placement, and usability without being distracted by
              aesthetics.
            </p>

            <div className="research-image-block">
              <img
                src="/sam-daniel-john-portfolio/images/owl-low-fidelity.png"
                alt="Hand-drawn low-fidelity Owl App mobile interface"
              />
              <span>LOW-FIDELITY — EARLY MOBILE INTERFACE EXPLORATION</span>
            </div>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">07 / HIGH-FIDELITY PROTOTYPE</div>
            <h2>From concept to interaction.</h2>

            <p>
              The design was translated into a high-fidelity interactive
              prototype using Figma. This stage focused on visual hierarchy,
              navigation clarity, and user interaction flow, bringing the
              concept closer to a real application experience.
            </p>

            <div className="owl-video">
              <video
                controls
                playsInline
                preload="metadata"
              >
                <source src="/sam-daniel-john-portfolio/videos/owl-app-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <span>HIGH-FIDELITY PROTOTYPE — INTERACTION DEMO</span>
            </div>

            <a
              className="prototype-link"
              href="https://www.figma.com/proto/XqSxiZTnDb4NDRANV9OeUS/G404_hifi_prototype?node-id=156-3965"
              target="_blank"
              rel="noreferrer"
            >
              EXPLORE THE FULL FIGMA PROTOTYPE ↗
            </a>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">08 / SOLUTION</div>
            <h2>One place for sustainable student life.</h2>

            <p>
              The Owl App is a centralized sustainability platform that helps
              students discover events, exchange second-hand items, access
              digital student services, and stay engaged with campus
              initiatives.
            </p>

            <p>
              By reducing information fragmentation and integrating
              sustainability into daily student life, the concept lowers
              participation barriers and encourages sustainable behavior.
            </p>

            <div className="finding-grid">
              <div className="finding-card">
                <span>01</span>
                <h3>Events</h3>
                <p>
                  Make sustainability initiatives easier to discover.
                </p>
              </div>

              <div className="finding-card">
                <span>02</span>
                <h3>Exchange</h3>
                <p>
                  Support second-hand exchange and reduce unnecessary waste.
                </p>
              </div>

              <div className="finding-card">
                <span>03</span>
                <h3>Services</h3>
                <p>
                  Bring useful student resources into one place.
                </p>
              </div>

              <div className="finding-card">
                <span>04</span>
                <h3>Community</h3>
                <p>
                  Make sustainable participation more visible and accessible.
                </p>
              </div>
            </div>

            <div className="research-image-block">
              <img
                src="/sam-daniel-john-portfolio/images/owl-high-fidelity.png"
                alt="Owl App interface prototype"
              />
              <span>HIGH-FIDELITY — OWL APP CONCEPT</span>
            </div>
          </section>

          <section className="detail-section">
            <div className="detail-kicker">09 / REFLECTION</div>
            <h2>Designing for behavior, not just features.</h2>

            <p>
              The project showed me how much the surrounding context matters.
              A useful sustainability feature is not enough if students do not
              encounter it at the right moment or understand how it fits into
              their routine.
            </p>

            <p>
              The research, storyboarding, and prototyping process helped us
              keep the concept centered on accessibility, visibility, and
              everyday student behavior.
            </p>
          </section>

          <a href="/#projects" className="back-link bottom-back">
            ← BACK TO PROJECTS
          </a>
        </article>
      </main>

      <footer className="footer">
        <span>SDJ_</span>
        <span>SECURITY / RESEARCH / PRACTICE</span>
      </footer>
    </div>
  );
}


/* =========================================================
   ROUTER WITHOUT REACT ROUTER
   ========================================================= */

function App() {
  const path = window.location.pathname;

  // GitHub Pages serves this app under /sam-daniel-john-portfolio/.
  // Remove that base path before matching the React project routes.
  const base = "/sam-daniel-john-portfolio";

  const projectPath = path.startsWith(base)
    ? path.slice(base.length)
    : path;

  if (
    projectPath === "/project/behind-the-digital-trail" ||
    projectPath === "/project/behind-the-digital-trail/"
  ) {
    return <BehindDigitalTrailPage />;
  }

  if (
    projectPath === "/project/user-centered-research" ||
    projectPath === "/project/user-centered-research/"
  ) {
    return <UserCenteredResearchPage />;
  }

  if (
    projectPath === "/project/security-warnings" ||
    projectPath === "/project/security-warnings/"
  ) {
    return <SecurityWarningsPage />;
  }

  if (
    projectPath === "/project/owl-app" ||
    projectPath === "/project/owl-app/"
  ) {
    return <OwlAppPage />;
  }

  return <HomePage />;
}

export default App;
