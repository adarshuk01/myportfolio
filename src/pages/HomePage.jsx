import React from "react";
import HeroSec from "../components/HeroSec";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import MobileBar from "../layout/MobileBar";

function HomePage() {
  return (
    <div className="scroll-smooth">
      <section id="home">
        <HeroSec />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="work" >
        <Experience/>
      </section>

      <section id="presentation" >
        <Projects/>
      </section>

      <section id="messages" className="h-screen flex items-center justify-center">
        <h2 className="text-3xl">Messages Section</h2>
      </section>

       {/* ✅ Mobile bottom bar (only visible on mobile) */}
      <div className="lg:hidden">
        <MobileBar />
      </div>
    </div>
  );
}

export default HomePage;
