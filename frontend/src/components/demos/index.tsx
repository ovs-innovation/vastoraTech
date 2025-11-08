import HeaderSix from "@/layout/headers/HeaderSix";
import FooterFive from "@/layout/footers/FooterFive";
import DemosListingArea from "./DemosListingArea";

const Demos = () => {
    return (
        <>
            <HeaderSix />
            <main>
                <DemosListingArea />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default Demos;

