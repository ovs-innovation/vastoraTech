import HeaderSix from "@/layout/headers/HeaderSix";
import FooterFive from "@/layout/footers/FooterFive";
import DemoDetailsArea from "./DemoDetailsArea";
import { DemoProduct } from "@/data/demos";

type DemoDetailsProps = {
  demo: DemoProduct;
};

const DemoDetails = ({ demo }: DemoDetailsProps) => {
    return (
        <>
            <HeaderSix />
            <main>
                <DemoDetailsArea demo={demo} />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default DemoDetails;

