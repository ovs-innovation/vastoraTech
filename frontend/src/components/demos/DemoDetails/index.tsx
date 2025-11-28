
import FooterFive from "@/layout/footers/FooterFive";
import DemoDetailsArea from "./DemoDetailsArea";
import HeaderFive from "@/layout/headers/HeaderFive";

type DemoDetailsProps = {
  slug: string;
  isAdmin?: boolean;
};

const DemoDetails = ({ slug, isAdmin = false }: DemoDetailsProps) => {
    return (
        <>
            <HeaderFive />
            <main>
                <DemoDetailsArea slug={slug} isAdmin={isAdmin} />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default DemoDetails;

