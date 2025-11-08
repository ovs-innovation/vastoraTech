import HeaderFive from "@/layout/headers/HeaderFive";
import FooterFive from "@/layout/footers/FooterFive";

export const metadata = { title: "Terms & Conditions | Vastora Tech" };

const TermsConditions = () => {
  return (
    <>
      <HeaderFive />
      <main className="max-w-4xl mx-auto px-4 py-12 prose ">
        <h1 className="text-center mt-200 mb-200">Terms &amp; Conditions</h1>
       
      </main>
      <FooterFive style={true} />
    </>
  );
}

export default TermsConditions;
