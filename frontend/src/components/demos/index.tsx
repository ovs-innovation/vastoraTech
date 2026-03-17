import HeaderSix from "@/layout/headers/HeaderSix";
import FooterFive from "@/layout/footers/FooterFive";
import DemosListingArea from "./DemosListingArea";

import EcommerceFaqArea from "./EcommerceFaqArea";

const Demos = () => {
    return (
        <>
            <HeaderSix />
            <main>
                <DemosListingArea />
                <EcommerceFaqArea />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default Demos;

