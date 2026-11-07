import HeaderFive from "@/layout/headers/HeaderFive";
import FooterFive from "@/layout/footers/FooterFive";
import DemosListingArea from "./DemosListingArea";
import EcommerceFaqArea from "./EcommerceFaqArea";

const Demos = () => {
    return (
        <>
            <HeaderFive />
            <main className="vt-ecom-page-wrapper">
                <DemosListingArea />
                <EcommerceFaqArea />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default Demos;
