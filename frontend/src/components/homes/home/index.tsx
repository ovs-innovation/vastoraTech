"use client";
import ScrollIndicator from "@/components/common/ScrollIndicator";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import ProcessAreaHomeOne from "./ProcessAreaHomeOne";
import TestimonialAreaHomeOne from "./TestimonialAreaHomeOne";

const HomeOne = () => {
  return (
    <>
      <ScrollIndicator />
      <HeaderOne />
      <main>
        <ProcessAreaHomeOne />
        <TestimonialAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeOne;

