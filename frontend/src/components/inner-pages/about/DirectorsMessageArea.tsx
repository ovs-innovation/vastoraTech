import React from "react";

const DIRECTOR_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

const DirectorsMessageArea = () => (
  <section className="directors-message-area py-100" style={{background:'#f9fafc'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="section-title mb-20">Director’s Message</h2>
          <p className="mb-4">Hear firsthand from our Director about the journey, driving values, and vision for the future. Learn how Vastorate’s mission shapes every decision and inspires our team to deliver excellence.</p>
          <div className="ratio ratio-16x9 mb-3 rounded overflow-hidden" style={{boxShadow:'0 6px 24px rgba(50,70,86,0.09)'}}>
            <iframe width="100%" height="420" src={DIRECTOR_VIDEO_URL} title="Director Message" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DirectorsMessageArea;
