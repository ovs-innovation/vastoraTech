"use client";
import ScrollIndicator from "@/components/common/ScrollIndicator";
import FooterTwo from "@/layout/footers/FooterTwo";
import HeaderSix from "@/layout/headers/HeaderSix";
import ProjectAreaHomeTwo from "./ProjectAreaHomeTwo";

const HomeTwo = () => {
  return (
    <>
      <ScrollIndicator />
      <HeaderSix style={true} />
      <main>
        <ProjectAreaHomeTwo />
      </main>
      <FooterTwo />
    </>
  );
};

export default HomeTwo;

