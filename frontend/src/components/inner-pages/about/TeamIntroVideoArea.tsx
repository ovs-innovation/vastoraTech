import React from "react";

const TEAM_VIDEO_URL = "https://www.youtube.com/embed/tgbNymZ7vqY";

const TeamIntroVideoArea = () => (
  <section className="team-intro-video-area py-100">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="section-title mb-20">Meet the Team</h2>
          <p className="mb-4">Our talented professionals collaborate across disciplines to fuel your success. Get to know their personalities, expertise, and their passion for digital excellence through this special team introduction video.</p>
          <div className="ratio ratio-16x9 mb-3 rounded overflow-hidden" style={{boxShadow:'0 6px 24px rgba(50,70,86,0.09)'}}>
            <iframe width="100%" height="420" src={TEAM_VIDEO_URL} title="Vastorate Team Introduction" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TeamIntroVideoArea;
