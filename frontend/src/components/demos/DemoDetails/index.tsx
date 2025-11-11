import HeaderSix from "@/layout/headers/HeaderSix";
import FooterFive from "@/layout/footers/FooterFive";
import DemoDetailsArea from "./DemoDetailsArea";

type DemoDetailsProps = {
  slug: string;
  isAdmin?: boolean;
};

const DemoDetails = ({ slug, isAdmin = false }: DemoDetailsProps) => {
    return (
        <>
            <HeaderSix />
            <main>
                <DemoDetailsArea slug={slug} isAdmin={isAdmin} />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default DemoDetails;

