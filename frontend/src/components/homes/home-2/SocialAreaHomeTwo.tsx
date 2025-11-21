"use client";
import Link from "next/link";
import { TeamSocialLinks } from "@/components/common/social-links";

const SocialAreaHomeTwo = () => {
  return (
    <>
      <section className="social-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="social-wrapper text-center">
                <h3 className="social-title mb-30">Follow Us On Social Media</h3>
                <div className="social-links">
                  <TeamSocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialAreaHomeTwo;

