import React from "react";
import Image from "next/image";
import journeyImg from '@/assets/img/banner/about-inner-1.png'; // Use existing relevant image, update path as needed

const OurJourneyArea = () => (
  <section className="our-journey-area pb-100 pt-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 order-lg-1 order-2">
          <div className="our-journey-content">
            <h2 className="section-title mb-25">Our Journey</h2>
            <p>
              Vastorate was founded with a vision to break the boundaries of digital innovation and empower entrepreneurs everywhere. Inspired by the real challenges businesses face, our journey began in 2014 with a passionate team and a bold idea: to deliver technology that is not only powerful, but also accessible for all. <br/><br/>
              From a single office to an international presence, we've achieved major milestones — 2,000+ projects delivered, 1,900+ happy clients, and numerous industry awards. Every step has been guided by our commitment to customer success and innovation. Our story is still being written — together with you.
            </p>
          </div>
        </div>
        <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
          <div className="our-journey-img text-center">
            <Image src={journeyImg} alt="Vastorate Journey" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OurJourneyArea;
